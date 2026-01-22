import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { ThemeContext } from "./ThemeContext";
import { AuthContext } from "./AuthContext";

import CreateBlog from "./CreateBlog";
import BlogList from "./BlogList";
import BlogDetail from "./BlogDetail";
import EditBlog from "./EditBlog";
import SearchBar from "./SearchBar";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  const { dark, setDark } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);

  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`);
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Router>
      <div className={`min-h-screen ${dark ? "dark" : ""}`}>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-all">

          {/* ================= HEADER ================= */}
          <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 dark:text-white"
            >
              📰 Blog App
            </Link>

            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="text-sm text-blue-700 dark:text-blue-300 hover:underline"
                  >
                    👤 {user.name || user.email}
                  </Link>
                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-blue-600 hover:underline">
                    Login
                  </Link>
                  <Link to="/register" className="text-blue-600 hover:underline">
                    Register
                  </Link>
                </>
              )}

              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded-full bg-yellow-300 dark:bg-gray-700"
              >
                {dark ? "🌞" : "🌙"}
              </button>
            </div>
          </header>

          {/* ================= MAIN ================= */}
          <main className="max-w-6xl mx-auto px-4 py-8">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <SearchBar
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                    />

                    {user && (
                      <CreateBlog onBlogCreated={fetchBlogs} />
                    )}

                    <BlogList
                      blogs={blogs}
                      searchQuery={searchQuery}
                    />
                  </>
                }
              />

              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/edit/:id" element={<EditBlog />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/profile"
                element={user ? <Profile /> : <Login />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

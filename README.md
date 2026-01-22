# Blogging Platform

A full-stack blogging platform built with **React (Frontend)** and **Node.js + Express + MongoDB (Backend)**.  
Users can register, login, create, edit, delete posts, and comment on posts.

---

## 🚀 Features

- User Authentication (Register & Login)
- JWT based authorization
- CRUD operations for blog posts
- Commenting system
- Responsive UI
- Clean code structure

---

## 🧩 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Axios / Fetch API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

## 📁 Project Structure

```

blogging-platform/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
└── README.md

````

---

# 🛠️ Setup Instructions

---

## ✅ 1) Backend Setup

### Step 1: Go to backend folder

```bash
cd backend
````

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Create `.env` file

Create a `.env` file in `backend/`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Step 4: Run the backend server

```bash
npm run dev
```

Backend will run on:

```
http://localhost:5000
```

---

## ✅ 2) Frontend Setup

### Step 1: Go to frontend folder

```bash
cd frontend
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Create `.env` file

Create a `.env` file in `frontend/`:

```
VITE_API_URL=http://localhost:5000
```

### Step 4: Run the frontend server

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

# 🔗 API Endpoints

### Authentication

| Method | Endpoint              | Description   |
| ------ | --------------------- | ------------- |
| POST   | `/api/users/register` | Register user |
| POST   | `/api/users/login`    | Login user    |

### Posts

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| GET    | `/api/posts`     | Get all posts |
| POST   | `/api/posts`     | Create post   |
| PUT    | `/api/posts/:id` | Update post   |
| DELETE | `/api/posts/:id` | Delete post   |

---

# 🧪 Testing

You can test API using:

* Postman
* Insomnia
* Thunder Client

---

# 👤 Author

**Rupesh Kumar Rupak**
📧 [rupeshrupak609@gmail.com](mailto:rupeshrupak609@gmail.com)
🌐 GitHub: [https://github.com/Rupeshrupak222](https://github.com/Rupeshrupak222)



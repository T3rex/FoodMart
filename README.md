# 🛒 FoodMart

FoodMart is a full-stack e-commerce web application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to browse products, add items to the cart, and make purchases, while admins can manage inventory, orders, and users efficiently.

## 📦 Tech Stack

- **Frontend**: React, Redux, Tailwind CSS
- **Authentication**: JWT (JSON Web Token)
- **State Management**: Redux Toolkit
- **API** : Swiggy Live API

---

## ✨ Features

### 👤 User Features
- Signup / Login with JWT authentication
- Browse food products by categories
- Search and filter functionality
- Add to cart & update quantity
- Place orders and view order history

---

## 📂 Project Structure
```
foodmart/
├── client/                   # React frontend
│   ├── public/               # Static files (index.html, favicon, etc.)
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # React pages/views
│   │   ├── redux/            # Redux state management (slices, store)
│   │   ├── App.js            # Main app component
│   │   ├── index.js          # ReactDOM render
│   │   └── ...               # Other front-end utilities
│   ├── package.json          # Frontend dependencies and scripts
│   └── .env                 # Frontend-specific environment variables
│
├── server/                   # Node.js backend
│   ├── controllers/          # Route handler logic
│   ├── models/               # Mongoose models (MongoDB schema)
│   ├── routes/               # Express routes
│   ├── middleware/           # Auth, error handlers, etc.
│   ├── config/               # DB config, constants
│   ├── index.js              # Entry point for backend server
│   └── ...                   # Additional utilities/services
│
├── .env.example              # Sample environment variables file
├── README.md                 # Project overview and setup instructions
├── package.json              # Root dependencies, scripts (can include concurrently, etc.)
└── .gitignore                # Ignore node_modules, .env, etc.

```
---

## 🛠️ Installation

### Prerequisites

- Node.js and npm

### Clone the repository

```bash
git clone https://github.com/T3rex/FoodMart.git
cd FoodMart
```
### Setup 

```bash
cd client
npm install
npm run dev
```


---

Let me know if you'd like a version tailored to a particular audience (e.g., beginner developers, hiring managers) or a version that includes API documentation!


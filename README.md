# 🚀 Log Management System (MERN Backend)

A scalable backend system designed to capture, store, filter, and analyze application logs in real-time.
Built with **Node.js, Express, MongoDB**, and **JWT authentication**, this project demonstrates production-level backend architecture and secure API design.

---

## 🔥 Features

✅ Secure JWT Authentication
✅ Role-based log access
✅ Create and store logs from multiple services
✅ Advanced filtering (level, service, date)
✅ Pagination for high-volume logs
✅ Error tracking endpoint
✅ Structured MVC architecture
✅ Centralized error handling

---

## 🧠 Why This Project?

Modern applications generate thousands of logs daily.
This system simulates how real-world platforms monitor errors, debug failures, and maintain system reliability.

Designed with scalability and clean architecture in mind.

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Bcrypt
* Dotenv

---

## 📌 API Endpoints

### 🔐 Auth

POST /api/auth/register
POST /api/auth/login

### 📄 Logs

POST /api/logs → Create log
GET /api/logs → Get all logs (pagination supported)
GET /api/logs?level=error → Filter by level
GET /api/logs?service=payment-service → Filter by service
GET /api/logs/stats/errors → Get total error count

---

## ⚙️ Installation

```bash
git clone https://github.com/YOUR_USERNAME/log-management-system.git
cd log-management-system
npm install
npm start
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

---

## 🎯 Future Improvements

* Log visualization dashboard
* File-based log export
* Rate limiting
* Docker deployment

---

## 👨‍💻 Author

**Dhiraj Kumar**
Aspiring Software Developer | MERN Stack

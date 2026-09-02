# GitHub Profile Analyzer 🚀

A full-stack web application that analyzes GitHub developer profiles and provides meaningful insights through statistics, contribution activity, repository data, language breakdowns, profile comparison, and AI-powered analysis.

---

## ✨ Features

### 🔐 Authentication

- User Signup
- User Login
- JWT-based authentication
- Protected routes
- Logout functionality
- Secure password hashing with bcrypt
- MongoDB user storage

### 📊 GitHub Profile Analyzer

Analyze a GitHub developer by entering their username.

The analyzer provides:

- GitHub profile information
- Followers and following
- Public repositories
- Stars and forks
- Programming language breakdown
- Repository insights
- Contribution statistics
- Contribution activity graph
- Most active repository
- Total analyzed commits

### ⚖️ GitHub Profile Comparison

Compare two GitHub developers side-by-side.

Comparison includes:

- Profile information
- Repository statistics
- Stars and forks
- Programming languages
- Repository insights
- Activity metrics

### 🤖 AI-Powered GitHub Analysis

The application uses Google's Gemini AI to analyze GitHub profiles and provide:

- Overall profile score
- Profile summary
- Strengths
- Weaknesses
- Improvement recommendations

The AI analysis is based only on the GitHub data collected by the application.

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- JavaScript

### Backend

- Node.js
- Express.js
- REST API

### Database

- MongoDB
- Mongoose

### Authentication

- JWT
- bcryptjs

### APIs & AI

- GitHub REST API
- Google Gemini API

---

## 🏗️ Project Structure

```text
github-analyzer/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── githubController.js
│   │
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── githubRoutes.js
│   │
│   ├── services/
│   │   ├── aiService.js
│   │   └── githubService.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
```

# Remindio – Task & Reminder Management Web App

## 1. Project Overview

### Description

Remindio is a full-stack task and reminder management web application built to help users organize their work and focus on important tasks without unnecessary distractions.

The application allows users to create, prioritize, filter, and track tasks with deadlines through a clean and minimal interface. It includes user authentication, priority-based filtering, time-based task views, and a modal-based task creation flow to keep interactions simple and intuitive.

This project focuses on practical implementation, clarity of features, and real-world usability rather than over-engineering.

### Tech Stack

#### Frontend
- React (Vite / CRA)
- Axios
- React Router DOM
- Custom CSS (dark theme)

#### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- bcryptjs for password hashing

#### Database
- MongoDB (local instance)

---

## 2. Setup & Installation Steps

### Prerequisites

Ensure the following are installed on your system:

- Node.js (v18 or higher recommended)
- npm
- MongoDB (local installation or MongoDB Compass)

---

### Backend Setup

```bash
cd backend
npm install
```
Start MongoDB (if not already running):
```
mongod

```
Start the backend server:
```
npm start
```

The backend server will run at:
```
http://localhost:5000

```

Frontend Setup
```
cd frontend
npm install
npm start
```

The frontend application will run at:
```
http://localhost:3000
```

Environment Variables

The project currently uses hardcoded local values.

If moved to environment variables in the future, the following can be added to a .env file:
```
MONGO_URI=mongodb://localhost:27017/remindio
JWT_SECRET=your_secret_key
```

Required npm Commands Summary
```
npm install
npm start
npm audit fix   # optional
```

3. Known Issues / Limitations

User profile editing is partially implemented (UI is ready, backend logic needs extension)

Reminder notifications are stored but not triggered via system notifications

No email verification during signup

No role-based access control

No production build optimizations yet

Primarily designed for desktop usage; mobile responsiveness can be improved

4. AI Tools & Prompts Used (Mandatory)
AI Tools Used

ChatGPT (OpenAI)

Purpose of Usage

Debugging frontend and backend errors

Improving UI structure and layout

Refining authentication flow

Structuring React components

Drafting and refining README content

Representative Prompts Used

“Give me a clean modal-based task creation UI that doesn’t look AI-generated.”

“Why is my React app not rendering and throwing undefined errors?”

“How do I ensure the login page loads before the dashboard using React Router?”

“Improve this dashboard UI while keeping a dark blue theme.”

“Help me structure a professional README for a full-stack project.”

How AI Assisted the Project

Helped identify and fix runtime and dependency issues

Suggested architectural improvements such as auth guards and routing structure

Provided UI refinement ideas

Reduced development and debugging time

Improved overall code readability and structure

What Was Written Manually

Final UI styling and layout adjustments

Backend route integration logic

Task filtering and prioritization logic

Token handling and authentication decisions

Overall project direction and feature planning

Additional Resources

Project demonstration and related materials are available at the following Google Drive link:
```
https://drive.google.com/file/d/1WNxXdE8ru0PEREfxblBjyhsJIZZPObEY/view?usp=sharing
https://drive.google.com/file/d/1WNxXdE8ru0PEREfxblBjyhsJIZZPObEY/view?usp=sharing
```
Final Notes

Remindio is an evolving project built with a focus on simplicity, usability, and practical full-stack development.
The goal was to create a realistic application that demonstrates clean architecture, functional authentication, and meaningful task management features.

Future improvements can include notifications, better mobile support, and production-level optimizations.

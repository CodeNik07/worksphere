# WorkSphere - Project Management Tool

🌟 **WorkSphere** is a powerful, scalable, multi-tenancy project management platform built with the **MERN stack** (Node.js, MongoDB, React, TypeScript). WorkSphere enables seamless workspace management, project tracking, task collaboration, and role-based access control, making it ideal for teams and developers building modern collaboration tools.

---

## 📌 Project Overview

WorkSphere is a feature-rich project management tool. With robust features like Google Sign-In, multi-workspace support, task management, and analytics, it’s perfect for developers looking to create scalable team collaboration solutions.

### 🌟 Key Features

- 🔐 **Authentication**: Google Sign-In, Email, and Password-based login.
- 🏢 **Workspace Management**: Create and manage multiple workspaces.
- 📊 **Projects & Epics**: Organize projects and epics efficiently.
- ✅ **Task Management**: CRUD operations, status tracking, priority, and assignee assignment.
- 👥 **Roles & Permissions**: Owner, Admin, and Member roles with granular access control.
- ✉️ **Member Invitations**: Invite team members to workspaces.
- 🔍 **Filters & Search**: Filter tasks by status, priority, or assignee.
- 📈 **Analytics Dashboard**: Visualize project and task progress.
- 📅 **Pagination**: Load more functionality for efficient data handling.
- 🔒 **Session Management**: Secure cookie-based sessions with logout and termination.
- 🌱 **Data Seeding**: Pre-populate test data for development.
- 🌐 **Tech Stack**: MERN (Node.js, MongoDB, React, TypeScript).

---

## 🚀 Tools & Technologies

WorkSphere leverages modern tools for a robust development experience:

- **Node.js**: Scalable backend architecture.
- **React.js**: Dynamic and responsive frontend.
- **MongoDB & Mongoose**: Flexible NoSQL database with ORM.
- **Google OAuth**: Secure and seamless Google Sign-In.
- **TypeScript**: Type-safe development for reliability.
- **TailwindCSS & Shadcn UI**: Modern, responsive UI design.
- **Vite.js**: Fast frontend build tool.

---

## 🔄 Getting Started

### 1. ⚙️ Set Up Environment Variables

Create a `.env` file in the project root and add the following:

```env
PORT=8000
NODE_ENV=development
MONGO_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/worksphere_db"

SESSION_SECRET="session_secret_key"

GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google/callback

FRONTEND_ORIGIN=http://localhost:3000
FRONTEND_GOOGLE_CALLBACK_URL=http://localhost:3000/google/callback
```

Replace `<username>`, `<password>`, `<cluster>`, and Google OAuth credentials with your own.

### 2. 🚀 Run the Application

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Access the backend at `http://localhost:8000` and the frontend at `http://localhost:5173`.
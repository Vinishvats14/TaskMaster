# TaskMaster - Full Stack Todo Application

A modern, full-stack task management application built with performance and user experience in mind. This project demonstrates a complete CRUD workflow with authentication, featuring a polished UI and a robust backend.

## 🚀 Tech Stack

**Frontend:**
- **React** (with Vite) for a fast, reactive UI.
- **TypeScript** for type safety and better developer experience.
- **Tailwind CSS** for modern, responsive styling.
- **TanStack Query** (React Query) for efficient server state management.
- **Zustand** for lightweight client state management (auth).
- **React Hook Form + Zod** for robust form validation.

**Backend:**
- **Node.js & Express** for a scalable server architecture.
- **TypeScript** for type-safe backend logic.
- **MongoDB & Mongoose** for flexible data storage.
- **JWT** (JSON Web Tokens) for secure authentication.

---

## Setup & Installation

### 1. Backend Setup
The backend serves the API and handles database connections.

1. Navigate to the backend folder:
   cd backend
2. Install dependencies:
   npm install

3. setting Environment Variables:
   - Create a `.env` file in the `backend` directory.
   - Copy the contents from `.env.example` or use the following:
     ```env
     PORT=5001
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     NODE_ENV=development
     FRONTEND_URL=http://localhost:5173
     ```
   > **Note:** We use port **5001** by default to avoid conflicts with macOS system services (Control Center) that often occupy port 5000.

4. Start the server:
   ```bash
   npm run dev
   ```
   You should see: `Server running on port 5001` and `MongoDB Connected Successfully`.

### 2. Frontend Setup
The frontend is the user interface built with React.

1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Environment Variables:
   - Create a `.env` file in the `frontend` directory.
   - Add the backend API URL:
     ```env
     VITE_API_URL=http://localhost:5001/api
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173`.

---

## Features

- **Authentication**: Secure Sign Up and Sign In using JWT.
- **Create Tasks**: Add new todos with titles and optional descriptions.
- **Read Tasks**: View a list of all your tasks with a summary of total items.
- **Update Tasks**: Mark tasks as completed/active or edit their content.
- **Delete Tasks**: Remove tasks you no longer need.
- **Responsive UI**: A glassmorphism-inspired design that works on desktop and mobile.

---

Assumptions & Design Decisions

1.  **Port Configuration**: The backend is configured to run on port **5001** instead of the common 5000. This is a deliberate choice to prevent `EADDRINUSE` errors on macOS devices where AirPlay Receiver/Control Center uses port 5000.
2.  **Database**: The application assumes a MongoDB connection. I used MongoDB Atlas for development, but a local instance works equally well.
3.  **State Management**: I chose **TanStack Query** for server state (todos) because it handles caching, loading states, and refetching out of the box, which is superior to manual `useEffect` fetching. **Zustand** is used for global client state (user session) due to its simplicity compared to Redux.

---

## Demo Video

[Link to Demo Video]
https://drive.google.com/file/d/1lFxdpRuWMZMTx9pCccm5egg4MtcUjCNi/view?usp=drive_link

---

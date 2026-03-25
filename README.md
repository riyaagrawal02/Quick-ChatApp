# QuickChat — Real‑Time Chat Application

QuickChat is a lightweight, fast, real-time messaging application built with a modern full-stack setup. It supports secure authentication, 1:1 messaging, online/offline presence, and profile updates with an easy-to-use, responsive UI.

---

## Features

- Real-time messaging with **Socket.IO**
- Secure authentication with **JWT** + **bcrypt**
- Online / Offline user presence
- Chat history persisted in **MongoDB**
- Profile updates (name, bio, and optional profile picture upload)
- Responsive UI built with **React + Tailwind CSS**
- Protected routes and basic error handling

---

## Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Axios
- React Router
- Socket.IO Client

**Backend**
- Node.js
- Express
- MongoDB + Mongoose
- Socket.IO
- JWT
- Cloudinary (for profile image uploads)

---

## Project Structure

```text
Quick-ChatApp/
├─ src/                  # Frontend source (React)
├─ public/               # Frontend public assets
├─ server/               # Backend source (Express + Socket.IO)
├─ context/              # Client state/context utilities
├─ package.json          # Frontend scripts & dependencies
└─ server/package.json   # Backend scripts & dependencies
```

---

## API Routes (Backend)

Base URL: `/api`

### Auth (`/api/auth`)
- `POST /signup` — Create a new account
- `POST /login` — Login and receive a token
- `PUT /update-profile` — Update profile (protected)
- `GET /check` — Check auth status (protected)

### Messages (`/api/messages`)
- `GET /users` — Sidebar user list (protected)
- `GET /:id` — Get messages with a specific user (protected)
- `PUT /mark/:id` — Mark messages as seen (protected)
- `POST /send/:id` — Send a message to a user (protected)

---

## Environment Variables

Create a `.env` file inside the `server/` directory:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Notes:
- The server connects using: `${MONGODB_URI}/chat-app` (so `MONGODB_URI` should typically be your cluster/host URI without the database name if you want the app to append `/chat-app`).
- If you use Cloudinary for profile images, ensure your Cloudinary credentials are configured (commonly via environment variables in your Cloudinary setup).

---

## Getting Started (Local Development)

### 1) Clone the repository
```bash
git clone https://github.com/riyaagrawal02/Quick-ChatApp.git
cd Quick-ChatApp
```

### 2) Install dependencies

**Frontend**
```bash
npm install
```

**Backend**
```bash
cd server
npm install
```

### 3) Run the app

**Run backend**
```bash
cd server
npm run server
```

**Run frontend**
```bash
# from repo root
npm run dev
```

Frontend will run with Vite; backend defaults to port `5000` (or `PORT` if set).

---

## Real-Time (Socket.IO)

The backend runs a Socket.IO server and tracks connected users to broadcast online presence. The client connects by providing a `userId` in the Socket handshake query, enabling online/offline updates.

---

## Deployment

- Frontend is suitable for deployment on **Vercel**
- Backend can be deployed separately (Render / Railway / VPS, etc.)
- Make sure CORS and your Socket.IO allowed origin match your deployed frontend domain.

---

## License

This project is licensed under the terms of the **LICENSE** file in this repository.

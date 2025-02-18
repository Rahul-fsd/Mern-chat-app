# Chat Application

A real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Socket.io for real-time communication.

## Features

- Real-time messaging
- User authentication
- Secure password encryption using bcryptjs
- JWT (JSON Web Token) for authentication
- MongoDB database integration

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-time Communication:** Socket.io
- **Authentication:** JWT, bcryptjs

## Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB
- npm (Node Package Manager)

## Installation

1. Clone the repository

```bash
git clone <repository-url>
cd chat-app
```

2. Install dependencies for backend

```bash
npm install
```

3. Install dependencies for frontend

```bash
cd frontend
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the backend server using Node.js

### `npm run server`

Runs the backend server using nodemon (auto-reloads when files change)

### `npm run build`

Builds the application for production:

- Installs backend dependencies
- Installs frontend dependencies
- Builds the frontend application

## Environment Variables

Create a `.env` file in the root directory and add the following:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000 (or your preferred port)
```

## Author

Rahul Patel

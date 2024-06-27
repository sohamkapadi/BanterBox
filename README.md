# ChatApp

Welcome to **ChatApp**! A real-time chat application built using the MERN stack, Socket.io, and TailwindCSS. This application supports real-time messaging, user authentication, and online status tracking.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Front-End Routes](#front-end-routes)
- [API Endpoints](#api-endpoints)
  - [Authentication Endpoints](#authentication-endpoints)
  - [Message Endpoints](#message-endpoints)
  - [User Endpoints](#user-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-Time Messaging**: Chat with other users in real-time using Socket.io.
- **Online User Status**: See which users are online using Socket.io and React Context.
- **JWT Authentication**: Secure authentication and authorization using JWT.
- **Global State Management**: Managed using Zustand.
- **Error Handling**: Comprehensive error handling both on the server and client sides.

## Tech Stack

- **Frontend**: React, TailwindCSS, Daisy UI
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Real-Time Communication**: Socket.io
- **State Management**: Zustand

## Installation

To run **ChatApp** locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/chatapp.git
   cd chatapp
2. **Install dependencies:**
   # For backend (Node.js)
    cd backend
    npm install
  
  # For frontend (React)
    cd ../frontend
    npm install
3. **Set up environment variables:**
    Create a .env file in the backend directory
4. **Run the development servers:**
   # In backend directory
    npm run start
    
    # In frontend directory
    npm run dev

## Usage
- **Sign Up:** Register for a new account.
- **Login:** Login to your account.
- **Chat:** Start chatting with other users in real-time.
- **User Status:** View online status of other users

## Front-End Routes
The application uses React Router for navigation. Here are the routes available in ChatApp:

- **/signup:** Sign-up page.
- **/login:** Login page.
- **/:** Chat home page (main chat interface).
- *: Not found page for undefined routes.

## API Endpoints
# Authentication Endpoints
- **POST /api/auth/signup:** Register a new user.
- **POST /api/auth/login:** Login for existing users.
- **POST /api/auth/logout:** Logout the user.
  
# Message Endpoints
- **GET /api/messages/:id:** Get messages for a specific chat.
- **POST /api/messages/send/:id:** Send a message in a specific chat.
  
# User Endpoints
- **GET /api/users:** Get users for sidebar display.

## Contributing
We welcome contributions to ChatApp! Please follow these steps:
 - Fork the repository.
 - Create a new branch for your feature or bugfix.
 - Commit your changes.
 - Push your branch and open a pull request.
For major changes, please open an issue first to discuss what you would like to change.

# Book Management Server

A simple Node.js backend API for managing books with user authentication. Built with Express, MySQL, and JWT tokens.

## What This Project Does

This is a REST API that lets you:
- Register and login users
- Manage books (create, read, update, delete)
- Protect routes with JWT authentication

## Getting Started

### Prerequisites

Before you start, make sure you have these installed:
- **Node.js** (version 14 or higher)
- **MySQL** (running on your machine)
- **npm** (comes with Node.js)

### Step 1: Install Dependencies

Open your terminal in the project folder and run: npm install

This will install all the packages the project needs.

### Step 2: Set Up Your Database

1. Create a MySQL database (you can name it anything, like `bookdb`)
2. Keep your MySQL username and password handy

### Step 3: Create Environment Variables

Create a `.env` file in the root of the project with the following:

env
- DB_DATABASE=your_database_name
- DB_USERNAME=your_mysql_username
- DB_PASSWORD=your_mysql_password
- DB_HOST=127.0.0.1
- DB_DIALECT=mysql
- JWT_SECRET=your_secret_key_here
- PORT=5000

**Important:** Replace the values with your actual database details and choose a strong random string for `JWT_SECRET`.

### Step 4: Run Database Migrations

Set up your database tables by running: npx sequelize-cli db:migrate


This creates the necessary tables (users and books) in your database.

### Step 5: Start the Server

Run the development server: npm run dev

You should see:
- "Database connected"
- "Server running on port 5000"

That's it! Your API is now running at `http://localhost:5000`

## API Endpoints

- `GET /` - Check if the API is running
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get a token
- `GET /api/auth/me` - Get current user info (requires authentication)
- `/api/books/*` - Book management endpoints (requires authentication)

## Need Help?

If something doesn't work:
- Make sure MySQL is running
- Check that your `.env` file has all the correct values
- Verify your database exists and the credentials are correct
# Authentication App for Healthcare - Doctor

The Authentication App for Healthcare is a Node.js application designed to facilitate secure access to patient records for healthcare providers. Specifically tailored for doctors, the app generates unique QR codes linked to patient records. Scanning these QR codes provides the doctors with essential patient details, ensuring efficient and secure patient data management within a healthcare facility. The app adheres to strict authentication measures and is capable of supporting multiple user roles within the healthcare system.

## Features

- **User Registration & Login**: Supports the creation of user accounts, using JWT for authentication.
- **QR Code Generation**: Each patient record is associated with a unique QR code for secure access.
- **Role-Based Access Control**: Accommodates multiple user roles with different access levels to patient data.
- **Audit Trail**: Monitors and logs user activities, providing an overview of patient data access.
- **Secure Environment**: Enforces security through the use of CORS, Helmet, and secure sessions.

## Tech Stack

- Backend: Node.js with Express.js
- Programming Language: TypeScript
- Database: MongoDB with Mongoose ODM
- Authentication: jsonwebtoken and bcrypt
- QR Code Generation: QRCode library
- Security Middleware: cors, helmet, express-session
- Utility Libraries: dotenv, winston, moment
- Real-time Communication: Socket.io
- Frontend Framework: Bootstrap
- Frontend Languages: HTML, CSS3

## Project Structure

Below is an outline of the key files and directories within the project:

- `/package.json` - Contains metadata and dependencies of the project.
- `/tsconfig.json` - Configuration file for the TypeScript compiler.
- `/.env` - Holds environment variables for the application (ensure to create this file based on `.env.example`).
- `src/` - The source directory for all application logic.
  - `app.ts` - The Express app setup with middlewares.
  - `index.ts` - Entry point to run and configure the server.
  - `/controllers` - Handles HTTP requests for different routes.
  - `/models` - Schema definitions for Mongoose models.
  - `/routes` - Express route definitions.
  - `/config` - Contains the database configuration file.
  - `/middleware` - Custom Express middleware.
  - `/services` - Business logic for handling user data.
  - `/utils` - Various utility functions.
## Setup & Installation

To get started with the app, follow these steps:

1. Clone the repository to your local machine.
2. Install Node.js and npm if not already installed.
3. Navigate to the root project directory and install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file based on the `.env.example` with the appropriate environment variables set.
5. Start the application in development mode using:

   ```bash
   npm run dev
   ```

   To run the application in production, build the project first and then start with:

   ```bash
   npm start
   ```

## Environment Variables

Be sure to configure the environment variables as shown in the `.env.example` file:

## docker for local testing
docker run --name mongodb -d -p 27017:27017 mongodb/mongodb-community-server:latest


- `PORT`: The port on which the server will listen.
- `MONGODB_URI`: The URI for connecting to the MongoDB instance.
- `JWT_SECRET`: A secret key for signing JWT tokens.


## License

This project is licensed under the MIT License - see the LICENSE file for details.
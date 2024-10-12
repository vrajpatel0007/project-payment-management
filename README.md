```md
# Project and Payment Management Backend

This project is a backend application built using **Node.js**, **Express**, and **MongoDB**. It supports basic project and payment management functionalities with user authentication using **JWT**. The project also includes CSV import/export functionality for bulk project management.

## Features

- **User Authentication**: Users can register and log in using JWT-based authentication.
- **Project Management**: Perform CRUD operations on projects.
- **Payment Management**: Perform CRUD operations on payments and simulate payment completion.
- **CSV Export/Import**: Export all projects to a CSV file or import multiple projects from a CSV file.
- **MongoDB Integration**: Project and payment data is stored and retrieved from MongoDB.

## Getting Started

### Prerequisites

- **Node.js** installed (v12 or higher)
- **MongoDB** installed or use a MongoDB Atlas cloud instance

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vrajpatel0007/project-payment-management.git
   cd project-payment-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add the following environment variables:
   ```
   MONGODB_URL=<Your MongoDB connection string>
   PORT=8080
   SECRET_key=<Your JWT secret key>
   ```

4. Start the development server:
   ```bash
   npm start
   ```

   The server will start at `http://localhost:8080`.

## API Endpoints

### User Authentication

- **Register**: `POST /user/register`
  - Request body: `{ "Username": "username", "Email": "email", "Password": "password" }`
- **Login**: `POST /user/login`
  - Request body: `{ "Email": "email", "Password": "password" }`

### Projects

- **Create Project**: `POST /project`
- **Get All Projects**: `GET /project`
- **Update Project**: `PUT /project/:id`
- **Delete Project**: `DELETE /project/:id`
- **Export Projects to CSV**: `GET /project/export/csv`
- **Import Projects from CSV**: `POST /project/import/csv`

### Payments

- **Create Payment**: `POST /payment`
- **Get All Payments**: `GET /payment`
- **Mark Payment as Paid**: `PUT /payment/:id/pay`


## Technologies Used

- **Node.js**: Backend runtime
- **Express**: Web framework
- **MongoDB**: Database
- **JWT**: Authentication
- **Multer**: File handling (for CSV import)
- **json2csv**: CSV generation
- **csv-parser**: CSV parsing


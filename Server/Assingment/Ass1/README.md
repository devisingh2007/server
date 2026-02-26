# Student CGPA API (Assignment 1)

## Objective
Build a REST API using **Express.js** that manages student CGPA records stored in an in-memory JSON array.

## Implementation Details
This project implements a backend server for managing student academic records. It provides 6 GET routes (4 static, 2 dynamic) to query student data, toppers, averages, and branch-specific records.

### Technical Requirements Met:
- **Express.js**: Core framework used.
- **CORS**: Implemented for cross-origin requests.
- **express.json()**: Middleware for parsing JSON.
- **Dynamic PORT**: Configured for Render deployment.
- **HTTP Status Codes**: Proper usage of 200, 404, etc.

## Implemented Routes

### 1. GET `/students`
- **Description**: Returns all student records.
- **Status Code**: 200

### 2. GET `/students/topper`
- **Description**: Returns the student with the highest CGPA.
- **Status Code**: 200 (or 404 if no students exist)

### 3. GET `/students/average`
- **Description**: Returns the average CGPA of all students.
- **Status Code**: 200

### 4. GET `/students/count`
- **Description**: Returns the total number of students.
- **Status Code**: 200

### 5. GET `/students/:id` (Dynamic)
- **Description**: Returns a student by their ID.
- **Status Code**: 200 (Success) / 404 (Not Found)

### 6. GET `/students/branch/:branchName` (Dynamic)
- **Description**: Returns all students belonging to a specific branch (case-insensitive).
- **Status Code**: 200 (Found) / 404 (None Found)

## Sample API URLs
- `http://localhost:3000/students`
- `http://localhost:3000/students/topper`
- `http://localhost:3000/students/3`

## Steps to Run Locally
1. Clone the repository.
2. Navigate to the project folder (`Assingment/Ass1`).
3. Install dependencies: `npm install`.
4. Start the server: `npm start`.
5. Access the API at `http://localhost:3000`.

## Links
- **GitHub Repository**: [`https://github.com/devisingh2007/server/tree/main/Server/Assingment/Ass1`]
- **Postman Documentation**: [`https://documenter.getpostman.com/view/50841332/2sBXcGCeE6`]
- **Render Deployment**: [`https://assignment-1-xxsb.onrender.com`]

## Contact
- **Author**: Devisingh Rajput

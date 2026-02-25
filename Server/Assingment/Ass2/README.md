# 🛒 E-Commerce Product API

> **Assignment 2** - Building a robust REST API using Express.js for a dynamic in-memory product management system.

---

## 🎯 Objective
The goal of this project is to implement a professional-grade REST API that manages product listings using Express.js. This API emphasizes correct HTTP status codes, RESTful routing, and efficient in-memory data manipulation.

---

## 🚀 Features
- **Comprehensive Product Management**: Search, Filter, Add, and Update products dynamically.
- **RESTful Architecture**: Follows strict REST principles for resource manipulation.
- **Real-Time In-Memory Logic**: Uses a dynamic JSON array for all operations (no persistent DB).
- **Cross-Origin Enabled**: Integrated CORS middleware for flexible front-end integration.

---

## 🛠️ Tech Stack
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Middleware**: `express.json()`, `cors`
- **Deployment**: [Render](https://render.com/)

---

## 📂 Project Structure
```text
Ass2/
├── node_modules/
├── index.js          # Core API Logic & Server Setup
├── package.json       # Project Metadata & Dependencies
└── README.md          # Comprehensive Documentation
```

---

## 📖 API Documentation

### 📦 Data Structure
All products follow this schema:
```json
{
  "id": 1,
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 799,
  "stock": 25,
  "rating": 4.3
}
```

### 🛣️ Endpoints

| Method | Endpoint | Description | Status Code |
| :--- | :--- | :--- | :--- |
| **GET** | `/products` | Fetch all available products | `200 OK` |
| **GET** | `/products/:id` | Fetch a specific product by ID | `200 OK` / `404 Not Found` |
| **GET** | `/products/category/:categoryName` | Filter products by category | `200 OK` |
| **POST** | `/products` | Create a new product entry | `201 Created` |
| **PUT** | `/products/:id` | Replace an entire product object | `200 OK` / `404 Not Found` |
| **PUT** | `/products/:id/stock` | Update stock quantity only | `200 OK` / `404 Not Found` |
| **PUT** | `/products/:id/price` | Update product price only | `200 OK` / `404 Not Found` |

---

### 📝 Route Details

#### 1. Add New Product
`POST /products`
- **Body**:
  ```json
  {
    "name": "Bluetooth Speaker",
    "category": "Electronics",
    "price": 2999,
    "stock": 20,
    "rating": 4.6
  }
  ```
- **Response**: `201 Created` with the new product including the auto-generated ID.

#### 2. Update Stock
`PUT /products/:id/stock`
- **Body**: `{ "stock": 60 }`
- **Response**: Updated product object.

#### 3. Update Price
`PUT /products/:id/price`
- **Body**: `{ "price": 1299 }`
- **Response**: Updated product object.

---

## 🏁 Submission Mandatory Links

> [!IMPORTANT]
> Please ensure the following links are populated before final submission.

| Requirement | Description | Link |
| :--- | :--- | :--- |
| **🐙 GitHub Repository** | Public repository with clean structure and README | [Link to Repo Here] |
| **📮 Postman Documentation** | Documented 7 routes with sample payloads/responses | [Link to Postman Docs Here] |
| **🌍 Render Deployment** | Live Public API (no localhost references) | [Link to Live API Here] |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js installed on your machine.
- NPM (Node Package Manager).

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

---

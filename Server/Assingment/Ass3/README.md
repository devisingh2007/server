# State Statistics Management API

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

## 📌 Objective
A complete REST API built using **Express.js** to manage statistical data of Indian states. This API uses an in-memory JSON array to perform robust CRUD operations, focusing on correct HTTP methods, dynamic route handling, and REST architecture principles.

This assignment is designed to evaluate:
- Understanding of REST architecture
- Correct use of HTTP methods
- Dynamic route handling
- Data manipulation using arrays
- Proper status code usage
- Difference between `PUT` and `PATCH`
- Resource deletion logic

No databases, external validation libraries, or authentication were used. All operations modify the in-memory array dynamically.

---

## 🛠️ Tech Stack
- **Node.js**
- **Express.js** (Routing & Middleware)
- **CORS**

---

## 📦 Data Structure

Each state object follows this exact format:

```json
{
  "id": 1,
  "name": "Gujarat",
  "population": 63872399,
  "literacyRate": 78.03,
  "annualBudget": 243965,
  "gdp": 21000000
}
```

- `id` → Unique identifier (number, auto-generated on creation)
- `name` → State name (string)
- `population` → Total population (number)
- `literacyRate` → Percentage (number)
- `annualBudget` → Annual state budget in crores (number)
- `gdp` → State GDP in crores (number)

---

## ⚙️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <your-github-repo-url>
   cd <project-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   *(Ensure you have initialized the project with `npm init -y` and installed express and cors with `npm install express cors` if starting from scratch).*

3. **Start the server:**
   ```bash
   node index.js
   ```

The server will run on `http://localhost:3000` by default.

---

## 📡 API Endpoints Documentation

### **A. GET Routes**

| Endpoint | Method | Description | Success Status | Error Status |
|---|---|---|---|---|
| `/states` | `GET` | Returns the complete list of states in JSON format. | `200 OK` | |
| `/states/:id` | `GET` | Returns a single state matching the given `id`. | `200 OK` | `404 Not Found` |
| `/states/highest-gdp` | `GET` | Returns the state object with the highest GDP. | `200 OK` | `404 Not Found` |

### **B. POST Routes**

| Endpoint | Method | Description | Success Status |
|---|---|---|---|
| `/states` | `POST` | Adds a new state record. Auto-generates a unique `id`. | `201 Created` |

**Request Body Example:**
```json
{
  "name": "Haryana",
  "population": 25351462,
  "literacyRate": 75.55,
  "annualBudget": 180000,
  "gdp": 10000000
}
```

### **C. PUT Routes (Full Replacement/Specific Replacement)**

| Endpoint | Method | Description | Success Status | Error Status |
|---|---|---|---|---|
| `/states/:id` | `PUT` | Replaces the entire state record for the provided `id`. | `200 OK` | `404 Not Found` |
| `/states/:id/budget` | `PUT` | Replaces the `annualBudget` value for a given state. | `200 OK` | `404 Not Found` |
| `/states/:id/population` | `PUT` | Replaces the `population` value for a given state. | `200 OK` | `404 Not Found` |

### **D. PATCH Routes (Partial Updates)**

| Endpoint | Method | Description | Success Status | Error Status |
|---|---|---|---|---|
| `/states/:id/literacy` | `PATCH` | Updates the `literacyRate` selectively. | `200 OK` | `404 Not Found` |
| `/states/:id/gdp` | `PATCH` | Updates the `gdp` selectively. | `200 OK` | `404 Not Found` |
| `/states/:id` | `PATCH` | Allows updating any optionally provided fields in the payload. | `200 OK` | `404 Not Found` |

### **E. DELETE Routes**

| Endpoint | Method | Description | Success Status | Error Status |
|---|---|---|---|---|
| `/states/:id` | `DELETE` | Deletes a state by `id`. | `200/204` | `404 Not Found` |
| `/states/name/:stateName` | `DELETE` | Deletes a state by name (Case-insensitive comparison). | `200/204` | `404 Not Found` |
| `/states/low-literacy/:percentage`| `DELETE` | Deletes all states where `literacyRate` < the given value. Returns deleted count. | `200/204` | `404 Not Found` |

---

## 🔗 Submission Details

- **GitHub Repository Link:** [Insert Link Here](#)
- **Postman Documentation Link:** [Insert Link Here](#)
- **Render Deployment Link:** [Insert Link Here](#)

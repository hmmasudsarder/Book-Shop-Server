# 📚 Book Store API - Assignment 2

This project is a RESTful API built with **Express** and **TypeScript** to manage a book store. It uses **MongoDB** with Mongoose for data storage and retrieval.

---

## ✨ Features

### CRUD Operations for Bikes:

- ➕ **Create new book**
- 📋 **Get a list of all books**
- 🔍 **Get a specific book by ID**
- ✏️ **Update an existing book**
- ❌ **Delete a book**

### Order Management:

- 🛒 **Place orders for book**
- 📦 **Inventory Management**  
  Updates quantity and stock status
- 🚨 **Handles insufficient stock scenarios**
- 💰 **Order Revenue Calculation**  
  Calculates total revenue from all orders

---

## 🚀 Getting Started

This project requires **Node.js** and **npm** to be installed on your system.

1. Clone this repository:

   ```bash
   git clone https://github.com/hmmasudsarder/Book-Shop.git
   ```

2. Navigate to the project directory:becareful

   ```bash
   cd Book-shop
   ```

3. Install dependencies:

   ```bash
   npm install

   ```

4. Create a `.env` file in the root directory and configure the following variables:

   ```json
   PORT=5000
   DB_URI=<Your MongoDB Connection URI>

   ```

### ▶️ Running the API

Start the development server:

```bash
npm run dev
```

This will start the server on port 5000 by default.

Check the server status at:
http://localhost:5000

### 🌐 Deployment

The Book Shop API is deployed and live on Vercel, making it accessible for testing and integration.

**Base URL:**  
🌍 [https://book-shops-lilac.vercel.app/](https://book-shops-lilac.vercel.app/)


```

Response:

```javascript
{
    Server is Running 5000 🏃‍♂️‍➡️
}
```

### 📚 API Documentation

The API uses standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) for CRUD operations. Below is the detailed documentation of the endpoints.

---

## 📘 Inventory

### ➕ Create a Book

- **Endpoint**: `/api/products`
- **Method**: `POST`

**Request Body:**

```json
{
  "title": "The of Alchemist",
  "author": "Paulo Coelho dab",
  "price": 20,
  "category": "Fiction",
  "description": "A novel about a young shepherd's journey to realize his personal legend.",
  "quantity": 100,
  "inStock": true
}
```

**Response:**

```json
{
  "message": "Book created successfully",
  "success": true,
  "data": {
    "title": "The of Alchemist",
    "author": "Paulo Coelho dab",
    "price": 20,
    "category": "Fiction",
    "description": "A novel about a young shepherd's journey to realize his personal legend.",
    "quantity": 100,
    "inStock": true,
    "_id": "67445a95d02f249a9922acfe",
    "createdAt": "2024-11-25T11:08:05.302Z",
    "updatedAt": "2024-11-25T11:08:05.302Z",
    "__v": 0
  }
}
```

### 📋 Get All Books

- **Endpoint:** `/api/products`
- **Method:** `GET`

**Response:**

```json
{
  "message": "Books retrieved successfully",
  "success": true,
  "data": [
    {
      "_id": "67422e893ed594603c881d12",
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "price": 15.99,
      "category": "Fiction",
      "description": "A novel about a young shepherd's journey to realize his personal legend.",
      "quantity": 120,
      "inStock": true,
      "createdAt": "2024-11-23T19:35:37.383Z",
      "updatedAt": "2024-11-23T19:35:37.383Z",
      "__v": 0
    },
    {
      "_id": "67436cdf9c03792246084324",
      "title": "The of Alchemist",
      "author": "Paulo Coelho dab",
      "price": 15,
      "category": "Fiction",
      "description": "A novel about a young shepherd's journey to realize his personal legend.",
      "quantity": 116,
      "inStock": true,
      "createdAt": "2024-11-24T18:13:51.812Z",
      "updatedAt": "2024-11-24T18:15:40.206Z",
      "__v": 0
    }
  ]
}
```

### 🔍 Get a Specific Book

- **Endpoint:** `/api/products/:productId`
- **Method:** `GET`
- **Path Param:** productId (string) - ID of the Book

**Response:**

```json
{
  "message": "Book retrieved successfully",
  "success": true,
  "result": {
    "_id": "67436cdf9c03792246084324",
    "title": "The of Alchemist",
    "author": "Paulo Coelho dab",
    "price": 15,
    "category": "Fiction",
    "description": "A novel about a young shepherd's journey to realize his personal legend.",
    "quantity": 116,
    "inStock": true,
    "createdAt": "2024-11-24T18:13:51.812Z",
    "updatedAt": "2024-11-24T18:15:40.206Z",
    "__v": 0
  }
}
```

### ✏️ Update a Book

- **Endpoint:** `/api/products/:productId`
- **Method:** `PUT`
- **Path Param:** productId (string) - ID of the Book

**Request Body:**

```json
{
  "price": 15,
  "quantity": 25
}
```

**Response:**

```json
{
  "message": "Book updated successfully",
  "status": true,
  "result": {
    "_id": "67436cdf9c03792246084324",
    "title": "The of Alchemist",
    "author": "Paulo Coelho dab",
    "price": 15, // Price updated
    "category": "Fiction",
    "description": "A novel about a young shepherd's journey to realize his personal legend.",
    "quantity": 25, // Quantity updated
    "inStock": true,
    "createdAt": "2024-11-24T18:13:51.812Z",
    "updatedAt": "2024-11-25T12:57:21.509Z",
    "__v": 0
  }
}
```

### ❌ Delete a Book

- **Endpoint:** `/api/products/:productId`
- **Method:** `DELETE`
- **Path Param:** productId (string) - ID of the Book

**Response:**

```json
{
  "message": "Book deleted successfully",
  "status": true,
  "data": {}
}
```

## 🛒 Orders

### ➕ Create an Order

- **Endpoint**: `/api/orders`
- **Method**: `POST`

**Request Body:**

```json
{
  "email": "customerdsfr1@example12.com",
  "product": "67445a95d02f249a9922acfe",
  "quantity": 2,
  "totalPrice": 40
}
```

**Response:**

```json
{
  "message": "Order created successfully",
  "status": true,
  "data": {
    "email": "customerdsfr1@example12.com",
    "product": "67445a95d02f249a9922acfe",
    "quantity": 2,
    "totalPrice": 40,
    "_id": "6744758bcd3e634341453a66",
    "createdAt": "2024-11-25T13:03:07.247Z",
    "updatedAt": "2024-11-25T13:03:07.247Z",
    "__v": 0
  }
}
```

### 💰 Calculate Revenue

- **Endpoint:** `/api/orders/revenue`
- **Method:** `GET`

**Response:**

```json
{
  "message": "Revenue calculated successfully",
  "success": true,
  "data": {
    "totalRevenue": 5000
  }
}
```

Error Handling
The API uses standard HTTP status codes to indicate success or failure. In case of errors, the response includes an error message and details about the issue.

🧑‍💻 Development

- Fork the repository and clone it locally.
- Follow the steps under Getting Started.
- Open a pull request for feature updates or bug fixes.

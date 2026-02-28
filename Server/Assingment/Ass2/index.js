
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

let products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  },

  // New Products
  {
    id: 6,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 1999,
    stock: 18,
    rating: 4.6
  },
  {
    id: 7,
    name: "Denim Jacket",
    category: "Fashion",
    price: 2999,
    stock: 22,
    rating: 4.2
  },
  {
    id: 8,
    name: "Gaming Keyboard",
    category: "Electronics",
    price: 3499,
    stock: 15,
    rating: 4.7
  },
  {
    id: 9,
    name: "Water Bottle",
    category: "Accessories",
    price: 499,
    stock: 60,
    rating: 4.0
  },
  {
    id: 10,
    name: "Formal Shoes",
    category: "Footwear",
    price: 2799,
    stock: 28,
    rating: 4.3
  },
  {
    id: 11,
    name: "Sunglasses",
    category: "Fashion",
    price: 1299,
    stock: 35,
    rating: 4.1
  },
  {
    id: 12,
    name: "USB-C Charger",
    category: "Electronics",
    price: 899,
    stock: 45,
    rating: 4.4
  },
  {
    id: 13,
    name: "Gym Gloves",
    category: "Accessories",
    price: 699,
    stock: 32,
    rating: 4.2
  },
  {
    id: 14,
    name: "Casual T-Shirt",
    category: "Fashion",
    price: 799,
    stock: 70,
    rating: 4.0
  },
  {
    id: 15,
    name: "Office Chair",
    category: "Furniture",
    price: 7999,
    stock: 10,
    rating: 4.6
  },
  {
    id: 16,
    name: "LED Desk Lamp",
    category: "Electronics",
    price: 1499,
    stock: 20,
    rating: 4.3
  },
  {
    id: 17,
    name: "Yoga Mat",
    category: "Fitness",
    price: 899,
    stock: 55,
    rating: 4.4
  },
  {
    id: 18,
    name: "Leather Wallet",
    category: "Fashion",
    price: 1199,
    stock: 38,
    rating: 4.2
  },
  {
    id: 19,
    name: "Noise Cancelling Headphones",
    category: "Electronics",
    price: 6999,
    stock: 14,
    rating: 4.7
  },
  {
    id: 20,
    name: "Cricket Bat",
    category: "Sports",
    price: 2599,
    stock: 16,
    rating: 4.5
  },
  {
    id: 21,
    name: "Study Table",
    category: "Furniture",
    price: 5999,
    stock: 9,
    rating: 4.3
  },
  {
    id: 22,
    name: "Hair Dryer",
    category: "Appliances",
    price: 1799,
    stock: 27,
    rating: 4.1
  },
  {
    id: 23,
    name: "Portable Power Bank",
    category: "Electronics",
    price: 1299,
    stock: 42,
    rating: 4.4
  },
  {
    id: 24,
    name: "Men's Hoodie",
    category: "Fashion",
    price: 1999,
    stock: 48,
    rating: 4.2
  },
  {
    id: 25,
    name: "Kitchen Knife Set",
    category: "Home",
    price: 2499,
    stock: 19,
    rating: 4.5
  },
  {
    id: 26,
    name: "Digital Thermometer",
    category: "Health",
    price: 599,
    stock: 65,
    rating: 4.3
  },
  {
    id: 27,
    name: "Bluetooth Earbuds",
    category: "Electronics",
    price: 2999,
    stock: 23,
    rating: 4.6
  },
  {
    id: 28,
    name: "Football",
    category: "Sports",
    price: 899,
    stock: 34,
    rating: 4.4
  },
  {
    id: 29,
    name: "Bean Bag",
    category: "Furniture",
    price: 3499,
    stock: 11,
    rating: 4.2
  },
  {
    id: 30,
    name: "Perfume",
    category: "Beauty",
    price: 2299,
    stock: 29,
    rating: 4.3
  },
  {
    id: 31,
    name: "Smartphone Tripod",
    category: "Accessories",
    price: 799,
    stock: 37,
    rating: 4.1
  },
  {
    id: 32,
    name: "Electric Kettle",
    category: "Appliances",
    price: 1699,
    stock: 26,
    rating: 4.5
  },
  {
    id: 33,
    name: "Casual Sneakers",
    category: "Footwear",
    price: 2199,
    stock: 31,
    rating: 4.4
  },
  {
    id: 34,
    name: "Notebook Pack",
    category: "Stationery",
    price: 399,
    stock: 80,
    rating: 4.0
  },
  {
    id: 35,
    name: "Wall Clock",
    category: "Home",
    price: 999,
    stock: 24,
    rating: 4.2
  }
];

app.get("/", (req, res) => {
  res.status(200).json({ message: "Your assignment 2 server is running" });
});

app.get('/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.get('/products/category/:categoryName', (req, res) => {
  const categoryName = req.params.categoryName.toLowerCase();
  const filteredProducts = products.filter(p => p.category.toLowerCase() === categoryName);
  res.status(200).json(filteredProducts);
});

app.post('/products', (req, res) => {
  const { name, category, price, stock, rating } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    category,
    price,
    stock,
    rating
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === productId);
  if (productIndex !== -1) {
    const { name, category, price, stock, rating } = req.body;
    products[productIndex] = {
      id: productId,
      name,
      category,
      price,
      stock,
      rating
    };
    res.status(200).json(products[productIndex]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }

});
app.put('/products/:id/stock', (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const productIndex = products.findIndex(p => p.id === productId);

  if (productIndex !== -1) {
    const { stock } = req.body;

    // Only update if stock is explicitly provided
    if (stock !== undefined) {
      products[productIndex].stock = stock;
    }

    res.status(200).json(products[productIndex]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.put("/products/:id/price", (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const productIndex = products.findIndex(p => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const { price } = req.body;

  // Validate price
  if (price === undefined || typeof price !== "number" || price < 0) {
    return res.status(400).json({ message: "Invalid price value" });
  }

  products[productIndex].price = price;

  res.status(200).json(products[productIndex]);
});






app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


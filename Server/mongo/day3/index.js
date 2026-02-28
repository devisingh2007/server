const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());   // important for req.body

/// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/UserLab1')
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error('Could not connect to MongoDB', err));


// sample test route
app.get('/', (req, res) => {
    res.send('Hello World!');
});


// User Schemachch
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Create User Model
const User = mongoose.model("User", UserSchema);

// Add a new user
app.post("/addusers", async (req, res) => {
  try {
    const user = new User(req.body); 
    await user.save();               
    res.status(201).send(user);      
  } catch (err) {
    res.status(400).send(err);
  }
});


// add multiple users
app.post('/addmultipleusers',async(req,res)=>
{
    try
    {
            const users=await User.insertMany(req.body);
            res.status(201).send(users);
    }
    catch
    {
        res.status(400).send(arr);
    }
})

// server start
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
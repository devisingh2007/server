const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/Day5')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

const friendSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
});

const Friend = mongoose.model('Friend', friendSchema);

// Sample route
app.get('/', (req, res) => {
    res.send('Hello Friend!');
});

// get all friends
app.get('/friends', async (req, res) => {
    try {
        const friends = await Friend.find();
        res.status(200).send(friends);
    } catch (err) {
        res.status(500).send(err);
    }
});

// get friend by id
app.get('/friends/id/:id', async (req, res) => {
    try {
        const friend = await Friend.findById(req.params.id);
        if (!friend) {
            return res.status(404).send("Friend not found");
        }
        res.status(200).send(friend);
    } catch (err) {
        res.status(500).send(err);
    }
});

// get friend by name
app.get('/friends/name/:name', async (req, res) => {
    try {
        const fn = await Friend.findOne({ name: req.params.name });
        if (!fn) {
            return res.status(404).send("Friend not found");
        }
        res.status(200).send(fn);
    } catch (err) {
        res.status(500).send(err);
    }
});

// add single friend
app.post('/addfriend', async (req, res) => {
    try {
        const friend = new Friend(req.body);
        await friend.save();
        res.status(201).send(friend);
    } catch (err) {
        res.status(400).send(err);
    }
});

// add multiple friends
app.post('/addmultiplefriends', async (req, res) => {
    try {
        const friends = await Friend.insertMany(req.body);
        res.status(201).send(friends);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
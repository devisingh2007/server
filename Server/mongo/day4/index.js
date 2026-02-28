const express=require('express');
const mongoose=require('mongoose');
const app=express();
const port=3000;

app.use(express.json());

/// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentdb')
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error('Could not connect to MongoDB', err));

const studentSchema=new mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    gr_number:Number,
    class_number:Number

});
const Student = mongoose.model('Student', studentSchema);


// sample test route
app.get('/',(req,res)=>
{
    res.send('Hello World!');
});

app.post('/students',async(req,res)=>
{
    try{
        const st=new Student(req.body);
        await st.save();
        res.status(201).send(st);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});

// update a user by 10
app.put('/update-students/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await Student.findByIdAndUpdate(userId, req.body, { new: true });
        if (!user) {
            return res.status(404).send('Student not found');
        }
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});


app.listen(port,()=>
{
    console.log(`Server is running on http://localhost:${port}`);
});
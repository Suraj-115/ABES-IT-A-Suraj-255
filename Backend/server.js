const express = require('express');
const cors = require("cors");
const app=express();
app.use(cors()); //application level middleware
const port=8080;

//route
app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.get('/about',(req,res)=>{
    const student= [
        {
            id:1,
            name:'Suraj',
            class:'btech',
            image:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
        },
        {
            id:2,
            name:'Raj',
            class:'btech',
            image:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
        },
        {
            id:3,
            name:'Shyam',
            class:'btech',
            image:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
        },
        {
            id:4,
            name:'Gopal',
            class:'btech',
            image:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
        },
        {
            id:5,
            name:'SurajAg',
            class:'btech',
            image:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
        }
    ];
    res.json(student);
});

app.get('/contact-us',(req,res)=>{
    res.send('Hello contact-us World!');
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
const express = require('express');
const app=express();
const port=5000;

//route
app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.get('/about',(req,res)=>{
    const student= [
        {
            id:1,
            name:'suraj',
            class:'btech'
        },
        {
            id:2,
            name:'suraj2',
            class:'btech'
        },
        {
            id:3,
            name:'suraj3',
            class:'btech'
        },
        {
            id:4,
            name:'suraj4',
            class:'btech'
        },
        {
            id:5,
            name:'suraj5',
            class:'btech'
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
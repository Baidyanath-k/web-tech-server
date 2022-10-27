const express =require('express');
const app=express();
const cors = require('cors');
const port=process.env.PORT || 5000

app.use(cors());

const catagory=require('./Data/category.json');
const details = require('./data/details.json');

app.get('/',(req,res)=>{
    res.send('Running')
});
app.get('/learning-catagories', (req, res) => {
    res.send(catagory);
})
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');

const connectDB = require('./config/db')

const app = express();

// connecting to database
connectDB()



// importing routes
const userRoutes = require('./routes/user')

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(express.json())

const PORT = process.env.PORT || 5000

// Connecting routes
app.use('/api',userRoutes)

// Routes
app.get('/',(req,res)=>{
    res.send('Homepage')

});



app.listen(PORT,()=>console.log(`Server Started at Port ${PORT}
=> http://localhost:${PORT}`))
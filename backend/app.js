require('dotenv').config()
const axios=require('axios')
const jwt=require('jsonwebtoken')

// const apiKey=process.env.ZOOM_API_KEY
// const apiSecret=process.env.ZOOM_API_SECRET

const token=process.env.TOKEN
const express =require('express');
const app=express()

const cors=require('cors')
const router=require('./Routes/Route')
const paymentRouter=require('./Routes/paymentRoute')
const PORT=5000;
const Connectmongo=require('./utils/db')

const errormiddleware=require('./middlewares/error_middleware')
Connectmongo();



var corsOptions = {
    origin: 'http://localhost:3000',
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  }
app.use(cors(corsOptions));

app.use(express.json())


app.use('/api/user',router)
app.use('/api/payment',paymentRouter);
app.use(errormiddleware)
app.listen(PORT,()=>{
    console.log(`Example app listening on http://localhost:${PORT}`)
})




const express =require('express');
const app=express()

const cors=require('cors')
const router=require('./Routes/Route')
const PORT=5000;


var corsOptions = {
    origin: 'http://localhost:3000',
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  }
  app.use(cors(corsOptions));

app.use(express.json())

app.use('/api',router)
app.listen(PORT,()=>{
    console.log(`Example app listening on http://localhost:${PORT}`)
})
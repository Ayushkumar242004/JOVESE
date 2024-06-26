const express =require('express');
const app=express()

const cors=require('cors')
const router=require('./Routes/Route')
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

app.use(errormiddleware)
app.listen(PORT,()=>{
    console.log(`Example app listening on http://localhost:${PORT}`)
})
require('dotenv').config()

const axios=require('axios')
const Razorpay = require("razorpay");
const jwt=require('jsonwebtoken')
const crypto = require("crypto");
const express =require('express');
const app=express()
const cors=require('cors')
const router=require('./Routes/Route')
const PORT=5000;
const Connectmongo=require('./utils/db')

const errormiddleware=require('./middlewares/errorMiddleware')
Connectmongo();

var corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
}

app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/api/user',router)

app.post("/api/user/order", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).json({ error: "Error creating order" });
    }

    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error creating order" });
  }
});

app.post("/api/user/order/validate", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
  //order_id + "|" + razorpay_payment_id
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest("hex");
  if (digest!== razorpay_signature) {
    return res.status(400).json({ msg: "Transaction is not legit!" });
  }

  res.json({
    msg: "success",
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
  });
});

app.use(errormiddleware)
app.listen(PORT,()=>{
    console.log(` App listening on http://localhost:${PORT}`)
})
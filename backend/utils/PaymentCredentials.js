const Razorpay = require('razorpay');

keyid=process.env.key_id
keysecret=process.env.key_secret
const razorpay = new Razorpay({
  key_id: keyid,
  key_secret: keysecret,
})

module.exports=razorpay
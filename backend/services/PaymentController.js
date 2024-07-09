const razorpay=require('../utils/PaymentCredentials')

const createPaymentLink=async(orderID)=>{

    try {
        const order=await orderservice.findOrderByID(orderID);

        const paymentLinkRequest={
            amount:order.totalprice*100,
            currency:"INR",
            customer:{
                name:order.user.username,
                contact:order.user.mobile,
                email:order.user.email,

            },
            notify:{
                sms:true,
                email:true,
            },
            reminder_enable:true,
            callback_url:'',
            callback_method:'get'
        };

        const paymentLink=await razorpay.paymentLink.create(paymentLinkRequest)

        const paymentLinkID=paymentLink.id;
        const paymentLinkURL=paymentLink.short_url;

        const resData={
            paymentLinkID,
            paymentLinkURL
        }

        return resData;
    } catch (error) {
        console.log(error);
    }
}

const updatePaymentInformation=async(reqData)=>{
    const paymentID=reqData.paymentID;
    const orderId=reqData.order_ID;

    try {
        
        const order=await orderservice.findOrderByID(orderId);
        const payment=await razorpay.payments.fetch(paymentID);


        if(payment.status=="captured"){
            order.paymentDetails.paymentID=paymentID;
            order.paymentDetails.status="COMPLETED"
            order.orderStatus="paid";

            await order.save()
        }

        const resData={message:"Your Order is Placed",success:true};

        return resData
    } catch (error) {
        
        console.log(errpr);
    }

    module.exports={
        createPaymentLink,
        updatePaymentInformation
    }
}
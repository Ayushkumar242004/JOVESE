const paymentService=require('../services/PaymentController')

const createPaymentLink=async(req,res)=>{
    try {
        
        const PaymentLink=paymentService.createPaymentLink(req.params.id);

        res.status(200).send(PaymentLink);

    } catch (error) {
        console.log(error);
    }
}

const updatePaymentInformation=async()=>{
    try {
        
        paymentService.updatePaymentInformation(req.query);

        res.status(200).json({message:"Payment Information updated Successfully"})
    } catch (error) {
        console.log(error);
    }
}
module.exports={createPaymentLink,updatePaymentInformation}
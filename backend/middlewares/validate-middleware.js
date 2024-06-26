const validatemiddleware=(schema)=> async(req,res,next)=>{
    try {
        
        const parsebody=await schema.parseAsync(req.body)
        req.body=parsebody;
        next();
    } catch (err) {

        const status=422;
        const message="Failed to fill";
        console.log(err);
        const extraDetails=err.errors[0].message;
        console.log(extraDetails);
        const error={
            status,
            message,
            extraDetails
        }
        next(error)
    }
}

module.exports=validatemiddleware
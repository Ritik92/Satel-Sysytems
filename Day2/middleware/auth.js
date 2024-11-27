const {secret}=process.env
function auth(req,res,next){
    const token =req.headers.authorization;
    if(token){
        jwt.verify(token,secret,(err,decoded)=>{
            if(err){
                res.status(401).send({
                    message:"Invalid JSON Token"
                })
            }
            else{
                req.user=decoded
                next()
            }
        })
    }
}
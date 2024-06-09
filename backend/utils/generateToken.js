import jwt from "jsonwebtoken";

const generateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d',
    });

    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000, //expiry time (15 days) in milliseconds 
        httpOnly: true, // prevent XSS attacks aka cross-site scripting attacks
        sameSite:"strict", //CSRF attacks prevention (cross site request forgery attacks)
        secure: process.env.NODE_ENV !=="development"  
    });
};

export default generateTokenAndSetCookie;
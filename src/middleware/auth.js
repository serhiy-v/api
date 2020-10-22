const jwt = require('jsonwebtoken');


module.exports = (req,res,next) =>{
    var authHeader = req.get('Authorization');
    if(!authHeader){
        res.status(401).json({message: 'Token not provided'});
    }

    const token = authHeader.replace('Bearer ', '');
    try{
        jwt.verify(token,process.env.ACCES_TOKEN_SECRET);
    } catch (e){
        if (e instanceof jwt.JsonWebTokenError){
            res.status(401).json({message: 'Invalid token'});
        }
    }

    next();
}
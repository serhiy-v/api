const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/index');

module.exports = (req,res,next) =>{
    var authHeader = req.get('Authorization');
    if(!authHeader){
        res.status(401).json({message: 'Token not provided'});
    }

    const token = authHeader.replace('Bearer ', '');
    try{
        jwt.verify(token,jwtSecret);
    } catch (e){
        if (e instanceof jwt.JsonWebTokenError){
            res.status(401).json({message: 'Invalid token'});
        }
    }

    next();
}
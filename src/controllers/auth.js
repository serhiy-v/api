const mongoose = require('mongoose');
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config');

const User = mongoose.model('users');


const signIn = (req,res) => {
    const {name, password} = req.body;
    User.findOne({name}).then((user)=>{
        if(!user){
            res.status(401).json({message: 'User does not exist'});
        }
        const isValid = bCrypt.compareSync(password, user.password);

        if(isValid){
            const token = jwt.sign(user._id.toString(), jwtSecret);
            res.json({token});
        }
        else{
            res.status(401).json({message: 'Invalid password'});
        }

    }).catch(err => res.status(500).json({message: err.message}));
};

module.exports ={
    signIn
};
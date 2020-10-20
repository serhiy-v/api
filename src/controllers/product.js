const mongoose = require('mongoose');

const Product = mongoose.model('products');

const getAll = (req,res) =>{
    Product.find({},(err,product)=>{
        if(!err){
            res.json(product);
        }
        else(res.status(500).json(err));
    });
};

const getOne = (req,res) =>{
    Product.find({_id : req.params.id},(err,product)=>{
        if(!err){
            res.json(product);
        }
        else(res.status(500).json(err));
    });
};

const create = (req,res) =>{
    Product.create(req.body,(err,product)=>{
        if(!err){
            res.json(product);
        }
        else(res.status(500).json(err));
    });
};

const update = (req,res) =>{
    Product.findOneAndUpdate({_id: req.params.id},req.body,{new:true},(err,product)=>{
        if(!err){
            res.json(product);
        }
        else(res.status(500).json(err));
    });
};

const remove = (req,res) => {
    Product.deleteOne({_id:req.params.id},(err)=>{
        if(!err){
            res.json({succes:true});
        }
        else(res.status(500).json(err));
    });
};

module.exports = {
   getAll,
   getOne,
   create,
   update,
   remove
};
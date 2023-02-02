const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name: {
        type: String,
        required: 'Please enter your name',
        trim: true
    },
    quantity: {
        type: Number,
        required: true
    } 
},{
    timestamps:true
});

const Product=mongoose.model('Product',productSchema);

module.exports=Product;
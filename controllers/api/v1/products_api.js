const Product=require('../../../models/product');

//create new product and saving in db
module.exports.create=async function(req,res){
    try{

       
        let product=await Product.create({
            name:req.body.name,
            quantity:req.body.quantity
        });

      
        return res.status(201).json({
            message:"Product Created Successfuly!",
            data:{
                product
            }
        
        });


    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}


//fetching the products lists
module.exports.index=async function(req,res){

    try{

        let productsList = await Product.find({});

        if(productsList.length<1){
            return res.json(200, {
                message: "No Products found"
            });
        }

        if(productsList){
            return res.json(200, {
                message: "Products Lists",
                productsList: productsList
            });

        }

    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }

}


//updating the product with specific id
module.exports.updateProduct=async function(req,res){
    var productId=req.params.id;
    var quantity=req.query.number;

    try{
        let productsList = await Product.findById(productId);

        if(productsList){

            var productQuantity=productsList.quantity;
    
            if(productQuantity<=0){

                return res.json(400, {
                    message: "Enter new quantity"
                });

            }else{
    
                var newProductQuantity=productQuantity + (+quantity);
                let upadatedQuantity=await Product.findByIdAndUpdate(productId,{'quantity':newProductQuantity})
    
                return res.json(400, {
                    message: "Product quantity updated successfully",
                    data:upadatedQuantity
                });
            }
        }
        
    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

//deleting products 
module.exports.destroy=async function(req,res){

    try{
        if(req.params.id){
            let productId=req.params.id;
            let productsDelete= await Product.findByIdAndDelete(productId);

            return res.json(200, {
                message: "Products Deleted Successfully",
                productsDelete: productsDelete
            });
        
        }

    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
    
}
import {products} from "./constants/data.js"
import Product from "./model/product-schema.js"

export const DefaultData=async()=>{
    try{
    //    await Product.deleteMany({});          //Not a good practice to delete and add items again
       await Product.insertMany(products);       //Check if primary key is Unique... 
       console.log("Product Data Imported Successfully");
    }catch(err){
        console.log(`Error while inserting data in DB`,err.message);
    }
}

export default DefaultData;
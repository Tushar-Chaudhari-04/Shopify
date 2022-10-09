import User from "../model/user-scheme.js";

export const userSignUp=async (request,response)=>{
    try{
        const userData=request.body;
        const exits=User.findOne({email:userData.email});
        if(exits){
            response.status(401).json({message:"User Already Exits."});
        }
        const newUser=User(userData);
        await newUser.save();
        response.status(201).json({message:userData});
        console.log(data);
    }catch(err){
        response.status(500).json({message:err.message});
        console.log("Error while adding user details "+err)
    }
}

export default userSignUp;
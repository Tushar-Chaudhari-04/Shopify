import axios from "axios";

export const authenticateSignUp=async(data)=>{
    URL="http://localhost:3000"
    try{
        return await axios.post(`${URL}/signUp`,data)
    }catch(err){
        console.log(err.message);
    }
}
     

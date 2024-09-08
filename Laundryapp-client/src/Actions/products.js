import axios from "axios";

export const products=async ()=>{
    try {
        const response=await axios.get ("http://localhost:2006/api/allproducts")
        console.log("response",response);
        return response.data;
        

    } catch (error) {
        console.log(error);
        
    }
}
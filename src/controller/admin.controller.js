import { Admin } from "../model/admin.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const adminlogin=async(req,res)=>{
    const {adminname,Password}=req.body;
    try {
        if(!adminname){
            throw new ApiError(501,"adminame is required ")
        }
        if(!Password){
            throw new ApiError(501,"Password is required ")
        }
        const adminexist=await Admin.findOne({
            $or:[{adminname}]
        })
        if(!adminexist){
            throw new ApiError(501,"Admin doest not exist with the given name in database")
        }
        const Adminpasswordcheckig= await adminexist.isPasswordCorrect(Password)
        console.log("the actual pasword is ", Adminpasswordcheckig)
           
       if(!Adminpasswordcheckig){
        throw new ApiError(400,"password is incorrect try again ")
       }

       return res
       .redirect('/admin.html')

    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
export {adminlogin}
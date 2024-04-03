import { Admin } from "../model/admin.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Post } from "../model/post.model.js";
import { User } from "../model/user.model.js";

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
       .redirect('/admin/dashboard.html')

    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
const allpost=async(req,res)=>{
try {
    const allpost = await Post.find().populate('author');
    console.log("--all the post---",allpost)
    const allimage=allpost.map(post=>post.Postimage);
    const allcaption=allpost.map(post=>post.caption);
    const allpostids= allpost.map(post => ({ id: post._id}));
    console.log("-------all detail of all image ",allimage);
    const alldetailofimage=allpost.map(post=> ({ id: post._id, authorName: post.author.username }));
    console.log("--------all the detail of post",alldetailofimage);
    return res.status(200).json({allpost :allpost,allimage:allimage,alldetailofimage:alldetailofimage,allcaption:allcaption,allpostids:allpostids});
} catch (error) {
    console.log("Error agaya dada theek kro bhai ")
    throw new ApiError(500,"check kro fir se ",error);
}
}


const Allregisteruserdetail=async(req,res)=>{
    const alluserdetail=await User.find();
    const alluserusername=alluserdetail.map(user=>user.username)
    const alluserfirstname=alluserdetail.map(user=>user.FirstName)
    const alluserlastname=alluserdetail.map(user=>user.LastName)
    const alluseremail=alluserdetail.map(user=>user.Email)
    console.log("the all username are ",alluserusername);

    return res.status(200).json({alluserdetail:alluserdetail,alluserusername:alluserusername,alluserfirstname:alluserfirstname,alluserlastname:alluserlastname,alluseremail:alluseremail});
}
export {adminlogin,allpost,Allregisteruserdetail}
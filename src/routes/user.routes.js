import { Router } from "express";
import { registerUser ,loginuser} from "../controller/user.controller.js";
import { Postuser,deletepost,getAllImages,allimages } from "../controller/post.controller.js";
import { likepostbyuser } from "../controller/like.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { userdetail ,userfirstname} from "../controller/userdetail.controller.js";
import { useridentity } from "../controller/useridentity.controller.js";
import { postauthordetail } from "../controller/useridentity.controller.js";
import { Commentbyloginuser,replydatabase } from "../controller/comment.controller.js";
import { adminlogin } from "../controller/admin.controller.js";
import { allpost } from "../controller/admin.controller.js";
import { Allregisteruserdetail } from "../controller/admin.controller.js";
import { deleteuserdetail } from "../controller/admin.controller.js";
import { deleteuserpost } from "../controller/admin.controller.js";
const router=Router()

router.route("/register").post(
    upload.fields([
        {
            name:"Profilephoto",
            maxCount:1
        }
    ]),
    registerUser
)
router.route("/login").post(loginuser)
router.route("/Postuser").post(
    upload.fields([
        {
            name:"Postimage",
            maxCount:1
        }
    ]),
    Postuser
)
router.route("/:postId/like").post(likepostbyuser)

router.route("/delete/:id").delete(deletepost)
router.route("/image").get(getAllImages)
router.route("/detailuser/:id").get(userdetail)
router.route("/allpost").get(allimages)
router.route("/usernamedetail/:id").get(userfirstname)
router.route("/useridd").get(useridentity)
router.route("/postdetailcomment/:id").get(postauthordetail)
router.route("/commentbyuser").post(Commentbyloginuser)
router.route("/replybyuser").post(replydatabase)
router.route("/adminlogin").post(adminlogin)
router.route("/allpostadmin").get(allpost)
router.route("/alluserdetailforadmin").get(Allregisteruserdetail)
router.route("/userdeletepermanent/:id").delete(deleteuserdetail)
router.route("/userpostdeleted/:id").delete(deleteuserpost)
export default router




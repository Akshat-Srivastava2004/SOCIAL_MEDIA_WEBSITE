import { Router } from "express";
import { registerUser ,loginuser} from "../controller/user.controller.js";
import { Postuser,deletepost,getAllImages,allimages } from "../controller/post.controller.js";
import { likepostbyuser } from "../controller/like.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { userdetail ,userfirstname} from "../controller/userdetail.controller.js";
import { useridentity } from "../controller/useridentity.controller.js";
import { postauthordetail } from "../controller/useridentity.controller.js";
import { Commentbyloginuser,replydatabase } from "../controller/comment.controller.js";

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
router.route("https://social-media-website-gw12.onrender.com/login.html").post(loginuser)
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
export default router




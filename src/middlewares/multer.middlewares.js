import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "https://social-media-website-gw12.onrender.com/./public/temp")                           // path where all files will stored 
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  export const upload = multer({ 
    storage,
})

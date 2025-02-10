import express from "express"
import { upload } from "../../helpers/cloudinary.js"
import { addDoctor, deleteDoctor, editDoctor, fetchAllDoctors, handleImageUpload } from "../../controllers/admin/addDoctor.controller.js"


const router = express.Router()

router.post ("/upload-image" , upload.single("my_file") , handleImageUpload) 
router.post ("/add"  , addDoctor) 
router.put ("/edit/:id"  , editDoctor) 
router.post ("/add"  , deleteDoctor) 
router.delete ("/delete/:id"  , deleteDoctor) 
router.get ("/get"  , fetchAllDoctors) 

export default router;

import express from 'express';
import { loginUser, registerUser,getUser } from '../controllers/userController.js';
import requireAuth from '../middleware/requireAuth.js';
const router = express.Router();

router.post("/login",loginUser);
router.post("/register",registerUser);
router.get("/getuser", requireAuth, getUser);
router.get("/", (req,res)=>{
    res.sendStatus(200);
});

export default router;
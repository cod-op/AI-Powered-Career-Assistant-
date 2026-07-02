import express from 'express'
import { isAuth } from '../middlewares/isAuth.js';
import { registerUser,loginWithPassword,loginUser,myProfile } from '../controllers/user.js'

const router=express.Router()

router.post("/register", registerUser);
router.post("/login", loginWithPassword);
router.post("/google-login", loginUser);
router.get("/me", isAuth, myProfile);

export  default router

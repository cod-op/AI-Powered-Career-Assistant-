import express from 'express'
import { analyseResume } from '../controllers/ai.js';
import { isAuth } from '../middlewares/isAuth.js';

const router =express.Router();

router.post("/analyse",isAuth,analyseResume);

export default router;
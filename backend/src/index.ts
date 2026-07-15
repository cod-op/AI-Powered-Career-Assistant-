import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from './routes/user.js';
import aiRoutes from './routes/ai.js'
import cors from 'cors'
import Razorpay from "razorpay"
import paymentRoutes from "./routes/payment.js"


dotenv.config();

await connectDB();

const app = express();
app.use(cors())
app.use(express.json({limit:"10mb"}));
app.use(express.urlencoded({extended:true,limit:"10mb"}))

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

app.use("/api/user",userRoutes);
app.use("/api/ai",aiRoutes);
app.use("/api/payment", paymentRoutes);


const PORT = process.env.PORT || 11000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
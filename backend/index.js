import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import blogRoute from "./routes/blog.route.js";
import cors from "cors";
import path from "path"

dotenv.config(); 

const app = express();
const port = process.env.PORT || 4002; 
const MONGO_URI = process.env.MONGO_URI; 

const __dirname = path.resolve()


app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/",
}));

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

connectDB();

app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Internal Server Error" });
});


app.use(express.static(path.join(__dirname, "/frontend/dist")))
app.get("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,"frontend" , "dist" , "index.html"))
})



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

    // import dotenv from 'dotenv';
    // import connectDB from './config/database.js';
    // import express from 'express';
    // const app=express();
    // dotenv.config({
    //     path:'./.env'
    // });
    
    // const startserver= async()=>{
    //     try{
    //         await connectDB();
    //         app.on('error',(error)=>{
    //             console.log("Error in server connection",error);
    //             throw error;
    //         });
    //         app.listen(process.env.PORT || 4000,()=>{
    //             console.log(`Server is running on port ${process.env.PORT || 4000 }`);
    //         });
    //     }catch(error){
    //         console.log("Error in starting server:",error);
    //     }

    // }
    // startserver();


    import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";
import connectDB from './config/database.js';
dotenv.config({
        path:'./.env'
    });

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);

// app.listen(process.env.PORT || 4000, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
// });


const startserver= async()=>{
        try{
            await connectDB();
            app.on('error',(error)=>{
                console.log("Error in server connection",error);
                throw error;
            });
            app.listen(process.env.PORT || 4000,()=>{
                console.log(`Server is running on port ${process.env.PORT || 4000 }`);
            });
        }catch(error){
            console.log("Error in starting server:",error);
        }

    }
    startserver();
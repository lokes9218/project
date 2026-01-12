import {Post} from '../models/post.model.js';

const createPost=async(req,res)=>{
    try{
        const {name,description,age}=req.body;
        if (!name || !description || !age){
            return res.status(400).json({message:'All fields are required'});
        }
        const newPost=await Post.create({
            name,
            description,   
            age
        });
        return res.status(201).json({message:'Post created successfully',post:newPost});
    }
    catch(error){
        return res.status(500).json({message:'Server error',error:error.message});
    }
};

const getPost = async(req,res)=>{
    try{
        const posts=await Post.find();
        return res.status(200).json({posts});
    }
    catch(error){
        return res.status(500).json({message:'Server error',error:error.message});

    }
};
const updatePost = async(req,res)=>{
    try{
        if (Object.keys(req.body).length===0){
            return res.status(400).json({message:'No data provided for update'});
        }
        const post=await Post.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if (!post){
            return res.status(404).json({message:'Post not found'});
        }
        return res.status(200).json({message:'Post updated successfully',post:post});
    }
    catch(error){
        return res.status(500).json({message:'Server error',error:error.message});
    }
};

const deletePost= async(req,res)=>{
    try{
        const post=await Post.findByIdAndDelete(req.params.id);
        if (!post){
            return res.status(404).json({message:'Post not found'});
        }
        return res.status(200).json({message:'Post deleted successfully'});
    }
    catch(error){
        return res.status(500).json({message:'Server error',error:error.message});
    }
};


export {createPost, getPost, updatePost, deletePost};
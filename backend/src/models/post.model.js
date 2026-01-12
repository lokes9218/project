import mongoose , { Schema } from 'mongoose';

const postSchema = new Schema({ 
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
       },   
    age: {
        type: Number,
        required: true
    }
}, { timestamps: true });   

export const Post = mongoose.model('Post', postSchema);
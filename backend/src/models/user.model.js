import mongoose , { Schema } from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
const userSchema = new Schema({ 
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minlength: 5,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
}, { timestamps: true });   


userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }   
    try {   
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }   
    catch (error) {
        next(error);
    }
});
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};
export const User = mongoose.model('User', userSchema);
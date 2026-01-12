import {Router} from 'express';
import {loginUser,registerUser,logoutUser} from '../controllers/user.controller.js';
const router=Router();
// router.get('/',(req,res)=>{
//     res.send("User Route is working");
// });


router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(logoutUser);
// define route seperately for login , logout , profile update etc in future
// http method
// http://localhost:5000/api/v1/users/register
// https hypertext transfer protocol secure and then 
// protocal is client and server communication 
// domain
// path

// http method 
// use  see the data
// post create the data or login and logout
// Put whole thing change 
// patch some part only change
// delete know delete data user



export default router;
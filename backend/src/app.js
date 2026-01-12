import express from 'express';
const app=express();
app.use(express.json());
import UserRouter from './routes/user.routes.js';
import PostRouter from './routes/user.routes.js';

// router declaration
app.use('/api/v1/users',UserRouter);
app.use('/api/v1/posts',PostRouter); 

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// }); 
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// routes import and middleware setup will go here in future

export default app;

//express.js setup code will go here in future
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './db.js';
import signinRoutes from './routes/signin.js';
import signupRoutes from './routes/signup.js';
import testRoutes from './routes/test.js';
import authMiddleware from './middlewares/authMiddleware.js';

const app = express();

connectDB();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use('/api/signin', signinRoutes);
app.use('/api/signup', signupRoutes);
app.use('/api/test', authMiddleware, testRoutes);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Listening on port ${port}...`));

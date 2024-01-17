// index.js
import express from 'express';
import route from './server/Routes/Router.js';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './server/Database/connection.js';
import cors from 'cors';
import session from 'express-session';


const app = express();


// Load environment variables from a .env file
dotenv.config({ path: ".env" });
console.log('MONGO_URL:', process.env.MONGO_URL); // Add this line to check the value

connectDB(); 
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,  // Allow credentials (cookies, authorization headers, etc.)
  }));
app.use(express.json());

//session config
app.use(session({
    secret: 'your_secret_key', // Change this to a secret key for session encryption
    resave: false,
    saveUninitialized: true
}));


app.use('/', route);

app.listen(3002, () => {
    console.log("app is running at port 3002");
});

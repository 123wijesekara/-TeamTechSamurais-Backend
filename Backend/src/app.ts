import express,{Express,Request,Response} from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import rootRouter from './routes';
import { JWT_SECRET } from './config/config';
import admin from 'firebase-admin';
const app:Express = express();


admin.initializeApp({
    credential: admin.credential.applicationDefault(),
   
  });
app.use(bodyParser.json()); // Middleware to parse JSON bodies

// Use routes
app.use('/users', userRoutes);
app.get('/',(req:Request,res:Response)=>{
    res.send('working')
  })


export default app;
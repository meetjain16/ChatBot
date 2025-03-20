import express from 'express';
import {config} from 'dotenv';
import e from 'express';
config();
const app = express();


app.use(express.json());
app.get('/',(req,res,next)=>{
  return  res.send('Hello World');
    
})

export default app;
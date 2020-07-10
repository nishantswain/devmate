const express=require('express');


const app=express();

app.get('/',(req,res)=>{res.send('API running')}) // requesting for homepage and responding as API running API is a already written code used as web service eg: google login , weather API



const PORT=process.env.PORT||5000; // listen to on this port

app.listen(5000,()=>console.log(`Server started on ${PORT}`)); // consoling to log that port is working fine


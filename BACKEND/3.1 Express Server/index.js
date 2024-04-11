/* create directory
create index.js file 
intitialise npm
install the express package 
write server application in index.js
start server*/



import express from "express";
const app=express();
const port =3000;

app.get("/",(req,res)=>{

    res.send("Hello Amend!");
});
app.get("/homepage",(req,res)=>{

    res.send("Hello home!");
});

app.listen(3000,()=>{
    console.log(`Server running in port ${port}`);
});
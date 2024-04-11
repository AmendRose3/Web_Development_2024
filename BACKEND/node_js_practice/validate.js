const express=require('express');
const bodyParser=require('body-parser');
// const querystring = require('querystring');
const app=express();

const users=[
    {username:"Amend",password:"pass1"},
    {username:"Shi",password:"pass2"},
    {username:"Chris",password:"pass3"},
];

function authen(username,password){
    let isAuthenticated = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            isAuthenticated = true;
            break;
        }
    }

    return isAuthenticated;

    }

//middleware to parse req body
app.use(bodyParser.urlencoded({extended:true}));

//Post route for authentication
app.post('/',(req,res)=>{
    const {username,password}=req.body;
    

if(!username || !password){
    res.status(400).send('Both username and password are required');
    return;
}

if(authen(username,password)){
    res.status(200).send('Authentication Successful.');

}else{
    res.status(401).send("Unsuccessful Authentication ")
}
});

//start server
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});











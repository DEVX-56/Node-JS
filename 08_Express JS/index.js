const express = require('express');
const http = require('http');


const app = express();  // This app is a handler function

app.get('/', (req, res)=>{
    return res.send('Hello from home page');
})
app.get('/about', (req, res)=>{
    return res.send('Hello from about page');
})

app.listen(8000, ()=>console.log("Server Started"));


/*
    In Express we also dont need to write this

const myServer = http.createServer(app);
myServer.listen(8000, ()=>{    
    console.log("Server Started");  
});
*/
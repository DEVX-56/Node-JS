// Here we create log of incoming request in the server
const http = require('http');
const fs = require('fs');
const url = require('url');


const myServer = http.createServer((req, res)=>{  
    const log = `${Date.now()}: ${req.url} New Request Recived\n`; 
    fs.appendFile('./log.txt', log, (err, data)=>{
        switch (req.url){
            case '/':
                res.end("Home Page");
                break;
            case '/about':
                res.end("about page");
                break;
            case '/contact':
                res.end("Contact: devx.rohan@proton.me");
                break;
            default:
                res.end("404 Page not Found");
        }
    });
}); 


//Assigning port number
myServer.listen(8000, ()=>{    
    console.log("Server Started");  
});
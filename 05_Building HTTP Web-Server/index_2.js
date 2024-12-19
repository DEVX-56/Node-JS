// Here we create log of incoming request in the server
const http = require('http');
const fs = require('fs');


const myServer = http.createServer((req, res)=>{  //This function will reate a web-server || This function a call back function || this arrow function will process inconing request
    const log = `${Date.now()}: New Request Recived\n`;  // This is log data which will be append in file [date: New request Recived]
    fs.appendFile('./log.txt', log, (err, data)=>{
        res.end("Hello from Node Server");   //This will be end response from server side
    });
}); 


//Assigning port number
myServer.listen(8000, ()=>{    //This call back function is optional
    console.log("Server Started");  // if every thing works good then it will print 
});
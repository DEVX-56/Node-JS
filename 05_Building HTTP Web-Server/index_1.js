//Create a basic server
const http = require('http');


const myServer = http.createServer((req, res)=>{  //This function will reate a web-server || This function a call back function || this arrow function will process inconing request
    console.log("New Res Recived");  // When we get an incoming request this will print in console
    //console.log(req);
    res.end("Hello from Node Server");   //This will be end response from server side
}); 


//Assigning port number
myServer.listen(8000, ()=>{    //This call back function is optional
    console.log("Server Started");  // if every thing works good then it will print 
});
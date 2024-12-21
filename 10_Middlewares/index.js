//Middleware

const express = require('express');
const users = require('../MOCK_DATA.json');
const fs = require('fs');
const app = express();
const PORT = 8000;

//Middleware
app.use(express.urlencoded({extended: false})); //this middleware take the urlEncoded data(form data) which coming from server and add in body
//creating custom middleware
app.use((req, res, next)=>{
    console.log("Hello from Middleware: 1");
    req.myUserName = "Devx";   //This user name also available in nexy function
    //return res.json({msg: "Hello from Middleware: 1"});  // This middleware return the response and process will not happen further
    next();  //This next function will grant access for further process
});
app.use((req, res, next)=>{
    console.log("Hello from Middleware: ", req.myUserName);
    //return res.end("Heei");
    next();
});



//GET Method
app.get('/api/users', (req, res)=>{  
    return res.json(users);
});



app.route('/api/users/:id').get((req, res)=>{  
    const id = Number(req.params.id);  
    const user = users.find((user)=> user.id === id);
    return res.json(user);
})
.patch((req, res)=>{
    return res.json({Status:"Pending"});
})
.delete(()=>{
    return res.json({Status:"Pending"});

})

//POST Method
app.post('/api/users', (req, res)=>{   
    const body = req.body;  
    users.push({...body, id: users.length+1});  
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
        return res.json({status:"success", id: users.length});  
    })
})

app.listen(PORT, ()=>{
    console.log(`Server Started at PORT: ${PORT}`);
})
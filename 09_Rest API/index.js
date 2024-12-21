//Creating a REST API

const express = require('express');
const users = require('../MOCK_DATA.json');
const fs = require('fs');
const app = express();
const PORT = 8000;

//Middleware
app.use(express.urlencoded({extended: false})); //this middleware take the urlEncoded data(form data) which coming from server and add in body

//GET Method
app.get('/api/users', (req, res)=>{  //This method returns all the users in given route
    return res.json(users);
});
app.get('/users', (req, res)=>{  //This method returns all the users in given route
    //here we render a HTML Tag
    const html = `
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join("")};
    </ul>
    `
    res.send(html);
})


app.route('/api/users/:id').get((req, res)=>{  //This method returns user with given id
    const id = Number(req.params.id);   // get the id
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
app.post('/api/users', (req, res)=>{    //here we are creating new user
    const body = req.body;  //catch the requested data
    //console.log("Body: ", body);  printing the reciverd data in console
    users.push({...body, id: users.length+1});  //take the recived data and destructure it, assign a id and add the recived data in the MOCK_DATA file
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
        return res.json({status:"success", id: users.length});  //when data enter sucessful then we will send sucess and return the entry id.
    })
})

/*Though these methods are working o Same route so we are marging them togeather
app.get('/api/users/:id', (req, res)=>{  //This method returns user with given id
    const id = Number(req.params.id);   // get the id
    const user = users.find((user)=> user.id === id);
    return res.json(user);
}); 

POST Method
app.post('/api/users', (req, res)=>{    //here we are creating new user
    //TO DO
    return res.json({Status:"Pending"});
})

PATCH Method
app.patch('/api/users/:id', (req, res)=>{    here we edit the user using given id
    TO DO
    return res.json({Status:"Pending"});
})

DELETE Method
app.delete('/api/users/:id', (req, res)=>{    here we delete the user using given id
    TO DO
    return res.json({Status:"Pending"});
})

*/

//PORT
app.listen(PORT, ()=>{
    console.log(`Server Started at PORT: ${PORT}`);
})
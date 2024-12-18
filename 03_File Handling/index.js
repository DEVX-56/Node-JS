const fs = require('fs');

                     //Creating/Writing File
//Synchronous                                             
fs.writeFileSync('./test.txt', "Hey there it's rohan");

//Aynchronous   
fs.writeFileAsync('./test.txt', "Hey there it's rohan", (err)=>{});

                        //Reading File

//Synchronous                        
const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result)

//Aynchronous   
fs.readFile("./contacts.txt", "utf-8",(err, result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
});

                        //Append file
//Synchronous
fs.appendFileSync("./contacts.txt", `\nHey there`);
//Asynchronous
fs.appendFile("./contacts.txt", `\nHey there`, ()=>{});
    
                        //Delete File
//Synchronous
fs.unlinkSync("./apple.txt");
//Asynchronous
fs.unlink("apple.txt", ()=>{});
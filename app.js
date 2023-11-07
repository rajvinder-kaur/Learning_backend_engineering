import express from 'express'; //imports the express function
import fs from 'node:fs' //file handling module

// 📁 📁 📁 file reading synchronously 📁 📁 📁 

const data = JSON.parse(fs.readFileSync(`./data/data.json`)) //JSON.parse converts the json file into a js object.


// setting up express app 🚂
const app = express(); //🔥🔥🔥🔥express function upon calling adds all express methods to our app varaiable 🔥🔥🔥🔥 

const port = 3000; // defining the port on which our server will be functioning 🤖

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})

app.use(express); //inserting middleware

//routing in expressjs 

// 😬 In these route methods the sequence of the req and res matters a lot , so don't mess 

app.get('/api/v1/fruits', (req, res) => {
    res.status(200).json({
        status : 'sucess',
        results:data.length,
        data:{
            data
        },
    }); //sends json as a response.
}) 
//used to fetch data 🔼 

app.post('/api/v1/fruits',(req,res)=>{
    console.log(req.body);
    res.send('you can post this endpoint !')
}) //used to send data 📮 


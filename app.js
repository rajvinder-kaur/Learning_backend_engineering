import express from 'express'; //imports the express function

const app = express(); //🔥🔥🔥🔥express function upon calling adds all express methods to our app varaiable 🔥🔥🔥🔥 

const port = 3000; // defining the port on which our server will be functioning 🤖

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})


//routing in expressjs 

// 😬 In these route methods the sequence of the req and res matters a lot , so dont mess 

app.get('/', (req, res) => {
    res.status(200).json({ "message": 'hello it my first route !' })
}) //used to fetch data 🔼 

app.post('/',(req,res)=>{
    res.send('you can post this endpoint !')
}) //used to send data 📮 


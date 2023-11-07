import express from 'express'; //imports the express function
import dotenv from 'dotenv';//for using env variables
import mongoose from 'mongoose' // middleware for establishing connection with mongodb

dotenv.config({ path: './config.env' });// importing env varaiables

//importing env variables
const port = process.env.PORT; // defining the port on which our server will be functioning 🤖
const atlas = process.env.STRING // contains connection string of mongodb atlas
const local = process.env.LOCAL //contains connection string of local mongodb compass


//setting up connection with database 👇
mongoose.connect(atlas,{
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false,
}).then(()=> console.log("connection established !")) //connecting sucessfully using atlas string


// mongoose.connect(local,{
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     family: 4,
// }).then(()=> console.log("connection established !")) 
//connecting sucessfully using local compass string

// setting up express app 🚂
const app = express(); //🔥🔥🔥🔥express function upon calling adds all express methods to our app varaiable 🔥🔥🔥🔥 


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})

app.use(express); //inserting middleware
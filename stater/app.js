import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'node:fs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const x = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const app = express();
app.use(express.json()); // middleware to facilitate sending data 


app.get('/api/v1/tours/',(req,res)=>{
    res.status(200).json({
        status:'success',
        length: x.length ,
        data: {
            tour: x

        }
    })
})
app.get('/api/v1/tours/:id',(req,res)=>{
    const id = req.params.id * 1  //converting the the string value into number

    if(id>x.length){
        res.status(404)
    }else{

    const tour = x.find(el => el.id == id)

    res.status(200).json({
        status:'success',
        length:x.length,
        data:{
        tour : tour
        }
    })}
})

app.post('/api/v1/sendtours',(req,res)=>{
    // console.log(req.body);
    
    const newId = x[x.length -1].id+1;  //creating a new id 
    const newTour = Object.assign({id:newId},req.body)   //this fuction helps us form a new object by merging two existing objects
    x.push(newTour);

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(x) ,err=>{
    res.status(201).json({
        status:'sucess',
        data:{
            tour:newTour
        }
    })
    })
})


app.listen(3000,()=>{
    console.log('server started successfully !');
})

app.get('/msg',(req,res)=>{
    res.status(200).json(
        {
            name: "ace",
            message :  "starting a server testing !"
        }
    )
})


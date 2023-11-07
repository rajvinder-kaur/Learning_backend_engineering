import http from 'http';
import  url  from 'url';
import fs from 'node:fs'
// import {PORT ,USERNAME,PASSWORD} from process.config.env


//////////////////////////////////////////////////////////////
//📁📁📁📁 file 📁📁📁📁📁   







////////////////////////////////////////////////////////////
//💻 💻 💻 💻 💻 server 💻 💻 💻 💻  

// this setup is created in a sync manner 👨‍💻 because after the server starts only the callback in the create server  will be called after each client request. 

const data = fs.readFileSync('./data/data.json', 'utf-8'); // this function will write data into from the file and stores it into the data variable 
const fileobject = JSON.parse(data);
// this decodes the json data and stores in file 

const server = http.createServer((req,res)=>{

    const path  = req.url; //gets the url from the search bar and stores it in a variable

    if(path == '/' || path == '/overview'){
        res.end('this is an overview page !')
    }else if(path =='/product'){
        res.end('this is an product page !');
    }else if(path =='/api'){
        res.writeHead(200,{
            "Content-type":"application/json"
        })
        res.end(data);
        
    }else{
        // write head helps to write headers for our response , 404(not found) is the status of the response sent 
        res.writeHead(404,{
            'Content-type':'text/html', //defined that the data i am sending in response is in the form of html 
            'my-own-header':'hello-world' // that is a userdefined route 
        });
        res.end('<h1> Page not available ! </h1>'); // html type response sent to the user 
    }

    
})

// create server is used to create a server and a call back function is passed to the function that is called at each new request 

server.listen(PORT, '127.0.0.1',()=>{
    console.log('====================================');
    console.log('listening to requests on 8000');
    console.log('====================================');
})

//we made our server work on ip 127.0.0.1 and port 8000.
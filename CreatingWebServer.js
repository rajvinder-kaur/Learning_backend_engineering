import http from 'http'


//////////////////////////////////////////////////////////////
//file**







////////////////////////////////////////////////////////////
//server**

const server = http.createServer((req,res)=>{
    console.log(req);
    res.end('hello fron the server !')
})

// create server is used to create a server and a call back function is passed to the function that is called at each new request 

server.listen(8000, '127.0.0.1',()=>{
    console.log('====================================');
    console.log('listening to requests on 8000');
    console.log('====================================');
})

//we made our server work on ip 127.0.0.1 and port 8000
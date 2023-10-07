import fs from 'node:fs'
fs.readFile('./demo.txt',(err,data)=>{
    console.log(data)
})
console.log('====================================');
console.log('reading/.....');
console.log('====================================');

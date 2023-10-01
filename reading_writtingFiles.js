
import fs from 'node:fs'; 
// the es6 syntax for importing the module but (before using this create a package.json and set type : module)

const data =fs.readFileSync('./demo.txt','UTF-8'); // a synchronus fy=unction that helps read files and takes two parameters 1) the path to file 2) the character encoding 

const text = `i love physics and ${data} \n created on ${Date.now()}`; // the ss6 way to easily write into files
fs.writeFileSync('./out.txt',text);// functions that help write into a file


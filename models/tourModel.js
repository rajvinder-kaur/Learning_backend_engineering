import express from 'express'; //imports the express function

//creating a data model using mongoose 
//👾👾👾👾👾👾4schema is used to create a data model that further facilitates the crud operations in data 👾👾👾👾👾👾

const tourSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'a tour must have a name'], //its called a validator
        unique:true
    },
    age:{
        type:Number,
        default:4.5
    },
    price:{
        type:Number,
        required:[true,'a tour must have a price . . . . .']
    }
})

const Tour = mongoose.model('two',newSchema); 
//pass the name of the collection in the connected database 💐

module.exports = Tour;   


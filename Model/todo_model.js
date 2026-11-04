const mongoose = require ('mongoose')
const { Schema } = mongoose


let todo_Schema= new Schema({

    taskAdd:{
        type: String,
        required: true
    },
    priority:{
        type: String,
        enum:['Highlight','midorate','low'],
        default:'none'

        

    }
})
module.exports = mongoose.model("khata",todo_Schema)
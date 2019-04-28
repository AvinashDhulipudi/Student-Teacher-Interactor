const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema

const FeedbackSchema = new Schema({
    teacher:{
     type: String,
     require: true    
    },
    feedback:{
        type: String,
        reuired: true 
    },
    user: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now 
    }
});

mongoose.model('feedbacks', FeedbackSchema);
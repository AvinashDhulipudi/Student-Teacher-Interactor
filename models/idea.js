const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema

const IdeaSchema = new Schema({
    title:{
     type: String,
     require: true    
    },
    details:{
        type: String,
        reuired: true 
    },
    comments: [{
        commentBody: {
          type: String,
          required: true
        },
        commentDate:{
          type: Date,
          default: Date.now
        },
        commentUser:{
          type: Schema.Types.ObjectId,
          ref:'users'
        }
      }],
      user:{
        type: Schema.Types.ObjectId,
        ref:'users'
      },
    date: {
        type: Date,
        default: Date.now 
    }
});

mongoose.model('ideas', IdeaSchema);
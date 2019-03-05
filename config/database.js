if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb+srv://bharath:bharath@cluster0-kmw5c.mongodb.net/test?retryWrites=true'}
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
  }
if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://bharath:bharath@ds261155.mlab.com:61155/tsinteract'}
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
  }
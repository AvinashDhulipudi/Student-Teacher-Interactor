if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://bharath:bharath@cluster0-shard-00-00-kmw5c.mongodb.net:27017,cluster0-shard-00-01-kmw5c.mongodb.net:27017,cluster0-shard-00-02-kmw5c.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'}
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
  }
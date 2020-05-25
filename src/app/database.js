import { MongoClient } from "mongodb";

const mongoDb = () => {
  let _db;

  const connect = callback => {
    const uri = process.env.MONGO_DB_CONNECTIONSTRING;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
  
    MongoClient.connect(uri,options)
      .then(client => {
        _db = client.db();
        callback(client);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getDb = () => {
    if (_db) {
      return _db;
    }

    throw 'No database found!';
  };

  return {
    connect,
    getDb
  };
};

module.exports = mongoDb;
import { MongoClient } from "mongodb";

const mongoDb = ({ mongoConnectionString }) => {
  let _db;

  const configure = callback => {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
  
    MongoClient.connect(mongoConnectionString, options)
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
    configure,
    getDb
  };
};

module.exports = mongoDb;
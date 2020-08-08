import { MongoClient } from "mongodb";

const mongoDb = ({ config }) => {
  let _db;

  const configure = async () => {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };

    try {
      const client = await MongoClient.connect(config.mongoConnectionString, options);

      _db = client.db();

      return client;
    } catch (err) {
      console.log(err);
    }
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
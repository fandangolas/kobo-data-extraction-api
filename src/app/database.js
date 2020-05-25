import { MongoClient } from "mongodb";

const mongoDbConnect = callback => {
  const uri = process.env.MONGO_DB_CONNECTIONSTRING;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  MongoClient.connect(uri,options)
    .then(client => {
      callback(client);
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = mongoDbConnect;
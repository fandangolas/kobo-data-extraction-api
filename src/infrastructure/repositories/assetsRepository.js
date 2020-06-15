const assetsRepository = ({ db }) => {
  
  const createAsset = (asset) => {
    const connection = db.getDb();

    try {
      return connection.collection('assets').insertOne(asset);
    } catch (error) {
      console.log(error);
    }
  }

  return { createAsset };
};

export default assetsRepository;
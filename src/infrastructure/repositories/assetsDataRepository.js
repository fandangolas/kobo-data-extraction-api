const assetsDataRepository = ({ db }) => {
  
  const createAssetData = (assetData) => {
    const connection = db.getDb();

    try {
      return connection.collection('assets-data').insertOne(assetData);
    } catch (error) {
      console.log(error);
    }
  }

  return { createAssetData };
};

export default assetsDataRepository;
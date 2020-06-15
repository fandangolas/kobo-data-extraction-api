const assetsController = ({ db, koboClient, assetsRepository, assetsDataRepository }) => {

  const getAssets = async (req, res) => {
    const data = await koboClient.getAssets(req.koboToken);

    res.json({ data });
  };

  const registerAsset = async (req, res) => {
    const uid = req.params.uid;
    const connection = db.getDb();

    const asset = await koboClient.getAsset(req.koboToken, uid);
    const assetData = await koboClient.getData(req.koboToken, uid);

    const { insertedId: assetInsertionId } = await assetsRepository.createAsset({ asset: "assets repository test 6"});
    const { insertedId: assetDataInsertionId } = await assetsDataRepository.createAssetData({ data: assetData });

    const assets = await connection.collection('assets')
      .find({ })
      .toArray();

    const assetsData = await connection.collection('assets-data')
      .find({ })
      .toArray();

    console.log(assets, assetsData);

    res.status(202).json({
      assetInsertionId,
      assetDataInsertionId,
      //asset,
      assetData
    });
  };

  return {
    getAssets,
    registerAsset,
  };
}

export default assetsController;
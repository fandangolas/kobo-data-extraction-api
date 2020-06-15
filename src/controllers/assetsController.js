const assetsController = ({ koboClient, assetsRepository, assetsDataRepository }) => {

  const getAssets = async (req, res) => {
    const data = await koboClient.getAssets(req.koboToken);

    res.json({ data });
  };

  const registerAsset = async (req, res) => {
    const uid = req.params.uid;

    const asset = await koboClient.getAsset(req.koboToken, uid);
    const assetData = await koboClient.getData(req.koboToken, uid);

    //const { insertedId: assetInsertionId } = await assetsRepository.createAsset({ asset: "assets repository test 6"});
    const { insertedId: assetDataInsertionId } = await assetsDataRepository.createAssetData({ data: assetData });

    res.status(202).json({
      //assetInsertionId,
      assetDataInsertionId
    });
  };

  return {
    getAssets,
    registerAsset,
  };
}

export default assetsController;
const assetsController = ({ koboClient, assetsRepository, assetsDataRepository }) => {

  const getAssets = async (req, res) => {
    const data = await koboClient.getAssets(req.koboToken);

    res.json({ data });
  };

  const registerAsset = async (req, res) => {
    const uid = req.params.uid;
    const authToken = req.koboToken;

    const {
      data: asset,
      status: assetStatus
    } = await koboClient.getAsset(authToken, uid);

    const {
      data: assetData,
      status: assetDataStatus
    } = await koboClient.getData(authToken, uid);

    const {
      insertedId: assetInsertionId
    } = await assetsRepository.createAsset({ asset });

    const {
      insertedId: assetDataInsertionId
    } = await assetsDataRepository.createAssetData({ data: assetData });

    res.status(202).json({
      assetInsertionId,
      assetDataInsertionId,
      asset,
      assetData
    });
  };

  return {
    getAssets,
    registerAsset,
  };
}

export default assetsController;
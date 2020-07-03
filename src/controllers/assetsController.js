const assetsController = ({
  assetsDataRepository,
  assetsRepository,
  koboClient,
  koboDataExtractionService
}) => {
  const getAssets = async (req, res) => {
    const data = await koboClient.getAssets(req.koboToken);

    res.json({ data });
  };

  const registerAsset = async (req, res) => {
    const uid = req.params.uid;
    const authToken = req.koboToken;

    const { asset, data } = await koboDataExtractionService.extractAsset(authToken, uid);

    //TODO: Do these repository operations in a transaction scope
    const { insertedId: assetInsertionId } = await assetsRepository
      .createAsset({ asset });

    const { insertedId: assetDataInsertionId } = await assetsDataRepository
      .createAssetData({ data });

    res.status(202).json({
      assetInsertionId,
      assetDataInsertionId,
      asset,
      data
    });
  };

  return {
    getAssets,
    registerAsset,
  };
}

export default assetsController;
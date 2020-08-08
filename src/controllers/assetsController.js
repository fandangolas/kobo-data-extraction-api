const assetsController = ({ assetService, koboClient, koboDataExtractionService }) => {
  const getAssets = async (req, res) => {
    const data = await koboClient.getAssets(req.koboToken);

    res.json({ data });
  };

  const registerAsset = async (req, res) => {
    const authToken = req.koboToken;
    const assetUid = req.params.uid;

    const { asset, data } = await koboDataExtractionService.extractAsset(authToken, assetUid);
    //TODO: Create logic to handle with 404 and make api more resilient. 

    const insertionInfo = await assetService.saveAsset(asset, data);

    res.status(202).json({
      ...insertionInfo,
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
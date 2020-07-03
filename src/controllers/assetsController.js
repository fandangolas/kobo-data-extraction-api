const assetsController = ({ koboClient, assetsRepository, assetsDataRepository }) => {

  const getAssets = async (req, res) => {
    const data = await koboClient.getAssets(req.koboToken);

    res.json({ data });
  };

  const registerAsset = async (req, res) => {
    const uid = req.params.uid;
    const authToken = req.koboToken;

    const {
      data: asset
    } = await koboClient.getAsset(authToken, uid);

    const {
      data: assetData
    } = await koboClient.getData(authToken, uid);

    const { content, ...assetProps } = asset;

    const { survey, ...contentProps } = content;

    const newSurvey = [];

    survey.forEach(survey => {
      const { $autoname, $kuid, ...otherProps } = survey;

      const formattedSurvey = { autoname: $autoname, kuid: $kuid, ...otherProps };

      newSurvey.push(formattedSurvey);
    });

    const newContent = { ...contentProps, survey: newSurvey };

    const newAsset = { ...assetProps, content: newContent };

    const { insertedId: assetInsertionId } = await assetsRepository.createAsset({ newAsset });

    const { insertedId: assetDataInsertionId } = await assetsDataRepository.createAssetData({ data: assetData });

    res.status(202).json({
      assetInsertionId,
      assetDataInsertionId,
      newAsset,
      asset
    });
  };

  return {
    getAssets,
    registerAsset,
  };
}

export default assetsController;
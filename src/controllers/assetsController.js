const assetsController = ({ koboClient, db }) => {
  const getAssets = async (req, res, next) => {
    const connection = db.getDb();
    const surveys = await koboClient.getAssets(req.koboToken);

    const firstSurvey = surveys.results[0];
    const firstUid = surveys.results[0].uid;
    
    const firstSurveyData = await koboClient.getData(firstUid, req.koboToken);

    const dbRegisters = await connection.collection('test')
      .find({ })
      .toArray();

    console.log(dbRegisters);

    res.json({
      surveys,
      firstSurvey,
      firstSurveyData
    });
  };

  return { getAssets };
}

export default assetsController;

const removeDollarSignFromSurveyObject = survey => {
  const formattedSurvey = [];

  survey.forEach(surveyElement => {
    const { $autoname, $kuid, ...otherProps } = surveyElement;

    const formattedSurveyElement = {
      autoname: $autoname,
      kuid: $kuid,
      ...otherProps
    };

    formattedSurvey.push(formattedSurveyElement);
  });

  return formattedSurvey;
};

const koboDataExtractionService = ({ koboClient }) => {
  const extractAsset = async (authToken, assetUid) => {
    const { data: asset } = await koboClient.getAsset(authToken, assetUid);
    const { data: assetData } = await koboClient.getData(authToken, assetUid);
    //TODO: Consider case when 404 is returned from Kobo and other http status codes
    //in both requests.

    const { content, ...assetProps } = asset;
    const { survey, ...contentProps } = content;

    const formattedSurvey = removeDollarSignFromSurveyObject(survey);

    const newContent = { ...contentProps, survey: formattedSurvey };

    const newAsset = { ...assetProps, content: newContent };

    return {
      asset: newAsset,
      data: assetData
    };
  };

  return { extractAsset };
};

export default koboDataExtractionService;
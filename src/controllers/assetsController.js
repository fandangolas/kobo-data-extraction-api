const assetsController = ({ koboClient }) => {
  const getAssets = async (req, res) => {
    const data = await koboClient.getAssets(req.koboToken);

    res.json({ data });
  };

  return { getAssets };
}

export default assetsController;
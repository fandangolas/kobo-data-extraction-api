const authController = ({ koboClient }) => {
  const getAuthToken = async (req, res, next) => {
    const token = await koboClient.getToken();

    res.send(`token: ${token}`);
  };

  return { getAuthToken };
}

export default authController;
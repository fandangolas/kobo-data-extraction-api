import configureContainer from "../app/configureContainer";
const container = configureContainer();

exports.getAuthToken = async (req, res, next) => {
  const client = container.resolve('koboClient');

  const token = await client.getToken();

  res.send(`token: ${token}`);
};
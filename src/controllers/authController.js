import koboClient from "../infrastructure/koboClient";

exports.getAuthToken = async (req, res, next) => {
  const user = process.env.KOBO_USER;
  const pass = process.env.KOBO_PASSWORD;
  const baseUrl = process.env.KOBO_BASEURL;

  const client = new koboClient(baseUrl, user, pass);

  const token = await client.getToken();

  res.send(`token: ${token}`);
};
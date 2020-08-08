const authMiddleware = ({ koboClient }) => {
  return {
    authenticate: async (req, res, next) => {
      const token = await koboClient.getToken();

      req.koboToken = token;

      next();
    }
  };
};

export default authMiddleware;
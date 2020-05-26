import Axios from "axios";

const koboClient = ({ config }) => {
  return {
    getToken: async () => {
      const { data } = await Axios.get(`${config.koboBaseUrl}/token/?format=json`, {
        auth: {
          username: config.koboUser,
          password: config.koboPassword
        }
      }).catch(err => {
        console.log(err);
      });

      return data.token;
    }
  };
};

export default koboClient;
import Axios from "axios";

const koboClient = ({ config }) => {
  return {
    getToken: async () => {
      try {
        const { data } = await Axios.get(`${config.koboBaseUrl}/token/?format=json`, {
          auth: {
            username: config.koboUser,
            password: config.koboPassword
          }
        });

        return data.token;
      }
      catch {
        console.log(err);
      }
    }
  };
};

export default koboClient;
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
      catch (error) {
        console.log(error);
      }
    },

    getAssets: async (token) => {
      try {
        const { data } = await Axios.get(
          `${config.koboBaseUrl}/api/v2/assets/?format=json`,
          {
            headers: {'Authorization': `Token ${token}`
          }
        });

        return data;
      }
      catch (error) {
        console.log(error);
      }
    }

  };
};

export default koboClient;
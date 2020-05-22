import Axios from "axios";

const koboClient = ({ koboUser, koboPassword, koboBaseUrl }) => {
  return {
    getToken: async () => {
      const { data } = await Axios.get(`${koboBaseUrl}/token/?format=json`, {
        auth: {
          username: koboUser,
          password: koboPassword
        }
      }).catch(err => {
        console.log(err);
      });

      return data.token;
    }
  };
};

export default koboClient;
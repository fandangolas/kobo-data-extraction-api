import Axios from "axios";

const koboClient = (baseUrl, user, pass) => {
  return {
    getToken: async () => {
      const { data } = await Axios.get(`${baseUrl}/token/?format=json`, {
        auth: {
          username: user,
          password: pass
        }
      }).catch(err => {
        console.log(err);
      });

      console.log(data);

      return data.token;
    }
  };
};

export default koboClient;
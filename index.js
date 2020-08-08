import configureContainer from "./src/app/configureContainer";

const container = configureContainer();
const app = container.resolve('app');

(async () => {
  try {
    await app.start();
  }

  catch (error) {
    console.log(error);
    process.exit();
  }

})();

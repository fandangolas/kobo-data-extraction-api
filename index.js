import configureContainer from "./src/app/configureContainer";

const container = configureContainer();
const app = container.resolve('app');

app
  .start()
  .catch((error) => {
    console.log(error);
    process.exit();
  });
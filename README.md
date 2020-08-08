# Kobo Data Extraction Api

[In development]

This project aims to extract data from KoBoToolbox and persist
at MongoDb for future uses and visualisation of the data.

In the future, it will also be constructed a front-end
application where you can use kobo-data-extraction-api
to find what projects from KoboCollect aren't in the database yet
and you can download or persist then.

# How to use

1. Clone the git repository to your machine.
2. Run a `npm install` command.
3. Create a .env file based on .env.example and configure the environment variables accordingly to your credentials at Kobo Api and Mongo Atlas.
4. Run the `npm start` script.

# Features

* List all the assets with their respective identifier (uid).

* Extract assets and their respective data using asset's identifier from KoboToolBox API and persist in MongoDB Atlas.

# Available endpoints

* (GET) List all the assets - `/kobo/assets`

* (POST) Persist an specific asset - `/kobo/assets/{uid}`

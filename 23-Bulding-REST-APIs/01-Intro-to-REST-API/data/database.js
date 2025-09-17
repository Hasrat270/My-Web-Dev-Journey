const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let database;

async function initDb() {
  const client = await MongoClient.connect("mongodb://localhost:27017");
  database = client.db("quotes-db");
}

function getDb() {
  if (!database) {
    throw new Errpr("Database not initialized");
  }
  return database;
}

module.exports = {
  initDb: initDb,
  getDb: getDb,
};

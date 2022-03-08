const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

var database;
async function connect() {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017/");
    database = client.db("todoAPI");
  } catch (err) {
    console.log(err);
    throw { Message: "Mongo Service is Not working" };
  }
}

function getDb() {
  if (!database) {
    throw { message: "Database Connection is not established yet" };
  }
  console.log("Database Connected");
  return database;
}

module.exports = {
  connectToDatabase: connect,
  getDb: getDb,
};

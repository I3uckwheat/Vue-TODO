// Load environment variables before anything
require('dotenv').config({
  path: '.env'
});

// Establish DB connection before starting application
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000
});

mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(err.message);
})

const app = require('./app');
const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`Express running -> PORT ${server.address().port}`);
});
const app = require('./app');
const port = 3000;

const server = app.listen(port, () => {
  console.log(`Express running -> PORT ${server.address().port}`);
});
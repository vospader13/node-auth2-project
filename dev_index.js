require("dotenv").config()
const server = require('./server.js');

const PORT = process.env.PORT || 3010;

server.listen(PORT, () => {
  console.log(`API is istening on port ${PORT}...`);
});
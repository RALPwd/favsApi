const { server } = require("./app");

const port = process.env.PORT || 65535;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;

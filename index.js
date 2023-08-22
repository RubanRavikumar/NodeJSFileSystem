// run `node index.js` in the terminal
// STEP 1: IMPORT ALL NECESSARY PACKAGES
const express = require("express");
const HTTP_SERVER = express();
const cors = require("cors");
var bodyParser = require('body-parser')

HTTP_SERVER.use(cors());

// parse application/x-www-form-urlencoded
HTTP_SERVER.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
HTTP_SERVER.use(bodyParser.json())

// BASIC SERVER CONFIGS
const PORT = 5000;

HTTP_SERVER.listen(PORT, "0.0.0.0", (err) => {
  if (err) throw err;
  console.log(`SERVER STARTED IN THE PORT ${PORT}`);
});

// INJECTING API SERVER
HTTP_SERVER.use("/", require("./app"));

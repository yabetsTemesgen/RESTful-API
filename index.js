const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/api", routes);
const dbo = require("./database/connection");
app.listen(3000, () => {
  dbo.connectToServer(function (err) {
    if (err) console.log(err);
  });
  console.log(`Server is running on port: ${port}`);
});

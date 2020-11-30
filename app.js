//load env global
require("./config/env.config");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const compression = require("compression");

const app = express();
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// map routers
app.use("/api", require("./routers"));

app.listen(process.env.PORT, () => {
  console.log(`[Server] Server listion PORT: ${process.env.PORT}`);
});

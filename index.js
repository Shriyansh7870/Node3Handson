const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("All the routes.");
  next();
});

const specificMiddleware = (req, res, next) => {
  console.log(" specific routes.");
  next();
};

app.get("/route1", specificMiddleware, (req, res) => {
  res.send("Route1 is sowing");
});

app.get("/route2", specificMiddleware, (req, res) => {
  res.send("Route2 is swoing");
});

app.get("/", (req, res) => {
  res.send("Default Route is coming");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

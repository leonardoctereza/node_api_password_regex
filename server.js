const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const passwordRoutes = require("./src/routes/password");
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("API OK");
});

app.use("/password", passwordRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(port, function () {
  console.log(`Listening http://localhost:${port}`);
});

module.exports = app;

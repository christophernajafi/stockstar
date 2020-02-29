const express = require("express");
// const connectDB = require("./config/db");
const path = require("path");
const app = express();

// Connect database
// connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define routes
// app.use("/api/users", require("./routes/users"));
// app.use("/api/auth", require("./routes/auth"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  // app.use(express.static("client/build"));
  // app.get("*", (req, res) =>
  //   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  // );

  app.use(express.static(path.join(__dirname, "build")));

  // -app.get('/', function (req, res) {
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("############################################");
  console.log(`-------- Server started on port ${PORT} -------`);
  console.log(`---------- http://localhost:${PORT} -----------`);
  console.log("############################################");
});

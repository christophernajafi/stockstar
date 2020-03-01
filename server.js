const path = require("path");
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./db");
const sessionStore = new SequelizeStore({
  db
});
const bodyParser = require("body-parser");
const app = express();
const { findById } = require("./utils/users");
module.exports = app;

// passport.serializeUser((user, done) => done(null, user.id));

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await findById(id);
//     done(null, user);
//   } catch (err) {
//     done(err);
//   }
// });

// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json({ extended: false }));
// app.use(express.urlencoded({ extended: true }));

// app.use(morgan("dev"));

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || "Fidelio",
//     store: sessionStore,
//     resave: false,
//     saveUninitialized: false,
//     proxy: true
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.use("/api", require("./api"));

// app.use((req, res, next) => {
//   if (path.extname(req.path).length) {
//     const err = new Error("Not found");
//     err.status = 404;
//     next(err);
//   } else {
//     next();
//   }
// });

// app.use((err, req, res, next) => {
//   console.error(err);
//   console.error(err.stack);
//   res.status(err.status || 500).send(err.message || "Internal server error.");
// });

// sessionStore.sync();
// db.sync();

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("############################################");
  console.log(`-------- Server started on port ${PORT} -------`);
  console.log(`---------- http://localhost:${PORT} -----------`);
  console.log("############################################");
});

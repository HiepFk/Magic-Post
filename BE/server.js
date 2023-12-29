const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieSession = require("cookie-session");

const dbConfig = require("./config/db.config");
//const cookieSession = require("cookie-session");

const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.route");
const orderRoute = require("./routes/order.route");
const gatheringLocationRoute = require("./routes/gatheringLocation.route");
// const transactionLocationRoute = require("./routes/transactionLocation.route");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(morgan("common"));

app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "be-session",
    keys: ["COOKIE_SECRET"],
    httpOnly: true,
  })
);

const db = require("./models");
const Role = db.role;
//db.sequelize.sync();

db.mongoose
  .connect(`${dbConfig.DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    //initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route

// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/gatheringLocation", gatheringLocationRoute);
// app.use("/api/v1/transactionLocation", transactionLocationRoute);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// function initial() {
//     Role.create({
//         id: 1,
//         name: "user",
//     });

//     Role.create({
//         id: 2,
//         name: "staffGather",
//     });

//     Role.create({
//         id: 3,
//         name: "managerGather",
//     });
//   Role.create({
//     id: 4,
//     name: "staffTrans",
//   });

//   Role.create({
//     id: 5,
//     name: "managerTrans",
//   });

//   Role.create({
//     id: 6,
//     name: "admin",
//   });
// }

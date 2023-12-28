const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models/index.js");
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  //let token = req.session.token;

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    //???
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find(
      {
        _id: {
          $in: user.roles,
        },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        if (roles[0].name === "admin") {
          next();
          return;
        }

        res.status(403).send({ message: "Require Admin Role!" });
        return;
      }
    );
  });
};

isManagerTrans = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        if (roles.name === "managerTrans") {
          next();
          return;
        }

        res.status(403).send({ message: "Require ManagerTrans Role!" });
        return;
      }
    );
  });
};

isStaffTrans = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        if (roles[i].name === "staffTrans") {
          next();
          return;
        }

        res.status(403).send({ message: "Require StaffTrans Role!" });
        return;
      }
    );
  });
};

isManagerGather = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        if (roles[0].name === "managerGather") {
          next();
          return;
        }

        res.status(403).send({ message: "Require ManagerGather Role!" });
        return;
      }
    );
  });
};

isUser = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        if (roles.name === "user") {
          next();
          return;
        }

        res.status(403).send({ message: "Require User Role!" });
        return;
      }
    );
  });
};

isStaffGather = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        if (roles.name === "staffGather") {
          next();
          return;
        }

        res.status(403).send({ message: "Require staffGather Role!" });
        return;
      }
    );
  });
};

restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role.name)) {
      res.status(403).json({
        status: "error",
        message: "You do not have permission to perform this action",
      });
      return;
    }
    next();
  };
};

isAuthenticatedUser = async (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  const decoded = jwt.verify(token, config.secret);
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  req.user = currentUser;
  next();
};

const authJWT = {
  verifyToken,
  isAdmin,
  isManagerTrans,
  isStaffTrans,
  isManagerGather,
  isStaffGather,
  isUser,
  restrictTo,
  isAuthenticatedUser,
};

module.exports = authJWT;

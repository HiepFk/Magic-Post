const { authJWT } = require("../middlewares");
const controlTrans = require("../controllers/transactionLocation.controller");
const router = require("express").Router();

router.use(
  authJWT.isAuthenticatedUser,
  authJWT.restrictTo("admin", "managerGather")
);

router
  .route("/")
  .get(controlTrans.showAllTransLoca)
  .delete(controlTrans.deleteAll);

router.route("/").post(controlTrans.createTransactionLocation);
router
  .route("/:id")
  .get(controlTrans.findOneTrans)
  .patch(controlTrans.updateTrans)
  .delete(controlTrans.deleteTrans);

module.exports = router;

// module.exports = function (app) {
//   app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Header", "Origin, Content-Type, Accept");
//     next();
//   });

//   app.use(
//     authJWT.isAuthenticatedUser,
//     authJWT.restrictTo("admin", "managerGather")
//   );

//   app.get("/api/transLoca/showAlTrans/", controlTrans.showAllTransLoca);

//   // app.post(
//   //   "/api/transLoca/createTransLoca",
//   //   [authJWT.verifyToken, authJWT.isAdmin, authJWT.isManagerGather],
//   //   controlTrans.createTransactionLocation
//   // );
//   // app.get(
//   //   "/api/transLoca/showAlTrans/",
//   //   [authJWT.verifyToken, authJWT.isAdmin, authJWT.isManagerGather],
//   //   controlTrans.showAllTransLoca
//   // );

//   // app.get(
//   //   "/api/transLoca/findOne/:_id",
//   //   [authJWT.verifyToken, authJWT.isAdmin, authJWT.isManagerGather],
//   //   controlTrans.findOneTrans
//   // );

//   // app.delete(
//   //   "/api/transLoca/deleteAll/",
//   //   [authJWT.verifyToken, authJWT.isAdmin, authJWT.isManagerGather],
//   //   controlTrans.deleteAll
//   // );

//   // app.delete(
//   //   "/api/transLoca/deleteOne/:_id",
//   //   [authJWT.verifyToken, authJWT.isAdmin, authJWT.isManagerGather],
//   //   controlTrans.deleteTrans
//   // );

//   // app.put(
//   //   "/api/transLoca/update/:_id",
//   //   [authJWT.verifyToken, authJWT.isAdmin, authJWT.isManagerGather],
//   //   controlTrans.updateTrans
//   // );
// };

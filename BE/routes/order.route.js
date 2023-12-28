const authJwt = require("../middlewares");
const controlOrder = require("../controllers/order.controller");
const router = require("express").Router();

router.route("/createOrderOrigin").post(controlOrder.createOrderOrigin);

router.route("/createOrderTransS").post(controlOrder.createOrderTransS);

// router.route("/createOrderGatherF").post(controlOrder.createOrderGatherF);
// router.route("/createOrderTransF").post(controlOrder.createOrderTransF);

router.route("/findOneOrder").get(controlOrder.findOneOrder);

router.route("/findAllOrderGatherS").get(controlOrder.findAllOrderGatherS);

router.route("/findAllOrderGatherF").get(controlOrder.findAllOrderGatherF);

router.route("/findAllOrderTransF").get(controlOrder.findAllOrderTransF);

router.route("/countOrderTransFail").get(controlOrder.countOrderTransFail);

router
  .route("/countOrderTransSuccessCostomer")
  .get(controlOrder.countOrderTransSuccessCostomer);

router
  .route("/countOrderTransSuccessGatherNext")
  .get(controlOrder.countOrderTransSuccessGatherNext);

router.route("/countOrderReceive").get(controlOrder.countOrderReceive);

router.route("/updateOrder").put(controlOrder.updateOrder);

module.exports = router;

// module.exports = function (app) {
//   app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Header", "Origin, Content-Type, Accept");
//     next();
//   });
//   app.post("/api/order/createOrderOrigin", controlOrder.createOrderOrigin);
//   app.post("/api/order/createOrderTransS", controlOrder.createOrderTransS);

//   // app.post("/api/order/createOrderGatherF", controlOrder.createOrderToGatherF);
//   // app.post("/api/order/createOrderTransF", controlOrder.createOrderToTransF);

//   app.get("/api/order/findOneOrder", controlOrder.findOneOrder);
//   app.get("/api/order/findAllOrderGatherS", controlOrder.findAllOrderGatherS);
//   app.get("/api/order/findAllOrderGatherF", controlOrder.findAllOrderGatherF);
//   app.get("/api/order/findAllOrderTransF", controlOrder.findAllOrderTransF);
//   app.get("/api/order/countOrderTransFail", controlOrder.countOrderTransFail);
//   app.get(
//     "/api/order/countOrderTransSuccessCostomer",
//     controlOrder.countOrderTransSuccessCostomer
//   );
//   app.get(
//     "/api/order/countOrderTransSuccessGatherNext",
//     controlOrder.countOrderTransSuccessGatherNext
//   );
//   app.get("/api/order/countOrderReceive", controlOrder.countOrderReceive);

//   //Update status order.
//   app.put("/api/order/updateOrder", controlOrder.updateOrder);
// };

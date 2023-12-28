const mongoose = require("mongoose");

const GatheringLocationSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  nameGather: String,
  phone: String,
  email: String,
  address: String,
  //count orders, which orders are received
  countOrderReceived: Number,
  //count orders,
  countOrderSend: Number,
  //
  managerGather: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

GatheringLocationSchema.pre(/^find/, function (next) {
  this.populate({
    path: "managerGather",
    select: "username",
  });
  next();
});

const GatheringLocation = mongoose.model(
  "GatheringLocation",
  GatheringLocationSchema
);
module.exports = GatheringLocation;

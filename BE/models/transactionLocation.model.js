const mongoose = require("mongoose");

const TransactionLocationSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  nameTrans: String,
  phone: String,
  email: String,
  address: String,
  //count order, which user receive
  countOrderS: Number,
  //count order, which user don't receive, does this case exist??
  //count order, which transaction cf
  countOrderT: Number,
  //cont order, which transaction doesn't cf
  countOrderF: Number,
  //ten cua truong diem giao dich
  managerTrans: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  //
  gatherLocation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GatheringLocation",
  },
});

TransactionLocationSchema.pre(/^find/, function (next) {
  this.populate({
    path: "gatherLocation",
    select: "nameGather",
  }).populate({
    path: "managerTrans",
    select: "name",
  });
  next();
});

const TransactionLocation = mongoose.model(
  "TransactionLocation",
  TransactionLocationSchema
);

module.exports = TransactionLocation;

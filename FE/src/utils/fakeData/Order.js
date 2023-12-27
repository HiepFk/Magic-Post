export const OrderStatus = {
  // New order
  new: "NEW",
  toStartGatherLocal: "TO_START_GATHER_LOCAL",
  atStartGatherLocal: "AT_START_GATHER_LOCAL",
  toEndGatherLocal: "TO_END_GATHER_LOCAL",
  atEndGatherLocal: "AT_END_GATHER_LOCAL",
  toTransacLocal: "TO_END_TRANSAC_LOCAL",
  atTransacLocal: "AT_END_TRANSAC_LOCAL",
  toCustomer: "TO_CUSTOMER",
  ok: "OK",
  // Deliver failed
  deliverFailed: "DELIVER_FAILED",
  returnEndTransacLocal: "TO_RETURN_END_TRANSAC_LOCAL",
  atReturnedEndTransacLocal: "AT_RETURNED_END_TRANSAC_LOCAL",
  returnEndGatherLocal: "TO_RETURN_END_GATHER_LOCAL",
  atReturnedEndGatherLocal: "AT_RETURNED_END_GATHER_LOCAL",
  returnStartGatherLocal: "TO_RETURN_START_GATHER_LOCAL",
  atReturnedStartGatherLocal: "AT_RETURNED_START_GATHER_LOCAL",
  returnStartTransacLocal: "TO_RETURN_START_TRANSAC_LOCAL",
  atReturnedStartTransacLocal: "AT_RETURNED_START_TRANSAC_LOCAL",
  returnGiver: "TO_RETURN_GIVER",
  atReturnedGiver: "AT_RETURNED_GIVER",
};

export const orders = [
  {
    idOrder: 1,
    name: "Order Name 1",
    title: "Order Title 1",
    addressIfR: "Address of receiver",
    addressIfS: "Address of giver",
    transLocalStart: "Transaction location start",
    transLocalEnd: "Transaction location end",
    gatherLocaStart: "Gather location Start",
    gatherLocaEnd: "Gather location End",
    timeTransStart: null,
    timeTransEnd: null,
    timeGatherStart: null,
    timeGatherEnd: null,
    typeOrder: "Tài liệu",
    contentValue: "Content Value",
    weight: "3.4",
    size: "30x40",
    specialServer: "Special Service",
    price: 15000,
    paid: false,
    isDeliveSuccess: false,
    status: OrderStatus.new,
    giverName: "Dao Thu Hang 1",
    giverPhone: "0123456789",
    receiverName: "Dao Thu Hang 2",
    receiverPhone: "0987654321",
    transacStaffName: "Hehe",
  },
  {
    idOrder: 2,
    name: "Order Name 2",
    title: "Order Title 2",
    addressIfR: "Address of receiver",
    addressIfS: "Address of giver",
    transLocalStart: "Transaction location start",
    transLocalEnd: "Transaction location end",
    gatherLocaStart: "Gather location Start",
    gatherLocaEnd: "Gather location End",
    timeTransStart: new Date("2023-12-18 7:00"),
    timeTransEnd: null,
    timeGatherStart: null,
    timeGatherEnd: null,
    typeOrder: "Tài liệu",
    contentValue: "Content Value",
    weight: "3.4",
    size: "30x40",
    specialServer: "Special Service",
    price: 15000,
    paid: false,
    isDeliveSuccess: false,
    status: OrderStatus.toStartGatherLocal,
    giverName: "Dao Thu Hang 1",
    giverPhone: "0123456789",
    receiverName: "Dao Thu Hang 2",
    receiverPhone: "0987654321",
  },
  {
    idOrder: 3,
    name: "Order Name 3",
    title: "Order Title 3",
    addressIfR: "Address of receiver",
    addressIfS: "Address of giver",
    transLocalStart: "Transaction location start",
    transLocalEnd: "Transaction location end",
    gatherLocaStart: "Gather location Start",
    gatherLocaEnd: "Gather location End",
    timeTransStart: new Date("2023-12-18 7:00"),
    timeTransEnd: null,
    timeGatherStart: new Date("2023-12-18 10:00"),
    timeGatherEnd: null,
    typeOrder: "Tài liệu",
    contentValue: "Content Value",
    weight: "3.4",
    size: "30x40",
    specialServer: "Special Service",
    price: 15000,
    paid: false,
    isDeliveSuccess: false,
    status: OrderStatus.atStartGatherLocal,
    giverName: "Dao Thu Hang 1",
    giverPhone: "0123456789",
    receiverName: "Dao Thu Hang 2",
    receiverPhone: "0987654321",
  },
  {
    idOrder: 4,
    name: "Order Name 4",
    title: "Order Title 4",
    addressIfR: "Address of receiver",
    addressIfS: "Address of giver",
    transLocalStart: "Transaction location start",
    transLocalEnd: "Transaction location end",
    gatherLocaStart: "Gather location Start",
    gatherLocaEnd: "Gather location End",
    timeTransStart: new Date("2023-12-18 7:00"),
    timeTransEnd: null,
    timeGatherStart: new Date("2023-12-18 10:00"),
    timeGatherEnd: null,
    typeOrder: "Tài liệu",
    contentValue: "Content Value",
    weight: "3.4",
    size: "30x40",
    specialServer: "Special Service",
    price: 15000,
    paid: false,
    isDeliveSuccess: false,
    status: OrderStatus.toEndGatherLocal,
    giverName: "Dao Thu Hang 1",
    giverPhone: "0123456789",
    receiverName: "Dao Thu Hang 2",
    receiverPhone: "0987654321",
  },
  {
    idOrder: 5,
    name: "Order Name 5",
    title: "Order Title 5",
    addressIfR: "Address of receiver",
    addressIfS: "Address of giver",
    transLocalStart: "Transaction location start",
    transLocalEnd: "Transaction location end",
    gatherLocaStart: "Gather location Start",
    gatherLocaEnd: "Gather location End",
    timeTransStart: new Date("2023-12-18 7:00"),
    timeTransEnd: null,
    timeGatherStart: new Date("2023-12-18 10:00"),
    timeGatherEnd: null,
    typeOrder: "Tài liệu",
    contentValue: "Content Value",
    weight: "3.4",
    size: "30x40",
    specialServer: "Special Service",
    price: 15000,
    paid: false,
    isDeliveSuccess: false,
    status: OrderStatus.atEndGatherLocal,
    giverName: "Dao Thu Hang 1",
    giverPhone: "0123456789",
    receiverName: "Dao Thu Hang 2",
    receiverPhone: "0987654321",
  },
  {
    idOrder: 6,
    name: "Order Name 6",
    title: "Order Title 6",
    addressIfR: "Address of receiver",
    addressIfS: "Address of giver",
    transLocalStart: "Transaction location start",
    transLocalEnd: "Transaction location end",
    gatherLocaStart: "Gather location Start",
    gatherLocaEnd: "Gather location End",
    timeTransStart: new Date("2023-12-18 7:00"),
    timeTransEnd: null,
    timeGatherStart: new Date("2023-12-18 10:00"),
    timeGatherEnd: null,
    typeOrder: "Tài liệu",
    contentValue: "Content Value",
    weight: "3.4",
    size: "30x40",
    specialServer: "Special Service",
    price: 15000,
    paid: false,
    isDeliveSuccess: false,
    status: OrderStatus.toTransacLocal,
    giverName: "Dao Thu Hang 1",
    giverPhone: "0123456789",
    receiverName: "Dao Thu Hang 2",
    receiverPhone: "0987654321",
  },
  {
    idOrder: 7,
    name: "Order Name 7",
    title: "Order Title 7",
    addressIfR: "Address of receiver",
    addressIfS: "Address of giver",
    transLocalStart: "Transaction location start",
    transLocalEnd: "Transaction location end",
    gatherLocaStart: "Gather location Start",
    gatherLocaEnd: "Gather location End",
    timeTransStart: new Date("2023-12-18 7:00"),
    timeTransEnd: null,
    timeGatherStart: new Date("2023-12-18 10:00"),
    timeGatherEnd: null,
    typeOrder: "Tài liệu",
    contentValue: "Content Value",
    weight: "3.4",
    size: "30x40",
    specialServer: "Special Service",
    price: 15000,
    paid: false,
    isDeliveSuccess: false,
    status: OrderStatus.atTransacLocal,
    giverName: "Dao Thu Hang 1",
    giverPhone: "0123456789",
    receiverName: "Dao Thu Hang 2",
    receiverPhone: "0987654321",
  },
  {
    idOrder: 8,
    name: "Order Name 8",
    title: "Order Title 8",
    addressIfR: "Address of receiver",
    addressIfS: "Address of giver",
    transLocalStart: "Transaction location start",
    transLocalEnd: "Transaction location end",
    gatherLocaStart: "Gather location Start",
    gatherLocaEnd: "Gather location End",
    timeTransStart: new Date("2023-12-18 7:00"),
    timeTransEnd: null,
    timeGatherStart: new Date("2023-12-18 10:00"),
    timeGatherEnd: null,
    typeOrder: "Tài liệu",
    contentValue: "Content Value",
    weight: "3.4",
    size: "30x40",
    specialServer: "Special Service",
    price: 15000,
    paid: false,
    isDeliveSuccess: false,
    status: OrderStatus.toCustomer,
    giverName: "Dao Thu Hang 1",
    giverPhone: "0123456789",
    receiverName: "Dao Thu Hang 2",
    receiverPhone: "0987654321",
  },
  {
    idOrder: 9,
    name: "Order Name 9",
    title: "Order Title 9",
    addressIfR: "Address of receiver",
    addressIfS: "Address of giver",
    transLocalStart: "Transaction location start",
    transLocalEnd: "Transaction location end",
    gatherLocaStart: "Gather location Start",
    gatherLocaEnd: "Gather location End",
    timeTransStart: new Date("2023-12-18 7:00"),
    timeTransEnd: null,
    timeGatherStart: new Date("2023-12-18 10:00"),
    timeGatherEnd: null,
    typeOrder: "Tài liệu",
    contentValue: "Content Value",
    weight: "3.4",
    size: "30x40",
    specialServer: "Special Service",
    price: 15000,
    paid: false,
    isDeliveSuccess: false,
    status: OrderStatus.ok,
    giverName: "Dao Thu Hang 1",
    giverPhone: "0123456789",
    receiverName: "Dao Thu Hang 2",
    receiverPhone: "0987654321",
  },
];
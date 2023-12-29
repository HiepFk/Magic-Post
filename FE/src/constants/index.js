import { OrderStatus } from "../utils/fakeData/Order";

const MenuItemKey = {
  signIn: "sign-in",
  signOut: "sign-out",
  profile: "profile",
};

const Role = {
  owner: "admin",
  managerGather: "managerGather",
  staffGather: "staffGather",
  managerTrans: "managerTrans",
  staffTrans: "staffTrans",
  user: "user",
};

const RoleName = {
  [Role.owner]: "Chủ công ty",
  [Role.managerGather]: "Trưởng điểm tập kết",
  [Role.managerTrans]: "Trưởng điểm giao dịch",
  [Role.staffTrans]: "Giao dịch viên",
  [Role.staffGather]: "Tập kết viên",
  [Role.user]: "Người dùng",
};

const AdminMenuItems = [
  {
    key: "diem-tap-ket",
    label: "Điểm tập kết",
  },
  {
    key: "diem-giao-dich",
    label: "Điểm giao dịch",
  },
  {
    key: "tai-khoan",
    label: "Tài khoản",
  },
  {
    key: "thong-ke",
    label: "Thống kê",
  },
];

const ManagerTransMenuItems = [
  {
    key: "giao-dich-vien",
    label: "Giao dịch viên",
  },
  {
    key: "thong-ke",
    label: "Thống kê",
  },
];

const TellerMenuItems = [
  {
    key: "don-hang",
    label: "Đơn hàng",
  },
  {
    key: "thong-ke",
    label: "Thống kê",
  },
];

const ManagerGatherMenuItems = [
  {
    key: "tap-ket-vien",
    label: "Tập kết viên",
  },
  {
    key: "thong-ke",
    label: "Thống kê",
  },
];

const StaffGatherMenuItems = [
  {
    key: "don-hang",
    label: "Đơn hàng",
  },
  {
    key: "thong-ke",
    label: "Thống kê",
  },
];

const UserMenuItems = [
  {
    key: "don-dang-giao",
    label: "Đơn đang giao",
  },
  {
    key: "don-da-nhan",
    label: "Đơn đã nhận",
  },
];

const OrderFromThisStepsItems = [
  {
    title: "Mới",
    orderStatus: OrderStatus.new,
  },
  {
    title: "Đang gửi đến điểm tập kết",
    orderStatus: OrderStatus.toStartGatherLocal,
  },
  {
    title: "Đã được nhận",
    orderStatus: OrderStatus.atStartGatherLocal,
  },
];

const OrderUserTimeLine = [
  {
    title: "Đơn hàng vừa gửi",
    orderStatus: OrderStatus.new,
  },
  {
    title: "Đơn hàng ở điểm giao dịch",
    orderStatus: OrderStatus.atStartGatherLocal,
  },
  {
    title: "Đơn hàng ở điểm tập kết",
    orderStatus: OrderStatus.atEndGatherLocal,
  },
  {
    title: "Đơn hàng đã hoàn thành",
    orderStatus: OrderStatus.toCustomer,
  },
];

const OrderToThisStepsItems = [
  {
    title: "Đang đến",
    orderStatus: OrderStatus.toTransacLocal,
  },
  {
    title: "Đã đến",
    orderStatus: OrderStatus.atTransacLocal,
  },
  {
    title: "Đang gửi đến khách hàng",
    orderStatus: OrderStatus.toCustomer,
  },
  {
    title: "Giao thành công",
    orderStatus: OrderStatus.ok,
  },
];

const DeliverFailedOrderStepsItems = [
  {
    title: "Giao thất bại",
    orderStatus: OrderStatus.deliverFailed,
  },
  {
    title: "Đang trả về điểm tập kết",
    orderStatus: OrderStatus.returnEndGatherLocal,
  },
  {
    title: "Đã được trả về",
    orderStatus: OrderStatus.atReturnedEndGatherLocal,
  },
];

const ReturnOrderStepsItems = [
  {
    title: "Đang giao hoàn từ điểm tập kết",
    orderStatus: OrderStatus.returnStartTransacLocal,
  },
  {
    title: "Đã đến",
    orderStatus: OrderStatus.atReturnedStartTransacLocal,
  },
  {
    title: "Đang giao hoàn đến khách hàng",
    orderStatus: OrderStatus.returnGiver,
  },
  {
    title: "Đã giao hoàn",
    orderStatus: OrderStatus.atReturnedGiver,
  },
];

const OrderTabs = [
  {
    key: "don-hang-moi",
    label: "Đơn hàng mới",
  },
  {
    key: "don-hang-den",
    label: "Đơn hàng đến",
  },
  {
    key: "don-hang-that-bai",
    label: "Đơn hàng giao thất bại",
  },
  {
    key: "don-hang-giao-hoan",
    label: "Đơn hàng giao hoàn",
  },
];

export {
  MenuItemKey,
  Role,
  AdminMenuItems,
  UserMenuItems,
  RoleName,
  ManagerTransMenuItems,
  TellerMenuItems,
  OrderFromThisStepsItems,
  OrderToThisStepsItems,
  OrderTabs,
  DeliverFailedOrderStepsItems,
  ReturnOrderStepsItems,
  OrderUserTimeLine,
  StaffGatherMenuItems,
  ManagerGatherMenuItems
};

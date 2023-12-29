import instance from "../config/axios";

const url = "/v1/order";

const createOrderOrigin = (data) => {
  return instance.post(`${url}/createOrderOrigin`, data);
};

const updateOrder = (id, data) => {
  return instance.patch(`${url}/${id}`, data);
};

const getOrders = (keyword) => {
  return instance.get(url, {
    params: {
      keyword,
    },
  });
};

const getOrderByStatus = (status, keyword) => {
  return instance.get(`${url}/getOrderByStatus/${status}`);
};
const getOrderById = (id) => {
  return instance.get(`${url}/${id}`);
};

const deleteOrderById = (id) => {
  return instance.delete(`${url}/${id}`);
};

const OrderService = {
  createOrderOrigin,
  updateOrder,
  getOrders,
  getOrderById,
  deleteOrderById,
  getOrderByStatus,
};

export default OrderService;

import instance from "../config/axios";

const url = "/v1/transactionLocation";

function createTransLocal(data) {
  return instance.post(url, data);
}

function updateTransLocal(id, data) {
  return instance.put(`${url}/${id}`, data);
}

function getTransLocals(keyword) {
  return instance.get(url, {
    params: {
      keyword,
    },
  });
}

function getTransLocalById(id) {
  return instance.get(`${url}/${id}`);
}

function deleteTransLocalById(id) {
  return instance.delete(`${url}/${id}`);
}

export {
  createTransLocal,
  getTransLocals,
  updateTransLocal,
  getTransLocalById,
  deleteTransLocalById,
};

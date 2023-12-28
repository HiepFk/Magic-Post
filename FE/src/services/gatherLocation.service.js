import instance from "../config/axios";

const url = "/v1/gatheringLocation";

function createGatherLocation(data) {
  return instance.post(url, data);
}

function updateGatherLocation(id, data) {
  return instance.patch(`${url}/${id}`, data);
}

function getGatherLocations(keyword) {
  return instance.get(url, {
    params: {
      keyword,
    },
  });
}

// Search by Id?
function getGatherLocationById(id) {
  return instance.get(`${url}/${id}`);
}

function deleteGatherLocationById(id) {
  return instance.delete(`${url}/${id}`);
}

// Search by Keyword?
function getGatherLocationsByKeyword(id) {
  return instance.get(`${url}/${id}`);
}

export {
  createGatherLocation,
  getGatherLocations,
  updateGatherLocation,
  getGatherLocationById,
  deleteGatherLocationById,
  getGatherLocationsByKeyword,
};

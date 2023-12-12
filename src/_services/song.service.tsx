import { fetchWrapper } from "@/_helpers";

export const songService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

function getAll(signal?: AbortSignal) {
  return fetchWrapper.get(`/songs`, signal);
}

function getById(id: number, signal?: AbortSignal) {
  return fetchWrapper.get(`/songs/${id}`, signal);
}

function create(params: any, signal?: AbortSignal) {
  return fetchWrapper.post(`/songs`, params, signal);
}

function update(id: number, params: any, signal?: AbortSignal) {
  return fetchWrapper.patch(`/songs/${id}`, params, signal);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id: number, signal?: AbortSignal) {
  return fetchWrapper.delete(`/songs/${id}`, signal);
}

import { fetchWrapper } from "@/_helpers";

export const userService = {
  register,
  login,
  getLoggedUser,
  getAll,
  getById,
  update,
  delete: _delete,
};

function register(params: any, signal?: AbortSignal) {
  return fetchWrapper.post(`/Users/Register`, params, signal);
}
function login(params: any, signal?: AbortSignal) {
  return fetchWrapper.post(`/Users/Login`, params, signal);
}
function getLoggedUser(params: any, signal?: AbortSignal) {
  return fetchWrapper.post(`/Users/Login`, params, signal);
}

function getAll(signal?: AbortSignal) {
  return fetchWrapper.get(`/Users`, signal);
}

function getById(id: number, signal?: AbortSignal) {
  return fetchWrapper.get(`/Users/${id}`, signal);
}

function update(id: number, params: any, signal?: AbortSignal) {
  return fetchWrapper.patch(`/Users/${id}`, params, signal);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id: number, signal?: AbortSignal) {
  return fetchWrapper.delete(`/Users/${id}`, signal);
}

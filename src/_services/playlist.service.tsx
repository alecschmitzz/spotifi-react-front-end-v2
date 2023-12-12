import { fetchWrapper } from "@/_helpers";

export const playlistService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

function getAll(signal?: AbortSignal) {
  return fetchWrapper.get(`/playlists`, signal);
}

function getById(id: string, includeSongs?: boolean, signal?: AbortSignal) {
  const url = includeSongs
    ? `/playlists/${id}?includeSongs=true`
    : `/playlists/${id}`;
  return fetchWrapper.get(url, signal);
}

function create(params: any, signal?: AbortSignal) {
  return fetchWrapper.post(`/playlists`, params, signal);
}

function update(id: string, params: any, signal?: AbortSignal) {
  return fetchWrapper.patch(`/playlists/${id}`, params, signal);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id: string, signal?: AbortSignal) {
  return fetchWrapper.delete(`/playlists/${id}`, signal);
}

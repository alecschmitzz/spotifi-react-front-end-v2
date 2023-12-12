import { AxiosResponse } from "axios";
import axios from "./axios";

export const fetchWrapper = {
  get,
  post,
  put,
  patch,
  delete: _delete,
};

async function get(url: string | URL, signal?: AbortSignal) {
  try {
    const response = await axios.get(url.toString(), {
      signal,
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

async function post(url: string | URL, body: any, signal?: AbortSignal) {
  try {
    const response = await axios.post(url.toString(), body, {
      headers: { "Content-Type": "multipart/form-data" },
      signal,
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

async function put(url: string | URL, body: any, signal?: AbortSignal) {
  try {
    const response = await axios.put(url.toString(), body, {
      headers: { "Content-Type": "application/json" },
      signal,
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

async function patch(url: string | URL, body: any, signal?: AbortSignal) {
  try {
    const response = await axios.patch(url.toString(), body, {
      headers: { "Content-Type": "application/json" },
      signal,
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

async function _delete(url: string | URL, signal?: AbortSignal) {
  try {
    const response = await axios.delete(url.toString(), {
      signal,
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

function handleResponse(response: AxiosResponse) {
  return response.data;
}

function handleError(error: any) {
  return Promise.reject(error);
}

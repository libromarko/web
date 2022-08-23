import axios from "axios";
import { authHeader } from "../store/helpers";

const baseUrl = process.env.REACT_APP_API_URL;

export const useApi = (token) => {
  const auth = authHeader();
  const defaultHeader = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...auth,
  };

  const customFetch = ({
    endpoint,
    method = "GET",
    body = {},
    headers = defaultHeader,
  }) => {
    const url = `${baseUrl}${endpoint}`;

    const options = {
      method,
      headers,
    };

    if (Object.keys(body).length) {
      options.data = JSON.stringify(body);
    }

    return axios(url, options)
      .then((response) => response.data)
      .catch((error) => {
        return error?.response?.data || { status: false };
      });
  };

  const get = (endpoint, id, query) => {
    const url = `${endpoint}${
      id ? `/${id}${query ? `?${query}` : ""}` : `${query ? `?${query}` : ""}`
    }`;

    if (token) {
      defaultHeader.Authorization = `Bearer ${token}`;
    }
    return customFetch({ endpoint: url });
  };

  const post = (endpoint, body = {}) => {
    return customFetch({ endpoint, method: "POST", body });
  };

  const put = (endpoint, id, body = {}, token) => {
    if (!id && !body) {
      throw new Error("to make a put you must provide the id and the   body");
    }
    if (token) {
      defaultHeader.Authorization = `Bearer ${token}`;
    }
    const url = `${endpoint}${id ? `/${id}` : ""}`;
    return customFetch({
      endpoint: url,
      method: "PUT",
      body,
      headers: defaultHeader,
    });
  };

  const del = (endpoint, id) => {
    if (!id) {
      throw new Error("to make a delete you must provide the id and the body");
    }
    const url = `${endpoint}/${id}`;

    return customFetch({ endpoint: url, method: "DELETE" });
  };

  return {
    get,
    post,
    put,
    del,
  };
};
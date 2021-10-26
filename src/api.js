import axios from "axios";

const URL = "https://messaging-test.bixly.com";

export const login = (data) => {
  return axios.post(`${URL}/api-token-auth/`, {
    username: data.username,
    password: data.password,
  });
};

export const getMessages = (token) => {
  return axios.get(`${URL}/messages/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const getSentMessages = (token) => {
  return axios.get(`${URL}/messages/sent`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const sendNewMessage = (data, token) => {
  return axios.post(`${URL}/messages/`, data, {
    headers: {
      Authorization: `Token ${token}`,
      "content-type": "application/json",
    },
  });
};

export const deleteMessage = (id, token) => {
  return axios.delete(`${URL}/messages/${id}`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

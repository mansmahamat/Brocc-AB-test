import axios from 'axios';

const baseUrl = 'https://api.github.com/repos';

export const getFacebook = () =>
  axios.get(`${baseUrl}/eslint/eslint`).then((res) => res.data);

export const getRepository = (name) =>
  axios.get(`${baseUrl}/${name}`).then((res) => res.data);

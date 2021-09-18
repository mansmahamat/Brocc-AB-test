import axios from 'axios';

const baseUrl = 'https://api.github.com/repos';

export const getRepository = (name) =>
  axios.get(`${baseUrl}/${name}`).then((res) => res.data);

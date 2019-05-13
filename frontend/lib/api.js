import axios from 'axios';

export default async ({ url, method = 'get', payload }) => {
  try {
    const { API_ENDPOINT } = process.env;

    const { data } = await axios({
      method,
      url: `${API_ENDPOINT}${url}`,
      data: payload,
    });

    return { data };
  } catch (err) {
    throw err;
  }
};

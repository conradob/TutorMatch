import axios from 'axios';

const isBrowser = new Function(
  'try {return this===window;}catch(e){return false;}'
);

export default async ({ url, method = 'get', payload }) => {
  try {
    const { CLIENT_API } = process.env;
    const { SERVER_API } = process.env;

    const { data } = await axios({
      method,
      url: `${isBrowser() ? CLIENT_API : SERVER_API}${url}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: typeof payload === 'string' ? payload : JSON.stringify(payload),
    });

    return { data };
  } catch (err) {
    throw err;
  }
};

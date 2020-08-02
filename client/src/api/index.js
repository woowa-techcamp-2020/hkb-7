const defaultOptions = (method) => ({
  method,
  headers: {
    'Content-Type': 'application/json',
  },
});

const serverUrl = 'http://localhost:3000';

const createQuery = (data) => {
  return data
    ? '?' +
        Object.keys(data)
          .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
          .join('&')
    : '';
};

const POST = async (url = '', data) =>
  await fetch(`${serverUrl}${url}`, {
    body: JSON.stringify(data),
    ...defaultOptions('POST'),
  });

const PUT = async (url = '', data) =>
  await fetch(`${serverUrl}${url}`, {
    body: JSON.stringify(data),
    ...defaultOptions('PUT'),
  });

const GET = async (url = '', data) => await fetch(`${serverUrl}${url}${createQuery(data)}`, defaultOptions('GET'));

const DELETE = async (url = '') => await fetch(`${serverUrl}${url}`, defaultOptions('DELETE'));

export default {
  getActivities: async () => await (await GET('/activity')).json(),
};

const defaultOptions = (method) => ({
  method,
  headers: {
    'Content-Type': 'application/json',
  },
});

const serverUrl = __API__;

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
  getActivities: async (token, year, month) => (await (await GET(`/activity/${token}/${year}/${month}`)).json()).activities,
  getPaymentMethods: async (token) => (await (await GET(`/payment-method/${token}`)).json()).paymentMethods,
  getCategories: async (token) => (await (await GET(`/category/${token}`)).json()).categories,
  createActivity: async (activity) => await (await POST(`/activity`, activity)).json(),
};

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
  getActivities: async (userId, year, month) =>
    (await (await GET(`/activity/${userId}/${year}/${month}`)).json()).activities,
  getActivity: async (id) => await (await GET(`/activity/${id}`)).json(),
  getPaymentMethods: async (userId) => (await (await GET(`/payment-method/${userId}`)).json()).paymentMethods,
  getCategories: async (userId) => (await (await GET(`/category/${userId}`)).json()).categories,
  createActivity: async (activity) => await (await POST(`/activity`, activity)).json(),
  updateActivity: async (activity) => await (await PUT(`/activity`, activity)).json(),
  deleteActivity: async (id) => await (await DELETE(`/activity/${id}`)).json(),
};

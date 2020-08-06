export const identified = () => {
  return localStorage.getItem('token') ? true : false;
};

export const saveTokenInLocalStorage = (cookie) => {
  if (!cookie) {
    return;
  }
  if (cookie.indexOf(';') === -1) {
    return;
  }
  const token = cookie
    .split('; ')
    .find((row) => row.startsWith('token'))
    .split('=')[1];
  if (!token) return;
  localStorage.setItem('token', token);
  document.cookie = `token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
};

export const logout = () => {
  localStorage.clear();
  return;
};

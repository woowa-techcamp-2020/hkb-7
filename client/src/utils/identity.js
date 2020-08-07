export const identified = () => {
  return localStorage.getItem('token') ? true : false;
};

export const saveTokenInLocalStorage = (cookie) => {
  if (!cookie.includes('token')) {
    return;
  }
  const tokenLoc = cookie.indexOf('token');
  let endLoc = Math.min(cookie.length, cookie.indexOf(';', tokenLoc));
  if (endLoc === -1) {
    endLoc = cookie.length;
  }
  const token = cookie.substring(tokenLoc, endLoc + 1);
  if (!token) return;
  localStorage.setItem('token', token.split('=')[1]);
  document.cookie = `token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
};

export const logout = () => {
  localStorage.clear();
  return;
};

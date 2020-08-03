export const bindEvent = (query, event, handler, capturing = false) => {
  const element = document.querySelector(query);
  if (!element) return;
  element.addEventListener(event, handler, capturing);
};

export const element = (tag, attributes, ...childs) => {
  const myElement = document.createElement(tag);

  for (const [key, value] of Object.entries(attributes)) {
    myElement[key] = value;
  }

  if (!childs) {
    return myElement;
  }

  childs.forEach((child) => myElement.appendChild(child));
  return myElement;
};

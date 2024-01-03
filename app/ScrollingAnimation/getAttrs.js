export const getDataAttributes = (element) => {
  const dataAttributes = {};
  const attributeNames = element.getAttributeNames();

  attributeNames.forEach((attrName) => {
    if (attrName.startsWith("data-anim-")) {
      const key = attrName.slice(10);
      const value = element.getAttribute(attrName);
      dataAttributes[key] = value;
    }
  });

  dataAttributes.attribute = element.getAttribute("data-animation");
  return dataAttributes;
};

import ByoDOMProperty from './byo-dom-property';

const ByoDOMPropertyOperations = {
  setValueForProperty(node, name, value) {
    const propertyInfo = ByoDOMProperty.properties.hasOwnProperty(name) ?
            ByoDOMProperty.properties[name] : null;

    if (propertyInfo) {
      const attributeName = propertyInfo.attributeName;
      node.setAttribute(attributeName, `${value}`);
    }
  },
};

export default ByoDOMPropertyOperations;

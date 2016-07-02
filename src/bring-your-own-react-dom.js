
const render = (reactElement, domContainerNode) => {
  domContainerNode.innerHTML = reactElement.outerHTML; // eslint-disable-line no-param-reassign
};

export default {
  render,
};

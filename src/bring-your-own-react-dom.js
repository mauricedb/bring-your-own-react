
const render = (reactElement, domContainerNode) => {
  domContainerNode.innerHTML = reactElement.outerHTML; 
};

export default {
  render
};

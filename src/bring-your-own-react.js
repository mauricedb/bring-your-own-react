class Component {

}

const createElement = (tag, props, ...childeren) => {
  let result;
  if (typeof tag === 'string') {
    result = document.createElement(tag);
  } else {
    const component = new tag()
    result = component.render();
  }

  for (let child of childeren) {
    if (typeof child === 'string') {
      const textNode = document.createTextNode(child);
      result.appendChild(textNode);    
    } else {
      result.appendChild(child);
    }
  }

  return result;
}

export default {
  createElement,
  Component
};

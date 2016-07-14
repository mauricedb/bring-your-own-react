class Component {

}

const createElement = (tag, props, ...childeren) => {
  let result;
  if (typeof tag === 'string') {
    result = document.createElement(tag);

    for (const prop of Object.keys(props)) {
      // the __self variable is added by babel-plugin-transform-react-jsx-self.
      if (prop !== '__self') {
        result.setAttribute(prop, props[prop]);
      }
    }
  } else {
    const component = new tag(); // eslint-disable-line new-cap
    component.props = props;
    result = component.render();
  }

  for (const child of childeren) {
    if (typeof child === 'string') {
      const textNode = document.createTextNode(child);
      result.appendChild(textNode);
    } else {
      result.appendChild(child);
    }
  }

  return result;
};

export default {
  createElement,
  Component,
};

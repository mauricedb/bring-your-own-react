class Component {

}

const createElement = (type, props, ...children) => {
  props.children = children;  // eslint-disable-line no-param-reassign

  return {
    type,
    props,
  };
};

export default {
  createElement,
  Component,
};

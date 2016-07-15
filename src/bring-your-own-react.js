class Component {
  constructor(props) {
    this.props = props;
  }
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

class Component {

}

const createElement = (tag, props, content) => {
  return {
    outerHTML: `<div>${content}</div>`
  }
}

export default {
  createElement,
  Component
};

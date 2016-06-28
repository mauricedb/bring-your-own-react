import {jsdom} from 'jsdom';
const {document} = jsdom().defaultView;

class Component {

}

const createElement = (tag, props, content) => {
  const result = document.createElement(tag);

  result.textContent = content;

  return result;
}

export default {
  createElement,
  Component
};

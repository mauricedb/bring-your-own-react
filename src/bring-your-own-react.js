import {jsdom} from 'jsdom';
const {document} = jsdom().defaultView;

class Component {

}

const createElement = (tag, props, content) => {
  let result;
  if (typeof tag === 'string') {
    result = document.createElement(tag);
    result.textContent = content;
  } else {
    const component = new tag()
    result = component.render();
  }


  return result;
}

export default {
  createElement,
  Component
};

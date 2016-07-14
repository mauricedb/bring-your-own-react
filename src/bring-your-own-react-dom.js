import ReactMount from './bring-your-own-react-mount';


// const build = ({tag, props, childeren}) => {
//     console.log(tag)
//     let result;
//     if (typeof tag === 'string') {
//         result = document.createElement(tag);
//
//         for (const prop of Object.keys(props)) {
//             switch (prop) {
//                 case '__self':
//                     // the __self variable is added by babel-plugin-transform-react-jsx-self.
//                     break;
//                 case 'className':
//                     result.className = props[prop];
//                     break;
//                 case 'htmlFor':
//                     result.setAttribute('for', props[prop]);
//                     break;
//                 default:
//                     result.setAttribute(prop, props[prop]);
//             }
//         }
//     } else {
//         const component = new tag(); // eslint-disable-line new-cap
//         component.props = props;
//         result = build(component.render());
//         console.log('result', result)
//     }
//
//     for (const child of childeren) {
//         if (typeof child === 'string') {
//             const textNode = document.createTextNode(child);
//             result.appendChild(textNode);
//         } else {
//             result.appendChild(build(child));
//         }
//     }
//
//     return result;
//
// }

const render = (nextElement, domContainerNode) => {
    // const dom = build(reactElement);
    // domContainerNode.innerHTML = dom.outerHTML; // eslint-disable-line no-param-reassign
  ReactMount.renderSubtreeIntoContainer(nextElement, domContainerNode);
};

export default {
  render,
};

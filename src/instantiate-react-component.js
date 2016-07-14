import ReactCompositeComponentWrapper from './react-composite-component-wrapper';
import ReactHostComponent from './react-host-component';

function instantiateReactComponent(node) {
  let instance;
  const element = node;
  if (typeof element.type === 'string') {
    instance = ReactHostComponent.createInternalComponent(element);
  } else {
    instance = new ReactCompositeComponentWrapper(element);
  }

  return instance;
}

export default instantiateReactComponent;

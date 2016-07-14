import instantiateReactComponent from './instantiate-react-component';
import ReactReconciler from './bring-your-own-react-reconciler';

class ReactCompositeComponentWrapper {
  constructor(element) {
    this.currentElement = element;
  }

  mountComponent(container) {
    let renderedElement;

    const inst =
        new this.currentElement.type(this.currentElement.props); // eslint-disable-line new-cap
    this.instance = inst;

    const markup = this.performInitialMount(renderedElement, container);

    return markup;
  }

  renderValidatedComponent() {
    const inst = this.instance;

    const renderedComponent = inst.render();

    return renderedComponent;
  }

  performInitialMount(renderedElement, container) {
    let element = renderedElement;

        // If not a stateless component, we now render
    if (element === undefined) {
      element = this.renderValidatedComponent();
    }

    const child = instantiateReactComponent(element);

    const markup = ReactReconciler.mountComponent(child, container);

    return markup;
  }
}

export default ReactCompositeComponentWrapper;

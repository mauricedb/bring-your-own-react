import instantiateReactComponent from './byo-instantiate-react-component';
import ReactReconciler from './byo-react-reconciler';

class ReactCompositeComponentWrapper {
  constructor(element) {
    this.currentElement = element;
  }

  constructComponent(publicProps) {
    const Component = this.currentElement.type;

    return new Component(publicProps);
  }

  mountComponent(container) {
    let renderedElement;

    const publicProps = this.currentElement.props;

    const inst = this.constructComponent(publicProps);

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

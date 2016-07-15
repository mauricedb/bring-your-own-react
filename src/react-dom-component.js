import instantiateReactComponent from './instantiate-react-component';
import ReactReconciler from './bring-your-own-react-reconciler';

function instantiateChild(child) {
  return instantiateReactComponent(child, true);
}

const ReactChildReconciler = {
  instantiateChildren(children) {
    return children.map(instantiateChild);
  },
};


class ReactDOMComponent {
  constructor(element) {
    this.tag = element.type;
    this.currentElement = element;
  }

  mountComponent(container) {
    const el = document.createElement(this.tag);
    const props = this.currentElement.props;
    this.updateDOMProperties(el);
    this.createInitialChildren(props, el);

    container.appendChild(el);

    return el;
  }


  updateDOMProperties() {

  }

  createInitialChildren(props, el) {
    const mountImages = [];
    if (props.children) {
      const children = ReactChildReconciler.instantiateChildren(props.children);

      for (const child of children) {
        const mountImage = ReactReconciler.mountComponent(child, el);
        mountImages.push(mountImage);
      }
    }

    mountImages.forEach(mountImage => el.appendChild(mountImage));
  }
}

export default ReactDOMComponent;

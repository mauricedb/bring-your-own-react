import ReactReconciler from './byo-react-reconciler';
import getNode from './byo-get-node-from-instance';
import ByoReactChildReconciler from './byo-react-child-reconciler';
import ByoDOMProperty from './byo-dom-property';
import ByoDOMPropertyOperations from './byo-dom-property-operations';

class ByoReactDOMComponent {
  constructor(element) {
    this.tag = element.type;
    this.currentElement = element;
    this.hostNode = null;
  }

  mountComponent(container) {
    const el = document.createElement(this.tag);
    this.hostNode = el;
    const props = this.currentElement.props;
    this.updateDOMProperties(null, props);
    this.createInitialChildren(props, el);

    container.appendChild(el);

    return el;
  }


  updateDOMProperties(lastProps, nextProps) {
    for (const propKey of Object.keys(nextProps)) {
      const nextProp = nextProps[propKey];
      if (ByoDOMProperty.properties[propKey]) {
        const node = getNode(this);

        ByoDOMPropertyOperations.setValueForProperty(node, propKey, nextProp);
      }
    }
  }

  createInitialChildren(props, el) {
    const mountImages = [];
    if (props.children) {
      const children = ByoReactChildReconciler.instantiateChildren(props.children);

      for (const child of children) {
        const mountImage = ReactReconciler.mountComponent(child, el);
        mountImages.push(mountImage);
      }
    }

    mountImages.forEach(mountImage => el.appendChild(mountImage));
  }
}

export default ByoReactDOMComponent;

import instantiateReactComponent from './byo-instantiate-react-component';
import ReactReconciler from './byo-react-reconciler';

function instantiateChild(child) {
  return instantiateReactComponent(child, true);
}

const ReactChildReconciler = {
  instantiateChildren(children) {
    return children.map(instantiateChild);
  },
};

const DOMProperty = {
  properties: {
    className: {
      attributeName: 'class',
    },
    htmlFor: {
      attributeName: 'for',
    },
    id: {
      attributeName: 'id',
    },
    name: {
      attributeName: 'name',
    },
  },
};

const DOMPropertyOperations = {
  setValueForProperty(node, name, value) {
    const propertyInfo = DOMProperty.properties.hasOwnProperty(name) ?
        DOMProperty.properties[name] : null;

    if (propertyInfo) {
      const attributeName = propertyInfo.attributeName;
      node.setAttribute(attributeName, `${value}`);
    }
  },
};

function getNodeFromInstance(inst) {
  if (inst.hostNode) {
    return inst.hostNode;
  }

  return null;
}

const getNode = getNodeFromInstance;

class ReactDOMComponent {
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
      if (DOMProperty.properties[propKey]) {
        const node = getNode(this);

        DOMPropertyOperations.setValueForProperty(node, propKey, nextProp);
      }
    }
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

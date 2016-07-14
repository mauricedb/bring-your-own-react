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
    if (props.children) {
      for (const child of props.children) {
        if (typeof child === 'string') {
          const textNode = document.createTextNode(child);
          el.appendChild(textNode);
        }
      }
    }
  }
}

export default ReactDOMComponent;

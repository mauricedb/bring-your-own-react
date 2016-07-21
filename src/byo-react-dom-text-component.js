class ReactDOMTextComponent {
  constructor(text) {
    this.stringText = `${text}`;
  }

  mountComponent() {
    const textNode = document.createTextNode(this.stringText);

    return textNode;
  }
}

export default ReactDOMTextComponent;

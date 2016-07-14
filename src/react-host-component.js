import ReactDOMComponent from './react-dom-component';

class ReactHostComponent {

}

ReactHostComponent.createInternalComponent = (element) => new ReactDOMComponent(element);

export default ReactHostComponent;

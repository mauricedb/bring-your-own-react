import ReactDOMComponent from './react-dom-component';
import TextComponentClass from './react-dom-text-component';

class ReactHostComponent {

}

ReactHostComponent.createInternalComponent = (element) => new ReactDOMComponent(element);

ReactHostComponent.createInstanceForText = (text) => new TextComponentClass(text);

export default ReactHostComponent;

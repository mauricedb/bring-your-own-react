import ReactDOMComponent from './byo-react-dom-component';
import TextComponentClass from './byo-react-dom-text-component';

class ReactHostComponent {

}

ReactHostComponent.createInternalComponent = (element) => new ReactDOMComponent(element);

ReactHostComponent.createInstanceForText = (text) => new TextComponentClass(text);

export default ReactHostComponent;

import ByoReactDOM from '../../src/bring-your-own-react-dom';
import ByoReact from '../../src/bring-your-own-react';
import HelloWorld from './hello-world.jsx';

ByoReactDOM.render(<HelloWorld />, 
  document.getElementById('app'));

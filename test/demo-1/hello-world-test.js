import chai from 'chai';
import ByoReact from '../../src/bring-your-own-react';
import HelloWorld from '../../demo/demo-1/hello-world.jsx';

chai.should();

describe('Transpiling hello-world', () => {

  it('shold have a render function', () => {
    const component = new HelloWorld();
    (typeof component.render)
      .should
      .equal('function')
  });

  it('should render <div>Hello world</div>', () => {
    const component = new HelloWorld();
    const result = component.render();

    result
      .outerHTML
      .should
      .equal('<div>Hello world</div>');
  });
});

import chai from 'chai';
import ByoReact from '../../src/bring-your-own-react';
import HelloWorld from '../../demo/demo-1/hello-world.jsx';

chai.should();

describe('Transpiling hello-world', () => {

  it('should have a render function', () => {
    const component = new HelloWorld();
    (typeof component.render)
      .should
      .equal('function')
  });

  it('should render HelloWorld as <div>Hello world</div>', () => {
    const component = new HelloWorld();
    const result = component.render();

    result
      .outerHTML
      .should
      .equal('<div>Hello world</div>');
  });

  it('should render <HelloWorld /> as <div>Hello world</div>', () => {
    const component = <HelloWorld />;

    component
      .outerHTML
      .should
      .equal('<div>Hello world</div>');
  });

  it('should render <div>Hello world</div> as HTMLDivElement', () => {
    const component = <div>Hello world</div>;

    component
      .outerHTML
      .should
      .equal('<div>Hello world</div>');
  });
});

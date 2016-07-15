import chai from 'chai';
import ByoReact from '../../src/bring-your-own-react';
import ByoReactDOM from '../../src/bring-your-own-react-dom';
import HelloWorld from '../../demo/demo-1/hello-world.jsx';

chai.should();

describe('Transpiling hello-world', () => {
  it('should have a render function', () => {
    const component = new HelloWorld();
    (typeof component.render)
      .should
      .equal('function');
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

    const result = document.createElement('div');
    ByoReactDOM.render(component, result);

    result
      .innerHTML
      .should
      .equal('<div>Hello world</div>');
  });

  it('should render <div>Hello world</div> as HTMLDivElement', () => {
    const component = <div>Hello world</div>;

    const result = document.createElement('div');
    ByoReactDOM.render(component, result);

    result
      .innerHTML
      .should
      .equal('<div>Hello world</div>');
  });

  class HelloUniverse extends ByoReact.Component {
    render() {
      return <div>Hello <b>universe</b></div>;
    }
  }

  it('should render <div>Hello <b>universe</b></div> as HTMLDivElement', () => {
    const component = (<div>
      Hello <b>universe</b>
    </div>);

    const result = document.createElement('div');
    ByoReactDOM.render(component, result);

    result
      .innerHTML
      .should
      .equal('<div>Hello <b>universe</b></div>');
  });

  it('should render <div>Hello <b>universe</b></div> as HTMLDivElement', () => {
    const component = (<div>
      <HelloUniverse />
        &nbsp;
      <p>and the rest</p>
    </div>);

    const result = document.createElement('div');
    ByoReactDOM.render(component, result);

    result
      .innerHTML
      .should
      .equal('<div><div>Hello <b>universe</b></div>&nbsp;<p>and the rest</p></div>');
  });
});

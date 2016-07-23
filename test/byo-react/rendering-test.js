import chai from 'chai';
import ByoReact from '../../src/byo-react';
import ByoReactDOM from '../../src/byo-react-dom';

chai.should();

class TestChild extends ByoReact.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

class TestParent extends ByoReact.Component {
  render() {
    return (<div>
      <TestChild name={'world'} />
    </div>);
  }
}

describe('Rendering', () => {
  describe('should output component properties', () => {
    it('should render <TestChild name={\'world\'}/> as HTMLDivElement', () => {
      const component = <TestChild name={'world'} />;

      const result = document.createElement('div');
      ByoReactDOM.render(component, result);

      result
                .innerHTML
                .should
                .equal('<div>Hello world</div>');
    });

    it('should render <TestParent /> as HTMLDivElement', () => {
      const component = <TestParent />;

      const result = document.createElement('div');
      ByoReactDOM.render(component, result);

      result
                .innerHTML
                .should
                .equal('<div><div>Hello world</div></div>');
    });
  });


  describe('should output markup properties', () => {
    it('should render HelloWorld as an object', () => {
      const component = new TestParent();
      const result = component.render();

      result
                .should
                .deep
                .equal({
                  props: {
                    __self: component,
                    children: [
                      {
                        props: {
                          __self: {
                            props: undefined,
                          },
                          children: [],
                          name: 'world',
                        },
                        type: TestChild,
                      },
                    ],
                  },
                  type: 'div',
                });
    });

    it('should render <div id="42">Hello</div> as HTMLDivElement', () => {
      const component = <div id="42">Hello</div>;

      const result = document.createElement('div');
      ByoReactDOM.render(component, result);

      result
        .innerHTML
        .should
        .equal('<div id="42">Hello</div>');
    });

    it('should render className as class', () => {
      const component = <div className="a">Hello</div>;

      const result = document.createElement('div');
      ByoReactDOM.render(component, result);

      result
        .innerHTML
        .should
        .equal('<div class="a">Hello</div>');
    });

    it('should render htmlFor as for', () => {
      const component = <div><label htmlFor="a">Hello</label><input name="a" /></div>;

      const result = document.createElement('div');
      ByoReactDOM.render(component, result);

      result
        .innerHTML
        .should
        .equal('<div><label for="a">Hello</label><input name="a"></div>');
    });
  });
});

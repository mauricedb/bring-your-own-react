import chai from 'chai';
import ByoReact from '../../src/bring-your-own-react';
import ByoReactDOM from '../../src/bring-your-own-react-dom';
import HelloWorld from '../../demo/demo-1/hello-world.jsx';

chai.should();

class TestChild extends ByoReact.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }

}

class TestParent extends ByoReact.Component {
    render() {
        return <div>
            <TestChild name={'world'}/>
        </div>;
    }
}

describe('Rendering', () => {


    describe('should output component properties', () => {

        it('should render <TestChild name={\'world\'}/> as HTMLDivElement', () => {
            const component = <TestChild name={'world'}/>;

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

});
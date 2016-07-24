import instantiateReactComponent from './byo-instantiate-react-component';

function instantiateChild(child) {
  return instantiateReactComponent(child, true);
}

const ByoReactChildReconciler = {
  instantiateChildren(children) {
    return children.map(instantiateChild);
  },
};

export default ByoReactChildReconciler;

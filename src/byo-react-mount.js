import ReactReconciler from './byo-react-reconciler';
import instantiateReactComponent from './byo-instantiate-react-component';

const ReactMount = {
  renderSubtreeIntoContainer(nextElement, container) {
    ReactMount.renderNewRootComponent(nextElement, container);
  },
  renderNewRootComponent(nextElement, container) {
    const componentInstance = instantiateReactComponent(nextElement);

    ReactMount.mountImageIntoNode(componentInstance, container);
  },
  mountImageIntoNode(wrapperInstance, container) {
    ReactReconciler.mountComponent(wrapperInstance, container);
  },
};

export default ReactMount;

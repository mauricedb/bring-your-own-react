const ReactReconciler = {
  mountComponent(internalInstance, container) {
    const markup = internalInstance.mountComponent(container);

    return markup;
  },
};

export default ReactReconciler;

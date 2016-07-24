export default function getNodeFromInstance(inst) {
  if (inst.hostNode) {
    return inst.hostNode;
  }

  return null;
}

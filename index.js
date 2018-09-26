function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const nodes = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].textContent = parseInt(nodes[i].textContent) + n;
  }
}

function deepestChild() {
  let node = document.querySelector('#grand-node');
  let nodeChild = node.children[0];

  while(nodeChild) {
    node = nodeChild;
    nodeChild = node.children[0];
  }

  return node;
}

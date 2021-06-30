// 깊이우선탐색 구현
// 임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받는다.
// 해당 노드를 시작으로 깊이 우선 탐색(DFS, Depth First Search)을 한다.
// 탐색되는 순서서대로 노드의 값이 저장된 배열을 리턴한다.

let dfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  let answer = [node.value];
  if (node.children) {
    for (let i = 0; i < node.children.length; i ++ ) {
      answer.push(...dfs(node.children[i]))
    }
  }
  return answer;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

// 입출력 예시
let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = dfs(root);
console.log(output); // --> [1, 2, 4, 5, 3]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = dfs(root);
console.log(output); // --> [1, 2, 4, 6, 5, 3, 7]
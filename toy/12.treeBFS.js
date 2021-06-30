// 너비우선탐색 구현
// 임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받는다.
// 해당 노드를 시작으로 너비 우선 탐색(BFS, Breadth First Search)을 한다.
// 탐색되는 순서서대로 노드의 값이 저장된 배열을 리턴한다.

let bfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  let answer = [node.value];
  let queue = [node.children];
  for (let i = 0; i < queue.length; i ++) {
    for (let j = 0; j < queue[i].length; j ++) {
      answer.push(queue[i][j].value);
      if (queue[i][j].children.length > 0) {
        queue.push(queue[i][j].children);
      }
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
let output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5, 7, 6]

function test3 () {
  const root = new Node(1);
  root.addChild(new Node(3));
  root.addChild(new Node(4));
  root.children[0].addChild(new Node(5));
  root.children[0].addChild(new Node(6));
  root.children[0].children[0].addChild(new Node(7));
  root.children[0].children[1].addChild(new Node(8));
  root.children[1].addChild(new Node(9));
  root.children[1].addChild(new Node(10));
  root.children[1].children[1].addChild(new Node(11));
  root.children[1].children[1].addChild(new Node(12));
  root.addChild(new Node(2));
  root.children[2].addChild(new Node(13));
  return bfs(root)
}
console.log(test3())
// [ 1, 3, 4, 2, 5, 6, 9, 10, 13, 7, 8, 11, 12 ]
// 캐시전파
// 모든 캐시 엣지는 N*M격자에 위치한다.
// 최소 1개 이상의 일부 엣지만 데이터를 캐시 한 상태로 시작
// 데이터를 캐시한 엣지는 인접한 엣지 중 캐시하지 못한 모든 엣지로 전파한다.
// 전체 엣지에 캐시가 전파되는데 소요되는 시간 구하는 함수

// 예시
// [[0, 1], 
// [1, 0]] -> 1
// [[0, 0, 0]
// [0, 0, 0],
// [1, 0, 0]] -> 4

// 새로운 박스를 만들고, 1의 위치를 확인후 상하좌우를 1로 변경한다.

// 통과한 코드 (23.01.31)
function solution(cacheBox) {
  let newBox = []
  let zeroCount = 0

  for (let i = 0; i < cacheBox.length; i++){
    for (let j = 0; j < cacheBox[0].length; j++) {
      if (cacheBox[i][j] === 0) {
        zeroCount ++
      }
    }
  }

  if (zeroCount === 0) {
    return 0
  }

  for (const i of cacheBox) {
    newBox.push(new Array(i.length).fill(0))
  }

  for (let i = 0; i < cacheBox.length; i++){
    for (let j = 0; j < cacheBox[0].length; j++) {
      if (cacheBox[i][j] === 1) {
        // 기준
        newBox[i][j] = 1
        // 왼
        if (j > 0) {
          newBox[i][j - 1] = 1
        }
        // 오
        if (j < cacheBox[0].length -1 ) {
          newBox[i][j + 1] = 1
        }
        // 위
        if (i > 0) {
          newBox[i - 1][j] = 1
        }
        // 아래
        if (i < cacheBox.length - 1) {
          newBox[i + 1][j] = 1
        }
      }
    }
  }
  
  console.log(newBox[0])
  console.log(newBox[1])
  console.log(newBox[2])
  console.log(newBox[3])
  
  return 1 + solution(newBox)
}

// console.log(solution([ // 2
//   [0, 0],
//   [1, 0]]))
console.log(solution([ // 4
  [0, 0, 0], // [0,0], [0,1], [0,2]
  [0, 0, 0],
  [1, 0, 0]
]))
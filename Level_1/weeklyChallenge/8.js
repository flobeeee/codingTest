// 문제요약
// 최소 직사각형
// 다양한 명함 크기들이 입력값으로 주어집니다.
// 모든 명함이 들어갈 수 있는 지갑의 크기를 구하세요.

// 입출력 예시 
// [[60, 50], [30, 70], [60, 30], [80, 40]] => 4000
// [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]] =>	120
// [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]] =>	133

// ? 수도코드
// 각 배열의 요소를 정렬합니다.
// 인덱스별로 가장 큰 숫자를 찾아서 곱합니다 (arr[x][0] * arr[x][1])

// 통과한 코드 (21.10.25)
function solution(sizes) {
  let width = 0
  let height = 0
  for (let i = 0; i < sizes.length; i ++) {
    sizes[i].sort((a,b) => a - b)
    if (sizes[i][0] > width) {
      width = sizes[i][0]
    }
    if (sizes[i][1] > height) {
      height = sizes[i][1]
    }
  }
  return width * height
}


// 실행코드
console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]));
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/86491
// 문제요약
// 정수를 입력받아서
// 내림차순으로 정렬해서 리턴

// 입출력 예시 
// 118372 =>  873211

// ? 수도코드
// split 으로 배열로 변경한다.
// 내림차순으로 sort 를 한다.

// 통과한 코드 (21.06.10)
// 시간복잡도 O(n²) / sort 는 숫자끼리 전부 비교하는 작업이라서 이중 for 문과 같다.
function solution(n) {
  return Number(String(n).split("").sort((a, b) => b - a).join(""))
}


// 실행코드
console.log(solution(118372));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12933?language=javascript
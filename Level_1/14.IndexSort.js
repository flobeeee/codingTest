// 문제요약
// 문자열로 구성된 배열과 정수 n이 주어진다.
// n에 해당하는 인덱스 순으로 배열한다.
// n이 같은 알파벳일경우 사전순으로 앞선 문자열을 앞에 위치한다.

// 입출력 예시 
// ["sun", "bed", "car"],	1 =>	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"],	2 =>	["abcd", "abce", "cdx"]

// ? 수도코드
// 1. 인덱스를 기준으로 sort
// 2. 해당 인덱스가 같은 알파벳인 문자열들을 sort

// 통과한 코드 (21.05.22)
// 시간복잡도 O (n log n) / Array.prototype.sort() time complexity
// 참고 https://stackoverflow.com/questions/57763205/what-is-array-prototype-sort-time-complexity
function solution(strings, n) {
  const indexSort = strings.sort((a, b) => a[n] < b[n] ? -1 : 1)
  let sameIndex = [indexSort[0]];
  let answer = [];
  for (let i = 1; i < indexSort.length; i++) {
    if (sameIndex[0][n] === indexSort[i][n]) {
      sameIndex.push(indexSort[i])
    } else {
      answer = [...answer, ...sameIndex.sort()];
      sameIndex = [indexSort[i]];
    }
  }
  if (sameIndex.length) {
    answer = [...answer, ...sameIndex.sort()];
  }
  return answer
}


// 실행코드
console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12915
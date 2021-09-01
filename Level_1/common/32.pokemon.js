// 문제요약
// 홍박사님이 자신의 연구실에 있는 총 N마리의 포켓몬 중
// N/2 마리를 가져가도 좋다고 합니다.
// 최대한 다양한 종류의 포켓몬을 선택하는 방법을 찾아
// 포켓몬 종류 번호 개수를 리턴하시오

// 입출력 예시 
// [3,1,2,3] =>	2
// [3,3,3,2,2,4] =>	3
// [3,3,3,2,2,2] =>	2

// ? 수도코드
// 포켓몬 수 /2 의 개수를 구한다.
// 포켓몬의 종류를 구한다.
// 포켓몬 종류 > 포켓몬수/2 면 후자를 리턴
// 포켓몬 종류 < 포켓몬수/2 면 선자를 리턴

// 통과한 코드 (21.06.13)
// 시간복잡도 O(n) / 이유 new Set 의 시간복잡도는 O(n) 이다.
function solution(nums) {
  let numOfPoke = nums.length/2;
  let sortOfPoke = [...new Set(nums)].length;
  if (numOfPoke > sortOfPoke) {
    return sortOfPoke;
  } else {
    return numOfPoke;
  }
}

// 실행코드
console.log(solution([3,1,2,3]));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/1845
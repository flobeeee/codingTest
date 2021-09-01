// 문제요약
// 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴

// 입출력 예시 
// "01033334444"	=> "*******4444"
// "027778888" =>	"*****8888"

// ? 수도코드
// slice로 뒤 숫자 4개를 뽑아낸다
// 총 길이 -4 한 나머지는 *을 출력한다.

// 통과한 코드 (21.05.21)
// 시간복잡도 O(N) / 모든요소를 다 한번씩 확인해서
function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4)
}

// 실행코드
console.log(solution("027778888"));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12948
// 문제요약
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수 리턴

// 입출력 예시 
// 10 -> 4
// 5 -> 3

// ? 수도코드
// 숫자를 전부 나열한다.
// 2부터 시작해서, 2는 소수니까 primeNum 에 넣는다.
// 2의 배수를 모두 0으로 만든다.

// 3차시도 : 에라토스테네스의 체 활용해보기 (21.06.27)
function solution(n) {
  let nums = [0, 1]; // 0, 1 index는 사용하지 않음
  let primeNum = 0
  // 배열 만들기
  for (let i = 2; i <= n; i ++) {
    nums[i] = true;
  }
  for (let i = 2; i <=n; i ++) {
    if (nums[i]){
      primeNum ++;
      for (let j = i * i; j <= n; j += i) {
        nums[j] = false;
      }
    }
  }
  return primeNum
}

// 실행코드
console.log(solution(10));

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12921



// 2차시도 : 효율성 점수는 1차보다 좋아졌으나 효율성은 통과못함
/*
function checkPrime(n) {
  for(let i = 2; i <= Math.sqrt(n); i ++) {
    if(n % i === 0) {
      return false;
    }
  }
  return true;    
}
function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i ++) {
    if (checkPrime(i)) {
      answer = answer + 1;
    }
  }
  return answer;
}
*/

// 1차시도 : 효율성문제로 3개 테스트항목 통과 X
/*
function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i ++) {
    let count = 0;
    for (let j = 2; j <= i; j ++) {
      if (i % j === 0) {
        count ++;
        if (count > 1) {
          break;
        }
      }
    }
    if (count === 1) {
      answer ++;
      count = 0;
    }
  }
  return answer;
}
*/
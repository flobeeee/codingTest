// 문제요약
// 왼쪽 엄지는 * 에서 시작하고, 오른쪽 엄지는 # 에서 시작합니다.
// 엄지는 상하좌우로만 움직이고 키패드 한 칸 이동은 거리 1에 해당합니다.
// 왼쪽 열 1,4,7 은 왼쪽엄지만 사용합니다.
// 오른쪽 열 3,6,9 는 오른쪽 엄지만 사용합니다.
// 가운데 2,5,8,0 은 두 엄지 중 가까운 엄지를 사용합니다.
// 만약 거리가 같으면 오른손 잡이는 오른손을 사용합니다.

// 입출력 예시 
// [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],	"right" =>	"LRLLLRLLRRL"
// [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],	"left" =>	"LRLLRRLLLRR"
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],	"right" =>	"LLRLLRLLRL"

// ? 수도코드
// 좌표로 숫자판을 만듭니다.
// [x][0]좌표는 왼쪽. [x][2]좌표는 오른쪽을 출력합니다.
// [x][1]좌표는 인덱스를 비교해서 출력합니다.

// 통과한 코드 (21.06.02)
// 시간복잡도 O(n²) / 이유 : 이중 for 문이니까.
function solution(numbers, hand) {
  let answer = '';
  let umgLeft = [3, 0];
  let umgRight = [3, 2];

  const keys = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']]
  for (let i = 0; i < numbers.length; i++) {
    for (let key = 0; key < keys.length; key++) {
      if (keys[key][0] === numbers[i]) {
        answer = answer + 'L'
        umgLeft = [key, 0]
      } else if (keys[key][2] === numbers[i]) {
        answer = answer + 'R'
        umgRight = [key, 2]
      } else if (keys[key][1] === numbers[i]) {
        if ((Math.abs(key - umgLeft[0]) + Math.abs(1 - umgLeft[1]) < (Math.abs(key - umgRight[0]) + Math.abs(1 - umgRight[1])))) {
          answer = answer + 'L'
          umgLeft = [key, 1]
        } else if ((Math.abs(key - umgLeft[0]) + Math.abs(1 - umgLeft[1]) > (Math.abs(key - umgRight[0]) + Math.abs(1 - umgRight[1])))) {
          answer = answer + 'R'
          umgRight = [key, 1]
        } else {
          answer = answer + hand.toUpperCase()[0]
          if (hand.toUpperCase()[0] === 'L') {
            umgLeft = [key, 1]
          } else {
            umgRight = [key, 1]
          }
        }
      }
    }
  }
  return answer;
}

// 실행코드
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); // "LRLLLRLLRRL"

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/67256

// 시도 1 : 오른손잡이 조건. 왼손이 4, 오른손이 2에 있는경우 5를 눌러야할때 왼손이 눌러져서 실패
// ? 수도코드
// 열마다 배열을 만듭니다.
// 숫자가 왼쪽이나 오른쪽 열이면 해당 방향을 출력합니다.
// 숫자가 가운데 행이면, 인덱스를 비교해서 출력합니다.

/*function solution(numbers, hand) {
  const left = [1, 4, 7];
  const mid = [2, 5, 8, 0];
  const right = [3, 6, 9];
  let umgLeft = 3;
  let umgRight = 3;
  let answer = '';
  for (let i = 0; i < numbers.length; i++) {
    // 왼쪽
    for (let l = 0; l < left.length; l++) {
      if (numbers[i] === left[l]) {
        answer = answer + 'L';
        umgLeft = l;
      }
    }
    // 오른쪽
    for (let r = 0; r < right.length; r++) {
      if (numbers[i] === right[r]) {
        answer = answer + 'R';
        umgRight = r;
      }
    }
    // 중간
    for (let m = 0; m < mid.length; m++) {
      if (numbers[i] === mid[m]) {
        if (Math.abs(umgLeft - m) > Math.abs(umgRight - m)) {
          answer = answer + 'R'
          umgRight = m;
        } else if (Math.abs(umgLeft - m) < Math.abs(umgRight - m)) {
          answer = answer + 'L';
          umgLeft = m;
        } else {
          answer = answer + hand.toUpperCase()[0]
        }
      }
    }
  }
  return answer;
}
*/
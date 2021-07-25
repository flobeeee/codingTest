// 문제요약
// 인형뽑기 게임
// 두개의 같은 인형을 연속으로 뽑으면 2개의 인형이 없어진다.
// 없어진 인형의 개수를 리턴

// 입출력 예시 
//[[0,0,0,0,0],
// [0,0,1,0,3],
// [0,2,5,0,1],
// [4,2,4,4,2],
// [3,5,1,3,1]],	[1,5,3,5,1,2,1,4] =>	4

// ? 수도코드
// moves 각 숫자를 확인하고 board에서 인덱스를 확인
// 0인경우 다음 행을 확인하고, 0이 아니면 0으로 변경하고
// 해당 숫자가 배열의 끝과 같으면 answer에 +2 하고 pop 합니다.
// 해당 숫자가 배열의 끝과 다르면 push 합니다.

// 통과한 코드 (21.07.25)
function solution(board, moves) {
  let dolls = []
  let answer = 0;
  for (let move = 0; move < moves.length; move++) {
    for (let depth = 0; depth < board.length; depth++) {
      if (board[depth][moves[move] - 1] !== 0) {
        if (dolls[dolls.length - 1] === board[depth][moves[move] - 1]) {
          dolls.pop()
          answer += 2
          board[depth][moves[move] - 1] = 0
          break
        } else {
          dolls.push(board[depth][moves[move] - 1])
          board[depth][moves[move] - 1] = 0
          break
        }
      }
    }
  }
  return answer;
}


// 실행코드
console.log(solution([
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4])); // 4

// 링크 : https://programmers.co.kr/learn/courses/30/lessons/64061
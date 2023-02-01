// 택배를 이용해 총 n개의 옷을 배송
// 옷 3개, 5개를 담을 수 있는 상자
// 상자 개수로 배송비받음. 상자 개수 줄여야함.
// 상자는 꽉차야 보낼 수있음.
// n = 보내야할 옷
// return 배송비를 최소화할 수 있는 상자의 수
// 어떤 방법으로도 못 보내면 -1 return


// 옷을 5로 나눈다. 나머지가 0 이면 리턴
// 옷을 5로 나눠서 가장 큰 몫을 구한다.
// 반복문으로 5개 들어가는 박스 수를 줄이면서 3으로 나눠지는지 확인한다.
// 3으로 나눠 떨어지면 몫을 더해서 리턴
function solution(clothes) {
  // 5로 떨어지는 경우
  if (clothes % 5 === 0) {
    return clothes / 5
  }

  let maxFiveBox = Math.floor(clothes / 5) // 5개 박스 최대 몫
  
  for (let i = maxFiveBox; i >= 0; i--) {
    if ((clothes - (5 * i)) % 3 === 0) {
      return i + (clothes - (5 * i)) / 3
    } 
  }

  return -1
}

console.log(solution(15)) // 3
console.log(solution(16)) // 4
console.log(solution(7)) // -1

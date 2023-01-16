// 문제요약
// 모든 달은 28일까지 있다고 가정
// 예를 들어, A라는 약관의 유효기간이 12 달이고, 2021년 1월 5일에 수집된 개인정보가 A약관으로 수집되었다면 해당 개인정보는 2022년 1월 4일까지 보관 가능하며 2022년 1월 5일부터 파기해야 할 개인정보입니다.
// 오늘 날짜로 파기해야 할 개인정보 번호들을 구하려 합니다.

// 입출력 예시 
// oday	terms	privacies	result
// "2022.05.19"	["A 6", "B 12", "C 3"]	["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]	[1, 3]
// "2020.01.01"	["Z 3", "D 5"]	["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]	[1, 4, 5]

// ? 수도코드
// 개인정보 수집일자와 유효기간을 확인해서 날짜가 지났는지 확인한다.
// 날짜가 지났으면 answer에 index + 1을 넣는다.

// 통과한 코드 (23.01.16)
function solution(today, terms, privacies) {
  let answer = [];
  let termsInfo = {}
  const todayData = today.split('.')
  const todayYear = + todayData[0]
  const todayMonth = + todayData[1]
  const todayDay = + todayData[2]

  for (const term of terms) {
    const termData = term.split(' ')
    const type = termData[0]
    const month = termData[1]

    termsInfo[type] = + month
  }
  
  for (let i = 0; i < privacies.length; i++) {
    const privaciesData = privacies[i].split(' ')
    const startDate = privaciesData[0]
    const type = privaciesData[1]

    const startDateData = startDate.split('.')
    let startDateYear = + startDateData[0]
    let startDateMonth = + startDateData[1]
    const startDateDay = + startDateData[2]

    startDateYear = startDateYear + Math.floor(termsInfo[type] / 12)
    startDateMonth = startDateMonth + (termsInfo[type] % 12)

    if (startDateMonth > 12) {
      startDateMonth = startDateMonth - 12
      startDateYear ++
    }

    // console.log (`${todayYear}.${todayMonth}.${todayDay}`, `${startDateYear}.${startDateMonth}.${startDateDay}`)
    if (todayYear > startDateYear) {
      answer.push(i + 1)
    } else if (todayYear === startDateYear) {
      if (todayMonth > startDateMonth) {
        answer.push(i + 1)
      } else if (todayMonth === startDateMonth) {
        if (todayDay >= startDateDay) {
          answer.push(i + 1)
        }
      }
    }
  }

  return answer;
}


// 실행코드
console.log(solution("2022.05.19",	["A 6", "B 12", "C 3"],	["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"])); // [1, 3]
console.log(solution("2020.01.01",	["Z 3", "D 5"],	["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"])); // 	[1, 4, 5]


// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/150370?language=javascript
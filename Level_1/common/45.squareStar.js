// 문제요약
// 직사각형 별찍기

// 입출력 예시 
// 5, 3
// => 
// *****
// *****
// *****

// 통과한 코드 (21.10.20)
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let star = ''
    for (let i = 0; i < b; i ++) {
        for(let j = 0; j < a; j ++) {
            star = star + '*'
        }
        star = star + '\n'
    }
    console.log(star)
});


// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript
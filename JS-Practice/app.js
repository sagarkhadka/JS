/////////////////////////////////////////
//////////// JS Fundamentans 1 /////////
////////////////////////////////////////

// Calculate the BMI of two people and compare them
/*
let johnWeight = 92,
    johnHeight = 1.95,
    markWeight = 78,
    markHeight = 1.69,
    markHigherBMI = false

johnBMI = johnWeight / johnHeight ** 2
markBMI = markWeight / markHeight ** 2

if (johnBMI < markBMI) {
    markHigherBMI = true
}

console.log(markHigherBMI)
*/

// String concatianation
/*
let name = 'Sagar',
    job = 'Developer'

console.log(`I am ${name} and I am a ${job}`)
*/

// Challage 3: Score
/* 
let dolphinScore1 = 96,
    dolphinScore2 = 108,
    dolphinScore3 = 89,
    dolphinAvg = 0

let koalasScore1 = 88,
    koalasScore2 = 97,
    koalasScore3 = 110,
    koalasAvg = 0

dolphinAvg = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3
koalasAvg = (koalasScore1 + koalasScore2 + koalasScore3) / 3

console.log(dolphinAvg, koalasAvg)

// Ternary Operator
dolphinAvg < koalasAvg ? console.log('Koalas Win 🥇') : console.log('Dolpnin win 🥇')

*/



/////////////////////////////////////////
//////////// JS Fundamentans 2 /////////
////////////////////////////////////////

// Challage 1

const calcAverage = (a, b, c) => (a + b + c) / 3

const teamA = calcAverage(77, 100, 96)
console.log(`Team A: ${teamA}`)

const teamB = calcAverage(80, 78, 110)
console.log(`Team B: ${teamB}`)

teamA > teamB ? console.log('Winner is Team A 🥇') : console.log('Winner is Team B 🥇')
'use strict'

// Function to create random rum
const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const guessNum = randomNum (1, 10)
// console.log(guessNum)

let guessTry = 0

// document.querySelector('.try').textContent = 9

document.querySelector('.check').addEventListener('click', function () {
    // console.log(document.querySelector('#numInput').value)
    const num = (document.querySelector('#numInput').value)

    if (Number(num) !== guessNum) {
        // console.log('❌ Wrong. Try Again')
        Number(num) > guessNum ? document.querySelector('.status').textContent = 'High' : document.querySelector('.status').textContent = 'Low'
        guessTry++
        document.querySelector('.try').textContent = guessTry
    }
    else {
        // console.log(`✅ Correct. You guessed in ${guessTry} try`)
        document.querySelector('.sucess').textContent = `Correct you guessed it in ${guessTry} tries`
    }
})

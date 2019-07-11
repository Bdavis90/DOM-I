let counter = 0

function countToTen() {
    const secondTens = document.querySelector('#secondTens');
    const secondOnes = document.querySelector('#secondOnes');
    const msHundreds = document.querySelector('#msHundreds');
    const msTens = document.querySelector('#msTens');
    
    secondTens.textContent = Math.floor(counter /1000 )
    secondOnes.textContent = Math.floor(counter / 100 % 10)
    msHundreds.textContent = Math.floor(counter /10 % 10)
    msTens.textContent = counter % 10   

   counter++;

}

setInterval(countToTen, 1);

function stopTimer() {
    if(countToTen === 0) {
        clearInterval(setInterval)
    }
}
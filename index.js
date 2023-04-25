// Code your solutions in this file
let makeCard = []
function writeCards(names, day) {
  for (let i = 0; i < names.length; i++) {
   makeCard.push(`Thank you, ${names[i]}, for the wonderful ${day} gift!`)
  }
  return makeCard
}

function countDown(startNum) {
  let i = 0
  while (i <= startNum) {
    console.log(startNum)
    startNum--
  }
}
// Code your solutions in this file

function writeCards(names, day) {
  let makeCard = []
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
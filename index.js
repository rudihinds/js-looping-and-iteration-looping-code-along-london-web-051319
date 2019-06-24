function writeCards( namesArray, event ) {
  let thankYouCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

function countdown( countdown ) {
  while ( countdown > 0 ) {
    console.log( countdown );
    countdown -= 1;
  }
  console.log( countdown );
}


// // Code your solutions in this file
//
// function writeCards(arr, surprise){
//   // for(let i = 0; i>=arr.length; i++){
//     let i = 0
//     let name = arr[i]
//     let namesArr = []
//     while (i<arr.length){
//   namesArr.push(`Thank you, ${name}, for the wonderful ${surprise} gift!`)
//   i++
//   }
//   namesArr
// }
//
// function countdown(num){
//
//   while (num > 0) {
//     console.log(num)
//     num-=1
//   }
//   console.log(num)
// }
//
//
//
// // countdown(10)

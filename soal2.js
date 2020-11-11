var kalimat="saya sangat senang belajar javascript";

let splitSentence = kalimat.split(" ")
let array = [ ];
// console.log(splitSentence.length)
splitSentence.forEach(kata => {
  array.push(kata)
})
console.log(array)
// console.log(kalimat.split(" "))
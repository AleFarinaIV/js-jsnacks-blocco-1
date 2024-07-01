let userNumber = prompt("Inserisci qui un numero a 4 cifre")
const strArray = userNumber.split('')
const intArray = []

for (let i = 0; i < strArray.length; i++) {
    intArray.push(parseInt(strArray[i]))
    console.log (intArray)
}

let sum = 0

for (let i = 0; i < intArray.length; i++) {
    sum += intArray[i]
}
console.log(sum)
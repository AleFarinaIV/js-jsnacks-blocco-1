let userNumber = prompt("Inserisci qui un numero a 4 cifre")

let sum = 0

if (userNumber.length!== 4 || isNaN(userNumber)) {
    console.log("Devi inserire un numero a 4 cifre!")
} else {
    for (let i = 0; i < userNumber.length; i++) {
        sum += Number(userNumber[i])
    }
    console.log(sum)
}


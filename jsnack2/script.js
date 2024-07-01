let array = []

for (let i = 0; i < 6; i++) {
    number = prompt("Inserire un numero qui");
    if (number % 2 !== 0 ){
        array.push(number);
    }
}
console.log(array)
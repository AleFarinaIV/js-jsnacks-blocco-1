const guestList = ["Alessandro Farina", "Lorenzo Pranio", "Gioele Miscia", "Laura Corrado", "Rivaldo Gijon", "Luca Di Santo", "Marianna Coppa"]

let name = prompt("Inserisci qui il tuo nome")

let verification = false

for (let i = 0; i < guestList.length; i++) {
    if (guestList[i].toLowerCase() === name) {
        verification = true
    }
}
if (verification === true) {
    document.getElementById('name-true').innerHTML = "Buonasera, lei fa parte degli invitati"
}else {
    document.getElementById('name-false').innerHTML = "Ci dispiace, lei non fa parte degli invitati"
}
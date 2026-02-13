function roll() {
    for (let i = 1; i <= 5; i++) {
        let rand = Math.floor(Math.random()*6) + 1
        document.getElementById(`result${i}`).setAttribute("value",rand)
    }
}
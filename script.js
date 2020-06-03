const moneyForm = document.getElementById("form")
let coinPlace = document.getElementById("coin-area");

moneyForm.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(moneyForm);
    let amountOfCoins = data.get("amount");
    let whichCoin = data.get("dropdown");
    for (let i = 0; i < amountOfCoins; i++) {
        let newCoin = document.createElement("div");
        newCoin.classList.add("new-coin");
        newCoin.innerText = whichCoin;
        coinPlace.append(newCoin);
    }
});

coinPlace.addEventListener("click", event => {
    event.target.remove()
});






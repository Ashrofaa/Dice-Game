$(window).on("load", function () {
    sessionStorage.setItem("reload", "true");
});

if (sessionStorage.getItem("reload")) {

    sessionStorage.clear();
    // Creating the random numbers
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Displaying the dice img that corresponds to the generated random number
    document
        .querySelector(".img1")
        .setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document
        .querySelector(".img2")
        .setAttribute("src", "images/dice" + randomNumber2 + ".png");

    // Changing the heading according to the result
    if (randomNumber1 > randomNumber2) {
        document
            .querySelector(".heading")
            .textContent = "Player 1 wins 🚩";
    } else if (randomNumber2 > randomNumber1) {
        document
            .querySelector(".heading")
            .textContent = "Player 2 wins 🚩";
    } else {
        document
            .querySelector(".heading")
            .textContent = "Draw";
    }

}
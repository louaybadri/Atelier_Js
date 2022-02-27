startButton = document.querySelector("#startButton");
tentative = 0;


startButton.addEventListener("click", function (e) {
    restart = true;
    win = false;
    while (restart === true) {

        tentative = prompt("entrer le nombre de tentative:");
        randomNumber = Math.floor(Math.random() * 10);
        if ((tentative.length !== 0) & (isNaN(tentative) === false)) {
            proposition = prompt("quel est le nombre a votre avis ");
            for (let i = 1; i < parseInt(tentative); i++) {

                if (proposition == randomNumber) {
                    alert("bravoo !!");
                    win = true;
                    break;

                } else {
                    proposition = prompt("non essayé une autre fois");
                }

            }
            if (win == false) {
                alert("Vous avez perdu :'(")
            }
            val = prompt("est ce que vous voulez commencer a nouveau ?(y/n)");

            restart = val === "y";

        } else {
            alert("entrer un num svp");
        }
    }
})

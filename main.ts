let P3 = 0
let P2 = 0
let Num1 = 0
let num = game.askForNumber("Enter No: ")
if (num % 2 == 0) {
    while (Num1 < num) {
        Num1 = 2 ** P2
        P2 += 1
    }
    if (Num1 == num) {
        game.splash("Power of 2")
    } else {
        game.splash("Not power of 2")
    }
} else if (num % 3 == 0) {
    while (Num1 < num) {
        Num1 = 3 ** P3
        P3 += 1
    }
    if (Num1 == num) {
        game.splash("Power of 3")
    } else {
        game.splash("Not power of 3")
    }
} else {
    game.splash("Select appropriate no")
}

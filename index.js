const readlineSync = require('readline-sync')
var gameOver = false;

// Changer en tableau 
var lineOne = "*   |   *"
var lineTwo = "*  |||  *"
var lineThree = "* ||||| *"
var lineFour = "*|||||||*"
var lines = [1,2,3,4];
var myLine
var myNumberOfMatches
// remplacer ces variables par un tableau qui incrémente les valeurs de 2 
// et s'arrête à la valeur donnée par l'utilisateur
// si n = 5 
// 5 lignes 
// [1, 3, 5, 7, 9]
var numberOfMatchesLineOne = 1
var numberOfMatchesLineTwo = 3
var numberOfMatchesLineThree = 5
var numberOfMatchesLineFour = 7
//

var aiLine
var aiMatches



function ailumette() {
    // JOUEUR
    if (!gameOver) {
    showAllumettes(lineOne, lineTwo, lineThree, lineFour);
    console.log("Your turn :")
    askMyLine() 
    console.log("Player removed " + myNumberOfMatches + " match(es) from line " + myLine)
    removeMatch(myLine, myNumberOfMatches)
    }
    if (lines.length == 0) {
        console.log("You lost, too bad..")
        gameOver = true
    }
    if (!gameOver){
    showAllumettes(lineOne, lineTwo, lineThree, lineFour);

    // IA
    console.log("\nAI'S turn ...\n")
    aiChooses()
    if (lines.length == 0) {
        console.log("I lost.. snif.. but I'll get you next time!!")
        gameOver = true
    }
    }
    

    // Permet de boucler la fonction tant que la partie n'est pas finie
    if (!gameOver){
        ailumette();
    }
}
// Enlève les allumettes 
function removeMatch(line, nbMatches) {
    switch(line) {            
        case '1' : 
            // Boucle en fonction du nombre d'allumettes à enlever
            for (i = 0;i < nbMatches;i++)
                lineOne = lineOne.replace("|", " ")
                numberOfMatchesLineOne -= nbMatches
                if (numberOfMatchesLineOne == 0){
                for (j = 0; j < lines.length;j++){
                    if (lines[j] == 1)
                        lines.splice(j,1)
                }}
            break
        case '2' :
            for (i = 0;i < nbMatches;i++)
                lineTwo = lineTwo.replace("|", " ")
                numberOfMatchesLineTwo -= nbMatches
                if (numberOfMatchesLineTwo == 0){
                    for (j = 0; j < lines.length;j++){
                        if (lines[j] == 2)
                            lines.splice(j,1)
                    }}
            break
        case '3' :
            for (i = 0;i < nbMatches;i++)
                lineThree = lineThree.replace("|", " ")
                numberOfMatchesLineThree -= nbMatches
                if (numberOfMatchesLineThree == 0){
                    for (j = 0; j < lines.length;j++){
                        if (lines[j] == 3)
                            lines.splice(j,1)
                    }}
            break
        case '4' :
            for (i = 0;i < nbMatches;i++)
                lineFour = lineFour.replace("|", " ")
                numberOfMatchesLineFour -= nbMatches
                if (numberOfMatchesLineFour == 0){
                    for (j = 0; j < lines.length;j++){
                        if (lines[j] == 4)
                            lines.splice(j,1)
                    }}
            break
            case 1 : 
            for (i = 0;i < nbMatches;i++)
                lineOne = lineOne.replace("|", " ")
                numberOfMatchesLineOne -= nbMatches
                if (numberOfMatchesLineOne == 0){
                for (j = 0; j < lines.length;j++){
                    if (lines[j] == 1)
                        lines.splice(j,1)
                }}
            break
        case 2 :
            for (i = 0;i < nbMatches;i++)
                lineTwo = lineTwo.replace("|", " ")
                numberOfMatchesLineTwo -= nbMatches
                if (numberOfMatchesLineTwo == 0){
                    for (j = 0; j < lines.length;j++){
                        if (lines[j] == 2)
                            lines.splice(j,1)
                    }}
            break
        case 3 :
            for (i = 0;i < nbMatches;i++)
                lineThree = lineThree.replace("|", " ")
                numberOfMatchesLineThree -= nbMatches
                if (numberOfMatchesLineThree == 0){
                    for (j = 0; j < lines.length;j++){
                        if (lines[j] == 3)
                            lines.splice(j,1)
                    }}
            break
        case 4 :
            for (i = 0;i < nbMatches;i++)
                lineFour = lineFour.replace("|", " ")
                numberOfMatchesLineFour -= nbMatches
                if (numberOfMatchesLineFour == 0){
                    for (j = 0; j < lines.length;j++){
                        if (lines[j] == 4)
                            lines.splice(j,1)
                    }}
            break
        default :
            console.log("Game Over")
            gameOver = true
    } 
}

function askMyLine(){
    // Demande à l'utilisateur la ligne
    myLine = readlineSync.question("Line : ")
    if (verifyLign(myLine)){
        myNumberOfMatches = readlineSync.question("Matches : ")
        if (!verifyMatches(myLine, myNumberOfMatches)) {
            askMyLine()
        }
    }
    else {
        askMyLine()
    }   
}


// Affiche les allumettes
function showAllumettes(lineOne, lineTwo, lineThree, lineFour){
    console.log("*********")
    console.log(lineOne)
    console.log(lineTwo)
    console.log(lineThree)
    console.log(lineFour)
    console.log("*********")
}
function verifyLign(myLine) {
    if (myLine >= 1 && myLine <= 4){
        return true
    }
    else if (myLine > 4 || myLine == 0){
        console.log("Error : this line is out of range ")
        return false
    }
    else if (myLine < 0){
        console.log("Error: invalid input (positive number expected)")
        return false
    }
    else {
        console.log("Error: invalid input (positive number expected)")
        return false
    }
}

function verifyMatches(myLine, myNumberOfMatches) {
    if (myNumberOfMatches == 0) {
        console.log ("You have to remove at least one match")
        return false
    }
    else if (myNumberOfMatches < 0 || !Number.isInteger(parseInt(myNumberOfMatches,10))){
        console.log(myNumberOfMatches)
        console.log("Error : invalid input (positive number expected)")
        return false
    }
    // Vérifie qu'il y a assez d'allumettes à retirer
    else {
        if (myLine == 1 && myNumberOfMatches > numberOfMatchesLineOne) {
            console.log("not enough matches on this line")
            return false
        }
        if (myLine == 2 && myNumberOfMatches > numberOfMatchesLineTwo) {
            console.log("not enough matches on this line")
            return false
        }
        if (myLine == 3 && myNumberOfMatches > numberOfMatchesLineThree) {
            console.log("not enough matches on this line") 
            return false
        }
        if (myLine == 4 && myNumberOfMatches > numberOfMatchesLineFour) {
            console.log("not enough matches on this line")
            return false
        }
        else {
            return true
        }
    }
}


function aiChooses () {
    const isTrue = true;
    aiLine = getRandomItem(lines)
    
    
    if (aiLine == 1){
        aiMatches = getRandomInt(numberOfMatchesLineOne)
    }
    else if (aiLine == 2){
        aiMatches = getRandomInt(numberOfMatchesLineTwo)
    }
    else if (aiLine == 3){
        aiMatches = getRandomInt(numberOfMatchesLineThree)
    }
    else if (aiLine == 4){
        aiMatches = getRandomInt(numberOfMatchesLineFour)
    }
    console.log("AI removed " + aiMatches + " match(es) from line " + aiLine)
    removeMatch(aiLine, aiMatches);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1)
}

function getRandomItem(item){
    return item[Math.floor(Math.random()*item.length)]
}

ailumette()
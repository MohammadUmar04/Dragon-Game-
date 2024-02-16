
function startGame() {
    document.getElementById('output').innerHTML = "You are standing in front of two caves. Choose wisely.";
    document.getElementById('output').innerHTML += '<br><button onclick="chooseCave(1)">Enter Cave 1</button>';
    document.getElementById('output').innerHTML += '<br><button onclick="chooseCave(2)">Enter Cave 2</button>';
}

function chooseCave(caveNumber) {
    document.getElementById('output').innerHTML = `You approach Cave ${caveNumber}.`;
    var friendlyDragon = Math.floor(Math.random() * 2) + 1;

    if (caveNumber == friendlyDragon) {
        document.getElementById('output').innerHTML += '<br>Congratulations! The dragon is friendly. You receive a bag of treasure!';
    } else {
        document.getElementById('output').innerHTML += '<br>Oh no! The dragon is greedy and hungry. You become his meal.';
    }

    document.getElementById('output').innerHTML += '<br><button onclick="startGame()">Play Again</button>';
}
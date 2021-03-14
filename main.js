let canvas = document.querySelector("#canvas");
//Is a DOMString containing the context identifier defining the drawing context associated to the canvas.
let ctx = canvas.getContext('2d');


/*-----------IMAGE TILES------------*/

//Characters
let player = new Image();
player.src = 'img/neo.jpg';

//wall
let wall = new Image();
wall.src = 'img/wall.jpg';

//Roads 
let road = new Image();
road.src = 'img/bbackground.jpg';

//collectables
let pokeballImg = new Image();
pokeballImg.src = 'img/blue.jpg';

//trap
let trap = new Image();
trap.src = 'img/front.jpg';

//Next level
let lvl2 = new Image();
lvl2.src = 'img/wall.png';





/*-----------MAP------------*/
/*y=20 , x=10 
Multidimentionelle array*/
let levels = [
    [
        //1
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 3, 1, 1, 1, 1, 4, 4, 4, 0, 1, 0, 1, 1, 3, 1, 1, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 3, 0, 4, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 5],
        [0, 2, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 1, 3, 1, 1, 1, 0, 0, 0, 1, 0, 0, 4, 1, 0, 1, 0],
        [0, 3, 0, 1, 4, 4, 4, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0],
        [0, 3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 0, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 3, 0, 0, 1, 1, 3, 0],
        [0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 5],
        [0, 3, 0, 1, 0, 0, 0, 1, 0, 0, 4, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 1, 0, 3, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]

]


/*-----------COUNTDOWN---------*/
let seconds = 60;
document.querySelector('#time-showing').innerText = seconds;
let time;



//Starter timeren
time = setInterval(function () {
    seconds--;
    document.querySelector('#time-showing').innerText = seconds;

    //Time up
    if (seconds == 0) {
        document.querySelector("#timetext").style.display = 'none';

       
        document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "GAME OVER" + '</br>' +
        "Pokeballs: " + score;

        document.getElementById("gameover").style.backgroundColor = 'black';

        document.getElementById("gameover").style.border = '3px solid green';
    };

}, 1000);

/*-----------LEVELS------------*/
// Next level
let levelIndex = 0;
let maze = levels[levelIndex];

function nextLevel() {
    levelIndex++;
    maze = levels[levelIndex];
    drawMaze();
}

/*-----------TILES------------*/
let tileSize = 50;

//et object, playerposition
let playerPosition = {
    x: 0,
    y: 0
};

//Roads
let road1 = 1;

//collect
let pokeballs = 3;

//plaer
let player1 = 2;

let trap1 = 4;

//wall
let wall1 = 0;

//next level
let levl2 = 5;


/*-----------SCORE AND LIFE------------*/
let score = 0;
document.querySelector("#boxscore").innerHTML = "Pokeballs: " + score;
let life = 3;
document.querySelector("#demo").innerHTML = "Life: " + life;


/*-----------DRAWING MAZE------------*/
function drawMaze() {

    for (let y = 0; y < maze.length; y++) {

        for (let x = 0; x < maze[y].length; x++) {

            if (maze[y][x] === road1) {
                ctx.drawImage(road, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === player1) {
                playerPosition.x = x;
                playerPosition.y = y;
                ctx.drawImage(player, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === road) {
                ctx.drawImage(road, x * tileSize, y * tileSize, tileSize, tileSize);
            }

            else if (maze[y][x] === trap1) {
            ctx.drawImage(trap, x * tileSize, y * tileSize, tileSize, tileSize);
            }
            //Decorations
            else if (maze[y][x] === wall1) {
                ctx.drawImage(wall, x * tileSize, y * tileSize, tileSize, tileSize);
            } 

            //collect
            else if (maze[y][x] === pokeballs) {
                ctx.drawImage(pokeballImg, x * tileSize, y * tileSize, tileSize, tileSize);
            }

            //levels
            else if (maze[y][x] === levl2) {
                ctx.drawImage(lvl2, x * tileSize, y * tileSize, tileSize, tileSize);
            }
        }
    }

}


//audio walk
function walk() {

    let gameSound = new Audio('gamesounds/hardshoe.mp3');
    gameSound.play();

}
//audio collect
function collect() {

    let gameSound = new Audio('gamesounds/big shoe.mp3');
    gameSound.play();

}
//audio collect
function attack() {

    let gameSound = new Audio('gamesounds/pill.mp3');
    gameSound.play();

}
//audio level up
function levelUp() {

    let gameSound = new Audio('gamesounds/pill.mp3');
    gameSound.play();

}


/*-----------WALKABLE TILES------------*/
//Walkable tiles function
function isWalkable(targetTile) {
    if (targetTile === road1 || targetTile === pokeballs ||
        targetTile === levl2 || targetTile === trap1)
        {
        return true;
    } else {
        return false;
    }
}


/*------------CONTROLS--------------- */
window.addEventListener('keydown', (e) => {

    //Bruger switch statement til at vælge 1 af mange kode blokke som skal executes.
    let targetTile;
    switch (e.keyCode) {
        case 37: //left
            targetTile = maze[playerPosition.y][playerPosition.x - 1];
            if (isWalkable(targetTile)) {
                maze[playerPosition.y][playerPosition.x - 1] = player1; //players nye position
                maze[playerPosition.y][playerPosition.x] = road1;
                drawMaze();
                walk();
                if (targetTile === pokeballs) {
                    score++;
                    collect();
                    document.getElementById("boxscore").innerHTML = "Pokeballs: " + score
                } else if (targetTile === trap1) {
                    life--;
                    attack();
                    document.getElementById("demo").innerHTML = "Life: " + life;
                    if (life < 1) {
                        document.querySelector("#timetext").style.display = 'none';
                        document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "GAME OVER" + '</br>' +
                            "Pokeballs: " + score;
                        document.getElementById("gameover").style.backgroundColor = 'black';
                        document.getElementById("gameover").style.border = '3px solid green';

                    }
                } else if (targetTile === score >= 10) {
                    document.querySelector("#timetext").style.display = 'none';
                    document.getElementById("winbox").innerHTML = "You won! Your score is " + score;
                } else if (targetTile === score < 10) {
                    document.querySelector("#timetext").style.display = 'none';

                    document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "GAME OVER" + '</br>' +
                        "Pokeballs: " + score;
                    document.getElementById("gameover").style.backgroundColor = 'black';
                    document.getElementById("gameover").style.border = '3px solid green';
                } else if (targetTile === levl2) {
                    levelUp();
                    nextLevel();
                }
            }
            break;
        case 39: //Right
            targetTile = maze[playerPosition.y][playerPosition.x + 1];
            if (isWalkable(targetTile)) {
                maze[playerPosition.y][playerPosition.x + 1] = player1; //players nye position
                maze[playerPosition.y][playerPosition.x] = road1;
                drawMaze();

                walk();
                if (targetTile === pokeballs) {
                    score++;
                    collect();
                    document.getElementById("boxscore").innerHTML = "Pokeballs: " + score;
                } else if (targetTile === trap1) {
                    life--;
                    attack();
                    document.getElementById("demo").innerHTML = "Life: " + life;

                    if (life < 1) {
                        document.querySelector("#timetext").style.display = 'none';
                        document.getElementById("gameover").innerHTML = '</br>' + '</br>' +
                            "GAME OVER" + '</br>' +
                            "Pokeballs: " + score + '</br>';
                        document.getElementById("gameover").style.backgroundColor = 'black';
                        document.getElementById("gameover").style.border = '3px solid green';

                    }
                } else if (targetTile === score >= 10) {

                    document.querySelector("#timetext").style.display = 'none';
                    document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "YOU WON" +
                        '</br>' +
                        "Pokeballs: " + score + '</br>' +
                        "Survivor(s) score: " + saved + '</br>';
                    document.getElementById("gameover").style.backgroundColor = 'black';
                    document.getElementById("gameover").style.border = '3px solid green';

                } else if (targetTile === score < 10) {

                    document.querySelector("#timetext").style.display = 'none';
                    document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "GAME OVER" +
                        '</br>' +
                        "Pokeballs: " + score + '</br>' +
                        "Survivor(s) score: " + saved + '</br>';
                    document.getElementById("gameover").style.backgroundColor = 'black';
                    document.getElementById("gameover").style.border = '3px solid green';
                } else if (targetTile === levl2) {
                    levelUp();
                    nextLevel();
                }

            }
            break;
        case 38: //Up
            targetTile = maze[playerPosition.y - 1][playerPosition.x];
            if (isWalkable(targetTile)) {
                maze[playerPosition.y - 1][playerPosition.x] = player1; //players nye position
                maze[playerPosition.y][playerPosition.x] = road1;
                drawMaze();
                walk();
                if (targetTile === pokeballs) {
                    score++;
                    collect();
                    document.getElementById("boxscore").innerHTML = "Pokeballs: " + score;;
                } else if (targetTile === trap1) {
                    life--;
                    document.getElementById("demo").innerHTML = "Life: " + life;
                    attack();
                    if (life < 1) {
                        document.querySelector("#timetext").style.display = 'none';
                        document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "GAME OVER" + '</br>' +
                            "Pokeballs: " + score;
                        document.getElementById("gameover").style.backgroundColor = 'black';
                        document.getElementById("gameover").style.border = '3px solid green';

                    }
                } else if (targetTile === score >= 10) {
                    document.querySelector("#timetext").style.display = 'none';

                    document.getElementById("winbox").innerHTML = "You won! Your score is " + score;

                } else if (targetTile === score < 10) {

                    document.querySelector("#timetext").style.display = 'none';
                    document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "GAME OVER" + '</br>' +
                        "Pokeballs: " + score + '</br>' +
                        "Survivor(s) score: " + saved + '</br>';
                    document.getElementById("gameover").style.backgroundColor = 'black';
                    document.getElementById("gameover").style.border = '3px solid green';
                } else if (targetTile === levl2) {
                    levelUp();
                    nextLevel();
                }
            }
            break;
        case 40: //down
            targetTile = maze[playerPosition.y + 1][playerPosition.x];
            if (isWalkable(targetTile)) {
                maze[playerPosition.y + 1][playerPosition.x] = player1; //players nye position
                maze[playerPosition.y][playerPosition.x] = road1;
                drawMaze();
                walk();
                if (targetTile === pokeballs) {
                    score++;
                    collect();
                    document.getElementById("boxscore").innerHTML = "Pokeballs: " + score;
                } else if (targetTile === trap1) {
                    life--;
                    document.getElementById("demo").innerHTML = "Life: " + life;
                    attack();
                    if (life < 1) {
                        document.querySelector("#timetext").style.display = 'none';
                        document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "GAME OVER" + '</br>' +
                            "Pokeballs: " + score;
                        document.getElementById("gameover").style.backgroundColor = 'black';
                        document.getElementById("gameover").style.border = '3px solid green';
                    }
                } else if (targetTile === score >= 10) {
                    document.getElementById("winbox").innerHTML = "You won! Your score is " + score;
                } else if (targetTile === score < 10) {
                    document.getElementById("gameover").innerHTML = "You lost! Your scored " + score;
                } else if (targetTile === levl2) {
                    levelUp();
                    nextLevel();

                }
            }
            break;


    }
    console.log('life' + life)
    console.log(score);
})


window.addEventListener("load", drawMaze);

// stopper piletaster scroll

window.addEventListener(
    "keydown",
    function (e) {
      // space and arrow keys
      if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
      }
    },
    false
  );


let canvas = document.querySelector("#canvas");
//Is a DOMString containing the context identifier defining the drawing context associated to the canvas.
let ctx = canvas.getContext("2d");

/*-----------IMAGE TILES------------*/

//Characters
let playerImg = new Image();
playerImg.src = "img/neo.jpg";

//wall
let wallImg = new Image();
wallImg.src = "img/wall.jpg";

//Roads
let roadImg = new Image();
roadImg.src = "img/bbackground.jpg";

//collectables
let pokeballImg = new Image();
pokeballImg.src = "img/blue.jpg";

//trap
let trapImg = new Image();
trapImg.src = "img/front.jpg";

//Next level
let lvlImg = new Image();
lvlImg.src = "img/wall.png";

//fnish
let finishImg = new Image();
finishImg.src = 'img/front.png';

/*-----------MAP------------*/
/*y=20 , x=12 
Multidimentionelle array*/
let levels = [
  [
    //1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 4, 3, 1, 1, 0, 3, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 3, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 2, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 4, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 3, 0, 1, 1, 1, 0, 0, 3, 0, 0, 3, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 4, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 4, 1, 3, 3, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 4, 1, 3, 3, 0],
    [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 4, 1, 3, 3, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 4, 0, 3, 0, 4, 0, 1, 0, 0, 0, 0, 3, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 4, 3, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 4, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 4, 3, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
];

/*-----------COUNTDOWN---------*/
let seconds = 60;
document.querySelector("#time-showing").innerText = seconds;
let time;

//Starter timeren
time = setInterval(function () {
  seconds--;
  document.querySelector("#time-showing").innerText = seconds;

  //Time up
  if (seconds == 0) {
    document.querySelector("#timetext").style.display = "none";

    document.getElementById("gameover").innerHTML =
      "</br>" + "</br>" + "GAME OVER" + "</br>" + "Pills collected " + score;

    document.getElementById("gameover").style.backgroundColor = "black";

    document.getElementById("gameover").style.border = "3px solid red";
  }
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
  y: 0,
};


let road = 1;

let pokeballs = 3;

let player = 2;

let trap = 4;

let wall = 0;

let lvl = 5;

let finish = 6

/*-----------SCORE AND LIFE------------*/
let score = 0;
document.querySelector("#boxscore").innerHTML = "Pills collected " + score;
let life = 3;
document.querySelector("#demo").innerHTML = "Life: " + life;

/*-----------DRAWING MAZE------------*/
function drawMaze() {
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (maze[y][x] === road) {
        ctx.drawImage(roadImg, x * tileSize, y * tileSize, tileSize, tileSize);
      } else if (maze[y][x] === player) {
        playerPosition.x = x;
        playerPosition.y = y;
        ctx.drawImage(playerImg, x * tileSize, y * tileSize, tileSize, tileSize);
      } else if (maze[y][x] === road) {
        ctx.drawImage(roadImg, x * tileSize, y * tileSize, tileSize, tileSize);
      } else if (maze[y][x] === trap) {
        ctx.drawImage(trapImg, x * tileSize, y * tileSize, tileSize, tileSize);
      }
      //Decorations
      else if (maze[y][x] === wall) {
        ctx.drawImage(wallImg, x * tileSize, y * tileSize, tileSize, tileSize);
      }

      //collect
      else if (maze[y][x] === pokeballs) {
        ctx.drawImage(
          pokeballImg, x * tileSize, y * tileSize, tileSize, tileSize);
      }

      //levels
      else if (maze[y][x] === lvl) {
        ctx.drawImage(lvlImg, x * tileSize, y * tileSize, tileSize, tileSize);
      }
      //collect
      else if (maze[y][x] === finish) {
        ctx.drawImage(
          finishImg, x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
  }
}

//audio walk
function walk() {
  let gameSound = new Audio("gamesounds/hardshoe.mp3");
  gameSound.play();
}
//audio collect
function collect() {
  let gameSound = new Audio("gamesounds/SpaceLaserShot.mp3");
  gameSound.play();
}
//audio collect
function trapsound() {
  let gameSound = new Audio("gamesounds/MachineGunSnglBur.mp3");
  gameSound.play();
}
//audio level up
function levelUp() {
  let gameSound = new Audio("gamesounds/ClocksStopwatchTic.mp3");
  gameSound.play();
}

function Goal() {
    let gameSound = new Audio("gamesounds/SpaceLaserShot.mp3");
    gameSound.play();
  }

/*-----------WALKABLE TILES------------*/
//Walkable tiles function
function isWalkable(targetTile) {
  if (
    targetTile === road ||
    targetTile === pokeballs ||
    targetTile === lvl ||
    targetTile === trap ||
    targetTile === finish
  ) {
    return true;
  } else {
    return false;
  }
}

/*------------CONTROLS--------------- */
window.addEventListener("keydown", (e) => {
  //Bruger switch statement til at vælge 1 af mange kode blokke som skal executes.
  let targetTile;
  switch (e.keyCode) {
    case 37: //left
      targetTile = maze[playerPosition.y][playerPosition.x - 1];
      if (isWalkable(targetTile)) {
        maze[playerPosition.y][playerPosition.x - 1] = player; //players nye position
        maze[playerPosition.y][playerPosition.x] = road;
        drawMaze();
        walk();
        if (targetTile === pokeballs) {
          score++;
          collect();
          document.getElementById("boxscore").innerHTML = "Pills collected " + score;
        } else if (targetTile === trap) {
          life--;
          trapsound();
          document.getElementById("demo").innerHTML = "Life: " + life;
          if (life < 1) {
            document.querySelector("#timetext").style.display = "none";
            document.getElementById("gameover").innerHTML =
              "</br>" + "</br>" + "GAME OVER" + "</br>" + "Pills collected " + score;
            document.getElementById("gameover").style.backgroundColor = "black";
            document.getElementById("gameover").style.border =
              "3px solid red";
          }
        } else if (targetTile === finish && score >= 10) {
            document.querySelector("#timetext").style.display = 'none';
            document.getElementById("winbox").innerHTML = "You won! Your score is " + score;
        } else if (targetTile === finish && score < 10) {
            document.querySelector("#timetext").style.display = 'none';

            document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "GAME OVER" + '</br>' +
                "Pill(s): " + score;
            document.getElementById("gameover").style.backgroundColor = 'black';
            document.getElementById("gameover").style.border = '3px solid blue';
        } else if (targetTile === lvl) {
          levelUp();
          nextLevel();
        }
      }
      break;
    case 39: //Right
      targetTile = maze[playerPosition.y][playerPosition.x + 1];
      if (isWalkable(targetTile)) {
        maze[playerPosition.y][playerPosition.x + 1] = player; //players nye position
        maze[playerPosition.y][playerPosition.x] = road;
        drawMaze();

        walk();
        if (targetTile === pokeballs) {
          score++;
          collect();
          document.getElementById("boxscore").innerHTML = "Pills collected " + score;
        } else if (targetTile === trap) {
          life--;
          trapsound();
          document.getElementById("demo").innerHTML = "Life: " + life;

          if (life < 1) {
            document.querySelector("#timetext").style.display = "none";
            document.getElementById("gameover").innerHTML =
            "</br>" + "</br>" + "YOU WON" + "</br>" +"Pills collected " + score;
            document.getElementById("gameover").style.backgroundColor = "black";
            document.getElementById("gameover").style.border =
              "3px solid blue";
          }
        } else if (targetTile === finish && score >= 10) {

            document.querySelector("#timetext").style.display = 'none';
            document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "YOU WON" +
                '</br>' +
                "Pills : " + score;
            document.getElementById("gameover").style.backgroundColor = 'black';
            document.getElementById("gameover").style.border = '3px solid blue';

        } else if (targetTile === finish && score < 10) {

            document.querySelector("#timetext").style.display = 'none';
            document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "GAME OVER" +
                '</br>' +
                "Pills : " + score
            document.getElementById("gameover").style.backgroundColor = 'black';
            document.getElementById("gameover").style.border = '3px solid blue';
        } else if (targetTile === lvl) {
          levelUp();
          nextLevel();
        }
      }
      break;
    case 38: //Up
      targetTile = maze[playerPosition.y - 1][playerPosition.x];
      if (isWalkable(targetTile)) {
        maze[playerPosition.y - 1][playerPosition.x] = player; //players nye position
        maze[playerPosition.y][playerPosition.x] = road;
        drawMaze();
        walk();
        if (targetTile === pokeballs) {
          score++;
          collect();
          document.getElementById("boxscore").innerHTML = "Pills collected " + score;
        } else if (targetTile === trap) {
          life--;
          document.getElementById("demo").innerHTML = "Life: " + life;
          trapsound();
          if (life < 1) {
            document.querySelector("#timetext").style.display = "none";
            document.getElementById("gameover").innerHTML =
              "</br>" + "</br>" + "GAME OVER" + "</br>" + "Pills collected " + score;
            document.getElementById("gameover").style.backgroundColor = "black";
            document.getElementById("gameover").style.border =
              "3px solid blue";
          }
        } else if (targetTile === finish && score >= 10) {
            document.querySelector("#timetext").style.display = 'none';

            document.getElementById("winbox").innerHTML = "You won! Your score is " + score;

        } else if (targetTile === finish && score < 10) {

            document.querySelector("#timetext").style.display = 'none';
            document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "GAME OVER" + '</br>' +
                "Pills : " + score;
            document.getElementById("gameover").style.backgroundColor = 'black';
            document.getElementById("gameover").style.border = '3px solid blue';
        } else if (targetTile === lvl) {
          levelUp();
          nextLevel();
        }
      }
      break;
    case 40: //down
      targetTile = maze[playerPosition.y + 1][playerPosition.x];
      if (isWalkable(targetTile)) {
        maze[playerPosition.y + 1][playerPosition.x] = player; //players nye position
        maze[playerPosition.y][playerPosition.x] = road;
        drawMaze();
        walk();
        if (targetTile === pokeballs) {
          score++;
          collect();
          document.getElementById("boxscore").innerHTML = "Pills collected " + score;
        } else if (targetTile === trap) {
          life--;
          document.getElementById("demo").innerHTML = "Life: " + life;
          trapsound();
          if (life < 1) {
            document.querySelector("#timetext").style.display = "none";
            document.getElementById("gameover").innerHTML =
              "</br>" + "</br>" + "GAME OVER" + "</br>" + "Pills collected " + score;
            document.getElementById("gameover").style.backgroundColor = "black";
            document.getElementById("gameover").style.border =
              "3px solid red";
          }
        } else if (targetTile === finish && score >= 10) {
            document.getElementById("winbox").innerHTML = "You won! Your score is " + score;
        } else if (targetTile === finish && score < 10) {
            document.getElementById("gameover").innerHTML = "You lost! Your scored " + score +
                 '</br>';
        } else if (targetTile === levl2) {
            levelUp();
            nextLevel();
        }
      }
      break;
  }

});

window.addEventListener("load", drawMaze);

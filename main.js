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
  
  window.onscroll = function () {
    if (window.scrollY < 2000) {
      document.getElementById("scroll").style.top = "0";
    } else {
      document.getElementById("scroll").style.top = "-150px";
    }
  };
  
  // gamegenerator
  
  let canvas = document.querySelector("#canvas");
  let ctx = canvas.getContext("2d");
  
  let img1 = new Image();
  img1.src = "img/neo.jpg";
  
  let img2 = new Image();
  img2.src = "img/wall.png";
  
  let img3 = new Image();
  img3.src = "img/wall.jpg";
  
  let img4 = new Image();
  img4.src = "img/blue.jpg";
  
  let img5 = new Image();
  img5.src = "img/red.jpg";
  
  maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
  ];
  
  let tileSize = 50;
  
  let playerPosition = {
    x: 0,
    y: 0,
  };
  
  let player = 2;
  let wall = 1;
  let road = 0;
  let red = 3;
  let blue = 4;
  
  function drawMaze() {
    for (let y = 0; y < maze.length; y++) {
      for (let x = 0; x < maze[y].length; x++) {
        //gå vej
        if (maze[y][x] == road) {
          ctx.drawImage(img2, x * tileSize, y * tileSize, tileSize, tileSize);
          //væg
        } else if (maze[y][x] == wall) {
          ctx.drawImage(img3, x * tileSize, y * tileSize, tileSize, tileSize);
        } //player
        else if (maze[y][x] == player) {
          playerPosition.x = x;
          playerPosition.y = y;
          console.log(playerPosition);
          ctx.fillStyle = "red";
          ctx.drawImage(img1, x * tileSize, y * tileSize, tileSize, tileSize);
        } //mål
        else if (maze[y][x] == 3) {
          ctx.fillStyle = "blue";
          ctx.drawImage(img4, x * tileSize, y * tileSize, tileSize, tileSize);
        } else if (maze[y][x] == 4) {
          ctx.fillStyle = "red";
          ctx.drawImage(img5, x * tileSize, y * tileSize, tileSize, tileSize);
        }
      }
    }
  }
  
  function isWalkable(targetTile) {
    if (targetTile === road || targetTile === 3 || targetTile === 4) {
      return true;
    } else {
      return false;
    }
  }
  
  function walk() {
    let gameSound = new Audio("gamesounds/hardshoe.mp3");
    gameSound.play();
  }
  function walk2() {
    let gameSound = new Audio("gamesounds/big shoe.mp3");
    gameSound.play();
  }
  function pill() {
    let gameSound = new Audio("gamesounds/pill.mp3");
    gameSound.play();
  }
  window.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
      case 37: //left
        targetTile = maze[playerPosition.y][playerPosition.x - 1];
        if (isWalkable(targetTile)) {
          maze[playerPosition.y][playerPosition.x - 1] = player; //players nye position
          maze[playerPosition.y][playerPosition.x] = road;
          drawMaze();
          walk2();
          if (targetTile === 3) {
            pill();
            document.getElementById("winbox").innerHTML =
              "You choose blue...  remain in blissful ignorance ";
            setTimeout(function () {
              window.location.reload(1);
            }, 3500);
  
            clickCounterblue();
  
            function clickCounterblue() {
              if (typeof Storage !== "undefined") {
                if (sessionStorage.clickcountblue) {
                  sessionStorage.clickcountblue =
                    Number(sessionStorage.clickcountblue) + 1;
                } else {
                  sessionStorage.clickcountblue = 1;
                }
                document.getElementById("resultblue").innerHTML =
                  "You have chosen bluepill: " +
                  sessionStorage.clickcountblue +
                  " time(s).";
              } else {
                document.getElementById("resultblue").innerHTML =
                  "Sorry, your browser does not support web storage...";
              }
            }
          }
        }
  
        break;
  
      case 38: // up
        if (maze[playerPosition.y - 1][playerPosition.x] === road) {
          maze[playerPosition.y - 1][playerPosition.x] = 2; //players nye position
          maze[playerPosition.y][playerPosition.x] = road; //players nye position
          drawMaze();
          walk();
        }
        break;
  
      case 39: //Rigth
        targetTile = maze[playerPosition.y][playerPosition.x + 1];
        if (isWalkable(targetTile)) {
          maze[playerPosition.y][playerPosition.x + 1] = player; //players nye position
          maze[playerPosition.y][playerPosition.x] = road;
          drawMaze();
          walk2();
          if (targetTile === 4) {
            pill();
            document.getElementById("winbox").innerHTML =
              "You choose red.... unpleasant truth, welcome to the real world";
  
            var element = document.getElementById("canvas");
            element.classList.add("shake");
  
            clickCounter();
  
            function clickCounter() {
              if (typeof Storage !== "undefined") {
                if (sessionStorage.clickcount) {
                  sessionStorage.clickcount =
                    Number(sessionStorage.clickcount) + 1;
                } else {
                  sessionStorage.clickcount = 1;
                }
                document.getElementById("result").innerHTML =
                  "You have chosen redpill: " +
                  sessionStorage.clickcount +
                  " time(s).";
              } else {
                document.getElementById("result").innerHTML =
                  "Sorry, your browser does not support web storage...";
              }
            }
          }
        }
        break;
      case 40: // down
        if (maze[playerPosition.y + 1][playerPosition.x] === road) {
          maze[playerPosition.y + 1][playerPosition.x] = 2; //players nye position
          maze[playerPosition.y][playerPosition.x] = road; //players nye position
          drawMaze();
          walk();
        }
        break;
    }
  });
  window.addEventListener("load", drawMaze);
  
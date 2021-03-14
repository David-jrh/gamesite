<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Welcome</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
    <link href="main.css" rel="stylesheet" type="text/css">
</head>             
<body>             

    <!-- <audio autoplay="autoplay" loop>
        <source src="gamesounds/t.mp3" />
    </audio> -->

    <center>
        <h1>Gametitle</h1>
        <canvas width="1000" height="600" id="canvas"></canvas>
    </center>
    <center>
        <div id="timetext">You've got
            <span id="time-showing"></span> secounds left!</div>
    </center>

    <div id="gameover">
    </div>
    <div id="winbox"></div>


    <div id="text">
        <div id="demo">Life:</div>
        <div id="boxscore">score:</div>   
    </div>


    <script src="main.js"></script>
</body>
</hmtl>
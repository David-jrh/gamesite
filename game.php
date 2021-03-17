<!DOCTYPE html>
<html lang="en">

<?php include 'reqlogin.php';?>

<head>
    <title>Welcome</title>
    <?php include 'head.php';?>
</head>

<body>

    <!-- <audio autoplay="autoplay" loop>
        <source src="" />
    </audio> -->

    <div class="buttons">
        <a class="mybutton" href="index.php">Back to site</a>
        <a class="mybutton" href="game.php">Start over</a>
    </div>

    <center>
        <h1>Gametitle</h1>
        <canvas width="1000" height="600" id="canvas"></canvas>
    </center>
    <center>
        <div id="timetext">You've got
            <span id="time-showing"></span> secs left!
        </div>
    </center>

    <div id="gameover"></div>
    <div id="winbox"></div>


    <div id="text">
        <div id="demo">Life:</div>
        <div id="boxscore">score:</div>
    </div>

    <?php include 'footer.php';?>

    <script src="scripts/main.js"></script>
</body>
</hmtl>
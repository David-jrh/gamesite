<?php include 'reqlogin.php';?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Welcome</title>
    <?php include 'head.php';?>
</head>

<body>
    <?php include 'header.php';?>

<!--start wrapper-->
<div class="wrapper">
   
    <h2>Hi, <?php echo htmlspecialchars($_SESSION["username"]); ?>. Welcome to the site.</h2>


<div class="cointainer whitebg">
            <div class="row">
                <div class="col-sm-6 col-m-12 col-l-12 ">
                   <center> <a href="game.php" class="mybutton"><img width="500px" src="img/game.jpg" alt="picture of game"></a>  </center> 

                </div>
                <div class="col-sm-6 col-m-12 col-l-12 gameplay-text ">
                <h2>How to play</h2>
        <p>
        Use the arrow keys to move Neo around. Your goal is to collect minimum 10 pills.
        Progres through the Matrix and meet up with Trinity to leave The Matrix, before the times run out!
        while mostly avoid fighting agent Smith. You have 60 seconds!  
        </p>
        <a href="game.php" class="mybutton">Play game</a>
</div>

    <div class="cointainer howto-desktop">
            <div class="row wrapit">
                <div class="col-sm-6 col-m-12 col-l-12 gameplay-text">
                <h2>Good things to know</h2>
                <p>You need 10 or more Pills, there is more pills then you need to win the game!
                     or else when u try to leave the matrix you will losse even if you lost no
                      health and enter before the time runs out. 
                      <br>Agent Smith will try to block you from reaching the goal, 
                      since u have 3 health u are able to fight him or his clones max 2 times, be tactical!
                
        </p>
                   

                </div>
                <div class="col-sm-6 col-m-12 col-l-12 ">
                <center> <img width="800px" src="img/M1.png" alt="Neo">  </center>
                </div>
</div>
</div>
</div>


<div class="cointainer whitebg">
            <div class="row">
                <div class="col-sm-6 col-m-12 col-l-12 ">
                   <center> <img width="500px" src="img/m2.jpg" alt="MR. Smith">  </center> 

                </div>
                <div class="col-sm-6 col-m-12 col-l-12 gameplay-text ">
                <h2>Credit</h2>
        <p>this game was made with a comedy touch, and is not in any regrads meant to miscredit the people behind the movies the matrix. 
            have fun and remember to stay awake.
        </p>

</div>
</div>
</div>

</div>

</div>
 <!-- end wrapper -->
    <?php include 'footer.php';?>

    <!-- <script src="scripts/main.js"></script> -->
</body>
</hmtl>
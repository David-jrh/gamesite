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
                   <center> <img width="500px" src="img/game.jpg" alt="picture of game">  </center> 

                </div>
                <div class="col-sm-6 col-m-12 col-l-12 gameplay-text ">
                <h2>How to play</h2>
        <p>
        Use the arrow keys to move neo around. Your goal is to collect all the pills before the time runs out and leave the matrix,
         while mostly avoiding Mr. Anderson you can fight him 2 times before its game over. 
        </p>

</div>

    <div class="cointainer howto-desktop">
            <div class="row wrapit">
                <div class="col-sm-6 col-m-12 col-l-12 gameplay-text">
                <h2>Good things to know</h2>
                <p>You need all the 10 or more Pills,
                     or else when u try to leave the matrix you will losse even if you lost no health and enter before the time runs out. you have 60 seconds!
                
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
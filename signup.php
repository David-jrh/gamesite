<?php 
    //signgup form
    //isset=Variablen er sat og ikke null(ingen værdi i variablen)
    if(isset($_POST['submit'])){
        require_once('connect.php');
        //basic security (real_escape_string) avoids SQL injection escapes special characters
        // $conn giver adgang til databse via connect.php
        $username = $conn->real_escape_string($_POST['username']);
        $email = $conn->real_escape_string($_POST['email']);
        //The sha1() function uses the US Secure Hash Algorithm 1.
        $password = sha1($_POST['password']);
        //Check om username eksisterer else (via query som sammenligner med database)
        $check = $conn->query("SELECT username from users WHERE username = '$username'");

        //check if query return anything, if not no match in database user has to register
        if($check->num_rows == 1) echo "<script>alert('Username already exist, try a new one.');</script>";
        else{
            //opretter en sql sætning til at inserte bruger i database
            $insert = "INSERT INTO users (username, email, `password`) VALUE ('$username', '$email', '$password')";
        //hvis sætning overensstemmer med data base echo diverse
            if($conn->query($insert)){
                echo "<script>alert('Welcome: ".$username." you are now signed up!');</script>";
                echo '
                <a href="login.php" id="loginbut" class="mybutton">Log in now</a>
               ';
            }
            else{
                echo "<script>alert('Something went wrong');</script>";
            }
        }
        //close connection
        $conn->close();
    }
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <title>Sign up</title>
    <?php include 'head.php';?>
</head>

<body>
<div class="signup-wrap">
    <h2>Signup a user</h2>
<!-- id app -> new vue app -->
<!-- checkform vue -->
<form id="app" @submit="checkForm" action="signup.php" method="post" class="signup-form" novalidate="true">
  <!-- if og for sætting" -->
  <p v-if="errors.length" style="color: red;">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" style="color: red;">{{ error }}</li>
    </ul>
  </p>
  
                        <div class="form-group">
                            <label class="form-label" id="name" for="name"></label>
                            <input type="text" name="username" id="username" v-model="username" placeholder="Username">
                        </div>

                        <div class="form-group">
                            <label class="form-label" id="lemail" for="email"></label>
                            <input type="email" name="email" id="email" v-model="email" placeholder="Email">
                        </div>

                        <div class="form-group">
                            <label class="form-label" id="lpassword" for="password"></label>
                            <input type="text" name="password" id="password" v-model="password" placeholder="Password">
                        </div>

  <!-- submitter form -->
  <button name="submit" value="submit" id="submit" type="submit" class="btn btn-default btn-gap">SEND</button>
  

</form>

                    
<!--end signup-wrap-->
</div>
<script src="scripts/vuesignup.js"></script>
</body>
</html>

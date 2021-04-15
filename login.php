<?php
    //login
    //isset=Variablen er sat og ikke null(ingen værdi i variablen)
    if(isset($_POST['submit'])){
        require_once("connect.php");
        $username = $conn->real_escape_string($_POST['username']);
        $password = sha1($_POST['password']);
        $sql = "SELECT id, email, username, `password` FROM users WHERE
        username = '$username' AND `password` = '$password'";
        $result = $conn->query($sql);
        $conn->close();
        //check if query return anything, if not no match in database user has to register
        if(!$result->num_rows == 1){
            echo "<script>alert('Invalid username or password');</script>";
        }
        else{
            //fetcher rows fra data
            while($row = $result->fetch_assoc()){
                $email = $row['email'];
             }
            //PHP session start
            session_start();
            $_SESSION['loggedin'] = true;
            $_SESSION['username'] = $username;
            $_SESSION['email'] = $email;
            
            //redirect and stop present code
            header('Location: index.php');
            exit();
        }
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Welcome</title>
    <?php include 'head.php';?>
</head>

<body>

<div class="signup-wrap">

<h2>login</h2>

<form id="app2" @submit="checkForm" action="login.php" method="post" class="signup-form login-form" novalidate="true">

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
        <label class="form-label" id="lpassword" for="password"></label>
        <input type="text" name="password" id="password" v-model="password" placeholder="Password">
    </div>

    <div class="buttons butsign">
        <a class="mybutton" href="signup.php">Sign up</a>
    </div>
    
    <button name="submit" value="submit" id="submit" type="submit" class="btn btn-default btn-gap">SEND</button>

   
</form>




    <!--end signup-wrap-->
</div>


<script src="scripts/vuelogin.js"></script>
</body>
</hmtl>
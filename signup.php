<?php 
    //registration form
    if(isset($_POST['submit'])){
        require_once('connect.php');
        //basic security (real_escape_string) avoids SQL injection (' or 0=0 #)
        $username = $conn->real_escape_string($_POST['username']);
        $email = $conn->real_escape_string($_POST['email']);
        $password = sha1($_POST['password']);
        //Check if username exist else insert
        $check = $conn->query("SELECT username from users WHERE username = '$username'");

        if($check->num_rows == 1) echo "<script>alert('Username already exist');</script>";
        else{
            $insert = "INSERT INTO users (username, email, `password`) VALUE ('$username', '$email', '$password')";
            if($conn->query($insert)){
                echo "<script>alert('Welcome: ".$username." you are now registered!');</script>";
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
    <title>Welcome</title>
    <?php include 'head.php';?>
</head>

<body>

    <div>
        <h2>signup a profile</h2>

        <form id="app" @submit="checkForm" action="signup.php" method="post" class="register-form" novalidate="true">

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




            <button name="submit" value="submit" id="submit" type="submit" class="btn btn-default btn-gap">SEND</button>


        </form>

    </div>


</body>

</html>
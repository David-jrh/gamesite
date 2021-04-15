<!DOCTYPE html>
<html lang="en">
            <!--nav-->
            <div class="bs">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a href="index.php" class="navbar-brand">
                        <img src="img/logo.png" height="40" alt="CoolBrand">
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav">
                        <a href="index.php" class="nav-item nav-link">Home</a>
                            <a href="comment.php" class="nav-item nav-link">Comments</a>
                            <a href="contact.php" class="nav-item nav-link">Contact</a>
                            <a href="game.php" class="nav-item nav-link">Play game</a>
                        </div>
                        <div class="navbar-nav ml-auto login">
                            <a href="signup.php" class="nav-item nav-link">Sign up</a>
                        
                        <?php
                    if (($_SESSION['loggedin'] = true)) {
                        echo '
                        <a href="logout.php" id="logout_btn" class="nav-item nav-link ">Log out</a>
                       ';
                    } else {
                        echo '
                        <a href="login.php" class="nav-item nav-link"  id="login_btn">Login</a>
                      
                        ';
                    }
                    ?>
                    
                        </div>
                    </div>
                </nav>
            </div>

            <!--nav end-->
        

    <script src="scripts/main.js"></script>

</html>


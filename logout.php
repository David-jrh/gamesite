<?php
    // Logout 
    session_start();
    session_destroy();
    //redirect and stop present code
    header("Location: index.php"); 
    exit();
?>
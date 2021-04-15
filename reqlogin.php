<?php
// Initialize the session
session_start();

require_once "connect.php";
 
// Check if the user is logged in, if not then redirect him to login page
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
    ;
} else {
    header("location: login.php");
    echo "Please log in first to see this page.";
}
?>
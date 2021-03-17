<?php
// Initialize the session
session_start();

require_once "connect.php";
 
// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["logged_in"]) || $_SESSION["logged_in"] !== true){
    header("location: login.php");
    exit;
}
?>
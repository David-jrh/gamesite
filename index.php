<!DOCTYPE html>
<html lang="en">

<head>
    <title>Welcome</title>
   <?php include 'head.php';?>
</head>             
<body> 
<?php include 'header.php';?>

<h2>Hi, <?php echo htmlspecialchars($_SESSION["username"]); ?>. Welcome to the site.</h2>


<?php include 'footer.php';?>

<script src="main.js"></script>
</body>
</hmtl>
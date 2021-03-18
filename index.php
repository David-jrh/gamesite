<!DOCTYPE html>
<html lang="en">

<?php include 'reqlogin.php';?>

<head>
    <title>Welcome</title>
    <?php include 'head.php';?>
</head>

<body>
    <?php include 'header.php';?>

   
    <h2>Hi, <?php echo htmlspecialchars($_SESSION["username"]); ?>. Welcome to the site.</h2>


    <?php include 'footer.php';?>

    <script src="scripts/main.js"></script>
</body>
</hmtl>
<?php

$link = mysqli_connect("localhost", "root","", "gamesite");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Escape user inputs for security
$name = mysqli_real_escape_string($link, $_REQUEST['name']);
$mail = mysqli_real_escape_string($link, $_REQUEST['mail']);
$phone = mysqli_real_escape_string($link, $_REQUEST['phone']);
$content = mysqli_real_escape_string($link, $_REQUEST['content']);

 
// Attempt insert query execution
$sql = "INSERT INTO contact (`name`, mail, phone, `content`) VALUES ('$name', '$mail', '$phone', '$content')";
if(mysqli_query($link, $sql)){
    echo "<script>alert('Thank you for your content');</script>";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
               
// Close connection
mysqli_close($link);
?>
<html>

<head>
</head>

<body>
    <div id="center_button">
        <button onclick="location.href='index.php'">Back to site</button>
    </div>
</body>

</html>
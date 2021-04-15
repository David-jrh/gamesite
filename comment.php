<?php
/* Database credentials. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'gamesite');
 
/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>

<?php include 'reqlogin.php';?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Welcome</title>
    <?php include 'head.php';?>
</head>

<body>
    <?php include 'header.php';?>

<!--start wrapper-->
<div class="wrapper">

<section id="services" class="services-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                </div>
                <div class="col-lg-12 center contact">
                    <?php
                    require_once "connect.php"; // Using database connection file here

                    if(isset($_POST['submit']))
                    {		
                        $author = $_POST['author'];
                        $content = $_POST['content'];

                        $insert = mysqli_query($link,"INSERT INTO `post`(`author`, `content` ) VALUES ('$author','$content')");

                        if(!$insert)
                        {
                            echo mysqli_error();
                        }
                        else
                        {
                            echo "<h4>Comment added successfully.</h4>";
                        }
                    }
                    ?>

                    <div class="container col-md-12 center">
                        <form class="well form-horizontal" action=" " method="post" id="contact_form">
                            <fieldset>
                                <legend>Write a Comment!</legend>
                                <div class="form-group">
                                    <label class="col-md-4 control-label"> Name</label>
                                    <div class="col-md-4 inputGroupContainer">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i
                                                    class="glyphicon glyphicon-user"></i></span>
                                            <input name="author" placeholder="Enter Name" class="form-control"
                                                type="text" Required>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-md-4 control-label">Comment</label>
                                    <div class="col-md-4 inputGroupContainer">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i
                                                    class="glyphicon glyphicon-pencil"></i></span>
                                            <textarea class="form-control" name="content" placeholder="Write here"
                                                Required></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-4 control-label"></label>
                                    <div class="col-md-4">
                                        <button type="submit" class="btn btn-primary" name="submit" value="Submit">Send
                                            <span class="glyphicon glyphicon-send"></span></button>
                                    </div>

                            </fieldset>
                        </form>
                    </div><!-- /.container -->


                </div>
                <div class="col-lg-12">
                    <h1> Comments </h1>
                    <?php
                $result = mysqli_query($link,"SELECT * FROM post ORDER BY created_at DESC ");


                if (mysqli_num_rows($result) > 0) {
                ?>
                    <div >
                        <?php
                $i=0;
                while($row = mysqli_fetch_array($result)) {
                ?>
                        <div class="col-sm-2 comments">
                            <h3> <b><?php echo $row["author"]; ?></b></h3>
                            <q><b><?php echo $row["content"]; ?></b></q>
                            <br> <br>
                            <p class="date">Date <?php echo $row["created_at"]; ?></p>
                        </div>
                        <?php
                $i++;
                }
                ?>
                    </div>
                    <?php
                }
                else{
                    echo "No Comments found, be the first!";
                }
                ?>
                </div>
            </div>
        </div>

        </div>



    </section>


    </div>
 <!-- end wrapper -->
    <?php include 'footer.php';?>

    <!-- <script src="scripts/main.js"></script> -->
</body>
</hmtl>
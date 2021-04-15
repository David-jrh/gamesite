<?php include 'reqlogin.php';?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Welcome</title>
    <?php include 'head.php';?>
</head>

<body>
<!--start wrapper-->
<?php include 'header.php';?>
<div class="wrapper">


    <!-- contact form-->
    <div class="cointainer">
        <div class="row">
            <div class="col-sm-6 col-m-6 col-l-6 ">
                <form action="message.php" @submit="checkForm" method="post" id="app3" name="index" role="form"
                    novalidate>
                    <p v-if="errors.length" style="color: red;">
                        <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" style="color: red;">{{ error }}</li>
                    </ul>
                    </p>
                    <div class="form-group">
                        <label class="form-label" id="name" for="name"></label>
                        <input type="text" class="form-control" id="name" name="name" v-model="name"
                            placeholder="Full name" tabindex="1" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label" id="lemail" for="mail"></label>
                        <input type="email" class="form-control" id="mail" name="mail" placeholder="Email"
                            v-model="mail" tabindex="2" required>
                    </div>


                    <div class="form-group">
                        <label class="form-label" id="phone" for="phone"></label>
                        <input
                            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            type="number" maxlength="8" class="form-control" id="phone" name="phone" v-model="phone"
                            placeholder="phone" tabindex="3" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label" id="content" for="content"></label>
                        <input type="textbox" class="form-control" id="content" name="content" v-model="content"
                            placeholder="Content" tabindex="4" required>
                    </div>

                    <button name="knap" value="submit" id="submit" type="submit"
                        class="btn btn-default btn-gap">SEND</button>

                </form>

</div>
 <!-- end wrapper -->

                <?php include 'footer.php';?>

                <script src="scripts/vuemessage.js "></script>
</body>

</html>
    <!-- Contact Section -->
    <section id="contact" class="contact-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1>Contact Section</h1>
                </div>
                <?php
                require_once "config.php"; // Using database connection file here

                if(isset($_POST['submit1']))
                {		
                    $name = $_POST['name'];
                    $phone = $_POST['phone'];
                    $mail = $_POST['mail'];
                    $content = $_POST['content'];

                    $insert = mysqli_query($link,"INSERT INTO `contact`(`name`, `phone`, `mail`, `content` ) VALUES ('$name','$phone','$mail','$content')");

                    if(!$insert)
                    {
                        echo mysqli_error();
                    }
                    else
                    {
                        echo "<h4>Thanks for contacting us, we will get back to you shortly.</h4>";
                    }
                }

                mysqli_close($link); // Close connection
                ?>

                <h3>Fill the Form</h3>

                <div class="container">

                    <form class="well form-horizontal" action=" " method="post" id="contact_form">
                        <fieldset>

                            <legend>Contact Us Today!</legend>

                            <div class="form-group">
                                <label class="col-md-4 control-label">Name</label>
                                <div class="col-md-4 inputGroupContainer">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                        <input name="name" placeholder="Name" class="form-control" type="text" Required>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-4 control-label">E-Mail</label>
                                <div class="col-md-4 inputGroupContainer">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i
                                                class="glyphicon glyphicon-envelope"></i></span>
                                        <input name="mail" placeholder="E-Mail Address" class="form-control"
                                        type="email" Required>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-4 control-label">Phone #</label>
                                <div class="col-md-4 inputGroupContainer">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i
                                                class="glyphicon glyphicon-earphone"></i></span>
                                        <input name="phone" placeholder="(+45) 26 61 16 41" class="form-control"
                                        type="tel" Required>
                                    </div>
                                </div>
                            </div>

                            <!-- Text area -->

                            <div class="form-group">
                                <label class="col-md-4 control-label">Project Description</label>
                                <div class="col-md-4 inputGroupContainer">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i
                                                class="glyphicon glyphicon-pencil"></i></span>
                                        <textarea class="form-control" name="content"
                                            placeholder="Project Description" Required></textarea>
                                    </div>
                                </div>
                            </div>

                            <!-- Button -->
                            <div class="form-group">
                                <label class="col-md-4 control-label"></label>
                                <div class="col-md-4">
                                    <button type="submit" name="submit1" value="Submit" class="btn btn-primary">Send
                                        <span class="glyphicon glyphicon-send"></span></button>
                                </div>
                            </div>

                        </fieldset>
                    </form>
                </div>
            </div><!-- /.container -->

        </div>
        </div>
    </section>
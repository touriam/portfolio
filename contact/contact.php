<?php

 
if(isset($_POST['submit'])){
    $name =$_POST['name'];
    $emailFrom =$_POST['email'];
    $number =$_POST['number'];
    $message =$_POST['message'];
    $submit =$_POST['submit'];
    
    $mailTo=""
    $headers= "From: ".mailFrom;
    $txt "you have received an email-from ".$name.".\n\n".$message;

    mail($mailTo, $number, $txt, $headers);
    header("Location: index.html?mailsend")

}

?>
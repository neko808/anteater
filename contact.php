


<?php 
if(isset($_POST['submit'])){
    $to = "extrem303@gmail.com";
    $from = $_POST['email'];
    $first_name = $_POST['name'];
    // $last_name = $_POST['last_name'];
    $subject = "Form submission brand";
    $empresa = $_POST['empresa'];
    $message = $_POST['message'];
    $message .= "\n" . "Empresa: " . $empresa;
    // $subject2 = "Copy of your form submission";
    // $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
    // $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    // $headers2 = "From:" . $to;


    if(mail($to,$subject,$message,$headers)){
        echo "Mail sent. Thank you " . $first_name . ", we will contact you shortly.";
    }else{
        mail("wabisabi91@hotmail.com",$subject,$message,$headers);
        echo "Mail sent";
    }
    
     // sends a copy of the message to the sender
    // mail($from,$subject2,$message2,$headers2);
    
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>
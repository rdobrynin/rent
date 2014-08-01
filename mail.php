<?php
if (!isset($_POST['name']) or empty($_POST['name'])) {
    $error1 = "Name?" . "<br />";
} else $error1 = NULL;


if (!isset($_POST['email']) or empty($_POST['email'])) {
    $error2 = "Error in Email?" . "<br />";
} else $error2 = NULL;

if (!isset($_POST['comments']) or empty($_POST['comments'])) {
    $error3 = "Error in comment ?" . "<br />";
} else $error3 = NULL;

if (empty($error1) and empty($error2) and empty($error3)) {

    $_POST['name'] =  ucfirst(substr(htmlspecialchars(trim($_POST['name'])), 0, 30));
    $_POST['email'] =  substr(htmlspecialchars(trim($_POST['email'])), 0, 50);
    $_POST['phone'] =  substr(htmlspecialchars(trim($_POST['phone'])), 0, 30);
    $_POST['comments'] =  substr(htmlspecialchars(trim($_POST['comments'])), 0, 1000000);
    $mess = '
    <b style = font-size:14px;>Name: </b>'.$_POST['name'].'<br />
    <b style = font-size:14px;>Email: </b>'.$_POST['email'].'<br />
    <b style = font-size:14px;>Phone: </b>'.$_POST['phone'].'<br />
    <hr />
    '.$_POST['comments'];
    require 'class.phpmailer.php';
    $mail = new PHPMailer();
    $mail->From = 'noreply@flight-support';
    $mail->FromName = 'Flight-Support.eu';
    $mail->AddAddress('info@flight-support.eu', 'Flight Support Ltd');
    $mail->IsHTML(true);
    $mail->Subject = 'Send message to our specialists';
    $mail->Body = $mess;
    if (!$mail->Send()) die ('Mailer Error: '.$mail->ErrorInfo);
    echo 'Thank you for contact with us!' . '<br />';
}

else {
    echo $error1 . $error2 . $error3;

}

?>
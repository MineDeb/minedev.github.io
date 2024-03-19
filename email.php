<?php

$name = $_POST["name"];
$email = $_POST["email"];
$link = $_POST["link"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

// $mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->CharSet = 'UTF=8';
$mail->isHTML(true);
$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "csglobaloffensiveupgrade@gmail.com";
$mail->Password = "arst vrdm ojdh atyv";

$mail->setFrom($email, "MineDEV");
$mail->addAddress("philmillioner@gmail.com", "Dave");

$mail->Subject = "NEW MEMBER";
$mail->Body = "<div style='
        font-family: system-ui;
        margin: 0 auto;
        max-width: 560px;
        padding: 30px;
        background-color: white;
        border-radius: 20px;
        transition: 0.3s;
        text-align: left;
        border: 1px solid rgba(180,198,204,0.66);
        border-radius: 17px;'> 
        
            <img src='https://i.yapx.cc/XPE0i.png' alt='logo' class='logo__item'>
            
            <p style='color: black;
            font-size: 18px;
            '>You Have A New Member!</p>
            
            <hr style=' border: 1px black solid;
            width: 100%;'>
            
            <span style='color: black;
            font-size: 18px;
            '>
                <b>Name</b>: $name<br>
                <b>Email</b>: $email<br>
                <b>Link</b>: $link<br>
            </span>
            
            <div style='border: 1px solid rgba(180,198,204,0.66);
            border-radius: 8px;
            padding: 10px;
            margin: 20px auto;
            '><p style='font-size: 18px;'>$message</p></div>
            
            <p style='
            color: #bababd;
          '>Get It Touch!</p>
        </div>";

$mail->send();

<?php 


$name = $_POST['username'];
$phone = $_POST['userphone'];

$mail->SMTPDebug = 1;
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'alex00796@mail.ru';                // Наш логин                 
$mail->Password = '17Сgb652hfA96';                           // Наш пароль от ящика
                           
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('alex00796@mail.ru', 'Заявка с сайта ');   // От кого письмо 
$mail->addAddress('kurp96@yandex.ru');     // Add a recipient
// $mail->addAddress('gorasdo.ru@yandex.ru');  
// $mail->addAddress('iordanov.d.g@yandex.ru');              // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' оставил(а) заявку, его телефон ' .$phone;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
}
?>
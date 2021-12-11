<?php

########### CONFIG ###############

$recipient = 'suess_1998@web.de';
//$redirect = 'index.html';

########### CONFIG END ###########



########### Intruction ###########   
#
#   This script has been created to send an email to the $recipient
#   
#  1) Upload this file to your FTP Server
#  2) Send a POST rewquest to this file, including params like
#     [name] The name of the sender (Absender)
#     [message] Message that should be send to you
#     [email] ...
#     [subject] ...
#
##################################



###############################
#
#        DON'T CHANGE ANYTHING FROM HERE!
#
#        Ab hier nichts mehr ändern!
#
###############################

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');

        $params = json_decode($json);

        mb_internal_encoding("UTF-8"); 

        $name = $params->name;
        $email = $params->email;
        $subject = $params->subject;
        $message = $params->message;

        $name = mb_encode_mimeheader($name,'UTF-8','Q');
        /* $email = mb_encode_mimeheader($email,'UTF-8','Q'); */
        $subject = mb_encode_mimeheader($subject,'UTF-8','Q');
        /* $message = mb_encode_mimeheader($message,'UTF-8','Q'); */
        
        $headers .= "From: $name <$email>";

        mail($recipient, $subject, $message, $headers);
        //header("Location: " . $redirect); 

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}

?>
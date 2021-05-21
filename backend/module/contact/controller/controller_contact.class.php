<?php
//////
class controller_contact {
    // echo("DEBUG dentro del controller_contact! >>>");
    // exit();
    function list() {
        // echo("DEBUG dentro del loadlist>>>");
        // exit();
         common::loadView('top_page_contact.php', VIEW_PATH_CONTACT . 'contact_us.html');
    }// end_list
    
    function sendEmail() {
        
        // echo json_encode("Debug Click_sendMail_PHP >>");
        
        $messageAdmin = ['type' => 'admin', 
                            'inputName' => $_POST['name'], 
                            'fromEmail' => $_POST['fromEmail'], 
                            'toEmail' => $_POST['email'],
                            'inputMatter' => $_POST['matter'], 
                            'inputMessage' => $_POST['message']];
    
                            $ini_file = parse_ini_file($_SERVER['DOCUMENT_ROOT'] . '/FW_BikeShop/model/apis.ini');
                            $config = array();
                            //////
                            $config['api_key'] = $ini_file['apiKey'];
                            $config['api_url'] = $ini_file['url'];
                            $message = array();
                            $message['from'] = $messageAdmin['fromEmail'];
                            $message['to'] = $messageAdmin['toEmail'];
                            $message['h:Reply-To'] = $messageAdmin['fromEmail'];
                            $message['subject'] = $messageAdmin['inputMatter'];
                            $message['html'] ='Hello ' . $messageAdmin['inputName']. ',</br></br> This is a test';
                            // $message['html'] =$messageAdmin['inputMessage'];
                            // //////
                            $ch = curl_init();
                            curl_setopt($ch, CURLOPT_URL, $config['api_url']);
                            curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
                            curl_setopt($ch, CURLOPT_USERPWD, "api:{$config['api_key']}");
                            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
                            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
                            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
                            curl_setopt($ch, CURLOPT_POST, true); 
                            curl_setopt($ch, CURLOPT_POSTFIELDS,$message);
                            $result = curl_exec($ch);
                            curl_close($ch);        

        // // $messageClient = ['type' => 'contact', 
        // //                     'toEmail' => $_POST['email'], 
        // //                     'inputMatter' => '', 
        // //                     'inputMessage' => ''];
        // $emailAdmin = json_decode(mail::setEmail($messageAdmin), true);
        // //////
        // if (!empty($emailAdmin['id'])) {
        //     $emailClient = json_decode(mail::setEmail($messageClient), true);
        //     if (!empty($emailClient['id'])) {
                echo json_encode($result);
        //         //////
        //         return;
        //     }// end_if
        // }// end_if
        // echo 'error';
    return;

    }// end_sendEmail
}// end_controller_contact
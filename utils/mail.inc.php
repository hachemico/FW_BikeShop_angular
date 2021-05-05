<?php
//////
class mail {
    function enviar_email($arr) {
        $html = '';
        $subject = '';
        $body = '';
        $ruta = '';
        $return = '';
        $from='';
        $address='';
        
        switch ($arr['type']) {
            case 'alta':
                $subject = 'Tu Alta en BikeShop';
                $ruta = "<a href='".SITE_PATH."index.php?module=login&function=active_user&param="  .$arr['token'] . "'>aqu&iacute;</a>";
                // $ruta = "<a href='" . amigable("?module=home&function=active_user&param=" . $arr['token'], true) . "'>aqu&iacute;</a>";
                $body = 'Gracias por unirte a nuestra aplicaci&oacute;n<br> Para finalizar el registro, pulsa ' . $ruta;
                $from = 'support@bikeshop.com';
                break;
    
            case 'recover':
                $subject = 'Tu Nuevo Password en BikeShop<br>';
                // $ruta = '<a href="' . amigable("?module=login&function=changepass&aux=" . $arr['token'], true) . '">aqu&iacute;</a>';
                $ruta = "<a href='".SITE_PATH."index.php?module=login&function=recoverMail&param="  .$arr['token'] . "'>aqu&iacute;</a>";
                $body = 'Para recordar tu password pulsa ' . $ruta;
                $from = 'support@bikeshop.com';
                break;
                
            case 'contact':
                $subject = 'Tu Petici&oacute;n a Ohana_dogs ha sido enviada<br>';
                $ruta = '<a href=' . 'http://localhost/1_Fw_PHP_OO_MVC_jQuery_AngularJS/Framework/9_adoptions_dogs/'. '>aqu&iacute;</a>';
                $body = 'Para visitar nuestra web, pulsa ' . $ruta;
                break;
    
            // case 'admin':
            //     $subject = $arr['inputSubject'];
            //     $body = 'inputName: ' . $arr['inputName']. '<br>' .
            //     'inputEmail: ' . $arr['inputEmail']. '<br>' .
            //     'inputSubject: ' . $arr['inputSubject']. '<br>' .
            //     'inputMessage: ' . $arr['inputMessage'];
            //     break;
        }
        
        $html .= "<html>";
        $html .= "<body>";
            $html .= "Asunto:";
            $html .= "<br><br>";
	       $html .= "<h4>". $subject ."</h4>";
           $html .= "<br><br>";
           $html .= "Mensaje:";
           $html .= "<br><br>";
        //    $html .= $arr['inputMessage'];
           $html .= "<br><br>";
	       $html .= $body;
	       $html .= "<br><br>";
	       $html .= "<p>Sent by BikeShop</p>";
		$html .= "</body>";
		$html .= "</html>";
       
        if ($arr['type'] === 'admin'){
            $address = 'hachemico@gmail.com';
            }else{
            $address = $arr['inputEmail'];
            }

            $toSend=array();
            array_push($toSend,$from,$address,$subject,$html);
        // try{
            // $result = sendMailgun($toSend); 
            $result = self :: sendMailgun($toSend);    
        // } catch (Exception $e) {
		// 	$return = 0;
		// }
        // return 'Hola';
        echo json_encode($result);
        // return $result;
      
    }
    
    function sendMailgun($arrArgument) {
        
        $ini_file = parse_ini_file(SITE_ROOT . 'model/apis.ini');
        $config = array();
        ////
        $config['api_key'] = $ini_file['apiKey'];
        $config['api_url'] = $ini_file['url'];
        $message = array();
        $message['from'] = $arrArgument[0];
        $message['to'] = $arrArgument[1];
        $message['h:Reply-To'] = 'hachemico@gmail.com';
        $message['subject'] = $arrArgument[2];
        $message['html'] = $arrArgument[3];
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
        //
        return $result;
        // return $arrArgument[1];
    }// end_sendMailGun

    
}// end_mal
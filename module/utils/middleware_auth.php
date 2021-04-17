<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/8_MVC_CRUD';
include($path . "/module/classes/JWT.php");

function encode_token($user_email){
////////////////////////////////////////////////
    //https://github.com/miguelangel-nubla/JWT-PHP//
    ////////////////////////////////////////////////
   
    // require_once ("JWT.php");
    $header = '{"typ":"JWT", "alg":"HS256"}';
    $secret = 'lapalmerasedoblaperoaguantaelhuracan';
    $iat = time();
    $exp = time()+(60*60);
    /////////////////////////// hachemico ////////////////////////////////////////
    //iat: Tiempo que inició el token
    //exp: Tiempo que expirará el token (+1 hora)
    //name: info user
   
    $payload = "{
        'iat':'$iat', 
        'exp':'$exp',
        'name':'$user_email'
    }";

    $JWT = new JWT;
    $token = $JWT->encode($header, $payload, $secret);
    // echo 'JWT encode usuario: >>> '.$token."\n\n"; echo '<br>';

    return $token;
}

function decode_token($token){
    
    $secret = 'lapalmerasedoblaperoaguantaelhuracan';
    $JWT = new JWT;
    $json = $JWT->decode($token, $secret);
    // echo 'JWT decode usuario: >>> '.$json."\n\n"; echo '<br>'; echo '<br>';
    return $json;
}
?>
<?php
// $path = $_SERVER['DOCUMENT_ROOT'] . '/FW_BikeShop';
// include($path . "/module/classes/JWT.php");
class middleware_auth{
    function encode_token($user_id){
        ////////////////////////////////////////////////
            //https://github.com/miguelangel-nubla/JWT-PHP//
            ////////////////////////////////////////////////
           
            // require_once ("JWT.php");
            $header = '{"typ":"JWT", "alg":"HS256"}';
            $secret = 'lapalmerasedoblaperoaguantaelhuracan';
            $iat = time();
            // $exp = time()+(60);
            $exp = time()+(60*60);
            /////////////////////////// hachemico ////////////////////////////////////////
            //iat: Tiempo que inició el token
            //exp: Tiempo que expirará el token (+1 hora)
            //name: info user
           
            $payload = "{'iat':$iat,'exp':$exp,'id':'$user_id'}";
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
}
?>
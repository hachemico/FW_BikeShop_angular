<?php
class controller_login{

 // REGISTER FUNCTIONS 
   
    function valideUser(){
		  echo ( common::loadModel(MODEL_PATH_LOGIN,"login_model", "valideUser",$_POST['user_email']));
    }

    function register(){
        $aux_user=$_POST['username'];
        $aux_passwd=$_POST['password'];
        $aux_email=$_POST['email'];

        $aux_token=generate_Token_secure(20);
        $info_user=array();
        array_push($info_user,$aux_user,$aux_email,$aux_passwd,$aux_token);

        $rdo =( common::loadModel(MODEL_PATH_LOGIN,"login_model","register",$info_user));  

        $type='alta';

        $arrArgument=[
            'type'=> $type,
            'token'=>$aux_token,
            'inputName'=> $aux_user,
            'inputEmail'=> $aux_email,
        ];
        echo mail::enviar_email($arrArgument);
    }

//LOGIN ACTIVATE MAIL //Se encuentra a la espera del click en el email.
    function active_user(){
        echo json_encode( common::loadModel(MODEL_PATH_LOGIN,"login_model", "activateUser",$_POST['token']));
    }


//LOGIN FUNCTIONS

    function login(){
        $email=$_POST['email'];
        $pass=$_POST['password'];

        $activate=( common::loadModel(MODEL_PATH_LOGIN,"login_model", "LoginActivate",$email));
        if($activate == 'false'){
            echo json_encode('NOactivate');

        }else if($activate == 'NOexist'){
            echo json_encode('NOexist');
            
       }else{ 
        echo json_encode( common::loadModel(MODEL_PATH_LOGIN,"login_model", "login",$email,$pass));
          
       }
        
    }
// LOGIN DECODE TOKEN obtener idUsuario
    function decodeToken(){
        $aux_token=json_decode($_POST['token']);
        $payload = middleware_auth::decode_token($aux_token);
        
        $aux=explode(',',$payload);
		$aux2=explode(':',$aux[2]);
		$aux3=explode('}',$aux2[1]);
        $aux4=explode("'",$aux3[0]);
        $email=$aux4[1];
        echo json_encode($email);
       
    }
    function decodeToken2(){
        $aux_token=json_decode($_POST['token']);
        $payload = middleware_auth::decode_token($aux_token);
        //  $cadena =trim($payload);
        $aux=explode(',',$payload);
		$aux2=explode("'", $aux[2]);
        $cadena =$aux2[3];
        
        // $email=$aux4[1];
        echo ($cadena);
       
    }

    function decodeTimeToken(){
        $aux_token=json_decode($_POST['token']);
        $payload = middleware_auth::decode_token($aux_token);
        $iat=time();
        $aux=explode(',',$payload);
        $aux2=explode(':',$aux[1]);
        $num= floatval($aux2[1]);
        // $aux3=explode('"',$aux2[1]);
        // $aux4=explode('"',$aux3[1]);
        // echo json_encode($iat);
        // echo json_encode($aux2[1]);
        if($iat<$aux2[1]){
            echo json_encode("CURRENT_TOKEN");
        }else{
            echo json_encode("INVALID_TOKEN");
        }
        // echo json_encode($num);
    }

//LOGIN RECOVER PASS ENVIO
    function recoverPass(){
        $recovEmail=$_POST['email'];
        $rdo= common::loadModel(MODEL_PATH_LOGIN,"login_model", "userRecovery",$recovEmail);
    
        if($rdo == '0'){ //no existe el usuario.
            echo json_encode('errorNotExist');
        }else if ($rdo == '1'){ // existe el usuario
            
            $recovToken=generate_Token_secure(20);
            $infoRecover=array();

            array_push($infoRecover,$recovEmail,$recovToken);
            
            $rdo2 = common::loadModel(MODEL_PATH_LOGIN,"login_model", "insertRecoverToken",$infoRecover);
            
            if($rdo2 == '0'){ //si falla insert/token
                echo json_encode('errorInsertToken');
            }else if($rdo2 == '1'){//todo ok
                
                $type='recover';

                $arrArgument=[
                    'type'=> $type,
                    'token'=>$recovToken,
                    'inputName'=> $recovEmail,
                    'inputEmail'=> $recovEmail,
                ];
                $rdoMail = mail::enviar_email($arrArgument);
            }//end else rdo2.
        }//end_else rdo.
    }

//LOGIN RECOVER PASS RECEPCION TOKEN
    function compareToken(){ //busca usuario con el token_email recibido (update pass)
        $user= ( common::loadModel(MODEL_PATH_LOGIN,"login_model", "compareToken",$_POST['token']));
  
        if($user == 0){
            echo json_encode(0);
        }else{
            $utoken = middleware_auth::encode_token($user[0]['id']);
            echo($utoken);
        }

    }

    function updateRecover(){
      
        $newpass =$_POST['password'];
        $auxtok=$_POST['token'];
        $auxtok2=explode(' ',$auxtok);
        $utoken=$auxtok2[1];
        $payload = middleware_auth::decode_token($utoken);
        $aux=explode(',',$payload);
		$aux2=explode(':',$aux[2]);
		$aux3=explode('}',$aux2[1]);
        $aux4=explode("'",$aux3[0]);

        $id=$aux4[1];

       $rdo=( common::loadModel(MODEL_PATH_LOGIN,"login_model", "updatePass",$id,$newpass));
       if($rdo == '0'){ //si falla insert/token
        echo json_encode('errorUpdatePass');
       }else if($rdo == '1'){
        echo json_encode('OK');
       }//end_if/else  

    }
    
  // SOCIAL LOGIN 

  function socialLoginGoogle(){
    $socialUser = $_POST['user'];
    $rdo= common::loadModel(MODEL_PATH_LOGIN,"login_model", "socialUser",$socialUser);
    if($rdo=='0'){//realizamos un INSERT con los datos de GOOGLE GOOGLE="uid"
        
        $rdo2= common::loadModel(MODEL_PATH_LOGIN,"login_model", "insertSocialGoogle",$socialUser);
        if($rdo2=='0'){
                echo json_encode('ERROR_INSERT');
        }else{

            $userData= common::loadModel(MODEL_PATH_LOGIN,"login_model", "socialUser",$socialUser);
              
            if($userData == '0'){
                echo json_encode('ERROR_USER');
            }else{
                $token =middleware_auth::encode_token($rdo[0]['id']);
                echo json_encode($token);
            }//end_if/else $userdata
        }//end if/else $rdo2

    }else{ // usuario existe.
        
        echo json_encode($rdo);//DEVOLVEMOS TOKEN PARA CARGAR EL MENU
    }//end_if/else $rdo

  }//end socilaLoginGoogle

  function socialLoginGithub(){
    $socialUser = $_POST['user'];
    $rdo= common::loadModel(MODEL_PATH_LOGIN,"login_model", "socialUserGithub",$socialUser);
    if($rdo=='0'){//realizamos un INSERT con los datos de Github GITHUB="uid"
        
        $rdo2= common::loadModel(MODEL_PATH_LOGIN,"login_model", "insertSocialGithub",$socialUser);
       
        if($rdo2=='0'){
            echo json_encode('ERROR_INSERT');
        }else{
            $userData= common::loadModel(MODEL_PATH_LOGIN,"login_model", "socialUserGithub",$socialUser);
                
            if($userData == '0'){
                echo json_encode('ERROR_USER');
            }else{
                $token =middleware_auth::encode_token($rdo[0]['id']);
                echo json_encode($token);
            }//end_if/else $userdata

        }//end if/else $rdo2

    }else{ // usuario existe.
        echo json_encode($rdo);//DEVOLVEMOS TOKEN PARA CARGAR EL MENU  
        
    }//end_if/else $rdo
  }//end socilaLoginGoogle

//FUNCTIONS MENU

    function obtainDataUserMenu(){
        $User = $_POST['user'];
        $aux=explode('"',$User);

        echo json_encode(common::loadModel(MODEL_PATH_LOGIN,"login_model", "obtainDataUserMEnu",$aux[1]));
        // echo json_encode($aux[1]);
    }


}//end controller_login class
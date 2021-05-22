<?php
class controller_login{

 // REGISTER FUNCTIONS 
   
    // function listRegister(){
	// 	common::loadView("top_page_login.php", VIEW_PATH_LOGIN . "form_register.html");
    // }

    // function listLogin(){
	// 	common::loadView("top_page_login.php", VIEW_PATH_LOGIN . "form_login.html");
	// }
    
    function listRecover(){
		common::loadView("top_page_login.php", VIEW_PATH_LOGIN . "form_recover.html");
	}

    function listConfirmRecover(){
		common::loadView("top_page_login.php", VIEW_PATH_LOGIN . "form_confirmRecover.html");
	}

//REGISTER
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
        // echo json_encode($aux_token);
    }
    
//LOGIN ACTIVATE MAIL //Se encuentra a la espera del click en el email.
    function active_user(){
        $token= ( common::loadModel(MODEL_PATH_LOGIN,"login_model", "activateUser",$_GET['param']));
        self::listLogin(); 
    }



//LOGIN FUNCTIONS

    function login(){
        $email=$_POST['user_log_email'];
        $pass=$_POST['user_log_passwd'];

        $activate=( common::loadModel(MODEL_PATH_LOGIN,"login_model", "LoginActivate",$email));
        if($activate == 'false'){
            echo json_encode('NOactivate');

        }else if($activate == 'NOexist'){
            echo json_encode('NOexist');
            
       }else{ // echo json_encode($activate);
        echo json_encode( common::loadModel(MODEL_PATH_LOGIN,"login_model", "login",$email,$pass));
       }
        // echo json_encode("Hola login controller_login");
    }
// LOGIN CARGAR MENU USUARIO
    function menu(){
        $aux_token=json_decode($_POST['token']);
        $payload = middleware_auth::decode_token($aux_token);
        
        $aux=explode(',',$payload);
		$aux2=explode(':',$aux[2]);
		$aux3=explode('}',$aux2[1]);
        $aux4=explode("'",$aux3[0]);
        // $aux5=explode("=",$aux4[1]);
        $email=$aux4[1];
        echo json_encode($email);
        echo json_encode ( common::loadModel(MODEL_PATH_LOGIN,"login_model", "userMenu",$email));
    }

//LOGIN RECOVER PASS ENVIO
    function recoverPass(){
        $recovEmail=$_POST['user_email'];
        $rdo= common::loadModel(MODEL_PATH_LOGIN,"login_model", "userRecovery",$recovEmail);
        // echo json_encode($rdo);
        if($rdo == '0'){ //no existe el usuario.
            echo json_encode('errorNotExist');
        }else if ($rdo == '1'){ // existe el usuario
            // echo json_encode('OK');
    
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
                // echo json_encode('OK');
            }//end else rdo2.
        }//end_else rdo.
    }

//LOGIN RECOVER PASS RECEPCION TOKEN
    function recoverMail(){
        $User= ( common::loadModel(MODEL_PATH_LOGIN,"login_model", "compareToken",$_GET['param']));
        $token = middleware_auth::encode_token($User[0]['id']);
        echo ("<script> localStorage.setItem('tokenRecover', '$token');	</script>");
        self :: listConfirmRecover(); 
    }

    function updateRecover(){
      
        $newpass =$_POST['pass'];
        $payload = middleware_auth::decode_token($_POST['token']);
        $aux=explode(',',$payload);
		$aux2=explode(':',$aux[2]);
		$aux3=explode('}',$aux2[1]);
        $aux4=explode("'",$aux3[0]);
        // $aux5=explode("=",$aux4[1]);
        $id=$aux4[1];

       $rdo=( common::loadModel(MODEL_PATH_LOGIN,"login_model", "updatePass",$id,$newpass));
       if($rdo == '0'){ //si falla insert/token
        echo json_encode('errorUpdatePass');
       }else if($rdo == '1'){
        echo json_encode('OK');
       }//end_if/else
        // echo json_encode($rdo);
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
            // $token= middleware_auth::encode_token();
            $userData= common::loadModel(MODEL_PATH_LOGIN,"login_model", "socialUser",$socialUser);
                // $token = middleware_auth::encode_token($socialUser['uid']);
                if($userData == '0'){
                    echo json_encode('ERROR_USER');
                }else{
                    $token =middleware_auth::encode_token($rdo[0]['id']);
                    echo json_encode($token);
                }//end_if/else $userdata
        }//end if/else $rdo2

    }else{ // usuario existe generamos token.
        //DEVOLVEMOS LOS DATOS PARA CARGAR EL MENU
        // $token = middleware_auth::encode_token($rdo[0]['id']);
        // echo json_encode("USUARIO YA REGISTRADO!! >> GO"+$rdo[0]['id']);
        echo json_encode($rdo);
   
  
    }//end_if/else $rdo
  }//end socilaLoginGoogle

}//end controller_login class
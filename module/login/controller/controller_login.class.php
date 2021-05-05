<?php
class controller_login{
    
    function listRegister(){
		common::loadView("top_page_login.php", VIEW_PATH_LOGIN . "form_register.html");
    }

    function listLogin(){
		common::loadView("top_page_login.php", VIEW_PATH_LOGIN . "form_login.html");
	}
    
    function listRecover(){
		common::loadView("top_page_login.php", VIEW_PATH_LOGIN . "form_recover.html");
	}

    function listConfirmRecover(){
		common::loadView("top_page_login.php", VIEW_PATH_LOGIN . "form_confirmRecover.html");
	}

    function valideUser(){
		  echo ( common::loadModel(MODEL_PATH_LOGIN,"login_model", "valideUser",$_POST['user_email']));
    }

    function register(){
        $aux_user=$_POST['user_user'];
        $aux_passwd=$_POST['user_passwd'];
        $aux_email=$_POST['user_email'];

        $aux_token=generate_Token_secure(20);
        $info_user=array();
        array_push($info_user,$aux_user,$aux_email,$aux_passwd,$aux_token);

        $rdo =( common::loadModel(MODEL_PATH_LOGIN,"login_model","register",$info_user));  
        echo json_encode($info_user[3]);
    }
    
    function sendEmail(){
        $aux_user=$_POST['user_user'];
        $aux_email=$_POST['user_email'];
        $aux_token=$_POST['token_email'];
        $type='alta';

        $arrArgument=[
            'type'=> $type,
            'token'=>$aux_token,
            'inputName'=> $aux_user,
            'inputEmail'=> $aux_email,
        ];
        echo mail::enviar_email($arrArgument);
    }

    function active_user(){
        $token= ( common::loadModel(MODEL_PATH_LOGIN,"login_model", "activateUser",$_GET['param']));
        self::listLogin(); 
    }

    function login(){
        echo json_encode( common::loadModel(MODEL_PATH_LOGIN,"login_model", "login",$_POST['user_log_email'],$_POST['user_log_passwd']));
        // echo json_encode("Hola login controller_login");
    }

    function menu(){
        $axis=json_decode($_POST['token']);
        $aux_payload = middleware_auth::decode_token($axis);
        
        $aux2=explode(',',$aux_payload);
		$aux3=explode(':',$aux2[2]);
		$aux4=explode('}',$aux3[1]);
		$aux5=$aux4[0];
        $aux6=explode("'",$aux5);
        $email=$aux6[1];
        echo json_encode ( common::loadModel(MODEL_PATH_LOGIN,"login_model", "userMenu",$email));
    }

    function recoverPass(){
        $recovEmail=$_POST['user_email'];
        $rdo= common::loadModel(MODEL_PATH_LOGIN,"login_model", "userRecovery",$recovEmail);
        // echo json_encode($rdo);
        if($rdo == 0){ //no existe el usuario.
            echo json_encode('errorNotExist');
        }else if ($rdo == 1){ // existe el usuario
            // echo json_encode('OK');
    
            $recovToken=generate_Token_secure(20);
            $infoRecover=array();

            array_push($infoRecover,$recovEmail,$recovToken);
            
            $rdo2 = common::loadModel(MODEL_PATH_LOGIN,"login_model", "insertRecoverToken",$infoRecover);
            
            if($rdo2 == 0){ //si falla insert/token
                echo json_encode('errorInsertToken');
            }else if($rdo2 == 1){//todo ok
                
                $type='recover';

                $arrArgument=[
                    'type'=> $type,
                    'token'=>$recovToken,
                    'inputName'=> $recovEmail,
                    'inputEmail'=> $recovEmail,
                ];
                $rdoMail = mail::enviar_email($arrArgument);
                echo json_encode('OK');
            }//end else rdo2.
        }//end_else rdo.
    }
    function recoverMail(){
        $User= ( common::loadModel(MODEL_PATH_LOGIN,"login_model", "compareToken",$_GET['param']));
        $token = middleware_auth::encode_token($User[0]['email']);
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
        $email=$aux4[1];

       $rdo=( common::loadModel(MODEL_PATH_LOGIN,"login_model", "updatePass",$email,$newpass));
       if($rdo == 0){ //si falla insert/token
        echo json_encode('errorUpdatePass');
       }else if($rdo == 1){
        echo json_encode('OK');
       }//end_if/else

    }
    
    function updatePass(){
        //FALTA

    }

}//end controller_login class
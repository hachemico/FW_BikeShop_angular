<?php
class controller_login{
    
    function listRegister(){
		common::loadView("top_page_login.php", VIEW_PATH_LOGIN . "form_register.html");
	// echo("Dentro del listRegister");
    // exit();
    }

    function listLogin(){
		common::loadView("top_page_login.php", VIEW_PATH_LOGIN . "form_login.html");
	}

    function valideUser(){

		  echo ( common::loadModel(MODEL_PATH_LOGIN,"login_model", "valideUser",$_POST['user_email']));
        // echo ( common::loadModel(MODEL_PATH_LOGIN,"login_model", "valideUser",$_POST['user_email']));
      
        // echo json_encode("hola controller_login.class");
        // echo json_encode($_POST['user_email']);
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
         
        // echo json_encode("hola controller_login.class");
        // echo json_encode($info_user[2]);
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
        // echo json_encode("hola active_user");
        
        // echo json_encode("sale");
        $token= ( common::loadModel(MODEL_PATH_LOGIN,"login_model", "activateUser",$_GET['param']));
        self::listLogin();
        // echo($_GET['param']);
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
        // // echo ( common::loadModel(MODEL_PATH_LOGIN,"login_model", "login",$email));
        // echo json_encode("Menu controller");
        // echo json_encode($email);
        
    }

}//end controller_login class
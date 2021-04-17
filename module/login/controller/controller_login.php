<?php 
	$path = $_SERVER['DOCUMENT_ROOT'] . '/8_MVC_CRUD';
    include($path . "/module/login/model/DAO_login.php");
	// include($path . "/module/utils/middleware_auth.php");
	// @session_start();

    switch ($_GET['op']) {

		case 'list_login':
			include("module/login/view/form_login.html");
			break;
		
        case 'list_register':
            include("module/login/view/form_register.html");
            break;    

		case 'valide_user':
		
				try {
					$daoreg = new DAO_login();
					$rdo = $daoreg->select_user($_POST['user_email']);
	
				} catch (Exception $e) {
					echo json_encode("error");
				}
				// echo json_encode($rdo);
				if ($rdo->num_rows === 0) {
					echo json_encode('false');
				} else {
					echo json_encode('true');
				}
		break;
		case 'register':
			
					try {
						
						 $daologin = new DAO_login();
						 $rdo = $daologin->insert_user($_POST['user_name'], $_POST['user_surname'], $_POST['user_user'], $_POST['user_email'], $_POST['user_passwd']);
						//  echo($rlt);
					} catch (Exception $e) {
						echo "Error al registrarse";
						exit();
					}
					if(!$rdo){
						echo "Error al registrarse";
						exit();
					}else{
						echo json_encode("Registrado Correctamente");
					}	
				
			break;	

			case 'login':
			
				$mail_log=$_POST['user_log_email'];
				$passwd_log=$_POST['user_log_passwd'];
			
				try {
					$daologin = new DAO_login();
					$rdo = $daologin->login_user($mail_log,$passwd_log);
				} catch (Exception $e) {
					echo json_encode("error_login");
					exit();
				}
				 echo json_encode($rdo);	
	
				break;	
			
			case 'menu':
				// $token = 0;
				// $token = $_POST['token'];
				
				$aux_payload=decode_token($_POST['token']);
				
				 $aux2=explode(',',$aux_payload);
				 $aux3=explode(':',$aux2[2]);
				 $aux4=explode('}',$aux3[1]);
				 $email=$aux4[0];

				try {
					$daologin = new DAO_login();
					$rdo = $daologin->select_user_menu($email);
					
				} catch (Exception $e) {
					echo json_encode("error_login");
					exit();
				}
				
				if(!$rdo){
					echo json_encode("error");
				}
				else{
				  $dinfo = array();
				  foreach ($rdo as $row) {
				  array_push($dinfo, $row);
				  }
				    echo json_encode($dinfo);
				} 


				// echo json_encode($rdo);
			break;
		
		default:
			include("view/inc/error404.php");
			break;

        
	}
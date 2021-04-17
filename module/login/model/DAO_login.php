<?php
       $path = $_SERVER['DOCUMENT_ROOT'] . '/8_MVC_CRUD';
       include($path . "/model/connect.php");
       include($path . "/module/utils/middleware_auth.php");
       // include($path ."module/homes/model/Dates.php");
    
	class DAO_login{
        
         function select_user($user_email){
            
            $sql = "SELECT * FROM user WHERE email='$user_email'";
            $connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;

		}//end_valide_user
       
        function select_user_menu($user_email){
            
            $sql = "SELECT name, type, email, avatar FROM user WHERE email=$user_email";
            $connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;

		}//end_valide_user

        function insert_user($nombre,$email,$passwd){
            
            $type="client";
            $hashed_pass = password_hash($passwd, PASSWORD_DEFAULT);
            $hashavatar= md5( strtolower( trim( $email ) ) );
            $avatar="https://www.gravatar.com/avatar/$hashavatar?s=40&d=identicon";

            $sql ="INSERT INTO user(name, email, passwd, type, avatar)
             VALUES ('$nombre','$email','$hashed_pass','$type', '$avatar')";

            $connection = connect::con();
            $res = mysqli_query($connection, $sql);
            connect::close($connection);
            return $res;

        }//end_insert_user

        function login_user($user_email,$user_passwd){

            
            $sql = "SELECT * FROM user WHERE email='$user_email'";
            $connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			
            $dinfo = array();
            foreach ($res as $row) {
            array_push($dinfo, $row);
            }

            if(!$dinfo){
				echo "El usuario no existe";
				exit();
			}else{
               
				if (password_verify($user_passwd,$dinfo['0']['passwd'])) {

				 	// echo=("DEBUG coinciden true");
                    $rdo= encode_token($user_email);
				}else {
					echo "No coinciden los datos";
                    $rdo=("");
					exit();
				}
			}	

             return $rdo;
            // return $res;
        }
    
    }//end_class_DAO
?>
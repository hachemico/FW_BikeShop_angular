<?php
//////
class login_dao {
    static $_instance;
    //////
    private function __construct() {
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }// end_if
        return self::$_instance;
    }// end_getInstance

//REGISTER FUNCTIONS
    public function select_valideUser($db,$arrArgument) {
        $sql = "SELECT * FROM user WHERE id='LOCAL=$arrArgument'";
        $stmt = $db->ejecutar($sql);
        
        if ($stmt->num_rows === 0) { 
           echo json_encode(0); // No existe usuario registrado
        } else {
           echo json_encode(1);  // Existe usuario con esa ID
        }
    }
    public function select_insertUser($db,$arrArgument) {
        
        $type="client"; //valor por defecto
        $hashed_pass = password_hash($arrArgument[2], PASSWORD_DEFAULT);
        $hashavatar= md5( strtolower( trim( $arrArgument[1] ) ) );
        $avatar="https://www.gravatar.com/avatar/$hashavatar?s=40&d=identicon";

        $sql ="INSERT INTO user(id,name, email, passwd, type, avatar, activate, token_email) VALUES ('LOCAL=$arrArgument[1]','$arrArgument[0]','$arrArgument[1]','$hashed_pass','$type', '$avatar','false','$arrArgument[3]')";
        $stmt = $db->ejecutar($sql);
        // return 1;
        
    }
//LOGIN ACTIVATEMAIL
    public function select_activateUser($db,$arrArgument) {
        // $sql = "SELECT * FROM user WHERE token_email='$arrArgument'";
        // $stmt = $db->ejecutar($sql);

        // if(!$stmt){
        //     return 'error';
        // }else{
            $sql ="UPDATE user SET activate='true' WHERE token_email='$arrArgument'";
            $stmt2 = $db->ejecutar($sql);
            return 'ok';
        // }   
    }

//LOGIN FUNTIONS >>>>
    public function select_loginActivate($db,$arrArgument) {
        $sql = "SELECT * FROM user WHERE id ='LOCAL=$arrArgument'";
        $stmt = $db->ejecutar($sql);
        $rdo= $db->listar($stmt);
        if($rdo){
            return ($rdo['0']['activate']);
        }else{
            return 'NOexist';
        }
       
    }

    public function select_user($db,$arrArgument,$arrArgument2) {
        $sql = "SELECT * FROM user WHERE id ='LOCAL=$arrArgument'";
        $stmt = $db->ejecutar($sql);

        $dinfo = array();
         foreach ($stmt as $row) {
         array_push($dinfo, $row);
         }

        if(!$dinfo){
           return 'NOexist';
        }else{
           
            if(password_verify($arrArgument2,$dinfo['0']['passwd'])) {
                $rdo= middleware_auth::encode_token($arrArgument);
                return $rdo;
            }else {
                return 0; 
            }
        }	
    }

//MENU FUNTIONS >>>
    public function select_userMenu($db,$arrArgument) {
        $sql = "SELECT id, name, type, email, avatar FROM user WHERE id='$arrArgument'";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

// RECOVER PASS ENVIO FUNCTIONS
    public function select_userRecovery($db,$arrArgument) {
        $sql = "SELECT * FROM user WHERE id='LOCAL=$arrArgument'";
        $stmt = $db->ejecutar($sql);
        // return $db->listar($stmt);
        if ($stmt->num_rows === 0) {
            return 0 ;
         } else {
            return 1 ;
         }
    }

    public function select_insertRecoverToken($db,$arrArgument) {
        // $sql = "SELECT name, type, email, avatar FROM user WHERE email='$arrArgument'";
        $sql ="UPDATE user SET token_email ='$arrArgument[1]' WHERE id='LOCAL=$arrArgument[0]'";
        $stmt = $db->ejecutar($sql);
        if ($stmt == true) {
            return 1 ;
         } else {
            return 0 ;
         }
    }
// RECOVER PASS RECIBO TOKEN
    public function select_compareToken($db,$arrArgument) {
        $sql = "SELECT * FROM user WHERE token_email='$arrArgument'";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    //  echo json_encode($db->listar($stmt));  
    }
    public function select_updatePass($db,$arrArgument,$arrArgument2) {
        $hashed_pass = password_hash($arrArgument2, PASSWORD_DEFAULT);
        $sql ="UPDATE user SET passwd ='$hashed_pass' WHERE id='$arrArgument'";
        $stmt = $db->ejecutar($sql);
        if ($stmt== true) {
            return 1 ;
         } else {
            return 0 ;
         }
    }
    //SOCIAL LOGIN
    // public function select_socialUser($db,$arrArgument) {
    //     $uid=$arrArgument['uid'];
    
    //     $sql = "SELECT * FROM user WHERE id LIKE 'GOOGLE=$uid'";
    //     // $sql = "SELECT * FROM user WHERE id LIKE '%$uid'";
    //     $stmt = $db->ejecutar($sql);
    //     if ($stmt->num_rows === 0) {
    //         return 0 ;
    //      } else {
             
    //         return $db->listar($stmt);
    //      }
    // //  echo json_encode($sql);
    // }
//SOCIAL LOGIN FUNTIONS

    public function select_socialUser($db,$arrArgument) {
        $uid=$arrArgument['uid'];
    
        $sql = "SELECT * FROM user WHERE id LIKE 'GOOGLE=$uid'";
        $stmt = $db->ejecutar($sql);
       
        $dinfo = array();
        foreach ($stmt as $row) {
         array_push($dinfo, $row);
        }

        if(!$dinfo){
            return 0;
        }else{
            $token =middleware_auth::encode_token($dinfo[0]['id']);
            return $token;
        }	
 
    }

    public function select_socialGoogle($db,$arrArgument) {
        
        $id=$arrArgument['uid'];
        $name=$arrArgument['displayName'];
        $email=$arrArgument['email'];
        $avatar=$arrArgument['photoURL'];
        $type="client"; //valor por defecto
        $sql ="INSERT INTO user(id,name, email,passwd, type, avatar, activate, token_email) VALUES ('GOOGLE=$id','$name','$email','','$type', '$avatar','true','')";
        $stmt = $db->ejecutar($sql);

        if ($stmt == true) {
            return 1 ;
         } else {
            return 0 ;
         }
        
    //   echo json_encode($sql);
    }
    
}

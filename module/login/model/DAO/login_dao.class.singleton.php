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

    public function select_valideUser($db,$arrArgument) {
        $sql = "SELECT * FROM user WHERE email='$arrArgument'";
        $stmt = $db->ejecutar($sql);
        if ($stmt->num_rows === 0) {
           echo json_encode(0);
        } else {
           echo json_encode(1);  
        }
    }
    public function select_insertUser($db,$arrArgument) {
        
        $type="client";
        $hashed_pass = password_hash($arrArgument[2], PASSWORD_DEFAULT);
        $hashavatar= md5( strtolower( trim( $arrArgument[1] ) ) );
        $avatar="https://www.gravatar.com/avatar/$hashavatar?s=40&d=identicon";

        $sql ="INSERT INTO user(name, email, passwd, type, avatar, activate, token_email) VALUES ('$arrArgument[0]','$arrArgument[1]','$hashed_pass','$type', '$avatar','false','$arrArgument[3]')";
        $stmt = $db->ejecutar($sql);
        return 1;
        
    }
    public function select_activateUser($db,$arrArgument) {
        $sql = "SELECT * FROM user WHERE token_email='$arrArgument'";
        $stmt = $db->ejecutar($sql);

        if(!$stmt){
            return 'error';
        }else{
            $sql ="UPDATE user SET activate='true' WHERE token_email='$arrArgument'";
            $stmt2 = $db->ejecutar($sql);
            return 'ok';
        }
        
    }
    public function select_user($db,$arrArgument,$arrArgument2) {
        $sql = "SELECT * FROM user WHERE email='$arrArgument'";
        $stmt = $db->ejecutar($sql);
        // $dinfo= $db->listar($stmt);

        $dinfo = array();
         foreach ($stmt as $row) {
         array_push($dinfo, $row);
         }

        if(!$dinfo){
            echo "El usuario no existe";
            exit();

        }else{
           
            if(password_verify($arrArgument2,$dinfo['0']['passwd'])) {
                 // echo=("DEBUG coinciden true");
                $rdo= middleware_auth::encode_token($arrArgument);
                return $rdo;
            }else {
                // echo "No coinciden los datos";
                return 0;
                // exit();
            }
        }	
        // echo json_encode($db->listar($stmt));
    }

    public function select_userMenu($db,$arrArgument) {
        $sql = "SELECT name, type, email, avatar FROM user WHERE email='$arrArgument'";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        // echo json_encode($sql);
    }
}

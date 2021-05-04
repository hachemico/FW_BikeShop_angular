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
        // return $db->listar($stmt);
        // echo json_encode($stmt);
        
    }
    
}

<?php
class login_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = login_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
//REGISTER FUNCTIONS >>>

    public function valideUser($arrArgument){
        return $this->bll->valideUser_login_BLL($arrArgument);
        // echo json_encode("Hola login_model");
    }
    public function register($arrArgument){
        return $this->bll->register_login_BLL($arrArgument);
        //  echo json_encode("Hola login_model");
    }
    
    public function activateUser($arrArgument){
        return $this->bll->activateUser_login_BLL($arrArgument);
        //  echo json_encode("Hola login_model");
    }

// LOGIN FUNCTIONS>>>
    public function loginActivate($arrArgument){
        return $this->bll->loginActivate_BLL($arrArgument);
        //  echo json_encode("Hola login_model");
    }

    public function login($arrArgument,$arrArgument2){
        return $this->bll->login_BLL($arrArgument,$arrArgument2);
        //  echo json_encode("Hola login_model");
    }
    public function userMenu($arrArgument){
        return $this->bll->userMenu_BLL($arrArgument);
        //  echo json_encode("Hola login_model");
    }

//RECOVER FUNCTIONS >>>
    public function userRecovery($arrArgument){
        return $this->bll->userRecovery_BLL($arrArgument);
        //  echo json_encode("Hola login_model");
    }
    public function insertRecoverToken($arrArgument){
        return $this->bll->insertRecoverToken_BLL($arrArgument);
        //  echo json_encode("Hola login_model");
    }
    public function compareToken($arrArgument){
        return $this->bll->compareToken_BLL($arrArgument);
        //  echo json_encode("Hola login_model");
    }
    public function updatePass($arrArgument,$arrArgument2){
        return $this->bll->updatePass_BLL($arrArgument,$arrArgument2);
        //  echo json_encode("Hola login_model");
    }

    //SOCIAL LOGIN
    public function socialUser($arrArgument){
        return $this->bll->socialUser_BLL($arrArgument);
        //  echo json_encode("Hola login_model");
    }
    public function insertSocialGoogle($arrArgument){
        return $this->bll->insertSocialGoogle_BLL($arrArgument);
        //  echo json_encode("Hola login_model");
    }
}//end_login_model class
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
        
    }
    public function register($arrArgument){
        return $this->bll->register_login_BLL($arrArgument);
      
    }
    
    public function activateUser($arrArgument){
        return $this->bll->activateUser_login_BLL($arrArgument);
        
    }

// LOGIN FUNCTIONS>>>
    public function loginActivate($arrArgument){
        return $this->bll->loginActivate_BLL($arrArgument);
       
    }

    public function login($arrArgument,$arrArgument2){
        return $this->bll->login_BLL($arrArgument,$arrArgument2);
     
    }

//USER MENU
       public function obtainDataUserMenu($arrArgument){
        return $this->bll->obtainDataUserMenu_BLL($arrArgument);
        
    }

//RECOVER FUNCTIONS >>>
    public function userRecovery($arrArgument){
        return $this->bll->userRecovery_BLL($arrArgument);
        
    }
    public function insertRecoverToken($arrArgument){
        return $this->bll->insertRecoverToken_BLL($arrArgument);
       
    }
    public function compareToken($arrArgument){
        return $this->bll->compareToken_BLL($arrArgument);
        
    }
    public function updatePass($arrArgument,$arrArgument2){
        return $this->bll->updatePass_BLL($arrArgument,$arrArgument2);
        
    }

//SOCIAL GOOGLE
    public function socialUser($arrArgument){
        return $this->bll->socialUser_BLL($arrArgument);
       
    }
    public function insertSocialGoogle($arrArgument){
        return $this->bll->insertSocialGoogle_BLL($arrArgument);
       
    }
//SOCIAL GITHUB
    public function socialUserGithub($arrArgument){
        return $this->bll->socialUserGithub_BLL($arrArgument);
      
    }
    public function insertSocialGithub($arrArgument){
        return $this->bll->insertSocialGithub_BLL($arrArgument);
       
    }
    
}//end_login_model class
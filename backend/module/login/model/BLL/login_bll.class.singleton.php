<?php
//////
class login_bll {
    private $dao;
    static $_instance;

    function __construct() {
        $this -> dao = login_dao::getInstance();
        $this->db = db::getInstance();
    }// end_construct

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }// end_if
        return self::$_instance;
    }// end_getInstance

    public function valideUser_login_BLL($arrArgument){
        return $this->dao->select_valideUser($this->db,$arrArgument);
        
    }
    public function register_login_BLL($arrArgument){
        return $this->dao->select_insertUser($this->db,$arrArgument);
       
    }
    public function activateUser_login_BLL($arrArgument){
        return $this->dao->select_activateUser($this->db,$arrArgument);
        
    }

//LOGIN FUNCTIONS >>>
    public function loginActivate_BLL($arrArgument){
        return $this->dao->select_loginActivate($this->db,$arrArgument);
        
    }
    public function login_BLL($arrArgument,$arrArgument2){
        return $this->dao->select_user($this->db,$arrArgument,$arrArgument2);
        
    }
//MENU FUNCTIONS
    public function obtainDataUserMenu_BLL($arrArgument){
        return $this->dao->select_obtainDataUserMEnu($this->db,$arrArgument);
       
    }
//RECOVER PASS FUNCTIONS
    public function userRecovery_BLL($arrArgument){
        return $this->dao->select_userRecovery($this->db,$arrArgument);
     
    }
    public function insertRecoverToken_BLL($arrArgument){
        return $this->dao->select_insertRecoverToken($this->db,$arrArgument);
     
    }
    public function compareToken_BLL($arrArgument){
        return $this->dao->select_compareToken($this->db,$arrArgument);
       
    }
    public function updatePass_BLL($arrArgument,$arrArgument2){
        return $this->dao->select_updatePass($this->db,$arrArgument,$arrArgument2);
       
    }
//SOCIAL LOGIN GOOGLE
    public function socialUser_BLL($arrArgument){
        return $this->dao->select_socialUser($this->db,$arrArgument);
        
    }
    public function insertSocialGoogle_BLL($arrArgument){
        return $this->dao->select_socialGoogle($this->db,$arrArgument);
       
    }
    //SOCIAL LOGIN GITHUB
    public function socialUserGithub_BLL($arrArgument){
        return $this->dao->select_socialUserGithub($this->db,$arrArgument);
       
    }
    public function insertSocialGithub_BLL($arrArgument){
        return $this->dao->select_socialGithub($this->db,$arrArgument);
        // echo json_encode("Hola BLL");
    }
}//end_home_bll class
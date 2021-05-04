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
        // echo json_encode("Hola login_bll");
    }
    public function register_login_BLL($arrArgument){
        return $this->dao->select_insertUser($this->db,$arrArgument);
        // echo json_encode("Hola login_bll");
    }
    public function activateUser_login_BLL($arrArgument){
        return $this->dao->select_activateUser($this->db,$arrArgument);
        // echo json_encode("Hola login_bll");
    }
  
}//end_home_bll class
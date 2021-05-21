<?php
//////
class home_bll {
    private $dao;
    static $_instance;

    function __construct() {
        $this -> dao = home_dao::getInstance();
        $this->db = db::getInstance();
    }// end_construct

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }// end_if
        return self::$_instance;
    }// end_getInstance

    public function carousel_home_BLL() {
        return $this -> dao -> select_carousel($this->db);
    } // end carousel_home_BLL

    public function categories_BLL(){
        return $this->dao->select_categories($this->db);
      }
      public function countCategories_BLL(){
         return $this->dao->select_countCategories($this->db);
      }
      public function moreCategories_BLL($arrArgument){
        return $this->dao->select_morecat($this->db,$arrArgument);
      }
  }
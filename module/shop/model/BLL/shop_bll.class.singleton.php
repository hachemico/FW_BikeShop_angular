<?php

class shop_bll {
    private $dao;
    static $_instance;

    function __construct() {
        $this -> dao = shop_dao::getInstance();
        $this->db = db::getInstance();
    }// end_construct

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }// end_if
        return self::$_instance;
    }// end_getInstance

    public function getShop_BLL() {
        return $this -> dao -> select_getShop($this->db);
        // echo json_encode("Debug  shop_BLL <<<");
    } // end carousel_home_BLL

    public function homeCategories_BLL($arrArgument){
        return $this->dao->select_categories($this->db,$arrArgument);
        // echo json_encode("HolaBLL");
      }
    public function homeCarousel_BLL($arrArgument){
        return $this->dao->select_carousel($this->db,$arrArgument);  
        // echo json_encode("Hola BLL");   
    }
    
    //   public function moreCategories_BLL($arrArgument){
    //     return $this->dao->select_morecat($this->db,$arrArgument);
    //   }
  }
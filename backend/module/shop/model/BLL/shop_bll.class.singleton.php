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

    public function getShop_BLL($arrArgument) {
        return $this -> dao -> select_getShop($this->db,$arrArgument);
    } // end carousel_home_BLL

    public function homeCategories_BLL($arrArgument,$arrArgument2){
        return $this->dao->select_categories($this->db,$arrArgument,$arrArgument2);
      }
    public function homeCarousel_BLL($arrArgument){
        return $this->dao->select_carousel($this->db,$arrArgument);    
    }
    
    public function countCat_BLL($arrArgument){
       return $this->dao->select_countCat($this->db,$arrArgument);
    }
    public function countPagination_BLL(){
       return $this->dao->select_countPagination($this->db);
    }
    public function pagination_BLL($arrArgument){
        return $this->dao->select_pagination($this->db,$arrArgument);
    //  echo json_encode("Hola BLL");   
     }
     public function filter_BLL($arrArgument,$arrArgument2){
        return $this->dao->select_filter($this->db,$arrArgument,$arrArgument2);
    //  echo json_encode("Hola BLL");   
     }
     public function search_BLL($arrArgument){
        return $this->dao->select_search($this->db,$arrArgument);
    //  echo json_encode("Hola BLL");   
     }
     public function searchFav_BLL($arrArgument,$arrArgument2){
        return $this->dao->select_searchFav($this->db,$arrArgument,$arrArgument2);
    //  echo json_encode("Hola BLL");   
     }
     public function saveFav_BLL($arrArgument,$arrArgument2){
        return $this->dao->select_saveFav($this->db,$arrArgument,$arrArgument2);
    //  echo json_encode("Hola BLL");   
     }
     public function deleteFav_BLL($arrArgument,$arrArgument2){
        return $this->dao->select_deleteFav($this->db,$arrArgument,$arrArgument2);
    //  echo json_encode("Hola BLL");   
     }
     public function valueBike_BLL($arrArgument,$arrArgument2){
        return $this->dao->select_valueBike($this->db,$arrArgument,$arrArgument2);
    //  echo json_encode("Hola BLL");   
     }
  }
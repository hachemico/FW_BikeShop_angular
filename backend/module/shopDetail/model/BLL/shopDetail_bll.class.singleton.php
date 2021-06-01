<?php
//////
class shopDetail_bll {
    private $dao;
    static $_instance;

    function __construct() {
        $this -> dao = shopDetail_dao::getInstance();
        $this->db = db::getInstance();
    }// end_construct

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }// end_if
        return self::$_instance;
    }// end_getInstance

    public function detail_BLL($arrArgument,$arrArgument2) {
        return $this->dao->select_detail($this->db,$arrArgument,$arrArgument2); 
        // echo json_encode("Debug  shopDetail_BLL <<<");
    } // end carousel_home

}//end_shop_bll
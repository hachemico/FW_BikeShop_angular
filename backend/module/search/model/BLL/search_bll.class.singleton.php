<?php

class search_bll {
    private $dao;
    static $_instance;

    function __construct() {
        $this -> dao = search_dao::getInstance();
        $this->db = db::getInstance();
    }// end_construct

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }// end_if
        return self::$_instance;
    }// end_getInstance

    public function autocomplete_BLL($arrArgument) {
        return $this -> dao -> select_autocomplete($this->db,$arrArgument);
        // echo json_encode("Dentro de searh_BLL");
    } // end carousel_home_BLL

}
?>
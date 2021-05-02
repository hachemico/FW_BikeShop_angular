<?php
class search_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = search_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function autocomplete($arrArgument){
        return $this->bll->autocomplete_BLL($arrArgument);
        // echo json_encode("Dentro de searh_Model");
    }

}
<?php
class shopDetail_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = shopDetail_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function detail($arrArgument){
        return $this->bll->detail_BLL($arrArgument);
        // echo json_encode("Hola");
        // echo json_encode("Dentro del detail_model");
    }
}//enc shopDetail_model_class
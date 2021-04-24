<?php
class shop_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = shop_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function getShop($arrArgument){
        return $this->bll->getShop_BLL($arrArgument);
        // echo json_encode("Hola");
    }
    public function homeCategories($arrArgument){
        return $this->bll->homeCategories_BLL($arrArgument);
        // echo json_encode("Hola");
    }
    public function homeCarousel($arrArgument){
        return $this->bll->homeCarousel_BLL($arrArgument);
        // echo json_encode("Hola Model");
    }
    // public function moreCategories($arrArgument){
    //      return $this->bll->moreCategories_BLL($arrArgument);
    // }
}
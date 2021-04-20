<?php
class home_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = home_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function carousel($arrArgument){
        return $this->bll->carousel_home_BLL($arrArgument);
    }
    public function categories(){
        return $this->bll->categories_BLL();
    }
    public function countCategories($arrArgument){
        return $this->bll->countCategories_BLL($arrArgument);
    }
    public function moreCategories($arrArgument){
         return $this->bll->moreCategories_BLL($arrArgument);
    }
}
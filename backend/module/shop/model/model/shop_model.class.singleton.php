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
    }
    public function homeCategories($arrArgument,$arrArgument2){
        return $this->bll->homeCategories_BLL($arrArgument,$arrArgument2);
    }
    public function homeCarousel($arrArgument){
        return $this->bll->homeCarousel_BLL($arrArgument);

    }
    public function countCat($arrArgument){
         return $this->bll->countCat_BLL($arrArgument);
    }
    public function countProd($arrArgument){
        return $this->bll->countProd_BLL($arrArgument);
   }
   public function countPagination(){
        return $this->bll->countPagination_BLL();
   }
   public function pagination($arrArgument){
    return $this->bll->pagination_BLL($arrArgument);
   }
   public function filter($arrArgument,$arrArgument2){
    return $this->bll->filter_BLL($arrArgument,$arrArgument2);
    // echo json_encode(" Hola Bll shop");
   }
   public function search($arrArgument){
    return $this->bll->search_BLL($arrArgument);
    // echo json_encode(" Hola Bll shop");
   }
   public function searchFavModel($arrArgument,$arrArgument2){
    return $this->bll->searchFav_BLL($arrArgument,$arrArgument2);
    // echo json_encode(" Hola Bll shop");
   }

   public function saveFavModel($arrArgument,$arrArgument2){
    return $this->bll->saveFav_BLL($arrArgument,$arrArgument2);
    // echo json_encode(" Hola Bll shop");
   }
   public function deleteFavModel($arrArgument,$arrArgument2){
    return $this->bll->deleteFav_BLL($arrArgument,$arrArgument2);
    // echo json_encode(" Hola Bll shop");
   }
   public function valueBikeModel($arrArgument,$arrArgument2){
    return $this->bll->valueBike_BLL($arrArgument,$arrArgument2);
    // echo json_encode(" Hola Bll shop");
   }
}
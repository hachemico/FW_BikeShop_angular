<?php
class cart_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = cart_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
//FUNCTIONS LINE PRODUCT 

    public function searchLine_model($arrArgument,$arrArgument2){
        return $this->bll->searchLine_BLL($arrArgument,$arrArgument2);
    }
    public function insertLine_model($arrArgument,$arrArgument2){
        return $this->bll->insertLine_BLL($arrArgument,$arrArgument2);
    }
    public function updateLine_model($arrArgument,$arrArgument2){
        return $this->bll->updateLine_BLL($arrArgument,$arrArgument2);
    }
    public function totalLine_model($arrArgument){
        return $this->bll->totalLine_BLL($arrArgument);
    }
// FUCNTIONS CART
public function searchCart_model($arrArgument){
    return $this->bll->searchCart_BLL($arrArgument);
}
public function incrementCart_model($arrArgument,$arrArgument2){
    return $this->bll->incrementCart_BLL($arrArgument,$arrArgument2);
    // echo json_encode("Hola");
}
public function updatePriceCart_model($arrArgument,$arrArgument2){
    return $this->bll->updatePriceCart_BLL($arrArgument,$arrArgument2);
    // echo json_encode("Hola");
}
public function decrementCart_model($arrArgument,$arrArgument2){
    return $this->bll->decrementCart_BLL($arrArgument,$arrArgument2);
    // echo json_encode("Hola");
}
public function deleteLineCart_model($arrArgument,$arrArgument2){
    return $this->bll->deleteLineCart_BLL($arrArgument,$arrArgument2);
    // echo json_encode("Hola");
}
//CHECKOUT

public function insertCheckout_model($arrArgument){
    return $this->bll->insertCheckout_BLL($arrArgument);
    // echo json_encode("Hola");
}
public function deleteFromCart_model($arrArgument){
    return $this->bll->deleteFromCart_BLL($arrArgument);
    // echo json_encode("Hola");
}

}// end Class
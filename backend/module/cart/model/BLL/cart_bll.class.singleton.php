<?php
//////
class cart_bll {
    private $dao;
    static $_instance;

    function __construct() {
        $this -> dao = cart_dao::getInstance();
        $this->db = db::getInstance();
    }// end_construct

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }// end_if
        return self::$_instance;
    }// end_getInstance

//FUNCTIONS LINE
    public function searchLine_BLL($arrArgument,$arrArgument2) {
        return $this -> dao -> select_searchLine($this->db,$arrArgument,$arrArgument2);
    } 
    public function insertLine_BLL($arrArgument,$arrArgument2) {
        return $this -> dao -> select_insertLine($this->db,$arrArgument,$arrArgument2);
    } 
    public function updateLine_BLL($arrArgument,$arrArgument2) {
        return $this -> dao -> select_updateLine($this->db,$arrArgument,$arrArgument2);
    } 
    public function totalLine_BLL($arrArgument) {
        return $this -> dao -> select_totalLine($this->db,$arrArgument);
    } 
//FUNCTIONS CART
public function searchCart_BLL($arrArgument) {
    return $this -> dao -> select_searchCart($this->db,$arrArgument);
} 
public function incrementCart_BLL($arrArgument,$arrArgument2) {
    return $this -> dao -> select_incrementCart($this->db,$arrArgument,$arrArgument2);
} 
public function updatePriceCart_BLL($arrArgument,$arrArgument2) {
    return $this -> dao -> select_updatePriceCart($this->db,$arrArgument,$arrArgument2);
} 
public function decrementCart_BLL($arrArgument,$arrArgument2) {
    return $this -> dao -> select_decrementCart($this->db,$arrArgument,$arrArgument2);
} 
public function deleteLineCart_BLL($arrArgument,$arrArgument2) {
    return $this -> dao -> select_deleteLineCart($this->db,$arrArgument,$arrArgument2);
} 
//CHECKOUT
public function insertCheckout_BLL($arrArgument) {
    return $this -> dao -> select_insertCheckout($this->db,$arrArgument);
} 
public function deleteFromCart_BLL($arrArgument) {
    return $this -> dao -> select_deleteFromCart($this->db,$arrArgument);
} 
//FUNCTIONS NOLOG
public function searchLineNolog_BLL($arrArgument) {
    return $this -> dao -> select_searchLineNolog($this->db,$arrArgument);
}
public function insertLineNolog_BLL($arrArgument) {
    return $this -> dao -> select_insertLineNolog($this->db,$arrArgument);
} 
public function searchCartNolog_BLL($arrArgument) {
    return $this -> dao -> select_searchCartNolog($this->db,$arrArgument);
}
}
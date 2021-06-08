<?php
//////
class cart_dao {
    static $_instance;
    //////
    private function __construct() {
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }// end_if
        return self::$_instance;
    }// end_getInstance
                                            //uid           //idbike
    public function  select_searchLine($db,$arrArgument,$arrArgument2) {
        $aux=trim($arrArgument);
        $sql = "SELECT bike.*, cart.qty FROM bike INNER JOIN cart ON bike.idbike = cart.idbike WHERE bike.idbike LIKE '$arrArgument2' AND cart.uid LIKE '$aux'";
        // $sql = "SELECT * FROM cart WHERE uid LIKE '$aux' AND idbike LIKE '$arrArgument2'";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        // return $sql;
    }                                       //uid           //idbike
    public function  select_insertLine($db,$arrArgument,$arrArgument2) {
        $aux=trim($arrArgument);
        $sql = "INSERT INTO cart(idCart, uid, idbike, qty) VALUES ('','$aux','$arrArgument2',1)";
        $stmt = $db->ejecutar($sql);
        return $stmt;
        // return $sql;
    }
    public function  select_updateLine($db,$arrArgument,$arrArgument2) {
        $aux=trim($arrArgument);
        $sql = "UPDATE cart SET qty = (qty+1) WHERE uid LIKE '$aux' AND idbike LIKE '$arrArgument2'";
        $stmt = $db->ejecutar($sql);
        return $stmt;
        //  return $sql;
    } 

    public function  select_totalLine($db,$arrArgument) {
        $aux=trim($arrArgument);
        $sql = "SELECT SUM(qty) FROM cart WHERE uid LIKE '$aux'";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        // return $sql;
    }
// FUNCTIONS CART

public function  select_searchCart($db,$arrArgument) {
    $aux=trim($arrArgument);
    $sql = "SELECT bike.*, cart.qty FROM bike , cart WHERE bike.idbike = cart.idbike AND cart.uid LIKE '$aux'";
    $stmt = $db->ejecutar($sql);
    return $db->listar($stmt);
    // return $sql;
}

public function  select_incrementCart($db,$arrArgument,$arrArgument2) {
    $aux=trim($arrArgument);
    $sql = "UPDATE cart SET qty = (qty+1) WHERE uid LIKE '$aux' AND idbike LIKE '$arrArgument2'";
    $stmt = $db->ejecutar($sql);
    return $stmt;
    // return $sql;
}

public function  select_updatePriceCart($db,$arrArgument,$arrArgument2) {
    $aux=trim($arrArgument);
    // $sql = "UPDATE cart SET qty = (qty+1) WHERE uid LIKE '$aux' AND idbike LIKE '$arrArgument2'";
    $sql="SELECT bike.*, cart.qty FROM bike , cart WHERE bike.idbike = cart.idbike AND cart.uid LIKE '$aux' AND cart.idbike = '$arrArgument2'";
    $stmt = $db->ejecutar($sql);
    return $db->listar($stmt);
    // return $stmt;
    // return $sql;
}

public function  select_decrementCart($db,$arrArgument,$arrArgument2) {
    $aux=trim($arrArgument);
    $sql = "UPDATE cart SET qty = (qty-1) WHERE uid LIKE '$aux' AND idbike LIKE '$arrArgument2'";
    $stmt = $db->ejecutar($sql);
    // return $db->listar($stmt);
    return $stmt;
    // return $sql;
}

public function  select_deleteLineCart($db,$arrArgument,$arrArgument2) {
    $aux=trim($arrArgument);
    $sql = "DELETE FROM cart WHERE uid LIKE '$aux' AND idbike LIKE '$arrArgument2'";
    $stmt = $db->ejecutar($sql);
    // // return $db->listar($stmt);
    return $stmt;
    // return $sql;
}

//CHECKOUT

public function  select_insertCheckout($db,$arrArgument) {
    $aux=trim($arrArgument);
    $sql = "INSERT INTO checkout( uid, idbike, qty) SELECT cart.uid, cart.idbike, cart.qty FROM cart WHERE cart.uid LIKE '$aux'";
    $stmt = $db->ejecutar($sql);
    // return $db->listar($stmt);
    return $stmt;
    // return $sql;
}

public function  select_deleteFromCart($db,$arrArgument) {
    $aux=trim($arrArgument);
    $sql = "DELETE FROM cart WHERE cart.uid LIKE '$aux'";
    $stmt = $db->ejecutar($sql);
    // return $db->listar($stmt);
    return $stmt;
    // return $sql;
}

}
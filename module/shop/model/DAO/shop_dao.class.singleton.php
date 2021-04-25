<?php
//////
class shop_dao {
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
   
    public function  select_getShop($db) {
        $sql = "SELECT * FROM bike ORDER BY more_visited DESC LIMIT 6";   
        // $sql = "SELECT * FROM img_slider ORDER BY nombre ASC";
         $stmt = $db->ejecutar($sql);
         return $db->listar($stmt);
    }
    public function select_categories($db,$arrArgument) {
        $sql = "SELECT * FROM bike WHERE category='$arrArgument'";
        // $sql = "SELECT * FROM categoria ORDER BY more_visited DESC LIMIT 4 ";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_carousel($db,$arrArgument) {
        $sql = "SELECT * FROM bike WHERE category='$arrArgument'";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_countCat($db,$arrArgument) {
        $sql = "UPDATE categoria SET more_visited = (more_visited+1) WHERE categoria = '$arrArgument' ";
        $stmt = $db->ejecutar($sql);
        if(!$stmt){
            echo json_encode("False");
        }else{
            echo json_encode("True");
        }
    }
    public function select_countProd($db,$arrArgument) {
        $sql = "UPDATE bike SET more_visited = (more_visited+1) WHERE idbike = '$arrArgument' ";
        $stmt = $db->ejecutar($sql);
        if(!$stmt){
            echo json_encode("False");
        }else{
            echo json_encode("True");
        }
    }
    public function select_countPagination($db) {
        $sql = "SELECT brand FROM bike";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    
    }
    public function select_pagination($db,$arrArgument) {
        $sql = "SELECT * FROM bike ORDER BY more_visited DESC LIMIT 6 OFFSET $arrArgument";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        // echo json_encode("Dentro de shop_dao");
    }
    // public function update_active_user($db,$arrArgument) {
    //     $sql = "UPDATE users SET activate = 1 WHERE token = '$arrArgument'";
    //     return $db->ejecutar($sql);
    // }

}
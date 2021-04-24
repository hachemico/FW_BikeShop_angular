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

    // public function select_morecat($db,$arrArgument) {
    //     // $sql = "SELECT DISTINCT name,chip,breed,sex,stature,picture,date_birth FROM dogs WHERE name LIKE '%$arrArgument%' AND state = 0";
    //     $sql = "SELECT * FROM categoria ORDER BY more_visited DESC LIMIT 4 OFFSET $arrArgument ";
    //     $stmt = $db->ejecutar($sql);
    //     return $db->listar($stmt);
    // }

    // public function update_active_user($db,$arrArgument) {
    //     $sql = "UPDATE users SET activate = 1 WHERE token = '$arrArgument'";
    //     return $db->ejecutar($sql);
    // }

}
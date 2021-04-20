<?php
//////
class home_dao {
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
   
    public function  select_carousel($db) {

        $sql = "SELECT * FROM img_slider ORDER BY nombre ASC";
         $stmt = $db->ejecutar($sql);
         return $db->listar($stmt);
    }
    public function select_categories($db) {
        $sql = "SELECT * FROM categoria ORDER BY more_visited DESC LIMIT 4 ";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_countCategories($db) {
        $sql = "SELECT COUNT(*) AS count FROM categoria ";
        // $sql = "SELECT breed FROM dogs GROUP BY breed ORDER BY count(*) DESC LIMIT $arrArgument,2";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_morecat($db,$arrArgument) {
        // $sql = "SELECT DISTINCT name,chip,breed,sex,stature,picture,date_birth FROM dogs WHERE name LIKE '%$arrArgument%' AND state = 0";
        $sql = "SELECT * FROM categoria ORDER BY more_visited DESC LIMIT 4 OFFSET $arrArgument ";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    // public function update_active_user($db,$arrArgument) {
    //     $sql = "UPDATE users SET activate = 1 WHERE token = '$arrArgument'";
    //     return $db->ejecutar($sql);
    // }

}
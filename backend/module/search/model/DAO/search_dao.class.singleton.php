<?php
//////
class search_dao {
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
   
    public function  select_autocomplete($db,$arrArgument,$arrArgument2) {
        $aux=trim($arrArgument2);
        // $sql = "SELECT * FROM bike WHERE brand LIKE '".$categoria. "%'";
        // $sql = "SELECT * FROM bike LEFT JOIN favourites  ON bike. WHERE brand LIKE '". $arrArgument. "%'";
        $sql = " SELECT * FROM bike LEFT JOIN favourites ON bike.idbike=favourites.favs AND favourites.uid LIKE '$aux' WHERE bike.brand LIKE '". $arrArgument. "%'";
         $stmt = $db->ejecutar($sql);
         return $db->listar($stmt);
        // return $sql;
    }

}

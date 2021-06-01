<?php
//////
class shopDetail_dao {
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
   
    public function select_detail($db,$arrArgument,$arrArgument2) {
        $id=trim($arrArgument2);
        // $sql = "SELECT * FROM bike WHERE idbike= '$arrArgument' ";
        // $sql = "SELECT * FROM bike INNER JOIN favourites ON bike.idbike=favourites.favs AND favourites.uid LIKE '$id' AND bike.idbike LIKE '$arrArgument'";
        $sql = "SELECT k.* FROM (SELECT * FROM bike LEFT JOIN favourites ON bike.idbike=favourites.favs AND favourites.uid LIKE '$id' AND bike.idbike LIKE '$arrArgument') AS k WHERE k.idbike LIKE '$arrArgument'";
        
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        // return $sql;

    }


}
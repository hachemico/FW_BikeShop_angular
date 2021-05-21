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
   
    public function select_detail($db,$arrArgument) {
        $sql = "SELECT * FROM bike WHERE idbike= '$arrArgument' ";
         $stmt = $db->ejecutar($sql);
         return $db->listar($stmt);
        // echo json_encode("Hola");

    }


}
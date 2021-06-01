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
   
    public function  select_getShop($db,$arrArgument) {
        $aux=trim($arrArgument);
        $sql = "SELECT * FROM bike LEFT JOIN favourites ON bike.idbike=favourites.favs AND favourites.uid LIKE '$aux' ORDER BY more_visited DESC";
        // $sql = "SELECT * FROM bike ORDER BY more_visited DESC";   
         $stmt = $db->ejecutar($sql);
         return $db->listar($stmt);
        // return $sql;
    }
    public function select_categories($db,$arrArgument,$arrArgument2) {
        $aux=trim($arrArgument2);
        // $sql = "SELECT * FROM bike WHERE category='$arrArgument'";
        $sql = "SELECT * FROM bike LEFT JOIN favourites ON bike.idbike=favourites.favs AND favourites.uid LIKE '$aux' WHERE category= '$arrArgument' ORDER BY more_visited DESC";
        // $sql = "SELECT * FROM categoria ORDER BY more_visited DESC LIMIT 4 ";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        // return $sql;
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
    public function select_filter($db,$arrArgument,$arrArgument2) {
        $aux=trim($arrArgument2);
        // $sql = "SELECT * FROM bike WHERE $arrArgument ";
        $sql = "SELECT * FROM bike LEFT JOIN favourites ON bike.idbike=favourites.favs AND favourites.uid LIKE '$aux' WHERE $arrArgument ORDER BY more_visited DESC";

        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        // return ($sql);
    }
    public function select_search($db,$arrArgument) {
        $sql = "SELECT * FROM bike WHERE brand LIKE '".$arrArgument."%'";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        // echo json_encode($sql);
        //    echo json_encode("Hola DAO");
    }
            //PRUEBA PUEDE TENGA QUE ELIMINAR EL arrARGUMENT2 por no usarlo.
    public function select_searchFav($db,$arrArgument,$arrArgument2) {
        $id=explode('"',$arrArgument);
        $sql = "SELECT favs FROM favourites WHERE uid LIKE '$id[1]'";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        // echo json_encode("hola dao");
        // 
    }



    public function select_saveFav($db,$arrArgument,$arrArgument2) {
        $id=explode('"',$arrArgument);
        $sql = "INSERT INTO favourites (uid, favs) VALUES ('$id[1]','$arrArgument2')";
        return $db->ejecutar($sql);
        // $stmt = $db->ejecutar($sql);
        // echo json_encode($stmt);
    }

    public function select_deleteFav($db,$arrArgument,$arrArgument2) {
        $id=explode('"',$arrArgument);
        $sql = "DELETE FROM favourites WHERE uid LIKE '$id[1]' AND favs LIKE '$arrArgument2'";
        return $db->ejecutar($sql);
        // $stmt = $db->ejecutar($sql);
      
    }
    public function select_valueBike($db,$arrArgument,$arrArgument2) {
        $id=explode('"',$arrArgument);
        $sql = "SELECT * FROM bike INNER JOIN favourites ON bike.idbike=favourites.favs AND favourites.uid LIKE '$id[1]' AND bike.idbike LIKE '$arrArgument2'";
        // $sql = "DELETE FROM favourites WHERE uid LIKE '$id[1]' AND favs LIKE '$arrArgument2'";
        
        //HAY QUE COMPLETAR EL SQL PARA BUSCAR EL IDBIKE I SUS PROPIEDADES.
        
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        // echo json_encode("Hola");
    }

}
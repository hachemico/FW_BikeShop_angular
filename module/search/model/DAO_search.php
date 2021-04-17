<?php
 	$path = $_SERVER['DOCUMENT_ROOT'] . '/8_MVC_CRUD';
     include($path . "/model/connect.php");

    class DAO_search{

         function autocomplete(){
            $categoria = $_POST['auto'];
            $sql = "SELECT * FROM bike WHERE brand LIKE '".$categoria. "%'";
            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
         }
    }
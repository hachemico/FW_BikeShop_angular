<?php
//////
class common {
    function loadError() {
        // echo("LOAD ERROR!");
        // exit();
        require_once (VIEW_PATH_INC . 'top_page_home.php');
        require_once (VIEW_PATH_INC . 'header.html');
        require_once (VIEW_PATH_INC . 'menu.php');
        require_once (VIEW_PATH_INC . 'error404.html');
        // require_once (VIEW_PATH_INC . 'content.html');
        require_once (VIEW_PATH_INC . 'footer.html');
        require_once (VIEW_PATH_INC . 'bottom_page.php');
    }// end_loadError
    
    function loadView($topPage, $view) {
        $topPage = VIEW_PATH_INC . $topPage;
        // echo("$topPage");
        // exit();
         if ((file_exists($topPage)) && (file_exists($view))) {
            
            require_once ($topPage);
            require_once (VIEW_PATH_INC . 'header.html');
            require_once (VIEW_PATH_INC . 'menu.php');
            require_once ($view);
            require_once (VIEW_PATH_INC . 'footer.html');
            require_once (VIEW_PATH_INC . 'bottom_page.php');
        }else {
            self::loadError();
        }// end_else
    }// end_loadView

    function loadModel($model_path, $model_name, $function, $arrArgument = '',$arrArgument2 = ''){
        $model = $model_path . $model_name . '.class.singleton.php';
        // echo($model);
        // exit();
        if (file_exists($model)) {
                      
            include_once($model);
            $modelClass = $model_name;
                  
            if (!method_exists($modelClass, $function)){
                throw new Exception();
            }
              $obj = $modelClass::getInstance();
            if (isset($arrArgument)){
                if (isset($arrArgument2)) {
                    //return $obj->$function($arrArgument,$arrArgument2);
                    return call_user_func(array($obj, $function),$arrArgument,$arrArgument2);
                }
                //return $obj->$function($arrArgument);
                return call_user_func(array($obj, $function),$arrArgument);
            }   
            
        } else {
            throw new Exception();
        }
        //  echo json_encode($obj);
    }

    // function generate_Token_secure($longitud){
    //     if ($longitud < 4) {
    //         $longitud = 4;
    //     }
    //     return bin2hex(openssl_random_pseudo_bytes(($longitud - ($longitud % 2)) / 2));
    // }// end_generate_Token_securre
    
    function amigable($url, $return = false) {
        $amigableson = URL_AMIGABLES;
        $link = "";
        if ($amigableson) {
            $url = explode("&", str_replace("?", "", $url));
            foreach ($url as $key => $value) {
                $aux = explode("=", $value);
                $link .=  $aux[1]."/";
            }
        } else {
            $link = "index.php?" . $url;
        }
        if ($return) {
            return SITE_PATH . $link;
        }
        echo SITE_PATH . $link;
    }
}// end_common

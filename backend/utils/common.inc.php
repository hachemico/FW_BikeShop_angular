<?php
//////
class common {
    function loadError() {
        echo("LOAD ERROR!");
        exit();
        // require_once (VIEW_PATH_INC . 'index.html');
        // require_once (VIEW_PATH_INC . 'header.html');
        // require_once (VIEW_PATH_INC . 'menu.view.html');
        // require_once (VIEW_PATH_INC . 'error404.html');
        // // require_once (VIEW_PATH_INC . 'content.html');
        // require_once (VIEW_PATH_INC . 'footer.view.html');
        // require_once (VIEW_PATH_INC . 'bottom_page.view.html');
    }// end_loadError
    
    function loadView($topPage, $view) {
        $topPage = VIEW_PATH_INC . $topPage;
        echo("$topPage");
        echo("$view");
        exit();
        
        
         if ((file_exists($topPage)) && (file_exists($view))) {
            
            require_once ($topPage);
            require_once (VIEW_PATH_INC . 'header.html');
            require_once (VIEW_PATH_INC . 'menu.view.html');
            require_once ($view);
            require_once (VIEW_PATH_INC . 'footer.view.html');
            require_once (VIEW_PATH_INC . 'bottom_page.view.html');
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
    
}// end_common

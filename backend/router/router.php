<?php
//////
require ('autoload.php');
$_POST = json_decode(file_get_contents('php://input'), true);

ob_start();
session_start();

class router {
    private $uriModule;
    private $uriFunction;
    private $nameModule;
    static $_instance;
    //////
    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }// end_if
        return self::$_instance;
    }// end_getInstance

    function __construct() {
        // $this -> uriModule = (ISSET($_GET['module'])) ? $_GET['module'] : 'home';
        // $this -> uriFunction = (ISSET($_GET['function'])) ? $_GET['function'] : 'list';
        
        if(!empty($_GET['module'])){
            $this -> uriModule = $_GET['module'];
        }else if(!empty($_POST['module'])){
            $this -> uriModule = $_POST['module'];
        }else{
            $this -> uriModule ='home';
        }
        
        if(!empty($_GET['function'])){
            $this -> uriFunction = $_GET['function'];
        }else if(!empty($_POST['function'])){
            $this -> uriFunction = $_POST['function'];
        }else{
            $this -> uriFunction ='getShop';
        }

    }
    function rountingStart() {
      
        try {
            call_user_func(array($this -> loadModule(), $this -> loadFunction()));
        }catch(Exception $e) {
            common::loadError();
        }// end_catch
    }// end_routingStart
    
    private function loadModule() {
       
        if (file_exists('resources/modules.xml')) {
            
            $modules = simplexml_load_file('resources/modules.xml');
            
            foreach ($modules as $row) {
                //////
                if (in_array($this -> uriModule, (Array) $row -> uri)) {
                    $path = MODULES_PATH . $row -> name . '/controller/controller_' . (String) $row -> name . '.class.php';
                    if (file_exists($path)) {
                        require_once($path);
                        // echo($path);
                        // exit();
                        $controllerName = 'controller_' . (String) $row -> name;
                        // echo($controllerName);
                        // exit();
                        $this -> nameModule = (String) $row -> name;
                        // echo($this -> nameModule);
                        // exit();
                        return new $controllerName;
                    }// end_if
                }// end_if
            }// end_foreach
        }// end_if
        throw new Exception('Not Module found.');
    }// loadModule
    
    private function loadFunction() {
        $path = MODULES_PATH . $this -> nameModule . '/resources/functions.xml';
        //   echo($path);
        //     exit();
        if (file_exists($path)) {
            // echo($path);
            // exit();
            $functions = simplexml_load_file($path);
           
            foreach ($functions as $row) {
                if (in_array($this -> uriFunction, (Array) $row -> uri)) {
                    //  echo((String) $row -> name);
                    //  exit();
                    return (String) $row -> name;

                }// end_if
            }// end_foreach
            // echo($uriFunction);
            // exit();
        }// end_if
        throw new Exception('Not Function found.');
    }// end_loadFunction
}// end_router
//////
router::getInstance() -> rountingStart();
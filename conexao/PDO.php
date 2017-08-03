<?php
class Conexao extends PDO{
   protected static $db;
   private function __construct(){
      $host = "localhost";
      $nome = "postgres";
      $usuario = "postgre";
      $senha = "root";
      $driver = "pgsql";

      try{
         self::$db = new PDO("$driver:host=$host;dbname=$nome", $usuario, $senha);
         self::$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
         self::$db->exec('SET NAMES utf-8');
      }
      catch(PDOException $e){
         die("Erro de conexão com o banco de dados ".$e->getMessage());
      }
   }

   public static function conexao(){
      if(!self::$db){
         new Database();
      }

      return self::$db;
   }
}

?>

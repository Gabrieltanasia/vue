<?php
if(isset($_POST['metodo'])){
   require_once('../conexao/Conexao.php');
   $conexao = Conexao::conectar();

   switch($_POST['metodo']){
      case 'getCodigo':
         $selectCodigo = "SELECT id FROM cliente ORDER BY id DESC";
         $stmtSelectCodigo = $conexao->prepare($selectCodigo);
         $stmtSelectCodigo->execute();
         $r = $stmtSelectCodigo->fetch();
         echo $r[0];
         break;
      case 'setCadastro':
         $nome = filter_var($_POST['nome']);
         $insertCadastro = "INSERT INTO cliente (nome) VALUES (?)";
         $stmtCadastro = $conexao->prepare($insertCadastro);
         $stmtCadastro->bindValue(1,$nome);
         $stmtCadastro->execute();
         echo 1;
         break;
   }
}
?>

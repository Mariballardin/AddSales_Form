<?php

$dbHost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'new_schema';

$conexao = new mysqli($dbHost, $dbUsername, $dbPassword,$dbName);

if ($conexao -> connect_errno)
{
  echo "Erro";
}
else
{
  echo "Conexão efetuada"
}
?>
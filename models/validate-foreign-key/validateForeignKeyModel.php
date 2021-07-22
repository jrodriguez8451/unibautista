<?php 
    class ForeignKey extends Connection {
        private $sql;
        public function validateForeignKey() {
            if(isset($_POST['foreign_N'])) {
                $foreign_N  = $_POST['foreign_N'];
                $tabla      = $_POST['tabla'];
                $foreign_Id = $_POST['Foreign_Id'];
                $this->sql ="SELECT $foreign_N FROM $tabla WHERE $foreign_N = $foreign_Id limit 1";
                $respuesta = mysqli_query($this->conection,$this->sql);   
                if($respuesta -> num_rows === 1) {
                    $result =$respuesta -> num_rows;
                }else if($respuesta -> num_rows === 0) {
                    $result =$respuesta -> num_rows;
                }
                return $result;
            }
        }
    }
?>
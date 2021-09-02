<?php 
	class Connection {
		private   $server;
		private   $username;
		private   $password;
		private   $database;
		protected $conection;
		
		function __construct() {
			$this->setDataConnection();
			$this->establishConnection();
		}

        protected function setDataConnection() {
			require('dataConnection.php');
			$this->server   = $server;
			$this->username = $username;
			$this->password = $password;
			$this->database = $database;
		}

        protected function establishConnection() {
			$this->conection = mysqli_connect($this->server,$this->username,$this->password,$this->database);
            if (!$this->conection){
                exit('Error 500. <br> Lo sentimos, no pudimos establecer una conexión con el servidor.');
			}else{
				//echo("Se conecto exitosamente <br>");
			}
			return $this->conection;
		}
    }
?>
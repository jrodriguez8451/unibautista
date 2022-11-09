<?php
    class Validate extends Connection {
        private $email;
        private $password;

        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        public function validateLogin() {
            if (isset($_POST['email']) && isset($_POST['password'])) {
                if ($this->conection->connect_errno) {
                    echo "<script> alert('Lo sentimos, la conexión no fue exitosa.'); </script>";
                    die();
                }
                else {
                    $email    = $_POST['email'];
                    $password = $_POST['password'];
                    $sql      = "SELECT * FROM tblusuario INNER JOIN tblrol ON tblrol.rol_id = tblusuario.tblrol_rol_id  WHERE  usu_correo='$email' AND usu_contrasena ='$password' AND tblusuario.tblestado_general_est_gen_id = 1";
                    $answer = $this->conection->query($sql);
                    if (!$answer) {
                        echo "<script> alert('No podemos iniciar tu sesión. ¡Vuelve a intentarlo!'); </script>";
                        echo ("<script> location.href='iniciar-sesion'; </script>");
                        die();  
                    }
                    if ($answer->num_rows===0) {
                        echo "<script> alert('El correo o contraseña ingresado es incorrecto. ¡Vuelve a intentarlo!'); </script>";
                        echo ("<script> location.href='iniciar-sesion'; </script>");
                        die();  
                    }
                    while ($answer->num_rows>=1) {
                        while ($row = mysqli_fetch_object($answer)){
                            $usu_id          = $row->usu_id;
                            $usu_nombre      = $row->usu_primer_nombre;
                            $usu_apellido    = $row->usu_primer_apellido;
                            $usu_rol         = $row->rol_descripcion;
                        }
                        $nombre              = "$usu_nombre "."$usu_apellido";
                        $_SESSION['usu_nom'] = $nombre;
                        $_SESSION['usu_id']  = $usu_id;
                        $_SESSION['usu_rol'] = $usu_rol;
                        $URL                 = 'inicio';
                        echo "<script> alert('Sesión iniciada para $nombre'); </script>";
                        echo ("<script> location.href='$URL'; </script>");
                        break;
                    }
                }
            }
            else {
                echo "<script> alert('Lo sentimos, no entraste correctamente al sistema.'); </script>";
                header('location: logout');
                exit();
            }
        }

        public function recoverPassword() {
            //Capturo el correo y la clave escritos en el formulario, los comparo con los de la base de datos y actualizo por los datos suministrados
            //Solucion temporal debido a que el phpmailer smtp y gmail ya no son compatibles, este proyecto no estará subido en una nube.
            if (isset($_POST['recover_password'])) {
                $this->email    = $_POST['rec-cor'];
                $this->password = $_POST['rec-pas'];
            }
            // En una variable almaceno el sql con los datos que capturamos
            $sql = "UPDATE tblusuario SET usu_contrasena = '$this->password' WHERE usu_correo = '$this->email'";
            //mysqli_query = Realiza una consulta a la base de datos
            //En una variable almaceno la funcion mysqli_query, que recibe por parametros la conexion de la bd y el codigo sql a ejecutar
            $result = mysqli_query($this->conection,$sql);
            //Si lo anterior es true, entonces retorna mi variable
            if ($result){
                return $result; 
            }
        }
    }   
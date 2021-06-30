<?php
    class ValidarElLogin extends Conexion{

        public function __construct()
        {
            $this->datosConexion();
            $this->establecerConexion();
        }

        public function validarLogin(){

            if (isset($_POST['email']) && isset($_POST['password'])){

                if ($this->conexion->connect_errno) {
                    echo "Lo sentimos, la conexion no fue exitosa <br>";
                    echo "Error,".$this->conexion->connect_errno."<br>";
                    die();
                }
                else {
                    $email    = $_POST['email'];
                    $password = $_POST['password'];
                    // $contra   = md5($password);

                    $sql = "SELECT * FROM tblusuario WHERE  usu_correo='$email' AND usu_contrasena ='$password'  AND tblusuario.tblestado_est_id = 1";
                    $respuesta = $this->conexion->query($sql);

                    if (!$respuesta) {
                        echo "Lo sentimos, la consulta no pudo efectuarse <br>";
                        echo "Query ". $sql ."<br>";
                        echo "Error," . $this->conexion->connect_errno . "<br>";
                        die();  
                    }
                    if ($respuesta -> num_rows === 0) {
                        echo "<script>alert('Tus datos no existen en la base de datos, ¡Intenta de nuevo!')</script>";
                    }
                    while ($respuesta -> num_rows >= 1) {
                        while ($row = mysqli_fetch_object($respuesta)){
                            $usu_id       = $row->usu_id;
                            $nombre_usu   = $row->usu_primer_nombre;
                            $apellido_usu = $row->usu_primer_apellido;
                            $rol          = $row->rol_descripcion;
                        }
                        $nom_app = "$nombre_usu "."$apellido_usu";
                        
                        $_SESSION['usu_id']=$usu_id;
                        $_SESSION['nom_app']=$nom_app;
                        $_SESSION['nameRol']=$rol;
                        
                        echo "<script>alert('¡Bienvenido $nom_app!')</script>";

                        $yourURL="C_inicio";
                        echo ("<script>location.href='$yourURL'</script>");
                        break;
                    }
                }
            } else {
                echo "Lo sentimos, no entraste correctamente al sistema";
                header("location: ../../controllers/login/logout.php");
                exit();
            }
        }
        public function selector_rol(){
            $sql = "SELECT * FROM tblrol WHERE tblestado_est_gen_id=1";
            $result = mysqli_query($this->conexion,$sql);
            return $result;
        }
    }
<?php
    class Validate extends Connection {

        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        public function validateLogin() {
            if (isset($_POST['email']) && isset($_POST['password']) && isset($_POST['rol'])) {
                if ($this->conection->connect_errno) {
                    echo "<script>alert('Lo sentimos, la conexion no fue exitosa.')</script>";
                    die();
                }
                else {
                    $email    = $_POST['email'];
                    $password = $_POST['password'];
                    $rol      = $_POST['rol'];
                    // $contra =md5($password);
                    $sql = "SELECT * FROM tblusuario INNER JOIN tblrol ON tblrol.rol_id = tblusuario.tblrol_rol_id  WHERE  usu_correo='$email' AND usu_contrasena ='$password' AND tblrol_rol_id=$rol AND tblusuario.tblestado_est_id = 1";
                    $answer = $this->conection->query($sql);
                    if (!$answer) {
                        echo "<script>alert('No podemos iniciar tu sesión. ¡Vuelve a intentarlo!')</script>";
                        echo ("<script>location.href='login'</script>");
                        die();  
                    }
                    if ($answer -> num_rows === 0) {
                        echo "<script>alert('Tu usuario no fue encontrado, ¡Intenta de nuevo!')</script>";
                    }
                    while ($answer -> num_rows >= 1) {
                        while ($row = mysqli_fetch_object($answer)){
                            $nombre_usu = $row->usu_primer_nombre;
                            $apellido_usu = $row->usu_primer_apellido;
                            $usu_id = $row->usu_id;
                            // $usu_foto = $row->usu_foto;
                            $nameRol = $row->rol_descripcion;
                        }
                        $nom_app = "$nombre_usu "."$apellido_usu";
                        $_SESSION['nom_app'] = $nom_app;
                        $_SESSION['usu_id']  = $usu_id;
                        // $_SESSION['usu_foto']=$usu_foto;
                        $_SESSION['nameRol'] = $nameRol;
                        //$_SESSION['usu_foto']=$usu_foto;
                        /* $StringFoto = $usuario['usu_foto'];
                        $rest = substr($StringFoto, 3);
                        $_SESSION['foto']=$rest; */
                        echo "<script>alert('¡Bienvenido $nom_app!')</script>";
                        $yourURL='inicio';
                        echo ("<script>location.href='$yourURL'</script>");
                        break;
                    }
                }
            }
            else {
                echo "<script>alert('Lo sentimos, no entraste correctamente al sistema.')</script>";
                header('location: logout');
                exit();
            }
        }
        public function selectorRol(){
            $sql = 'SELECT * FROM tblrol WHERE tblestado_general_est_gen_id=1';
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }
    }
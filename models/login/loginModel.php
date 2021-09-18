<?php
    class Validate extends Connection {

        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        public function validateLogin() {
            if (isset($_POST['email']) && isset($_POST['password'])) {
                if ($this->conection->connect_errno) {
                    echo "<script> alert('Lo sentimos, la conexion no fue exitosa.'); </script>";
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
                        $URL                 ='inicio';
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
            //Capturo el correo escrito en el formulario
            $email                 = $_POST['rec-pas'];
            //Consulto el correo que estoy recibiendo
            $sql                   = "SELECT * FROM tblusuario WHERE usu_correo = '$email'";
            //mysqli_query = Realiza una consulta a la base de datos
            //En una variable almaceno la funcion mysqli_query, que recibe por parametros la conexion de la bd y el codigo sql a ejecutar
            $result                = mysqli_query($this->conection,$sql);
            //mysqli_num_rows devuelve el número de filas en un conjunto de resultados
            $nr 			       = mysqli_num_rows($result); 
            if($nr == 1) {
                //De la consulta que estoy haciendo, tu labor será almacenar lo que te asigne
                $pass_bd           = mysqli_fetch_array($result); 
                //Te asigno el campo contraseña de la bd
                $send_pass         = $pass_bd['usu_contrasena'];
                //Destinatario
                $receiver          = $email;
                //Asunto del correo
                $title	           = "Restablecimiento de Clave - Aplicativo Unibautista";
                //Mensaje del correo
                $message           = "Cordial saludo ".$email.", tu clave del aplicativo Unibautista es: '".$send_pass."'. Atentamente, Asistente de Correos.";
                //Correo asignado - Administrador de Correos
                $email_admin     = "From: rootcontrasena@gmail.com";
                if(mail($receiver,$title,$message,$email_admin)) {
                    echo "<script> alert('Revisa tu correo institucional para recuperar la contraseña'); </script>";
                }else {
                    echo "<script> alert('El correo no se encuentra registrado en el sistema'); </script>";
                }
            } else {
                echo "<script> alert('Error al recuperar la clave'); </script>";
            }
        }
}
<?php
    $destinatario = 'srvicio.tecnico.jamm@gmail.com';
    $nombre = $_POST['nombre'];
    $mensaje = $_POST['mensaje'];
    $email= $_POST['email'];
    $header = "Enviado desde JAMM.com";
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

    mail($destinatario, $mensajeCompleto, $header );
    echo "<script> alert('Correo enviado exitosamente') </script>";
    echo "<script> setTimeout(\"location.href='index.html'\", 1000) </script>";

?>
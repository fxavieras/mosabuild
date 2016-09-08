<?php
$link = mysqli_connect("localhost", "root", "tehcTrwVdeHtU5x7", "emails");

if($link === false) {
    header('Location: oops.php');
    die();
}

$user = mysqli_real_escape_string($link, $_POST['username']);

$pass = mysqli_real_escape_string($link, $_POST['password']);

$return = "SELECT * FROM users where user = '$user' AND pass = '$pass'";
$result = $link->query($return);

if ($result->num_rows === 1) {
    header('location: /timeline');
    die();
}
else {

    header('location: /oops');
    die();
}

$link->close();
    header('location: /home');
$link->close();
die();

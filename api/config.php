<?php

$db_user = 'XXXXXXXXXXXXXX'; // Your database user
$db_pass = 'XXXXXXXXXXXXXX'; // your database password
$db_name = 'XXXXXXXXXXXXXX'; // your database name

$link = mysqli_connect('localhost', $db_user, $db_pass, $db_name);
mysqli_set_charset($link,'utf8');
	
?>
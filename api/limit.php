<?php
	header('Access-Control-Allow-Origin: *');
	require_once('config.php');

	$start = ($_GET['start'] == "" ? 0 : $_GET['start']);
	$limitData = ($_GET['limitData'] == "" ? 10 : $_GET['limitData']);

	$sql = "select * from `tbl_note` LIMIT $start, $limitData ";

	// excecute SQL statement
	$result = mysqli_query($link, $sql);
	
	// die if SQL statement failed
	if (!$result) {
	  http_response_code(404);
	  die(mysqli_error());
	}
	
	// print results, insert id or affected row count
	echo "{\"status\":\"ok\", \"dataNotes\":";
	  	if (!$key) echo '[';
	  	for ($i=0;$i<mysqli_num_rows($result);$i++) {
	    	echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
	  	}
	  	if (!$key) echo ']';
	echo "}";

	// close mysql connection
	mysqli_close($link);
<?php 
$CN = mysqli_connect("localhost", "root", "");
$DB = mysqli_select_db($CN,"inova");

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);

$name = $DecodedData['username'];
$pass = $DecodedData['PASSWORD'];

$sql_query = "select * from users where username = '$name' and PASSWORD = '$pass'";
$check = mysqli_fetch_array(mysqli_query($CN, $sql_query));

if(isset($check)){
    $success = 'Data Matched';
    $successJson = json_encode($success);

    echo $successJson;
}else {
    $invalid = 'Username or password wrong, please try again';
    $invalidJson = json_encode($invalid);

    echo $invalidJson;
}

mysqli_close($CN);
?>
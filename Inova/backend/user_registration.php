<?php
$CN = mysqli_connect("localhost", "root", "");
$DB = mysqli_select_db($CN,"inova");

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);
$name = $DecodedData['username'];
$pass = $DecodedData['PASSWORD'];
$fname = $DecodedData['fullname'];
$pnum = $DecodedData['phone_number'];
$email = $DecodedData['email'];


$IQ = "insert into register (username,PASSWORD,fullname,email,phone_number) values ('$name','$pass','$fname','$email','$pnum')";
$R = mysqli_query($CN,$IQ);
if($R){
    $Message = "User has been registered succesfully";
}else {
    $Message = "Server Error, Please try again";
}
echo ($Message);
?>
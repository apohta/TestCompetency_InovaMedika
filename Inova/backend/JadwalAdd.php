<?php
$CN = mysqli_connect("localhost", "root", "");
$DB = mysqli_select_db($CN,"inova");

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);

$dokter_id = $DecodedData['dokter_id'];
$nama_dokter = $DecodedData['nama_dokter'];
$spesialis = $DecodedData['spesialis'];
$hari = $DecodedData['hari'];
$waktu = $DecodedData['waktu'];

$IQ = "insert into jadwal_dokter (dokter_id, nama_dokter, spesialis, hari, waktu) values ('$dokter_id','$nama_dokter','$spesialis','$hari','$waktu')";
$R = mysqli_query($CN,$IQ);
    if($R){
        $Message = "Product has been added succesfully";
    }else {
        $Message = "Server Error, Please try again";
    }
    $Response[]=array("Message"=>$Message);
    echo json_encode($Response);
?>
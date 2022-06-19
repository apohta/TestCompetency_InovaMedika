<?php
error_reporting(0);

$host = "localhost";
$user = "root";
$pass = "";
$db = "inova";

$koneksi = mysqli_connect($host,$user,$pass,$db);

$op = $_GET['op'];
switch($op){
    case '': normal();break;
    default: normal();break;
    case 'create': create();break;
    case 'detail': detail();break;
    case 'update': update();break;
    case 'delete': delete();break;
}

function normal(){
    global $koneksi;
    $sql1 = "SELECT nama_dokter, spesialis, hari, waktu FROM jadwal_dokter ORDER BY dokter_id desc";
    $q1 = mysqli_query($koneksi, $sql1);
    while($r1 = mysqli_fetch_array($q1)){
        $hasil[] = array(
            'nama_dokter' => $r1['nama_dokter'],
            'spesialis' => $r1['spesialis'],
            'hari' => $r1['hari'],
            'waktu' => $r1['waktu']
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function create(){
    global $koneksi;
    $dokter_id = $_POST['dokter_id'];
    $nama_dokter = $_POST['nama_dokter'];
    $spesialis = $_POST['spesialis'];
    $hari = $_POST['hari'];
    $waktu = $_POST['waktu'];
    $hasil = "Gagal Menambah data";
    if($nama_dokter){
        $sql1 = "insert into jadwal_dokter(dokter_id,nama_dokter,spesialis,hari,waktu) values ('$dokter_id','$nama_dokter', '$spesialis', '$hari', '$waktu')";
        $q1 = mysqli_query($koneksi, $sql1);
        if($q1){
            $hasil = "Berhasil Menambah data";
        }
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function detail(){
    global $koneksi;
    $dokter_id = $_GET['dokter_id'];
    $sql1 = "SELECT nama_dokter, spesialis, hari, waktu FROM jadwal_dokter where dokter_id = '$dokter_id'";
    $q1 = mysqli_query($koneksi, $sql1);
    while ($r1 = mysqli_fetch_array($q1)){
        $hasil[] = array(
            'nama_dokter' => $r1['nama_dokter'],
            'spesialis' => $r1['spesialis'],
            'hari' => $r1['hari'],
            'waktu' => $r1['waktu'],
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function update(){
    global $koneksi;
    $dokter_id = $_GET['dokter_id'];
    $nama_dokter = $_POST['nama_dokter'];
    $spesialis = $_POST['spesialis'];
    $hari = $_POST['hari'];
    $waktu = $_POST['waktu'];
    if($dokter_id){
        $set[] = "dokter_id = '$dokter_id'";
    }
    if($nama_dokter){
        $set[] = "nama_dokter = '$nama_dokter'";
    }
    if($spesialis){
        $set[] = "spesialis = '$spesialis'";
    }
    if($hari){
        $set[] = "hari = '$hari'";
    }
    if($waktu){
        $set[] = "waktu = '$waktu'";
    }
    $hasil = "Gagal melakukan update data";
    if($nama_dokter or $spesialis or $hari or $waktu){
        $sql1 = "update jadwal_dokter set ".implode(",", $set)." where dokter_id = '$dokter_id'";
        $q1 = mysqli_query($koneksi, $sql1);
        if($q1){
            $hasil = "Data berhasil diupdate";
        }
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function delete(){
    global $koneksi;
    $dokter_id = $_GET['dokter_id'];
    $sql1 = "delete from jadwal_dokter where dokter_id = '$dokter_id'";
    $q1 = mysqli_query($koneksi, $sql1);
    if($q1){
        $hasil = "Berhasil Menghapus item";
    }else {
        $hasil = "Gagal Menghapus item";
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}
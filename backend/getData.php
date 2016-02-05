<?php
header('Access-Control-Allow-Origin: *');  
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "fari10";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 



$send= array();
$obj          = new stdClass();
$sql = "SELECT * from `bridgeTable`";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $send[]=$row;
    }
    $obj->data = $send;
    echo json_encode($obj, JSON_PRETTY_PRINT);
} else {
   echo json_encode($obj, JSON_PRETTY_PRINT);
}

$conn->close();
?>
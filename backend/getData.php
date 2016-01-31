<?php
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


$inputDate=$_GET["date"];
$send= array();
$sql = "SELECT * from `bridgeTable` where `date`='".$inputDate."'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $send[]=$row;
    }
    echo json_encode($send, JSON_PRETTY_PRINT);
} else {
    echo "{}";
}

$conn->close();
?>
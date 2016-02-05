<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
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


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$postData=$request->data;


$inputDate=$postData->inputDate;
$inputPage=$postData->inputPage;
$inputShift=$postData->inputShift;
$jigValue=$postData->formsData->jig;
$projectLotValue=$postData->formsData->projectLot;
$panelValue1=$postData->formsData->panelValue_1;
$area1=$postData->formsData->area_1;
$panelValue2=$postData->formsData->panelValue_2;
$area2=$postData->formsData->area_2;
$panelValue3=$postData->formsData->panelValue_3;
$area3=$postData->formsData->area_3;
$bridgeOperator=$postData->formsData->bridgeOperator;
$startTimeCell=$postData->formsData->startTime;
$endTimeCell=$postData->formsData->endTime;

$sql = "INSERT INTO `bridgeTable` (`id`, `jig`, `project_lot`, `panel_1`, `area_1`, `panel_2`, `area_2`, `panel_3`, `area_3`, `birdgeOperator`, `start_time`, `end_time`, `date`, `pageNum`, `shift`) VALUES (NULL, '".$jigValue."', '".$projectLotValue."', '".$panelValue1."', '".$area1."', '".$panelValue2."', '".$area2."', '".$panelValue3."', '".$area3."', '".$bridgeOperator."', '".$startTimeCell."', '".$endTimeCell."', '".$inputDate."', '".$inputPage."', '".$inputShift."');
";
$result = $conn->query($sql);
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
http_response_code(200);
?>
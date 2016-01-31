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


$postData=$_POST["data"];
$postData = json_decode($postData);
$inputDate=$postData->inputDate;
$inputPage=$postData->inputPage;
$inputShift=$postData->inputShift;
$jigValue=$postData->jigValue;
$projectLotValue=$postData->projectLotValue;
$panelValue1=$postData->panelValue1;
$area1=$postData->area1;
$panelValue2=$postData->panelValue2;
$area2=$postData->area2;
$panelValue3=$postData->panelValue3;
$area3=$postData->area3;
$bridgeOperator=$postData->bridgeOperator;
$startTimeCell=$postData->startTimeCell;
$endTimeCell=$postData->endTimeCell;

$sql = "INSERT INTO `bridgeTable` (`id`, `jig`, `project_lot`, `panel_1`, `area_1`, `panel_2`, `area_2`, `panel_3`, `area_3`, `birdgeOperator`, `start_time`, `end_time`, `date`, `pageNum`, `shift`) VALUES (NULL, '".$jigValue."', '".$projectLotValue."', '".$panelValue1."', '".$area1."', '".$panelValue2."', '".$area2."', '".$panelValue3."', '".$area3."', '".$bridgeOperator."', '".$startTimeCell."', '".$endTimeCell."', '".$inputDate."', '".$inputPage."', '".$inputShift."');
";
$result = $conn->query($sql);

/*if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 results";
}*/
$conn->close();
?>
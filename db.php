Database Connection (db.php)


<?php
$servername = "localhost";
$name = "name";
$password = "password";
$dbname = "login";

// Create connection
$conn = new mysqli($servername, $name, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?
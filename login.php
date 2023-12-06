<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // Check if user exists
    $sql = "SELECT id FROM users WHERE name = '$name' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // User found
        // Start session and set session variables
        session_start();
        $_SESSION['loggedin'] = true;
        $_SESSION['name'] = $name;
        // Redirect to user dashboard or homepage
        header("location: welcome.php");
    } else {
        // User not found
        echo "Invalid username or password";
    }
    $conn->close();
}
?>
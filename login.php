<?php
include("db.php");

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users_table 
        WHERE user_email='$email' 
        AND user_password='$password'";

$result = $conn->query($sql);

if($result->num_rows > 0){
    echo "<h2 style='color:green'>Welcome! Login successful</h2>";
} 
else{
    echo "<h2 style='color:red'>Invalid login credentials</h2>";
}

$conn->close();
?>
<?php
include("db.php");

if(isset($_POST['name'], $_POST['age'], $_POST['email'], $_POST['password'])){

    $name = $_POST['name'];
    $age = $_POST['age'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    

    $sql = "INSERT INTO users_table (full_name, user_age, user_email, user_password, status) 
VALUES ('$name','$age','$email','$password','Active')";        

    if($conn->query($sql) === TRUE){
        echo "<h2>Account Created Successfully!</h2>";
        header("refresh:2; url=login.html");
    }
    else{
        echo "Error: " . $conn->error;
    }

}

$conn->close();
?>
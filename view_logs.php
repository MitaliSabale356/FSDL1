<?php
include "db.php";

$sql = "SELECT * FROM users_table";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html>
<head>
<title>Registered Users</title>
<style>
body{
font-family: Arial;
text-align:center;
}

table{
margin:auto;
border-collapse:collapse;
width:70%;
}

th,td{
border:1px solid black;
padding:10px;
}

th{
background:#f2f2f2;
}
</style>
</head>

<body>

<h2>Registered Users</h2>

<table>
<tr>
<th>ID</th>
<th>Name</th>
<th>Age</th>
<th>Email</th>
<th>Password</th>
<th>Status</th>
</tr>

<?php

if ($result->num_rows > 0) {

while($row = $result->fetch_assoc()) {

echo "<tr>";
echo "<td>".$row['user_id']."</td>";
echo "<td>".$row['full_name']."</td>";
echo "<td>".$row['user_age']."</td>";
echo "<td>".$row['user_email']."</td>";
echo "<td>".$row['user_password']."</td>";
echo "<td>".$row['status']."</td>";
echo "</tr>";

}

}

?>

</table>

</body>
</html>
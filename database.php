<?php

$servername = "localhost";
$username = "root";
$password = "";
$db = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// //create database
// $sql = "CREATE DATABASE myDB";

// if($conn->query($sql) === TRUE){
//     echo "Database created successfully";
// }
// else{
//     echo "Error creating database $conn->error";
// }

//create table

// $sql = "CREATE TABLE Users (
//     id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//     firstname VARCHAR(30) NOT NULL,
//     lastname VARCHAR(30) NOT NULL,
//     email VARCHAR(50) NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// )";

// if($conn->query($sql) === TRUE){
//     echo "Table created successfully";
// }
// else{
//     echo "Table created successfully";
// }

//insert records

// $sql = "INSERT INTO Users (firstname, lastname, email) VALUES ('Chinonso', 'Eke', 'chinonsoeke@gmail.com')";

// if($conn->query($sql) === TRUE){
//     echo "Record created successfully";
// }
// else{
//     echo "Error creating record $conn->error";
// }

//select records

$sql = "SELECT id, firstname, lastname, email FROM Users";

$result = $conn->query($sql);

while($row = $result->fetch_assoc()){
    echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
}
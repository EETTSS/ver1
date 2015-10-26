<?php
// define variables and set to empty values
$name = $email = $subject = $message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $subject = test_input($_POST["subject"]);
  $message = test_input($_POST["message"]);
  
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

echo "<h2>Your Input:</h2>";
echo "<br>Your name:"
echo $name;
echo "<br>Your email:";
echo $email;
echo "<br>Your subject";
echo $subject;
echo "<br>Your message";
echo $message;
?>
<?php
// Basic example of signup.php for handling form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);
    
    // Normally, you'd hash the password and save it to a database
    // For this example, we'll just echo the username and password
    echo "Signup successful! Username: $username, Password: $password";
}
?>

<?php
// Basic example of login.php for handling form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);
    
    // Normally, you'd check the username and password against a database
    // For this example, we'll just echo the username and password
    echo "Login successful! Username: $username, Password: $password";
}
?>

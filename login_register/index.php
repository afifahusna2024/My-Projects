<?php

session_start();

$errors = [
  'login' => $_SESSION['login_error'] ?? '', 
  'register' => $_SESSION['register_error'] ?? ''
]; 
$activeForm = $_SESSION['active_form'] ?? 'login'; 

session_unset();

function showError($error) { 
  return !empty($error) ? "<p class='error-message'>$error</p> " : '';
 } 
 
 function isActiveForm($formName, $activeForm) { 
  return $formName === $activeForm ? 'active' : ''; 
  } 
  
  ?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login-Register</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <div
        class="form-box <?= isActiveForm('login', $activeForm); ?>"
        id="login-form"
      >
        <form action="login_register.php" method="post">
          <h2>Login</h2>
          <?= showError($errors['login']); ?>
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
            <!-- <div class="popup" id="popup">
            <img id="img" src="tick.jpg" alt="tick.jpg" style="width: 100px; margin-top; -50px; 
            -webkit-border-radius: 50%; -moz-border-radius: 50%;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
            <h2>Thank You!</h2>
            <p>for logging in😊</p>
            <button type="button">OK</button>
           </div> 
          </div>-->
          <button type="submit" name="login">Login</button>
          <p>
            Don't have an account?
            <a href="#" onclick="showForm('register-form')">Register</a>
          </p>
        </form>
      </div>

      <div
        class="form-box <?= isActiveForm('register', $activeForm); ?>"
        id="register-form"
      >
        <form action="login_register.php" method="post">
          <h2>Register</h2>
          <?= showError($errors['register']); ?>
          <input type="type" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <select name="role" id="" required>
            <option value="">Select Please</option>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
          </select>
          <button type="submit" name="register">Register</button>
          <p>
            Already have an account?
            <a href="#" onclick="showForm('login-form')">Login</a>
          </p>
        </form>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>

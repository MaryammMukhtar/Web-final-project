document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signinForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const password = document.getElementById('password').value;
  
      // Check if the password matches the preset value
      const presetPassword = '123456';
      if (password !== presetPassword) {
        alert('Incorrect password!');
        return;
      }
  
      // You can add further validation or send data to the server here
      // For simplicity, this example only checks for the preset password
  
      alert('Signin successful!');
      form.reset();
    });
  });
  
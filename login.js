
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      
      var phonePattern = /^\d{10}$/;
      if (!phone.match(phonePattern)) {
        alert("Please enter a valid phone number.");
        return false;
      }
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
  
      // You can add further validation or send data to the server here
      // For simplicity, this example only checks for password matching
  
      alert('Signup successful!');
      form.reset();
    });
  });
  
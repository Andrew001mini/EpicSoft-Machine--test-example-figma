document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting
  
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
  
    // Simple form validation
    if (!firstName || !lastName || !email || !phone || !password) {
      alert("All fields are required!");
      return;
    }
  
    if (phone.length !== 10) {
      alert("Phone number must be 10 digits.");
      return;
    }
  
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
  
    // Log form data
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phone,
      password: password
    };
  
    console.log(formData);
    alert("Form submitted successfully!");
  });
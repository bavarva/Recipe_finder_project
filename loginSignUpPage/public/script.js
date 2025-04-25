function signup() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const terms = document.getElementById("terms").checked;
  
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }
  
    if (!terms) {
      alert("You must agree to the terms & policy.");
      return;
    }
  
    alert(`Welcome, ${name}! Signup successful.`);
  }

  function login() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();
    const remember = document.getElementById("remember").checked;
  
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
  
    alert(`Login successful${remember ? ' with Remember Me checked!' : '!'}`);
  }
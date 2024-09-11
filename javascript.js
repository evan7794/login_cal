document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    document.querySelector('.loading-overlay').style.display = 'flex';

    
    setTimeout(function() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var errorMessage = document.getElementById('error-message');

        if (username === "user" && password === "pass") {
            
            if (errorMessage) {
                errorMessage.textContent = "Login successful!";
                errorMessage.style.color = "green"; 
            }

            // Hide the loading overlay after a short delay
            setTimeout(function() {
                window.location.href = "cal.html";
            }, 1000); // Adjust the delay as needed (1000 ms = 1 second)
        } else {
            
            if (errorMessage) {
                // Display error message if credentials are incorrect
                errorMessage.textContent = "Invalid username or password!";
                errorMessage.style.color = "red"; 
            }
            
            document.querySelector('.loading-overlay').style.display = 'none';
        }
    }, 2000); 
});

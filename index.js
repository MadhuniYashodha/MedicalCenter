
        // Predefined username and password
        var predefinedUsername = "admin";
        var predefinedPassword = "password";

        // Add event listener for form submission
        document.querySelector("form").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting

            // Get the entered username and password
            var enteredUsername = document.getElementById("username").value;
            var enteredPassword = document.getElementById("password").value;

            // Compare the entered credentials with the predefined values
            if (enteredUsername === predefinedUsername && enteredPassword === predefinedPassword) {
                // Redirect to the successful login page
                window.location.assign("search.html");
            } else {
                alert("Invalid username or password. Please try again.");
            }
        });
 
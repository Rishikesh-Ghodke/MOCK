document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let user = { name, email, password };

        // Store in local storage
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        // AJAX POST request
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "https://jsonplaceholder.typicode.com/users", true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 201) {
                alert("User Registered Successfully!");
                form.reset();
            }
        };

        xhr.send(JSON.stringify(user));
    });
});

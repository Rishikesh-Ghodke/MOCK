document.addEventListener("DOMContentLoaded", function () {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userList = document.getElementById("userList");

    users.forEach((user, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${user.name} - ${user.email}`;
        userList.appendChild(li);
    });
});

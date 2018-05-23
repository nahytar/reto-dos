window.onload = function () {
    var formName = document.getElementById("formName");
    var inputName = document.getElementById("inputName");
    var name = document.getElementById("name");
    var formEmail = document.getElementById("formEmail");
    var inputEmail = document.getElementById("inputEmail");
    var email = document.getElementById("email");

    formName.addEventListener("submit", function () {
        name.innerHTML = inputName.value;
    });

    formEmail.addEventListener("submit", function () {
            email.innerHTML = inputEmail.value;
    });
    btn.addEventListener("click", function () {
        text.innerHTML = "<h2>Git y Github te amamos</h2>";
    })
}

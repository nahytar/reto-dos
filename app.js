window.onload = function () {
    var formName = document.getElementById("formName");
    var inputName = document.getElementById("inputName");
    var name = document.getElementById("name");

    var btn = document.getElementById("button-change");
    var text = document.getElementById("paragraph");
    
    var formEmail = document.getElementById("formEmail");
    var inputEmail = document.getElementById("inputEmail");
    var email = document.getElementById("email");

    formName.addEventListener("submit", function () {
        name.innerHTML = inputName.value;
    });

    btn.addEventListener("click", function () {
        text.innerHTML = "<p>La metanfetamina de la serie son dulces</p>";
    });

    formEmail.addEventListener("submit", function () {
            email.innerHTML = inputEmail.value;
    });
}

// Функция для выбора роли (ученик или родитель)
document.getElementById("oquvchiman").addEventListener("click", function () {
    setActive("oquvchiman");
});

document.getElementById("otaonaman").addEventListener("click", function () {
    setActive("otaonaman");
});

function setActive(selectedId) {
    document.getElementById("oquvchiman").classList.remove("active");
    document.getElementById("otaonaman").classList.remove("active");
    document.getElementById(selectedId).classList.add("active");

    let statusText = selectedId === "oquvchiman" ? "Siz o'quvchi sifatida tanlandingiz" : "Siz ota-ona sifatida tanlandingiz";
    document.getElementById("status").textContent = statusText;

    checkInputs(); // Проверяем, можно ли активировать кнопку
}

// Функция для показа/скрытия пароля
document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});



// Функция проверки, заполнены ли поля
function checkInputs() {
    let phone = document.getElementById("phoneNumber").value.trim();
    let password = document.getElementById("password").value.trim();

    let submitButton = document.getElementById("submit");

    if (phone !== "" && password !== "") {
        submitButton.classList.remove("disabled");
        submitButton.removeAttribute("disabled");
        submitButton.setAttribute("href", "next-page.html"); // Замените на нужную страницу
    } else {
        submitButton.classList.add("disabled");
        submitButton.setAttribute("disabled", "true");
        submitButton.removeAttribute("href");
    }
}

// Проверяем ввод в полях
document.getElementById("phoneNumber").addEventListener("input", checkInputs);
document.getElementById("password").addEventListener("input", checkInputs);

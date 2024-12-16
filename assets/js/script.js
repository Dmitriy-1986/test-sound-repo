document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector("#sidebar");
    const main = document.querySelector(".container");
    const openButton = document.querySelector(".openbtn");

    // Открытие бокового меню
    openButton.addEventListener("click", () => {
        sidebar.style.width = "300px";
        openButton.classList.add("hidden");
    });

    // Закрытие бокового меню
    const closeButton = document.querySelector(".closebtn");
    closeButton.addEventListener("click", () => {
        sidebar.style.width = "0";
        openButton.classList.remove("hidden");
    });
});

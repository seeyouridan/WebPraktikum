let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Kemana bang? :(";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
});
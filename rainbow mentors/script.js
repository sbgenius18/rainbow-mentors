console.log("JS file loaded successfully!");
document.getElementById("menu").addEventListener("click", function () {
    let menuBar = document.getElementById("menu-bar");

    if (menuBar.style.visibility === "hidden") {
        menuBar.style.visibility = "visible";
    } else {
        menuBar.style.visibility = "hidden";
    }
});
function hamburger() {
    let z = document.getElementById("ham");
    if (z.className === "center") {
        z.className += "responsive";
    } else {
        z.className = "center";
    }
}
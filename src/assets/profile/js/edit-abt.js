let about = document.getElementById("about");
let description = document.getElementById("description");
showabout();
function showabout(){
    about.style.display = "block";
    description.style.display = "none";
}

function showpp(){
    about.style.display = "none";
    description.style.display = "block";
}
function loginasmentor() {
    location.replace("mentorlogin.html")
}

function loginasstudent() {
    location.replace("studentlogin.html")
}


function loginmentor() {
    location.replace("homeScreen.html")
}

const scrollContainer2 = document.querySelector("#items");
scrollContainer2.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer2.scrollLeft += evt.deltaY;
});

let formPage = document.getElementById("formPage");
let hire = document.querySelector("#hire");
function Hire() {
  formPage.style.visibility = "visible";
}
hire.addEventListener("click", Hire);

/************************************ */

let as = document.querySelectorAll(".a");
for (let i = 0; i < as.length; i++) {
  as[i].addEventListener("click", function () {
    let current = document.querySelector(".active");
    current.className = current.className.replace("active", "");
    this.className = "active";
  });
}

/**************** */

function Frm() {
  let formpage = document.querySelector(".formPage");
  let thanks = document.querySelector("#thanks");
  formpage.style.visibility = "hidden";
  thanks.style.visibility = "visible";
}

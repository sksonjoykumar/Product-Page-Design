// Select all html id
const img = document.getElementById("img");
const btn = document.getElementsByClassName("btn");

// window onload
window.onload = function () {
  mainFun();
};

function mainFun() {
  // btn 1
  btn[0].addEventListener("click", function () {
    img.src = "./Images/image1.png";
    for (bt of btn) {
      bt.classList.remove("active");
    }
    this.classList.add("active");
  });

  //   btn 2
  btn[1].addEventListener("click", function () {
    img.src = "./Images/image2.png";
    for (bt of btn) {
      bt.classList.remove("active");
    }
    this.classList.add("active");
  });

  //   btn 3
  btn[2].addEventListener("click", function () {
    img.src = "./Images/image3.png";
    for (bt of btn) {
      bt.classList.remove("active");
    }
    this.classList.add("active");
  });
}

let containerBox = document.getElementById("container");
let popUp = document.getElementById("popup");
let images = document.querySelectorAll(".guitar");

let popUpImg = document.getElementById("imgBx");
for (let i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    popUp.style.display = "block";
    popUpImg.src = this.src;
    containerBox.style.display = "none";
    document.body.style.backgroundColor = "black";
  };
}

let closer = document.getElementById("X");
closer.onclick = function () {
  popUp.style.display = "none";
  containerBox.style.display = "flex";
  document.body.style.backgroundColor = "#567471";
};

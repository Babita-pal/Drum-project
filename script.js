
let arrayOfDrums = document.querySelectorAll(".drum1");

for (let i = 0; i < arrayOfDrums.length; i++) {
  arrayOfDrums[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
  arrayOfDrums[i].addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });
}
const makeSound = (key) => {
  switch (key) {
    case "W":
      let tom1 = new Audio("musics/57-A-Rafta-Rafta-Atif-Aslam-Mp3-Ringtone.mp3");
      tom1.play();
      break;
    case "A":
      let tom2 = new Audio("musics/Bandook-Ringtone-Nirvair-Pannu.mp3");
      tom2.play();
      break;
    case "S":
      let tom3 = new Audio("musics/57-B-Usne-Nigah-Se-Kiya-Salam-Hai-Ringtone.mp3");
      tom3.play();
      break;
    case "D":
      let tom4 = new Audio("musics/Maa-Meri-Maa-Pyari-Maa-Mumma-Ringtone.mp3");
      tom4.play();
      break;
    case "J":
      let snare = new Audio("musics/Oh-Mehnge-Ne-Moti-Jo-Hasil-Ringtone-Download.mp3");
      snare.play();
      break;
    case "K":
      let crash = new Audio("musics/sajjda.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("musics/Akh-Lagdi.mp3");
      kick.play();
      break;
    default:
      alert("Wrong key pressed");
  }
};

const buttonAnimation = (key) => {
  let active = document.querySelector(`.${key}`);
  active.classList.add("pressed");

  setTimeout(() => {
    active.classList.remove("pressed");
  }, 100);
};
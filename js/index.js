let flag = false;
let turn = 0;
let tab = new Array();
let jugador1 = document.getElementById("jugador1");
let jugador2 = document.getElementById("jugador2");

window.onload = () => {
  let iniciar = document.getElementById("iniciar");
  iniciar.addEventListener("click", comenzar);
  modalStart.style.display = "block";
};

const comenzar = () => {
  flag = true;
  if (jugador1.value === "") {
    alert("Falta nombre de jugadro 1");
    jugador1.focus();
  } else {
    if (jugador2.value === "") {
      alert("Falta nombre de jugadro 2");
      jugador2.focus();
    } else {
      tab[0] = document.getElementById("b0");
      tab[1] = document.getElementById("b1");
      tab[2] = document.getElementById("b2");
      tab[3] = document.getElementById("b3");
      tab[4] = document.getElementById("b4");
      tab[5] = document.getElementById("b5");
      tab[6] = document.getElementById("b6");
      tab[7] = document.getElementById("b7");
      tab[8] = document.getElementById("b8");
      for (let i = 0; i < 9; i++) {
        tab[i].className = "buttonInicial";
        tab[i].value = "I";
      }
      modalStart.style.display = "none";
      turn = 1;
      document.getElementById("jugador1Box").innerHTML = `${jugador1.value}`;
      document.getElementById("jugador2Box").innerHTML = `${jugador2.value}`;
      document.getElementById(
        "turnojugador"
      ).innerHTML = `Turno de jugador ${jugador1.value}`;
    }
  }
};

const colocar = (boton) => {
  if (flag === true) {
    if (turn === 1 && boton.value === "I") {
      turn = 2;
      document.getElementById(
        "turnojugador"
      ).innerHTML = `Turno de jugador  ${jugador2.value}`;
      boton.value = "X";
      boton.className = "buttonJugador1";
    } else {
      if (turn === 2 && boton.value === "I") {
        turn = 1;
        document.getElementById(
          "turnojugador"
        ).innerHTML = `Turno de jugador  ${jugador1.value}`;
        boton.value = "O";
        boton.className = "buttonJugador2";
      }
    }
  }
  revisar();
};

const revisar = () => {
  if (
    (tab[0].value === "X" && tab[1].value === "X" && tab[2].value === "X") ||
    (tab[3].value === "X" && tab[4].value === "X" && tab[5].value === "X") ||
    (tab[6].value === "X" && tab[7].value === "X" && tab[8].value === "X") ||
    (tab[0].value === "X" && tab[3].value === "X" && tab[6].value === "X") ||
    (tab[1].value === "X" && tab[4].value === "X" && tab[7].value === "X") ||
    (tab[2].value === "X" && tab[5].value === "X" && tab[8].value === "X") ||
    (tab[0].value === "X" && tab[4].value === "X" && tab[8].value === "X") ||
    (tab[2].value === "X" && tab[4].value === "X" && tab[6].value === "X")
  ) {
    const header = ModalHeaderText`¡Felicidades!`;
    const mensaje = ModalText`Has ganado ${jugador1.value}`;
    window.modalHeaderText.innerHTML = header;
    window.modalText.innerHTML = mensaje;
    modalHeader.className = "modal-header";
    modal.style.display = "block";
    alert(`Felicidades ${jugador1.value}`);
    flag = false;
    setTimeout(() => {
      modal.style.display = "none";
      jugador1.value = "";
      jugador2.value = "";
      for (let i = 0; i < 9; i++) {
        tab[i].className = "buttonDefault";
        tab[i].value = "";
      }
    }, 2000);
  }
  if (
    (tab[0].value === "O" && tab[1].value === "O" && tab[2].value === "O") ||
    (tab[3].value === "O" && tab[4].value === "O" && tab[5].value === "O") ||
    (tab[6].value === "O" && tab[7].value === "O" && tab[8].value === "O") ||
    (tab[0].value === "O" && tab[3].value === "O" && tab[6].value === "O") ||
    (tab[1].value === "O" && tab[4].value === "O" && tab[7].value === "O") ||
    (tab[2].value === "O" && tab[5].value === "O" && tab[8].value === "O") ||
    (tab[0].value === "O" && tab[4].value === "O" && tab[8].value === "O") ||
    (tab[2].value === "O" && tab[4].value === "O" && tab[6].value === "O")
  ) {
    const header = ModalHeaderText`¡Felicidades!`;
    const mensaje = ModalText`Has ganado ${jugador2.value}`;
    window.modalHeaderText.innerHTML = header;
    window.modalText.innerHTML = mensaje;
    modalHeader.className = "modal-header";
    modal.style.display = "block";
    // alert(`Felicidades ${jugador2.value}`);
    flag = false;
    setTimeout(() => {
      modal.style.display = "none";
      jugador1.value = "";
      jugador2.value = "";
      for (let i = 0; i < 9; i++) {
        tab[i].className = "buttonDefault";
        tab[i].value = "";
      }
    }, 2000);
  }
  // const header = ModalHeaderText`¡Ocurrio un gato!`;
  // const mensaje = ModalText`Vuelvan a intentarlo`;
  // window.modalHeaderText.innerHTML = header;
  // window.modalText.innerHTML = mensaje;
  // modalHeader.className = "modal-header-error";
  // modal.style.display = "block";
  // flag = false;
  // setTimeout(() => {
  //   modal.style.display = "none";
  //   jugador1.value = "";
  //   jugador2.value = "";
  //   for (let i = 0; i < 9; i++) {
  //     tab[i].className = "buttonDefault";
  //     tab[i].value = "";
  //   }
  // }, 2000);
};

function ModalText(strings, ...dynamicValues) {
  let newContent = "";
  strings.forEach((string, index) => {
    const strong = dynamicValues[index]
      ? `<strong>${dynamicValues[index]}</strong>`
      : "";
    newContent += `${string} ${strong}`;
  });
  return `<p>${newContent}</p>`;
}

function ModalHeaderText(strings, ...dynamicValues) {
  let newContent = "";
  strings.forEach((string, index) => {
    const strong = dynamicValues[index]
      ? `<strong>${dynamicValues[index]}</strong>`
      : "";
    newContent += `${string} ${strong}`;
  });
  return `<h2>${newContent}</h2>`;
}

let modalStart = document.getElementById("inicialModal");

let modal = document.getElementById("myModal");
let modalHeader = document.getElementById("modal-header");
let span = document.getElementsByClassName("close")[0];

span.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

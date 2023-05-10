// Referencias del HTML
// const btnCrear = document.querySelector("button");
const blTicket1 = document.querySelector("#lblTicket1");
const blEscritorio1 = document.querySelector("#lblEscritorio1");

const blTicket2 = document.querySelector("#lblTicket2");
const blEscritorio2 = document.querySelector("#lblEscritorio2");

const blTicket3 = document.querySelector("#lblTicket3");
const blEscritorio3 = document.querySelector("#lblEscritorio3");

const blTicket4 = document.querySelector("#lblTicket4");
const blEscritorio4 = document.querySelector("#lblEscritorio4");

const socket = io();

socket.on("estado-actual", (payload) => {
  const audio = new Audio("../audio/new-ticket.mp3");
  audio.play();
  const [ticket1, ticket2, ticket3, ticket4] = payload;

  if (ticket1) {
    blTicket1.innerText = `Ticket - ${ticket1.numero}`;
    blEscritorio1.innerText = ticket1.escritorio;
  }
  if (ticket2) {
    blTicket2.innerText = `Ticket - ${ticket2.numero}`;
    blEscritorio2.innerText = ticket2.escritorio;
  }
  if (ticket3) {
    blTicket3.innerText = `Ticket - ${ticket3.numero}`;
    blEscritorio3.innerText = ticket3.escritorio;
  }
  if (ticket4) {
    blTicket4.innerText = `Ticket - ${ticket4.numero}`;
    blEscritorio4.innerText = ticket4.escritorio;
  }
});

// btnCrear.addEventListener("click", () => {
//   socket.emit("siguiente-ticket", null, (ticket) => {
//     lblNuevoTicket.innerText = ticket;
//   });
// });

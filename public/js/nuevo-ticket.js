// Referencias del HTML
const lblNuevoTicket = document.querySelector("#lblNuevoTicket");
const btnCrear = document.querySelector("button");

const socket = io();

socket.on("connect", () => {
  btnCrear.disable = false;
});

socket.on("disconnect", () => {
  btnCrear.disable = true;
});

socket.on("ultimo-ticket", (ultimo) => {
  lblNuevoTicket.innerText = `Ticket - ${ultimo}`;
});

btnCrear.addEventListener("click", () => {
  socket.emit("siguiente-ticket", null, (ticket) => {
    lblNuevoTicket.innerText = ticket;
  });
});

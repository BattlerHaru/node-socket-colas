// Referencias del HTML
const lblEscritorio = document.querySelector("h1");
const btnAtender = document.querySelector("button");
const lblTicket = document.querySelector("small");
const divAlerta = document.querySelector(".alert");
const lblPendientes = document.querySelector("#lblPendientes");

const socket = io();

// Only Chrome - Firefox
const searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has("escritorio")) {
  window.location = "index.html";
  throw new Error("El escritorio es obligatorio");
}

const escritorio = searchParams.get("escritorio");

lblEscritorio.innerText = escritorio;
divAlerta.style.display = "none";

socket.on("connect", () => {
  btnAtender.disable = false;
});

socket.on("disconnect", () => {
  btnAtender.disable = true;
});

socket.on("tickets-pendientes", (pendientes) => {
  if (pendientes === 0) {
    lblPendientes.style.display = "none";
  } else {
    lblPendientes.innerText = pendientes;
    lblPendientes.style.display = "";
  }
});

btnAtender.addEventListener("click", () => {
  const payload = {
    escritorio,
  };
  socket.emit("atender-ticket", {escritorio}, ({ok, ticket, msg}) => {
    if (!ok) {
      lblTicket.innerText = `Nadie`;

      return (divAlerta.style.display = "");
    }

    lblTicket.innerText = `Ticket - ${ticket.numero}`;
  });
});

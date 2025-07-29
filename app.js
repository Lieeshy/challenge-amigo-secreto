let amigos = [];

function agregarAmigo() {
  const amigo = document.getElementById("amigo").value;
  if (amigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  amigos.push(amigo);
  document.getElementById("amigo").value = "";
  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  const showAmigo = document.getElementById("listaAmigos");
  showAmigo.innerHTML = "";
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    showAmigo.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Por favor, inserte al menos 2 nombres.");
    return;
  }
  const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
  const showAmigo = document.getElementById("resultado");
  showAmigo.textContent = "El amigo secreto es: " + amigoSecreto;
}
let conta = "";

function btn(e) {
  conta += e;
  document.getElementById("input").value = conta;
}

function calcular() {
  let r = eval(conta);
  document.getElementById("input").value = Number(r.toFixed(2));
  conta = r.toFixed(2);
}

function limpar() {
  conta = "";
  document.getElementById("input").value = "";
}

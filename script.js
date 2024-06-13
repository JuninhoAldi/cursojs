function login(){
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    if (usuario === "admin" && senha === "admin") {
        window.location.href = "gerenciamento.html";
      } else {
        window.location.href = "loja.html";
      }
}
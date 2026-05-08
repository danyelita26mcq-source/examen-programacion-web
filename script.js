function mostrarAlerta() {
  // Mostrar alertas
  let alertaExito = document.getElementById("alertaExito");
  let alertaAviso = document.getElementById("alertaAviso");
  let alertaInfo = document.getElementById("alertaInfo");

  alertaExito.style.display = "block";
  alertaAviso.style.display = "block";
  alertaInfo.style.display = "block";

  // Ocultar alertas automáticamente después de 4 segundos
  setTimeout(() => {
    alertaExito.style.display = "none";
    alertaAviso.style.display = "none";
    alertaInfo.style.display = "none";
  }, 4000);
}

document.addEventListener("DOMContentLoaded", function () {
  const contador = document.getElementById("contador");
  const target = +contador.getAttribute("data-target"); // Convierte el valor a número
  let count = 0;

  const updateCounter = () => {
    if (count < target) {
      count += Math.ceil(target / 100); // Incremento gradual
      contador.textContent = count;
      setTimeout(updateCounter, 30); // Velocidad de la animación
    } else {
      contador.textContent = target; // Asegura que llegue al valor final
    }
  };

  updateCounter();
});
document.addEventListener("DOMContentLoaded", function () {
    const contador = document.querySelector('.contador');
    const target = +contador.getAttribute('data-target');
    let cont = 0;
    const velocidad = 80;
  
    const actualizarContador = () => {
      const incremento = Math.ceil(target / 100);
  
      if (cont < target) {
        cont += incremento;
        if (cont > target) count = target;
        contador.textContent = cont;
        setTimeout(actualizarContador, velocidad);
      } else {
        contador.textContent = target;
      }
    };
    actualizarContador();
  });
  
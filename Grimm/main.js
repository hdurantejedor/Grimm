// Datos de los wesen
class wessen {
  constructor(nombre, imagen, tipo, peligrosidad, aspecto, notas) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.tipo = tipo;
    this.peligrosidad = peligrosidad;
    this.aspecto = aspecto;
    this.notas = notas;
  }
}

const Rosalee = new wessen("Rosalee", "img/Wesen1.png", "Canido", "Neutral", "Soy una lobo", "Soy un canido");
const Musasat = new wessen("Musasat", "img/Wesen2.png", "Canido", "Neutral", "Soy un canido", "Musasat Alsh-Shabab");
const Cyno = new wessen("Cyno", "img/Wesen3.png", "Insecto", "Peligroso", "Soy un insecto", "Soy un insecto");
const Nana = new wessen("Nana", "img/Wesen4.png", "Canido", "Neutral", "Soy un canido", "Soy un canido");
const Tanya = new wessen("Tanya", "img/Wesen5.png", "Canido", "Neutral", "Soy un canido", "Soy un canido");
const Kiki = new wessen("Kiki", "img/Wesen6.png", "Insecto", "Neutral", "Soy un insecto", "Soy un insecto");
const Lili = new wessen("Lili", "img/Wesen7.png", "Canido", "Neutral", "Soy un canido", "Soy un canido");
const Freedy = new wessen("Freedy", "img/Wesen8.png", "Lobo", "Peligroso", "Soy un lobo", "Soy un lobo");
const Totoro = new wessen("Totoro", "img/Wesen9.png", "Lobo", "Neutral", "Soy un lobo", "Soy un lobo");
const Mindy = new wessen("Mindy", "img/Wesen10.png", "Lobo", "Neutral", "Soy un lobo", "Soy un lobo");


const ArrayWesen = [Rosalee, Musasat, Cyno, Nana, Tanya, Kiki, Lili, Freedy, Totoro];

  // mostrar foto wessens 
function mostrarArrayWesen() {

  const lista = document.getElementById("lista"); 

  lista.innerHTML = "";

  ArrayWesen.forEach(wessen => {

      const li = document.createElement("li");
      const img = document.createElement("img");

      img.src = wessen.imagen;
      img.alt = wessen.nombre;
      img.width = 150;
      img.height = 150;

      const p = document.createElement("p");
      p.textContent = wessen.nombre;

      img.onclick = function() {

          // cogemos los valores del formulario 
          const nombre = document.getElementById("nombre");
          const imagen = document.getElementById("foto");
          const tipo = document.getElementById("tipo");
          const peligrosidad = document.querySelectorAll('input[name="peligrosidad"]');
          const aspecto = document.getElementById("aspecto");
          const notas = document.getElementById("notas");

          // asociamos los valores del formulario con los de los wessens del array
          nombre.value = wessen.nombre;
          imagen.value = wessen.imagen;
          tipo.value = wessen.tipo;

          // marcamos el radiobutton correspondiente de peligrosidad
          for (let i = 0; i < peligrosidad.length; i++) {

              if (peligrosidad[i].value === wessen.peligrosidad) {

                  peligrosidad[i].checked = true;
                  break;
              }
          }

          aspecto.value = wessen.aspecto;
          notas.value = wessen.notas;
      };

      li.appendChild(img);
      li.appendChild(p);

      lista.appendChild(li);
  });
}
function agregarWesen() {
  
  if(!validarFormulario()) return
  const nombre = document.getElementById("nombre").value;
  const foto = document.getElementById("foto").value;
  const tipo = document.getElementById("tipo").value;
  const peligrosidad = document.getElementById("peligrosidad").value;
  const aspecto = document.getElementById("aspecto").value;
  const notas = document.getElementById("notas").value;

  const nuevoWesen = new wessen(nombre, foto, tipo, peligrosidad, aspecto, notas);

  ArrayWesen.push(nuevoWesen);

  mostrarArrayWesen();
  validarFormulario();
  limpiarFormulario();

}

function modificarWesen() {

  const nombre = document.getElementById("nombre").value;
  const imagen = document.getElementById("foto").value;
  const tipo = document.getElementById("tipo").value;
  const peligrosidad = document.querySelector('input[name="peligrosidad"]:checked').value;
  const aspecto = document.getElementById("aspecto").value;
  const notas = document.getElementById("notas").value;

  const posicion = ArrayWesen.findIndex(wessen => wessen.nombre === nombre);

  ArrayWesen[posicion].imagen = imagen;
  ArrayWesen[posicion].tipo = tipo;
  ArrayWesen[posicion].peligrosidad = peligrosidad;
  ArrayWesen[posicion].aspecto = aspecto;
  ArrayWesen[posicion].notas = notas;

  mostrarArrayWesen();
  validarFormulario();
  limpiarFormulario();
  
}

function limpiarFormulario() {

  document.getElementById("wesen-form").reset();
}

function validarFormulario() {
  document.getElementById("wesen-form").reset();
  return true;
}


function validarFormulario() {
  
  const nombre = document.getElementById("nombre").value;
  const foto = document.getElementById("foto").value;
  const tipo = document.getElementById("tipo").value;
  const peligrosidad = document.querySelector('input[name="peligrosidad"]:checked').value;

  if (nombre === "" || foto === "" || tipo === "" || peligrosidad === "") {
    alert("Por favor, completa todos los campos");
    return false;
  }

}
document.addEventListener("DOMContentLoaded", function() {

  mostrarArrayWesen();
  });

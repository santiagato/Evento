//Importar firebase y su configuracion
import {db} from '../firebase';

//Importar getFirestore para leer la base de datos
import { doc, updateDoc, onSnapshot } from 'firebase/firestore';

//Leer los datos del documento con el id pasado por el url
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');
console.log(id);
const docRef = doc(db, "casas", id);

onSnapshot(docRef, (doc) => {
  if (doc.exists()) {
    let casas = doc.data();
    document.getElementById('imagen').value = casas.imagen;
    document.getElementById('precio').value = casas.precio;
    document.getElementById('baños').value = casas.baños;
    document.getElementById('camas').value = casas.camas;
    document.getElementById('direccion').value = casas.direccion;
  } else {
    console.log("No existe el documento");
  }
});

//Buscar el boton de guardar
const btnGuardar = document.getElementById('guardar');

//Agregar el evento click al boton guardar
btnGuardar.addEventListener('click', guardar);

//Function para guardar los datos del artista

function guardar(){
  const imagen = document.getElementById('imagen').value;
  const precio = document.getElementById('precio').value;
  const baños = document.getElementById('baños').value;
  const camas = document.getElementById('camas').value;
  const direccion = document.getElementById('direccion').value;

  const docRef = doc(db, "casas", id);

  // actualizar en firebase el documento con el id
  return updateDoc(docRef, {
    imagen: imagen,
    precio: precio,
    baños: baños,
    camas: camas,
    direccion: direccion
  })
  .then(() => {
    window.location.href = "index.html";
  })
  .catch((error) => {
    // The document probably doesn't exist.
    console.error("Error: ", error);
  });
}
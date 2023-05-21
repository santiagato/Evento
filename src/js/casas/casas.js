//Importar firebase y su configuracion
import {db} from '../firebase';

//Importar getFirestore para leer la base de datos
import { collection, query, getDocs} from 'firebase/firestore';

//Leer la coleccion de artistas
const casas = query(collection(db, "casas"));

//Leer los documentos de la coleccion de forma asincrona
const querySnapshot = await getDocs(casas);

let casas_contenedor = document.getElementById('casas');

querySnapshot.forEach((doc) => {
  let casas = doc.data()
    casas_contenedor.innerHTML += `<li> <main> 
    <div class="w-80 h-full mx-auto   bg-white  mb-10 pb-2 rounded-md"> 
    <div class="img"> 
        <img src="${casas.imagen}" alt="${casas.nombre}" class="h-50 rounded-md mx-auto pt-4 pl-4 pr-4 "> 
        
        </div> 
        <div class="descripcion"> 
        <div class="text-center pb-2"> ${casas.precio}</div>  
        <div class="text-center mb-2"> ${casas.baños} ${casas.camas} </div> 
        <div class="text-left absolute ml-4 mb-8">  
        
</div> 
        <div class="text-left absolute ml-12 "> </div> 
        <div class="text-right mr-4 pb-2">${casas.direccion} </div> 
         
        </div> 
        </div> 
        <div class="pb-6"></div> 
        </main> 
    </li>`; 
});
      
     

        
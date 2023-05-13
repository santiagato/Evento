import"./carousel-f03b278b.js";import{R as o,_ as t,f as n,d as a}from"./firebase-bb022c0b.js";const i=o(t(a,"eventos")),l=await n(i);let c=document.getElementById("eventos");l.forEach(e=>{let s=e.data();c.innerHTML+=`<li>  <div class="nombre">${s.nombre}</div>
    
    <div class="container">
    <img src="${s.imagen}" alt="" class="h-auto max-w-full ml-auto mr-8 mt-4"></img>
    </div>
    
    <div class="titulo">
    <p>${s.descripcion}</p> 
    <span>${s.sede_id}</span>
    
    
    <div class="flex">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  <span>Publico</span>
  </svg>
  </div>
  
 </li>`});

import"./carousel-b42affec.js";import{R as s,_ as r,f as o,d as e}from"./firebase-bb022c0b.js";const i=s(r(e,"artistas")),n=await o(i);let l=document.getElementById("artistas");n.forEach(a=>{let t=a.data();l.innerHTML+=`<li>${t.nombres} - ${t.pais}
        <img src="${t.foto}" alt="${t.nombres}" class="w-48 h-48 rounded-full">
    </li>`});

let carousel = document.getElementById('carousel');

carousel.innerHTML = `

<div id="indicators-carousel" class="relative " data-carousel="slide">
<!-- Carousel wrapper -->
<div class="relative h-56 overflow-hidden md:h-96"> 

  <!-- Item 1 -->

  <div class="hidden duration-700 ease-in-out" data-carousel-item>
    <img src="./src/imagenes/1.jpg" class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      alt="...">
    <!-- Text -->
    
  </div>
  <!-- Item 2 -->
  <div class="hidden duration-700 ease-in-out" data-carousel-item>
    <img src="./src/imagenes/2.jpg" class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      alt="...">
   
  </div>
  <!-- Item 3 -->
  <div class="hidden duration-700 ease-in-out" data-carousel-item>
    <img src="./src/imagenes/3.jpg" class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      alt="...">
  </div>
 
<!-- Slider indicators -->
<div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 -bottom-8">
  <button type="button" class="w-8 h-1 rounded-full sm:w-12" aria-current="true" aria-label="Slide 1"
    data-carousel-slide-to="0"></button>
  <button type="button" class="w-8 h-1 rounded-full sm:w-12" aria-current="false" aria-label="Slide 2"
    data-carousel-slide-to="1"></button>
  <button type="button" class="w-8 h-1 rounded-full sm:w-12" aria-current="false" aria-label="Slide 3"
    data-carousel-slide-to="2"></button>
</div>
  </div>
</div>`;

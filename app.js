Vue.component('navbar', {
    template:
    `<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #2a2a2a;">
    <img width="320" height="100" class="d-inline-block align-top" src="logo.gif">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav pull-right">
        <li class="nav-item active">
          <a class="nav-link" href="#" id="inicio">INICIO</a> 
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="#" id="compra" @mouseover="mouseOver">COMPRAR</a>
          </li>
        <li class="nav-item">
          <a class="nav-link"  href="#" id="dscto" v-show="active">Dsctos!</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="alquiler">ALQUILER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="finanzas">FINANZAS</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#" id="servicios">SERVICIOS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="ventas">VENTAS</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#" id="contactenos">CONTÁCTENOS</a>
    </li>
      </ul>
      <button v-on:click="cambiarIdioma" id="botonCambiar" class="btn btn-info btn-sm" style="font-size:10px">CHANGE LANGUAGE</button>
    </div>
  </nav>
  `,

  data (){
    return{
      active: false
    }
  },
  
  methods: {
    cambiarIdioma: function (event) {
      inicio.innerHTML=inicio.innerHTML=="INICIO"?"HOME":"INICIO";
      compra.innerHTML=compra.innerHTML=="COMPRAR"?"BUY":"COMPRAR";
      alquiler.innerHTML=alquiler.innerHTML=="ALQUILER"?"RENTAL":"ALQUILER";
      finanzas.innerHTML=finanzas.innerHTML=="FINANZAS"?"FINANCES":"FINANZAS";
      servicios.innerHTML=servicios.innerHTML=="SERVICIOS"?"SERVICES":"SERVICIOS";
      ventas.innerHTML=ventas.innerHTML=="VENTAS"?"SALES":"VENTAS";
      contactenos.innerHTML=contactenos.innerHTML=="CONTÁCTENOS"?"CONTACT US":"CONTÁCTENOS";
      botonCambiar.innerHTML=botonCambiar.innerHTML=="CHANGE LANGUAGE"?"CAMBIAR IDIOMA":"CHANGE LANGUAGE";
      dscto.innerHTML=dscto.innerHTML=="Dsctos!"?"Discounts!":"Dsctos!"
      },

    mouseOver: function(){
        this.active = !this.active;
      }
    
  },

  



} 
)

 
   

Vue.component('hero', {
    template: `<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="header.jpg"  max-width=100% height="500vh" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="lenca11-1.jpg"  max-width=100% height="500vh" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="a.jpg"  max-width=100% height="500vh" alt="Third slide">
      </div>
    </div>
  </div>`})



  new Vue({	el: '#app' })
  new Vue({	el: '#app2' })

Vue.component('navbar', {
    template: `
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #2a2a2a;">
    <img width="400" height="100" class="d-inline-block align-top" src="logo.gif">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav pull-right">
        <li class="nav-item active">
          <a class="nav-link" href="#">INICIO <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">COMPRAR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ALQUILER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">FINANZAS</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">SERVICIOS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">VENTAS</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">CONTACTENOS</a>
    </li>
      </ul>
    </div>
  </nav>
    `
  })

Vue.component('hero', {
    template: `<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="header.jpg" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="header.jpg" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="header.jpg" alt="Third slide">
      </div>
    </div>
  </div>`})



  new Vue({	el: '#app' })
  new Vue({	el: '#app2' })
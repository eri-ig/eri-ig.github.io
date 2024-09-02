document.addEventListener('DOMContentLoaded', function () {

    const PROJECTSDATA = [
        {
            name: 'Trabajo Grupal',
            href: "https://eri-ig.github.io/taller-final-jap/",
            src: "./Imagenes/ecomerce.jpeg",
            p: "Elaboración de un e-commerce"
        }

    ]


    PROJECTSDATA.forEach(dato => {
        document.getElementById('tarjetas1').innerHTML += ` 
         <a href="${dato.href}" class="col-12 col-md-6 col-lg-4 text-decoration-none mb-4">
      <div class="col">
          <div class="card h-100"  style="width: 20rem;">
            <img src="${dato.src}" class="card-img-top img-fluid" alt="responsive image">
            <div class="card-body">
              <h5 class="card-title">${dato.name}</h5>
              <p class="card-text">${dato.p}</p>
            </div>
          </div>
        </div>`
    });




});


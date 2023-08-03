
const galeria = document.querySelector('.galeria')
const button = document.querySelector('.button-proxima-foto')
const buttonVoltar = document.querySelector('.button-voltar');
const btnTopo = document.querySelector('#btnTopo');
const btnForm = document.querySelector('.btn');
const Modal = document.querySelector('dialog');
const fecharModal = document.querySelector('#fecharModal');
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const dia = document.getElementById('dia')
const enviaForm = document.getElementById('enviaForm')
const maxItems = items.length;
//Comprimento

function comprimentar() {
  let data = new Date();
  let hr = data.getHours();
  if (hr >= 0 && hr <= 5) {
    dia.innerHTML = '⚙️Boa madrugada!⚙️';
  } else if (hr >= 6 && hr < 12) {
    dia.innerHTML = '⚙️Bom dia!⚙️';
  } if (hr >= 12 && hr < 18) {
    dia.innerHTML = '⚙️Boa tarde!⚙️';
  } else if (hr >= 18 && hr <= 23) {
    dia.innerHTML = '⚙️Boa noite!⚙️';
  }

}

comprimentar()

let arrayImg = [
  "./img/Galeria/pecas.jpg",
  "./img/Galeria/cone.jpg",
  "./img/Galeria/grades.jpg",
  "./img/Galeria/cami.jpg",
  "./img/Galeria/estrutura.jpeg",
  "./img/Galeria/icando.jpeg",
  "./img/Galeria/galeria_12_mini.jpg",
  "./img/Galeria/galeria_4_mini.jpg",
];
galeria.style.gridTemplateColumns = `repeat(${arrayImg.length}, 1fr)`;
const agregarFotos = (img) => {
  for (let i = 0; i < img.length; i++) {
    let newImg = `<img class = "foto" src="${arrayImg[i]}">`;
    galeria.innerHTML += newImg;
  }
}
agregarFotos(arrayImg);

const filhosElementos = galeria.children;
let contador = 0;

function seguinte() {
  filhosElementos[contador].classList.add("seguinte");
  filhosElementos[contador].classList.remove("voltar");

  // adiciona classe para ocultar imagem anterior
  if (contador > 0) {
    filhosElementos[contador - 1].classList.add("oculto");
  }

  contador++;
  buttonVoltar.style.visibility = `visible`;

  if (contador >= arrayImg.length) {
    contador = 0;
  }

  if (contador >= arrayImg.length - 1) {
    button.style.visibility = 'hidden';
  } else {
    button.style.visibility = 'visible';
  }

  // remove classe de ocultar da imagem atual
  filhosElementos[contador].classList.remove("oculto");
};

function volta() {
  contador--;
  filhosElementos[contador].classList.add("voltar");
  filhosElementos[contador].classList.remove("seguinte");

  // adiciona classe para ocultar imagem seguinte
  if (contador < arrayImg.length - 1) {
    filhosElementos[contador + 1].classList.add("oculto");
  }

  if (contador <= 0) {
    buttonVoltar.style.visibility = 'hidden';
  }

  if (contador < arrayImg.length - 1) {
    button.style.visibility = 'visible';
  } else {
    button.style.visibility = 'hidden';
  }

  // remove classe de ocultar da imagem atual
  filhosElementos[contador].classList.remove("oculto");
};
document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowRight') {
    if (contador < arrayImg.length - 1) {
      seguinte();
    }
  } else if (event.code === 'ArrowLeft') {
    if (contador > 0) {
      volta();
    }
  }
});
// Fim da galeria Serviços

//dialog form

enviaForm.addEventListener('click', () => {
  let audio = new Audio('../audio/enviar.mp3')
  audio.play()
})

function abrirModal() {
  Modal.showModal()
}

fecharModal.addEventListener('click', () => {
  Modal.close()
})

// Anima a rolagem suave ao clicar

$(document).ready(function () {
  // Anima a rolagem suave ao clicar nos links do menu com a classe "smooth-scroll"
  $('a.smooth-scroll').click(function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});

// Fim da animação suave ao clicar

//Botao para o topo
let mensagem = document.querySelector(".mensagem");

function showMessage() {
  mensagem.style.display = "block";
}

function hideMessage() {
  mensagem.style.display = "none";
}

// function scrollToTop() {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrollTop > 0) {
//     window.scrollTo(0, 0);
//     window.requestAnimationFrame(scrollToTop);
//   }
// }

// btnTopo.addEventListener('click', function () {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrollTop > 0) {
//     window.requestAnimationFrame(scrollToTop);
//   }
// });

// window.addEventListener('scroll', function () {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrollTop > 300) {
//     btnTopo.classList.add('show');

//   } else {
//     btnTopo.classList.remove('show');
//   }
//   if (windowHeight ) {
//     btnTopo.classList.remove('show');

//   }

// });

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const btnTopo = document.querySelector("#btnTopo"); // Certifique-se de selecionar o botão correto

  if (scrollTop + clientHeight >= scrollHeight) {
    btnTopo.classList.remove("show");
  } else {
    btnTopo.classList.add("show");
  }
});

//menu celular
const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");

function openNav() {
  document.querySelector('.ul').style.left = '0';
  closeBtn.style.display = 'block'
  openBtn.style.display = 'none'
  

}
function closeNav() {
  document.querySelector('.ul').style.left = '-100%';
  closeBtn.style.display = 'none'
  openBtn.style.display = 'block'
}


// trabalhe conosco

let trabalheConosco = document.getElementById('btnTrabalhe')
let candidato = document.getElementById('candidato')


trabalheConosco.addEventListener('click', () => {
  candidato.style.display = 'block';
  // setInterval(closeCandidato,15000);

  candidato.innerHTML = `
   <button  class="fecharCandidato" onclick="closeCandidato()">X</button>
  <h1>Trabalhe conosco</h1>
  
  <h2>Olá!</h2>

  <p>Seja bem-vindo a WR Locações e Serviços!</p>

  <p>Através deste canal, você poderá enviar seu CV por e-mail. Seu CV será recebido pelo departamento de Recursos Humanos da WR para tratativas necessárias. Você poderá ser contactado a qualquer momento!</p>

  <a class="emailCV" href="mailto:wrlocacoeseservicoswr@gmail.com?
  subject= Curriculo 
  
  ">Envia seu CV</a>

  
  `
})
let fecharCandidato = document.querySelector('.fecharCandidato')

function  closeCandidato(){
  candidato.style.display = 'none';
}

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add("scroll");
  } else {
    // menor que a altura do header
    header.classList.remove("scroll");
  }
}
/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = scrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});
/*
<a href="#heade" class="smooth-scroll" onclick="closeNav()">Inicio</a>
          <a href="#sobre" class="smooth-scroll" onclick="closeNav()">Sobre</a>
          <a href="#servico" class="smooth-scroll" onclick="closeNav()">Serviços</a>
          <a href="#galeria" class="smooth-scroll" onclick="closeNav()">Galeria</a>
          <a href="#BannerCliente" class="smooth-scroll" onclick="closeNav()">Clientes</a>
          <a href="#contato" class="smooth-scroll" onclick="closeNav()">Contato</a>

*/



scrollReveal.reveal(
  `#heade .banner, #heade .banner-text,
   #sobre .container, #sobre .faca-mais-text,
   #servico  .container-servicos, 

  `,
  { interval: 100 }
);

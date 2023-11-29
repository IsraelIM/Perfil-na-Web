//Criacao de variaves Globais
let menuIcon = document.querySelector('#menu-icon-top');
let viewMode = document.querySelector('#view-mode');
let iconToggle = document.querySelector('#view-mode i');
let navbar = document.querySelector('.navbar');
let aboutRead = document.getElementById('about-read');
let icon, darkMode = (screen.width < 769) ? false:true;
//Funçao ver mais infomaçoes
aboutRead.onclick = () => {
    let aboutMore = document.querySelector('.about-more');
    let aboutMoreDiv = document.querySelector('.none');
    if (aboutMore.style.display=='block') {
        aboutMore.style.display='none';
        var home='#home';
        aboutRead.innerText="Read More";
    }else{
        aboutMore.style.display='block';
        aboutMoreDiv.style.display='block';
        aboutRead.innerText="Read Less";
    }
}
//Funcao view Maode
viewMode.onclick = () =>{
   let allDocument =  document.getElementById('all-document');
   if (darkMode) {
    allDocument.style = '--bg-color:#fff;--second-bg-color:#e3e6f3;--text-color:#1a1a1a;--main-color:#088178;';
    icon=darkMode=false;
    iconToggle.classList.replace('fa-toggle-on','fa-toggle-off');  
   } else {
    allDocument.style = '--bg-color:#1f242d;--second-bg-color:#323946;--text-color:#fff;--main-color:#0ef;';
    icon=darkMode=true;
    iconToggle.classList.replace('fa-toggle-off', 'fa-toggle-on');
   }
  // viewMode.style.display='none';
};
//Funçao de Remover a navBar apos a acçao
function removeNavbar(){
    menuIcon.classList.replace('fa-times','fa-navicon');
    navbar.style='display:none'
    icon = true;
}
menuIcon.onclick = () => {
    iconToggle.classList.replace('fa-toggle-on','fa-toggle-off'); 
    iconToggle.style.color='#000';
    if (icon)
    {
        menuIcon.classList.replace('fa-navicon','fa-times');
        navbar.style='display:block';
        icon = false;
    }
    else
    {
        removeNavbar();
    }
};
// Link de Selecção do Menu Activo
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
//Acçoes determinada para o rolar da tela
window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 160;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        }
    });
    // Navbar Boblavel
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // Remove in click
    if(screen.width < 769)
        removeNavbar();
};
    //Animaçao de Movimentaçao da Tela
    ScrollReveal({
        reset:false,
        distance:'80px',
        duration: 2000,
        delay: 150
    });
    ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
    ScrollReveal().reveal('.home-img, .services-container, .portifolio-box, contact form', {origin:'bottom'});
    ScrollReveal().reveal('.home-content h1, .about-img ', {origin:'left'});
    ScrollReveal().reveal('.home-content p, .about-content ', {origin:'right'});
    
    //Animaçao da frase de impacto
    const typed = new Typed('.multiple-text',{
        strings: ['Developer','Engenheiro',
        'Coach','Responsavel de T.I','Docente'],
        typeSpeed:300,
        backSpeed:100,
        backDelay:1000,
        loop: true

    });
    const typed_2 = new Typed('.multiple-text-2',{
        strings: ['Antenas VSAT','HCNA - Routing and Switching','ARDUINO - UNO e MEGA',
        'CCTV - Digital e Analogica','WordPress - Guterbeng'],
        typeSpeed:200,
        backSpeed:75,
        backDelay:1500,
        loop: true

    });
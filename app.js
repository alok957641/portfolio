let navlink = document.querySelectorAll(" .nav_ul  li ");
navlink.forEach( link => {
    link.addEventListener("mouseenter" , function() {
        this.style.color ="#6495ed" ;
    })
});


// bas last stag pr hai event listner banki hai lgan 
let nav_ul = document.getElementById("nav_ull");
nav_ul.style.maxHeight = "0px";
let tgl = document.getElementById("tgl_btn");
tgl.addEventListener("click" , ()=> {
  if(nav_ul.style.maxHeight == "0px"){
    nav_ul.style.maxHeight = "300px";
  }else{
    nav_ul.style.maxHeight = "0px";
  }
})


// project section


   var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints:{
        0:{
          slidesPerView:2,
          spaceBetween:20,
        },
        768:{
          slidesPerView:3,
          spaceBetween:30,
        },
        1024:{
          slidesPerView:4,
          spaceBetween:30,
        },
      },
    });
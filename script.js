

function myFunction(x) {
    x.classList.toggle("change");
  }

  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




$('.gallery .btn').click(function(){
  let filter = $(this).attr('data-filter');
  if(filter == 'all'){
      $('.gallery .box').show(400);
  }else{
    $('.gallery .box').not('.'+filter).hide(200);
    $('.gallery .box').filter('.'+filter).show(400);
  }

  $(this).addClass('button-active').siblings().removeClass('button-active')

});














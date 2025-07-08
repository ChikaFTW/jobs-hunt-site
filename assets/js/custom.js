jQuery( document ).ready(function( $ ) {


	"use strict";


    
        $(function() {
            $( "#tabs" ).tabs();
        });


        // Page loading animation

        $("#preloader").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });       

        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          var box = $('.header-text').height();
          var header = $('header').height();

          if (scroll >= box - header) {
            $("header").addClass("background-header");
          } else {
            $("header").removeClass("background-header");
          }
        });
		if ($('.owl-testimonials').length) {
            $('.owl-testimonials').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 2,
                        margin: 30
                    }
                }
            });
        }



        
        $(".Modern-Slider").slick({
            autoplay:true,
            autoplaySpeed:10000,
            speed:600,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:true,
            pauseOnDotsHover:true,
            cssEase:'linear',
           // fade:true,
            draggable:false,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>', 
        });

        function visible(partial) {
            var $t = partial,
                $w = jQuery(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

        }

        $(window).scroll(function(){

          if(visible($('.count-digit')))
            {
              if($('.count-digit').hasClass('counter-loaded')) return;
              $('.count-digit').addClass('counter-loaded');
              
        $('.count-digit').each(function () {
          var $this = $(this);
          jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter));
            }
          });
        });
        }
    })
    if ($('.owl-partners').length) {
  setTimeout(() => {
    $('.owl-partners').owlCarousel({
      rtl: false, // ❌ force it off, regardless of page dir
      loop: true,
      nav: false,
      dots: false,
      margin: 15,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 700,
      responsive: {
        0: { items: 2, margin: 0 },
        600: { items: 3, margin: 10 },
        1000: { items: 5, margin: 15 }
      }
    });
  }, 300);
}
});

 const images = document.querySelectorAll('.gallery-track img');
  const popup = document.createElement('div');
  popup.className = 'image-popup';
  popup.innerHTML = `
    <span class="close">&times;</span>
    <span class="arrow left">&#10094;</span>
    <img src="" alt="Popup Image">
    <span class="arrow right">&#10095;</span>
  `;
  document.body.appendChild(popup);

  const popupImg = popup.querySelector('img');
  const closeBtn = popup.querySelector('.close');
  const leftArrow = popup.querySelector('.arrow.left');
  const rightArrow = popup.querySelector('.arrow.right');

  let currentIndex = 0;

  function showImage(index) {
    popupImg.src = images[index].src;
    popup.classList.add('active');
    currentIndex = index;
  }

  images.forEach((img, index) => {
    img.addEventListener('click', () => showImage(index));
  });

  closeBtn.addEventListener('click', () => popup.classList.remove('active'));

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') popup.classList.remove('active');
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const hash = window.location.hash;

    if (hash) {
      // Check if target is inside a tab (like #barista inside #tabs-5)
      const targetElement = document.querySelector(hash);

      // Find the closest tab container (e.g. tabs-5) if inside one
      const parentTab = targetElement ? targetElement.closest("article") : null;

      if (parentTab) {
        // Open the parent tab first
        const parentTabId = "#" + parentTab.id;
        const tabLink = document.querySelector(`a[href='${parentTabId}']`);
        if (tabLink) tabLink.click();

        // Scroll after short delay to ensure tab content is visible
        setTimeout(() => {
          const offset = targetElement.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({
            top: offset,
            behavior: "smooth"
          });
        }, 200);
      } else {
        // Fallback: scroll to full tab directly
        const fullTab = document.querySelector(hash);
        if (fullTab) {
          const offset = fullTab.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({
            top: offset,
            behavior: "smooth"
          });
        }
      }
    }
  });





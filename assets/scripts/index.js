// header 
const checkbox = document.querySelector('.header-menu__checkbox')
const burger = document.querySelector('.header-menu__list')
const itemsBurger = document.querySelectorAll('.header-menu__list-item')

function closeBurger(event) {
   let index = Array.from(itemsBurger).indexOf(event.target)
   let num = itemsBurger.length - 1
   if(index <= num && index!= -1) {
    checkbox.checked = false;
   }
}

burger.addEventListener('click', closeBurger); 

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".help-card");
  const contents = document.querySelectorAll(".help-content");
  const mobileIcon = document.querySelector(".mobile-icon img");
  const mobileTextBlocks = document.querySelectorAll(".help-content");
  const paginationDots = document.querySelectorAll(".pagination-dot");

  let currentIndex = 0;

  function updateContent(index) {
    cards.forEach((card, i) => {
      card.classList.toggle("help-card--active", i === index);
    });

    contents.forEach((content, i) => {
      content.classList.toggle("help-content--active", i === index);
    });

    if (mobileIcon) {
      const iconSrc = cards[index].querySelector("img").getAttribute("src");
      mobileIcon.setAttribute("src", iconSrc);
    }

    paginationDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentIndex = index;
  }

  cards.forEach((card, i) => {
    card.addEventListener("click", () => {
      updateContent(i);
    });
  });

  paginationDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      updateContent(i);
    });
  });

  // Swipe support for mobile
  let startX = 0;

  function handleTouchStart(e) {
    startX = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < cards.length - 1) {
        updateContent(currentIndex + 1);
      } else if (diff < 0 && currentIndex > 0) {
        updateContent(currentIndex - 1);
      }
    }
  }

  const swipeArea = document.querySelector(".mobile-help-view");
  if (swipeArea) {
    swipeArea.addEventListener("touchstart", handleTouchStart);
    swipeArea.addEventListener("touchend", handleTouchEnd);
  }

  updateContent(currentIndex); // начальное состояние
});


// Слайдер section-volunteering

document.addEventListener("DOMContentLoaded", () => {

    const slider1Img   = document.getElementById("section-volunteering__slider-image");
    const prevBtn1     = document.getElementById("slider_1_button_prev");
    const nextBtn1     = document.getElementById("slider_1_button_next");
    const pagination1  = document.getElementById("section-volunteering__dots");
    const dots1        = pagination1.getElementsByClassName("dot");

    const slider1Images = [
        "/assets/images/section-volunteering_img_1.jpg",
        "/assets/images/section-volunteering_img_2.jpg",
        "/assets/images/section-volunteering_img_3.jpg",
        "/assets/images/section-volunteering_img_4.jpg",
        "/assets/images/section-volunteering_img_5.jpg",
        "/assets/images/section-volunteering_img_6.jpg",
        "/assets/images/section-volunteering_img_7.jpg"
    ];
    let index1 = 0;

    function updateSlider1() {
        slider1Img.src = slider1Images[index1];
        for (let i = 0; i < dots1.length; i++) {
            dots1[i].classList.toggle("active", i === index1);
        }
    }

    prevBtn1.onclick = () => {
        index1 = (index1 - 1 + slider1Images.length) % slider1Images.length;
        updateSlider1();
    };
    nextBtn1.onclick = () => {
        index1 = (index1 + 1) % slider1Images.length;
        updateSlider1();
    };

    for (let i = 0; i < dots1.length; i++) {
        dots1[i].addEventListener("click", () => {
        index1 = i;
        updateSlider1();
        });
    }

    function adaptSlider1() {
        const mobile = window.innerWidth <= 768;
        prevBtn1.style.display    = mobile ? "none" : "block";
        nextBtn1.style.display    = mobile ? "none" : "block";
        pagination1.style.display = mobile ? "flex" : "none";
    }

    window.addEventListener("resize", adaptSlider1);
    adaptSlider1();
    updateSlider1();

    // Слайдер section-take

    const track2     = document.getElementById("slides");
    const prevBtn2   = document.getElementById("slider_2_button_prev");
    const nextBtn2   = document.getElementById("slider_2_button_next");
    const pagination2= document.getElementById("section-take__dots");
    const dots2      = pagination2.getElementsByClassName("dot");
    const images2    = track2.getElementsByTagName("img");
    let index2 = 1;

    function updateSlider2() {
        const step = 30 + 3;
        const offset = step * (index2 - 1);
        track2.style.transform = `translateX(-${offset}%)`;

        for (let i = 0; i < images2.length; i++) {
            images2[i].classList.toggle("section-take__slider-image--active", i === index2);

        if (window.innerWidth <= 768) {
            images2[i].style.display = i === index2 ? "block" : "none";
        }
        }

        for (let i = 0; i < dots2.length; i++) {
            dots2[i].classList.toggle("active", i === index2);
        }
    }

    prevBtn2.onclick = () => {
        index2 = (index2 - 1 + images2.length) % images2.length;
        updateSlider2();
    };
    nextBtn2.onclick = () => {
        index2 = (index2 + 1) % images2.length;
        updateSlider2();
    };

    for (let i = 0; i < dots2.length; i++) {
        dots2[i].addEventListener("click", () => {
        index2 = i;
        updateSlider2();
        });
    }

    function adaptSlider2() {
        const mobile = window.innerWidth <= 768;
        prevBtn2.style.display     = mobile ? "none" : "block";
        nextBtn2.style.display     = mobile ? "none" : "block";
        pagination2.style.display  = mobile ? "flex" : "none";
        updateSlider2();
    }

    window.addEventListener("resize", adaptSlider2);
    adaptSlider2();
});

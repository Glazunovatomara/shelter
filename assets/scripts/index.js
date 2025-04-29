

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
    if(index === 4) {
      showPopup()
    }
}

burger.addEventListener('click', closeBurger);

//popup
const btnPopup = document.getElementById('btn-hero');
const popupOverlay = document.getElementById('popup-overlay');
const popup = document.getElementById('popup');
const sbp = document.getElementById('sbp');
const cardNum = document.getElementById('card-num');
const copySbp = document.getElementById('copy_1');
const copyCard = document.getElementById('copy_2');
const navPopup = document.getElementById('nav-popup');
const menuPopup = document.getElementById('menu-popup');
const close = document.getElementById('close');

function showPopup() {
    popupOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function hidePopup() {
  popupOverlay.style.display = 'none';
  document.body.style.overflow = 'scroll';
}

btnPopup.addEventListener('click',showPopup);
navPopup.addEventListener('click',showPopup);
close.addEventListener('click', hidePopup);

//copy
copySbp.addEventListener('click', function() {
    navigator.clipboard.writeText(sbp.textContent).then(function() {
      console.log(sbp.textContent)
    })
    .catch((error) => {
        alert `Произошла ошибка при копировании текста: , ${error}`
    })
})
copyCard.addEventListener('click', function() {
    navigator.clipboard.writeText(cardNum.textContent).then(function() {
      console.log(cardNum.textContent)
    })
    .catch((error) => {
        alert `Произошла ошибка при копировании текста: , ${error}`
    })
})
sbp.addEventListener('click', function() {
    navigator.clipboard.writeText(sbp.textContent).then(function() {
        console.log(sbp.textContent)
    })
    .catch((error) => {
        alert `Произошла ошибка при копировании текста: , ${error}`
    })
})
cardNum.addEventListener('click', function() {
    navigator.clipboard.writeText(cardNum.textContent).then(function() {
      console.log(cardNum.textContent)
    })
    .catch ((error) => {
        alert `Произошла ошибка при копировании текста: , ${error}`
    })
})

//

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



// Black Jade Слайдер section-volunteering

document.addEventListener("DOMContentLoaded", () => {

    const slider1Img   = document.getElementById("section-volunteering__slider-image");
    const prevBtn1     = document.getElementById("slider_1_button_prev");
    const nextBtn1     = document.getElementById("slider_1_button_next");
    const pagination1  = document.getElementById("section-volunteering__dots");
    const dots1        = pagination1.getElementsByClassName("dot");

    const slider1Images = [
        "./assets/images/section-volunteering_img_1.jpg",
        "./assets/images/section-volunteering_img_2.jpg",
        "./assets/images/section-volunteering_img_3.jpg",
        "./assets/images/section-volunteering_img_4.jpg",
        "./assets/images/section-volunteering_img_5.jpg",
        "./assets/images/section-volunteering_img_6.jpg",
        "./assets/images/section-volunteering_img_7.jpg"
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

    // Кнопка для мобильной версии

    document.addEventListener('click', e => {
      if (e.target.closest('.section-volunteering__button')) {
        document.getElementById('popup-overlay').style.display = 'block';
      }
    });

    // Black Jade Слайдер section-take

    const track2 = document.getElementById("slides");
    const prevBtn2 = document.getElementById("slider_2_button_prev");
    const nextBtn2 = document.getElementById("slider_2_button_next");
    const dots2 = document.querySelectorAll("#section-take__dots .dot");
    const images2 = track2.querySelectorAll("img");

    let index2 = 1;

    function updateSlider2() {
      const isMobile = window.innerWidth <= 400;

      if (isMobile) {
        track2.style.transform = "none";
        track2.style.display = "flex";
        track2.style.justifyContent = "center";
        track2.style.alignItems = "center";
        track2.style.width = "100vw";
        track2.style.height = "100vh";

        images2.forEach((img, i) => {
          if (i === index2) {
            img.style.display = "block";
            img.style.width = "100vw";
            img.style.height = "100vh";
            img.style.objectFit = "cover";
          } else {
            img.style.display = "none";
          }
        });

        prevBtn2.style.display = "none";
        nextBtn2.style.display = "none";
        document.getElementById("section-take__dots").style.display = "flex";
      } else {
        const step = images2[0].clientWidth;
        const offset = step * index2;
        track2.style.transform = `translateX(calc(50% - ${step / 2}px - ${offset}px))`;
        track2.style.display = "flex";
        track2.style.width = "";
        track2.style.height = "";

        images2.forEach((img) => {
          img.style.display = "block";
          img.style.width = "";
          img.style.height = "";
          img.style.objectFit = "";
        });

        prevBtn2.style.display = "block";
        nextBtn2.style.display = "block";
        document.getElementById("section-take__dots").style.display = "none";
      }

      dots2.forEach((dot, i) => {
        dot.classList.toggle("active", i === index2);
      });
    }

    prevBtn2.addEventListener("click", () => {
      index2 = (index2 - 1 + images2.length) % images2.length;
      updateSlider2();
    });

    nextBtn2.addEventListener("click", () => {
      index2 = (index2 + 1) % images2.length;
      updateSlider2();
    });

    dots2.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index2 = i;
        updateSlider2();
      });
    });

    window.addEventListener("resize", updateSlider2);

    updateSlider2();

// Black Jade Footer кнопка

function copyToClipboard(id) {
    const el = document.getElementById(id);
    const text = el.textContent || el.innerText;

    navigator.clipboard.writeText(text).catch(err => {
        console.error('Ошибка копирования', err);
    });
}







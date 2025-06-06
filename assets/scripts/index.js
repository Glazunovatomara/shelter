// header
const checkbox = document.querySelector(".header-menu__checkbox");
const burger = document.querySelector(".header-menu__list");
const itemsBurger = document.querySelectorAll(".header-menu__list-item");

function closeBurger(event) {
  let index = Array.from(itemsBurger).indexOf(event.target);
  let num = itemsBurger.length - 1;
  if (index <= num && index != -1) {
    checkbox.checked = false;
  }
  if (index === 4) {
    showPopup();
  }
}

burger.addEventListener("click", closeBurger);

//popup
const btnPopup = document.getElementById("btn-hero");
const popupOverlay = document.querySelector(".popup-overlay");
const popup = document.getElementById("popup");
const sbp = document.getElementById("sbp");
const cardNum = document.getElementById("card-num");
const copySbp = document.getElementById("copy_1");
const copyCard = document.getElementById("copy_2");
const copySbpHelp = document.getElementById("copy_3")
const copyCardHelp = document.getElementById("copy_4")
const navPopup = document.getElementById("nav-popup");
const menuPopup = document.getElementById("menu-popup");
const closeBtn = document.getElementById("close");

function showPopup() {
  popupOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}
function hidePopup() {
  popupOverlay.classList.remove("active");
  document.body.style.overflow = "scroll";
}

document.addEventListener("click", function(e) {
  if(e.target === popupOverlay || e.target === closeBtn) {
    hidePopup()
  }
  if(e.target === btnPopup || e.target === navPopup || e.target === document.getElementById("btn-volunteering")) {
    showPopup()
  }
})

//response
const response = document.querySelector('.response')
const responsCopy = () => {
  response.classList.add("response-active")
  setTimeout(() => {
    response.classList.remove("response-active")
  },500)
}

//copy

const copyTextToClipboard = (text) => {
  if(text === null || text === undefined) {
    console.error('Произошла ошибка')
    alert ('Произошла ошибка')
  }
  navigator.clipboard.writeText(text.textContent)
  .then(() => {
    responsCopy()
  })
  .catch(error => {
    console.error (`Произошла ошибка при копировании текста: ${error}`)
    alert (`Произошла ошибка при копировании текста: ${error}`)
  })  
}
 
copySbp.addEventListener("click", () => {
  copyTextToClipboard(sbp);
});
copyCard.addEventListener("click", () => {
  copyTextToClipboard(cardNum);
});
copySbpHelp.addEventListener("click", () => {
  copyTextToClipboard(sbp);
});
copyCardHelp.addEventListener("click", () => {
  copyTextToClipboard(cardNum);
});

//help
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".help-card");
  const contents = document.querySelectorAll(".help-content");
  const mobileIcon = document.querySelector(".mobile-icon img");
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
      if (diff > 0) {
        currentIndex = (currentIndex + 1) % cards.length;
        updateContent(currentIndex);
      } else if (diff < 0) {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateContent(currentIndex);
      }
    }
  }

  const swipeArea = document.getElementById("slider-help")
  if (swipeArea) {
    swipeArea.addEventListener("touchstart", handleTouchStart);
    swipeArea.addEventListener("touchend", handleTouchEnd);
  }

  updateContent(currentIndex); // начальное состояние
});

//Слайдер section-volunteering

const volunteeringSlider = document.getElementById("volunteering-slider-image");
const prevBtn = document.getElementById("slider-button-prev");
const nextBtn = document.getElementById("slider-button-next");
const dots = document.querySelectorAll("#volunteering-dots .dot");

const imageCount = 7;
let current = 0;

function updateSlider(index) {
  volunteeringSlider.src = `./assets/images/section-volunteering_img_${
    index + 1
  }.jpg`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

prevBtn.addEventListener("click", () => {
  current = (current - 1 + imageCount) % imageCount;
  updateSlider(current);
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % imageCount;
  updateSlider(current);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    current = index;
    updateSlider(current);
  });
});

updateSlider(current);

// Поддержка свайпа
let startX = 0;

function handleTouchStart(e) {
  startX = e.touches[0].clientX;
}

function handleTouchEnd(e) {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      // свайп влево — следующий
      current = (current + 1) % imageCount;
      updateSlider(current);
    } else {
      // свайп вправо — предыдущий
      current = (current - 1 + imageCount) % imageCount;
      updateSlider(current);
    }
  }
}

// обработчики на слайдер
const swipeArea = document.querySelector(".section-volunteering__slider");
if (swipeArea) {
  swipeArea.addEventListener("touchstart", handleTouchStart);
  swipeArea.addEventListener("touchend", handleTouchEnd);
}

//Слайдер section-take

document.addEventListener("DOMContentLoaded", function () {
  const slides = Array.from(
    document.querySelectorAll(".section-take__slider-image")
  );
  const prevBtn = document.getElementById("slider_2_button_prev");
  const nextBtn = document.getElementById("slider_2_button_next");
  let centerIndex = 1;

  function renderSlides() {
    slides.forEach((slide, i) => {
      if (i >= centerIndex - 1 && i <= centerIndex + 1) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }

      slide.classList.remove("section-take__slider-image--active");
    });

    if (slides[centerIndex]) {
      slides[centerIndex].classList.add("section-take__slider-image--active");
    }
  }

  prevBtn.addEventListener("click", function () {
    if (centerIndex > 1) {
      centerIndex--;
      renderSlides();
    }
  });

  nextBtn.addEventListener("click", function () {
    if (centerIndex < slides.length - 2) {
      centerIndex++;
      renderSlides();
    }
  });

  renderSlides();
});

document.addEventListener("DOMContentLoaded", () => {
  const mobileSliderImg = document.getElementById("section-take__slider-mobile");
  const dots = document.querySelectorAll("#section-take__dots .dot");

  const mobileImages = [
    "./assets/images/section-take_img.jpg",
    "./assets/images/section-take_img_1.jpg",
    "./assets/images/section-take_img_2.jpg",
    "./assets/images/section-take_img_3.jpg",
    "./assets/images/section-take_img_4.jpg",
    "./assets/images/section-take_img_5.jpg",
    "./assets/images/section-take_img_6.jpg",
    "./assets/images/section-take_img_7.jpg",
  ];

  let mobileIndex = 0;

  function updateMobileSlider(index) {
    mobileSliderImg.src = mobileImages[index];

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }
    dots.forEach((dot, i) => {
      dot.addEventListener("click", function () {
        mobileIndex = i;
        updateMobileSlider(mobileIndex);
      });
    });

  // Поддержка свайпа
  let startX = 0;

  function handleTouchStart(e) {
    startX = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) { // Свайп влево
        mobileIndex = (mobileIndex + 1) % mobileImages.length;
          updateMobileSlider(mobileIndex);
      } else {
        mobileIndex = (mobileIndex - 1 + mobileImages.length) % mobileImages.length;
          updateMobileSlider(mobileIndex);
      }
    }
  }

  updateMobileSlider(mobileIndex)

  const swipeAreaTake = document.querySelector(".section-take__slider-mobile-wrapper");
  if (swipeAreaTake) {
    swipeAreaTake.addEventListener("touchstart", handleTouchStart);
    swipeAreaTake.addEventListener("touchend", handleTouchEnd);
  }
});

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    indexDesktop =
      (indexDesktop - 1 + desktopImages.length) % desktopImages.length;
    updateDesktopSlider();
  });

  nextBtn.addEventListener("click", () => {
    indexDesktop = (indexDesktop + 1) % desktopImages.length;
    updateDesktopSlider();
  });
}

// Footer кнопка

function copyToClipboard(id) {
  const el = document.getElementById(id);
  const text = el.textContent || el.innerText;

  navigator.clipboard.writeText(text).then(() => {
    responsCopy()
  }).catch((err) => {
    console.error("Ошибка копирования", err);
  });
}

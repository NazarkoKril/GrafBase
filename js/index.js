"use strick";
// SWIPER PORTFOLIO---------------------------------------------------------------
let swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: true,
  loop: true,
  speed: 900,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    1240: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
const zoomableImages = document.querySelectorAll(".zoomable-image");
zoomableImages.forEach((image) => {
  image.addEventListener("click", () => {
    openFullscreenImage(image.src);
  });
});

function openFullscreenImage(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImage.src = imageSrc;

  const closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}
// form
function openPopup() {
  let popup = document.getElementById("popup__form");
  popup.style.display = "block";
}

function closePopup() {
  let popup = document.getElementById("popup__form");
  popup.style.display = "none";
}
function validateForm() {
  const form = document.getElementById("myForm");
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const phoneError = document.getElementById("phone-error");

  if (!form.checkValidity()) {
    alert("Please fill in all required fields.");
    highlightErrorFields();
    return;
  }

  const phoneRegex = /^\+\d{2}-\d{3}-\d{3}-\d{3}$/;
  if (!phoneRegex.test(phoneInput.value)) {
    phoneError.textContent =
      "Invalid phone number format. Use +48-999-999-999.";
    highlightErrorFields();
    return;
  } else {
    phoneError.textContent = "";
  }

  form.reset();
  alert("Form submitted successfully!");
  closePopup();
}
// Catalog
let isCatalogOpen = false;
let isLogoSubPopupOpen = false;

function openCatalog() {
  let catalogModal = document.getElementById("Catalog__modal");
  let logoSubpop = document.getElementById("logo__subpop");
  let funArtSubpop = document.getElementById("fun-art__subpop");
  let retushSubpop = document.getElementById("retush__subpop");
  let adverSubpop = document.getElementById("adver__subpop");
  let marketSubpop = document.getElementById("market__subpop");
  let webSubpop = document.getElementById("web__subpop");
  let videoSubpop = document.getElementById("video__subpop");
  let designSubpop = document.getElementById("design__subpop");
  let coachSubpop = document.getElementById("coach__subpop");

  if (isCatalogOpen || isLogoSubPopupOpen) {
    catalogModal.style.display = "none";
    logoSubpop.style.display = "none";
    funArtSubpop.style.display = "none";
    retushSubpop.style.display = "none";
    adverSubpop.style.display = "none";
    marketSubpop.style.display = "none";
    webSubpop.style.display = "none";
    videoSubpop.style.display = "none";
    designSubpop.style.display = "none";
    coachSubpop.style.display = "none";
    isCatalogOpen = false;
    isLogoSubPopupOpen = false;
    return;
  }

  catalogModal.style.display = "block";
  isCatalogOpen = true;
}

function openBtn(popupId) {
  let popup = document.getElementById(popupId);

  document.querySelectorAll(".catalog__subpop").forEach((popup) => {
    popup.style.display = "none";
  });

  popup.style.display = "block";
}

function closeAllPopups() {
  document.querySelectorAll(".catalog__subpop").forEach((popup) => {
    popup.style.display = "none";
  });

  document.getElementById("Catalog__modal").style.display = "none";
  isCatalogOpen = false;
}

document.addEventListener("click", function (event) {
  let clickedElement = event.target;

  if (
    !clickedElement.closest(".catalog__subpop") &&
    !clickedElement.closest("#Catalog__modal") &&
    !clickedElement.classList.contains("open-catalog-btn")
  ) {
    closeAllPopups();
  }
});

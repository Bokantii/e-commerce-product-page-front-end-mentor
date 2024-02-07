const cartIcon = document.querySelector(".cart_icon");
const cartInfo = document.querySelector(".cart_info");
const counterEl = document.querySelector(".value h3");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const imgThumbnails = document.querySelectorAll(".img_thumbnail");
const modal = document.querySelector(".modal");
const cancelBtn = document.querySelector(".cancel_btn");
const largeImg = document.querySelector(".image_large img");
const largeImgOverlay = document.querySelector(".image_large_overlay");
const imgOverlay = document.querySelectorAll(".overlay");
const modalLargeImg = document.querySelector(".image-container img");
const prevBtn = document.querySelector(".prev svg");
const nextBtn = document.querySelector(".next svg");
const lightBoxThumbnails = document.querySelectorAll(".sliding_thumbnail img");
const addToCart = document.querySelector(".add_cart");
const numberOfItems = document.querySelector(".numberOfItems");
const numberSelected = document.querySelector(".number_selected");
const total = document.querySelector(".total");
const lowerCartInfo = document.querySelector(".cart_info .lower");
const topLayer = document.querySelector(".top_layer");
const deleteEl = document.querySelector(".delete");
const addedItems = document.querySelector(".addedItems");
const addedItemsSection = document.querySelector(".addedItems");
const emptyCartMsg = document.querySelector(".empty_cart_msg");
const logo = document.querySelector(".logo");
const cartCustomer = document.querySelector(".cart_customer");
const curtainOverlay = document.querySelector(".curtain_overlay");
const curtainClose = document.querySelector(".curtain_overlay svg");
const screenOverlay = document.querySelector(".screen_overlay");
const hamburgerMenu = document.querySelector(".hamburger");
const overlayArrowPrev = document.querySelector("#overlay_prev");
const overlayArrowNext = document.querySelector("#overlay_next");
// if (window.matchMedia("(max-width:375px)").matches) {
//   logo.style.width = "90%";
//   logo.style.height = "60%";
//   cartCustomer.style.width = "50%";
//   cartIcon.style.marginTop = "-17%";
// }
cartIcon.addEventListener("click", () => {
  cartInfo.classList.toggle("visible");
});

let counterValue = 0;
plus.addEventListener("click", () => {
  counterValue++;
  updateCounter();
}),
  minus.addEventListener("click", () => {
    if (counterValue > 0) {
      counterValue--;
      updateCounter();
    }
  });

function updateCounter() {
  counterEl.textContent = counterValue;
  addToCart.addEventListener("click", () => {
    if (counterValue > 0) {
      numberOfItems.innerHTML = counterValue;
      numberOfItems.style.visibility = "visible";
      //   numberSelected.innerHTML = counterValue;
      //   total.innerHTML = "$" + 125 * counterValue;
    }
  });
}
updateImageAndOverlay();
function updateImageAndOverlay() {
  imgThumbnails.forEach((thumbnail, index) => {
    const imgSrcArr = [
      "./images/image-product-1.jpg",
      "./images/image-product-2.jpg",
      "./images/image-product-3.jpg",
      "./images/image-product-4.jpg",
    ];
    thumbnail.addEventListener("click", () => {
      largeImg.src = imgSrcArr[index];

      largeImg.addEventListener("click", () => {
        modalLargeImg.src = imgSrcArr[index];
      });
      imgOverlay.forEach((overlay, index2) => {
        if (index === index2) {
          overlay.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        } else {
          overlay.style.backgroundColor = "transparent";
        }
      });
    });
  });
}
// Add click event listeners to thumbnails
imgThumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    updateImageAndOverlay(index);
  });

  // Add hover effect
  thumbnail.addEventListener("mouseenter", () => {
    imgOverlay[index].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  });

  thumbnail.addEventListener("mouseleave", () => {
    imgOverlay[index].style.backgroundColor = "transparent";
  });
});

largeImgOverlay.addEventListener("click", () => {
  modal.style.visibility = "visible";
  modalLargeImg.src = largeImg.src;
  // largeImg.src = imgSrcArr[currentImgIndex];

  console.log("large img clicked");
});

cancelBtn.addEventListener("click", () => {
  modal.style.visibility = "hidden";
});

switchLightBoxMobileView();
function switchLightBoxMobileView() {
  const imgSrcArr = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
  ];
  let currentImgIndex = 0;
  overlayArrowNext.addEventListener("click", () => {
    console.log("Hello next");

    let totalImgs = imgSrcArr.length;

    currentImgIndex++;
    if (currentImgIndex < totalImgs) {
      largeImg.src = imgSrcArr[currentImgIndex];
    } else {
      currentImgIndex = totalImgs - 1;
    }
  });
  overlayArrowPrev.addEventListener("click", () => {
    console.log("Hello prev");

    currentImgIndex--;
    if (currentImgIndex >= 0) {
      largeImg.src = imgSrcArr[currentImgIndex];
    } else {
      currentImgIndex = 0;
    }
  });
}

switchLightBox();
function switchLightBox() {
  const imgSrcArr = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
  ];
  let totalImgs = imgSrcArr.length;
  let currentImgIndex = 0;
  function updateModalImage() {
    modalLargeImg.src = imgSrcArr[currentImgIndex];
  }

  nextBtn.addEventListener("click", () => {
    currentImgIndex++;
    if (currentImgIndex < totalImgs) {
      // modalLargeImg.src = imgSrcArr[currentImgIndex];
      updateModalImage();
    } else {
      currentImgIndex = totalImgs - 1;
    }
  });
  prevBtn.addEventListener("click", () => {
    currentImgIndex--;
    if (currentImgIndex >= 0) {
      // modalLargeImg.src = imgSrcArr[currentImgIndex];
      updateModalImage();
    } else {
      currentImgIndex = 0;
    }
  });
}

function updateThumbnailLightBox() {
  lightBoxThumbnails.forEach((thumbnail, index) => {
    const imgSrcArr = [
      "./images/image-product-1.jpg",
      "./images/image-product-2.jpg",
      "./images/image-product-3.jpg",
      "./images/image-product-4.jpg",
    ];
    thumbnail.addEventListener("click", () => {
      modalLargeImg.src = imgSrcArr[index];
    });
  });
}
lightBoxThumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    updateThumbnailLightBox(index);
  });
});

addToCart.addEventListener("click", () => {
  updateCounter();
  if (counterValue > 0) {
    emptyCartMsg.style.display = "none";
    addedItems.style.display = "block";
    numberSelected.innerHTML = counterValue;
    let totalPrice = `$${(125.0 * counterValue).toFixed(2)}`;
    total.innerHTML = totalPrice;
    //   lowerCartInfo.innerHTML = `<section class="addedItems hidden">
    //   <div class="top_layer">
    //     <img src="images/image-product-1-thumbnail.jpg" alt="">
    //     <p>Fall Limited Edition Sneakers <br> $125.00 x <span class="number_selected">${counterValue}</span> <span class="total">$${
    //     125 * counterValue
    //   }</span></p>
    //     <svg width="14" height="16" class="delete" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
    //  </div>
    //   <button class="checkout">Checkout</button>
    // </section>
    //   `;
  }
});

// if (counterValue === 0) {
//   lowerCartInfo.innerHTML = `<p style="text-align: center;font-size: 0.8rem;font-weight: 700;color: hsl(219, 9%, 45%);">Your cart is empty</p>`;
// }

deleteEl.addEventListener("click", () => {
  counterValue = 0;
  counterEl.textContent = 0;
  numberOfItems.style.visibility = "hidden";
  emptyCartMsg.style.display = "block";
  addedItems.style.display = "none";

  // lowerCartInfo.innerHTML = `<p style="text-align: center;font-size: 0.8rem;font-weight: 700;color: hsl(219, 9%, 45%);">Your cart is empty</p>`;
});
hamburgerMenu.addEventListener("click", () => {
  curtainOverlay.classList.add("active");
  screenOverlay.classList.add("active");
  console.log("hamburger clicked");
});
curtainClose.addEventListener("click", () => {
  curtainOverlay.classList.remove("active");
  screenOverlay.classList.remove("active");
});

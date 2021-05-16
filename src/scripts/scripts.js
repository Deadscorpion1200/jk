let menu = document.querySelector(".main-menu__link");
let mobileMenu = document.querySelector(".mobile-menu");
let popupMenu = document.querySelector(".menu_popup");
let popupMobileMenu = document.querySelector(".mobile-menu_popup")
let modal = document.querySelector(".modal");
menu.addEventListener("click", function (e) {
  e.preventDefault()
  menu.classList.toggle("main-menu__link_active");
  mobileMenu.classList.toggle("main-menu__link_active")
  popupMenu.classList.toggle("main-menu__link_active")
  popupMobileMenu.classList.toggle("main-menu__link_active");
  modal.classList.toggle("modal_active");
});
mobileMenu.addEventListener("click", function (e) {
  e.preventDefault()
  mobileMenu.classList.toggle("main-menu__link_active");
  menu.classList.toggle("main-menu__link_active");
  popupMenu.classList.toggle("main-menu__link_active")
  popupMobileMenu.classList.toggle("main-menu__link_active");
  modal.classList.toggle("modal_active");

});
popupMenu.addEventListener("click", function (e) {
  e.preventDefault()
  popupMenu.classList.toggle("main-menu__link_active")
  menu.classList.toggle("main-menu__link_active");
  mobileMenu.classList.toggle("main-menu__link_active");
  popupMobileMenu.classList.toggle("main-menu__link_active");
  modal.classList.toggle("modal_active");
});
popupMobileMenu.addEventListener("click", function (e) {
  e.preventDefault()
  popupMobileMenu.classList.toggle("main-menu__link_active");
  popupMenu.classList.toggle("main-menu__link_active")
  menu.classList.toggle("main-menu__link_active");
  mobileMenu.classList.toggle("main-menu__link_active");
  modal.classList.toggle("modal_active");
});

// Переходы по ссылкам
link = document.querySelectorAll(".modal__link");
link.forEach(function (item) {
  item.addEventListener("click", function () {
    popupMobileMenu.classList.toggle("main-menu__link_active");
    popupMenu.classList.toggle("main-menu__link_active")
    menu.classList.toggle("main-menu__link_active");
    mobileMenu.classList.toggle("main-menu__link_active");
    modal.classList.toggle("modal_active");
  })
})

// Модалка для заказа обратного звонка
let getCall = document.querySelectorAll('.getcall');
let callBack = document.querySelector('.callback');
let callBackClose = document.querySelector(".callback__close__span");
getCall.forEach(function (item) {
  item.addEventListener("click", function () {
    callBack.classList.toggle("callback_active");
  });
});
callBackClose.addEventListener("click", function () {
  callBack.classList.toggle("callback_active");
});

let swiper = new Swiper('.reason-slider', {
  slidesPerView: 3,
  loop: true,
  navigation: {
    prevEl: '.reason-arrow_left',
    nextEl: '.reason-arrow_right',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1200: {
      spaceBetween: 10
    }
  }
});
let swiper2 = new Swiper('.gallery-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    prevEl: '.gallery-arrow_left',
    nextEl: '.gallery-arrow_right',
  },
});
let swiper3 = new Swiper('.steps-slider', {
  slidesPerView: 3,
  loop: true,
  navigation: {
    prevEl: '.steps-arrow_left',
    nextEl: '.steps-arrow_right',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3
    }
  }
});
const video = document.querySelectorAll(".opportunity-video")

let generateUrl = function (id) {
  let query = '?rel=0&showinfo=0&autoplay=1';
  return 'https://youtube.com/embed/' + id + query;
}
video.forEach((el) => {
  let videoHref = el.dataset.video;
  let deletedLenght = 'https://youtu.be/'.length;
  let videoId = videoHref.substring(deletedLenght, videoHref.lenght);
  let img = el.querySelector("opportunity-img");

  el.addEventListener('click', function () {
    let iFrame = createFrame(videoId);
    el.querySelector('.opportunity-img').remove();
    el.appendChild(iFrame);
    el.querySelector('.opportunity__button_cover').remove()
    el.querySelector('.opportunity-tooltip').remove();
  })
});;

let createFrame = function (id) {
  let iFrame = document.createElement('iframe');
  iFrame.setAttribute('állowfullscreen', '');
  iFrame.setAttribute('állow', 'autoplay', 'encrypted-media');
  iFrame.setAttribute('src', generateUrl(id));
  return iFrame;
}

// табы справочника
const tabsBtn = document.querySelectorAll('.infrastructure-item');
const tabsItems = document.querySelectorAll(".infrastructure-item__content");
const valueSelect = document.querySelector(".infrastructure-select");

// ----------------------- TABS
valueSelect.addEventListener('change', function () {
  document.querySelectorAll('.infrastructure-item__content').forEach((n, i) => {
    n.classList.toggle('infrastructure-item__content_active', i === this.selectedIndex);
  });
});

tabsBtn.forEach(function (item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (!currentBtn.classList.contains("infrastructure-item_active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('infrastructure-item_active');
      });
      tabsItems.forEach(function (item) {
        item.classList.remove('infrastructure-item__content_active');
      });
      currentBtn.classList.add('infrastructure-item_active');
      currentTab.classList.add("infrastructure-item__content_active");
    }

  });
});
document.querySelector(".infrastructure-item").click();


// Табы планировки квартир
const planBtn = document.querySelectorAll(".plan-tab ");
const planItem = document.querySelectorAll(".plan__content");
planBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let planId = currentBtn.getAttribute("data-plan");
    let currentPlan = document.querySelector(planId);
    if (!currentBtn.classList.contains(".plan-tab_active")) {
      planBtn.forEach(function (item) {
        item.classList.remove('plan-tab_active');
      });
      planItem.forEach(function (item) {
        item.classList.remove("plan__content_active");
      });
      currentBtn.classList.add("plan-tab_active");
      currentPlan.classList.add("plan__content_active");
    }
  });
});
// simplebar
new SimpleBar(document.querySelector('.infrastructure-menu-block'));
new SimpleBar(document.querySelector('.infrastructure-content'));
let successModal = document.querySelector('.success');
let successClose = document.querySelector('.success-dialog__button').addEventListener('click', function () {
  successModal.classList.remove('success_active');
});
let successButt = document.querySelector('.success-button').addEventListener('click', function () {
  successModal.classList.remove('success_active');
});
//jquery
jQuery(function ($) {
  $('.phone').mask('+7 (999) 999-99-99');
  $('.main-form').validate({
    errorClass: 'invalid',
    errorElement: 'label',
    rules: {
      username: {
        required: true
      },
      userphone: {
        required: true
      }
    },
    messages:
    {
      username:
      {
        required: ''
      },
      userphone:
      {
        required: ''
      }
    },
    submitHandler: function () {
      event.preventDefault();
      $.ajax({
        url: 'mailer/mail.php',
        type: 'POST',
        data: $('.main-form').serialize(),
        success: function (data) {
          $('.success').addClass('success_active')
          $('.main-form').trigger('reset');
        }
      });
    }
  });
  $('.exclusive-form').validate({
    errorClass: 'invalid',
    errorElement: 'label',
    rules: {
      username: {
        required: true
      },
      userphone: {
        required: true
      }
    },
    messages:
    {
      username:
      {
        required: ''
      },
      userphone:
      {
        required: ''
      }
    },
    submitHandler: function () {
      event.preventDefault();
      $.ajax({
        url: 'mailer/mail.php',
        type: 'POST',
        data: $('.exclusive-form').serialize(),
        success: function (data) {
          $('.exclusive-form').trigger('reset');
        }
      });
    }
  });
  $('.callback__form').validate({
    errorClass: 'invalid',
    errorElement: 'label',
    rules: {
      username: {
        required: true
      },
      userphone: {
        required: true
      },
      modalCheckbox:
      {
        required: true
      }
    },
    messages:
    {
      username:
      {
        required: ''
      },
      userphone:
      {
        required: ''
      },
      modalCheckbox:
      {
        required: 'Что?'
      }
    },
    submitHandler: function () {
      event.preventDefault();
      $.ajax({
        url: 'mailer/mail2.php',
        type: 'POST',
        data: $('.callback__form').serialize(),
        success: function (data) {
          $('.callback__form').trigger('reset');
        }
      });
    }
  });
});
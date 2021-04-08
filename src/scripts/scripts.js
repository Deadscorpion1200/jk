let swiper = new Swiper('.reason-slider',{
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
        576:{
          slidesPerView: 2
        },
        991:{
          slidesPerView: 3,
          spaceBetween: 20
        },
        1200:{
          spaceBetween: 10
        }
      }
});
let swiper2 = new Swiper('.gallery-container',{
  slidesPerView: 1,
  loop: true,
  navigation: {
      prevEl: '.gallery-arrow_left',
      nextEl: '.gallery-arrow_right',
    },
});
let swiper3 = new Swiper('.steps-slider',{
  slidesPerView: 3,
  loop: true,
  navigation:{
    prevEl: '.steps-arrow_left',
    nextEl: '.steps-arrow_right',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576:{
      slidesPerView: 2
    },
    991:{
      slidesPerView: 3
    }
  }
});
const video = document.querySelectorAll(".opportunity-video")

let generateUrl = function(id)
{
  let query = '?rel=0&showinfo=0&autoplay=1';
  return 'https://youtube.com/embed/'+id+query;
}
video.forEach((el)=>{
  let videoHref = el.dataset.video;
  let deletedLenght = 'https://youtu.be/'.length;
  let videoId = videoHref.substring(deletedLenght, videoHref.lenght);
  let img = el.querySelector("opportunity-img");

  el.addEventListener('click', function(){
    let iFrame = createFrame(videoId);
    el.querySelector('.opportunity-img').remove();
    el.appendChild(iFrame);
    el.querySelector('.opportunity__button_cover').remove()
    el.querySelector('.opportunity-tooltip').remove();
  })
});;

let createFrame = function(id)
{
  let iFrame = document.createElement('iframe');
  iFrame.setAttribute('állowfullscreen', '');
  iFrame.setAttribute('állow', 'autoplay', 'encrypted-media');
  iFrame.setAttribute('src', generateUrl(id));
  return iFrame;
}

// табы справочника
const tabsBtn = document.querySelectorAll('.infrastructure-item');
const tabsItems = document.querySelectorAll(".infrastructure-item__content");

tabsBtn.forEach(function(item){
  item.addEventListener('click', function(){
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if( ! currentBtn.classList.contains("infrastructure-item_active"))
    {
      tabsBtn.forEach(function(item){
        item.classList.remove('infrastructure-item_active');
      });
      tabsItems.forEach(function(item){
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
planBtn.forEach(function(item){
  item.addEventListener("click", function(){
    let currentBtn = item;
    let planId = currentBtn.getAttribute("data-plan");
    let currentPlan = document.querySelector(planId);
    if(!currentBtn.classList.contains(".plan-tab_active"))
    {
      planBtn.forEach(function(item){
        item.classList.remove('plan-tab_active');
      });
      planItem.forEach(function(item){
        item.classList.remove("plan__content_active");
      });
      currentBtn.classList.add("plan-tab_active");
      currentPlan.classList.add("plan__content_active");
    }
  });
});
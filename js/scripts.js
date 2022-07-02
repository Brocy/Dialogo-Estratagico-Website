$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $(".ipp-speakers-modal-button").click(function () {
    var target = $(this).data("target");
    $("html").addClass("is-clipped");
    $(target).addClass("is-active");
  });

  $(".modal-close, .modal-background").click(function () {
    $("html").removeClass("is-clipped");
    $(this).parent().removeClass("is-active");
  });

  let tabsWithContent = (function () {
    let tabs = document.querySelectorAll('.tabs li');
    let tabsContent = document.querySelectorAll('.tab-content');
  
    let deactvateAllTabs = function () {
      tabs.forEach(function (tab) {
        tab.classList.remove('is-active');
      });
    };
  
    let hideTabsContent = function () {
      tabsContent.forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
    };
  
    let activateTabsContent = function (tab) {
      tabsContent[getIndex(tab)].classList.add('is-active');
    };
  
    let getIndex = function (el) {
      return [...el.parentElement.children].indexOf(el);
    };
  
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        deactvateAllTabs();
        hideTabsContent();
        tab.classList.add('is-active');
        activateTabsContent(tab);
      });
    })
  
    tabs[0].click();
  })();
  
});

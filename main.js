// $(function () {
//     function hamBurgerMenu() {
//       let screenWidth = screen.width;
//       let $hamburgerWrapper = $(".hamburger-wrapper");
//       let $tabpanelMenus = $(".tab-tab");
//       let $tabpaneToggler = $(".tabpane-toggler");
  
//       // Following js will execute for mobile only.
//       if (screenWidth < 768) {
//           console.log("We're in mobile");
//         $hamburgerWrapper.on("click", function (e) {
//           e.preventDefault();
//           $(this).children(".hamburger-menu").toggleClass("animate");
  
//           $tabpanelMenus.toggleClass('d-block');
//         });
  
//         $tabpaneToggler.on("click", function () {
//           $tabpanelMenus.toggleClass('d-block');
//           $hamburgerWrapper.children(".hamburger-menu").toggleClass("animate");
//         });
//       }
//     }
  
//     hamBurgerMenu();
//     window.addEventListener('resize', hamBurgerMenu);
//   });
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
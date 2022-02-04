/******* Burgermenu ********/

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hamburger_menu").style.top = "0";
  } else {
    document.getElementById("hamburger_menu").style.top = "-130px";
  }
  prevScrollpos = currentScrollPos;
};

/******* Shop ********/
$(document).ready(function () {
  $(".mdb-select").materialSelect();
  $(".select-wrapper.md-form.md-outline input.select-dropdown").bind(
    "focus blur",
    function () {
      $(this).closest(".select-outline").find("label").toggleClass("active");
      $(this).closest(".select-outline").find(".caret").toggleClass("active");
    }
  );
});

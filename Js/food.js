$(document).ready(function () {
  // Berger icon
  $("#button").click(function () {
    $("#menu").slideToggle();
  });
  // Berger icon

  // Scroll To Top Bottom

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 700) {
      $("#myBtn").css("display", "block");
    } else {
      $("#myBtn").css("display", "none");
    }
  });

  $("#myBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });
  // Scroll To Top Bottom

  // Header
  window.onscroll = function () {
    if (window.scrollY >= 1 || document.documentElement.scrollTop > 1) {
      $("#navbar").css("background-color", "#dbd9d975");
      $("#navbar").css("padding", "10px 0px");
      $("#navbar").css("box-shadow", " 0px -20px 13px 17px var( --main-color)");
    } else {
      $("#navbar").css("background-color", "transparent");
      $("#navbar").css("padding", "40px 0px");
      $("#navbar").css("box-shadow", " 0px 0px 0px 0px ");
    }
  };
  // Header

  // Article
  $("#button-all").click(function () {
    $("#slider-one").css("display", "grid");
    $("#slider-two").css("display", "grid");
    $("#slider-three").css("display", "grid");
  });
  $("#button-one").click(function () {
    $("#slider-one").css("display", "grid");
    $("#slider-two").css("display", "none");
    $("#slider-three").css("display", "none");
  });

  $("#button-two").click(function () {
    $("#slider-one").css("display", "none");
    $("#slider-two").css("display", "grid");
    $("#slider-three").css("display", "none");
  });
  $("#button-three").click(function () {
    $("#slider-one").css("display", "none");
    $("#slider-two").css("display", "none");
    $("#slider-three").css("display", "grid");
  });
  // Article
});

// document.onreadystatechange = function () {
//   if (document.readyState !== "complete") {
//     document.querySelector("body").style.visibility = "hidden";
//     document.querySelector("#loader-wrapper").style.visibility = "visible";
//   } else {
//     document.querySelector("#loader-wrapper").style.display = "none";
//     document.querySelector("body").style.visibility = "visible";
//   }
// };

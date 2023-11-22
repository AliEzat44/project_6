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

  // Header responsive
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

  // Header >>Active

  // Header >>Active

  // About > Slider

  var autoSkift = 5000;

  var skift = setInterval(rotate, autoSkift);
  var slides = $(".slide");
  var container = $("#slides ul");
  var elm = container.find(":first-child").prop("tagName");
  var item_width = container.width();
  var previous = "prev"; //id of previous button
  var next = "next"; //id of next button
  slides.width(item_width); //set the slides to the correct pixel width
  container.parent().width(item_width);
  container.width(slides.length * item_width); //set the slides container to the correct total width
  container.find(elm + ":first").before(container.find(elm + ":last"));
  resetSlides();

  //if user clicked on prev button

  $("#buttons a").click(function (e) {
    //slide the item

    if (container.is(":animated")) {
      return false;
    }
    if (e.target.id == previous) {
      container.stop().animate(
        {
          left: 0,
        },
        1500,
        function () {
          container.find(elm + ":first").before(container.find(elm + ":last"));
          resetSlides();
        }
      );
    }
    if (e.target.id == next) {
      container.stop().animate(
        {
          left: item_width * -2,
        },
        1500,
        function () {
          container.find(elm + ":last").after(container.find(elm + ":first"));
          resetSlides();
        }
      );
    }
    //cancel the link behavior
    return false;
  });

  //if mouse hover, pause the auto rotation, otherwise rotate it
  container
    .parent()
    .mouseenter(function () {
      clearInterval(skift);
    })
    .mouseleave(function () {
      skift = setInterval(rotate, autoSkift);
    });

  function resetSlides() {
    //and adjust the container so current is in the frame
    container.css({
      left: -1 * item_width,
    });
  }
  // click

  function rotate() {
    $("#next").click();
  }
});

// Loader

// document.onreadystatechange = function () {
//   if (document.readyState !== "complete") {
//     document.querySelector("body").style.visibility = "hidden";
//     document.querySelector("#loader-wrapper").style.visibility = "visible";
//   } else {
//     document.querySelector("#loader-wrapper").style.display = "none";
//     document.querySelector("body").style.visibility = "visible";
//   }
// };









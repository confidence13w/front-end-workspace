// 1. show, hide, toggle
$("#show").click(() => {
  $("#img1").show(2000);
});
$("#hide").click(() => {
  $("#img1").hide(2000);
});
$("#toggle").click(() => {
  $("#img1").toggle(2000);
});

// 2. fadeIn, fadeOut, fadeToggle, fadeTo
$("#fadeIn").click(() => {
  $("#img2").fadeIn(2000);
});
$("#fadeOut").click(() => {
  $("#img2").fadeOut(2000);
});
$("#fadeToggle").click(() => {
  $("#img2").fadeToggle(2000);
});
$("#img2").hover(
  function () {
    $(this).fadeTo(500, 0.5);
  }, // mouseenter
  function () {
    $(this).fadeTo(500, 1);
  } // mouseleave
);

// 3. slideDown, slideUp, slideToggle
$(".menu").click((e) => {
  let content = $(e.target).next();
  /*
  if (content.css("display") === "none") {
    content.slideDown(400);
  } else {
    content.slideUp(400);
  }
  */
  //   content.slideToggle(400);

  // 하나의 컨텐츠만 slideDown!
  $(".contents").slideUp();
  if (content.css("display") === "none") {
    content.slideDown(400);
  }
});

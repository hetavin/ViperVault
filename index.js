$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".header").css({
        "max-width": "70%",
        margin: "0 auto",
        transition: "max-width 0.7s ease",
        top: "15px",
        "border-radius": "10px",
        "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.1)",
      });
      $(".mobile-menu").css({
        top: "80px",
        "max-width": "70%",
        margin: "0 auto",
      });
    } else {
      $(".header").css({
        "max-width": "100%",
        margin: "0",
        transition: "max-width 0.7s ease",
        top: "0",
        "box-shadow": "none",
      });
      $(".mobile-menu").css({
        top: "60px",
        "max-width": "100%",
        margin: "0",
      });
    }
  });

  $(".menu-icon").click(function () {
    $(this).find("i").toggleClass("fa-times fa-bars");
    $(".mobile-menu").slideToggle();
  });

  // $(".nav-links").click(function () {
  //   $(".mobile-menu").slideUp();
  //   $(".menu-icon i").removeClass("fa-times").addClass("fa-bars");
  // });

  // Update button icon based on current theme
  function setButtonIcon() {
    let icon = $(".mobile-modes i");
    if ($("body").hasClass("dark")) {
      icon.removeClass("fa-moon").addClass("fa-sun"); // dark page → show sun
    } else {
      icon.removeClass("fa-sun").addClass("fa-moon"); // light page → show moon
    }
  }

  // Load theme on page load
  function loadTheme() {
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      // Use saved theme
      if (savedTheme === "dark") {
        $("body").addClass("dark");
      } else {
        $("body").removeClass("dark");
      }
    } else {
      // No saved theme → use system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        $("body").addClass("dark");
      } else {
        $("body").removeClass("dark");
      }
    }
    setButtonIcon();
  }

  // On page load
  loadTheme();

  // On button click → toggle + save choice
  $(".mobile-modes").click(function () {
    $("body").toggleClass("dark");
    let currentTheme = $("body").hasClass("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
    setButtonIcon();
  });
});

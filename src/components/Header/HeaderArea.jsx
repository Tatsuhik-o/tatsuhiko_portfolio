import React, { useEffect } from "react";
import $ from "jquery";

const HeaderArea = () => {
  useEffect(() => {
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $("#sticky-header").removeClass("sticky-menu");
        $(".scroll-to-target").removeClass("open");
      } else {
        $("#sticky-header").addClass("sticky-menu");
        $(".scroll-to-target").addClass("open");
      }
    });
    if ($(".menu-area li.menu-item-has-children ul").length) {
      $(".menu-area .navigation li.menu-item-has-children").append(
        '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
      );
    }
    if ($(".mobile-menu").length) {
      var mobileMenuContent = $(".menu-area .main-menu").html();
      $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);
      $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
        "click",
        function () {
          $(this).toggleClass("open");
          $(this).prev("ul").slideToggle(300);
        }
      );
      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible");
      });
      $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
        $("body").removeClass("mobile-menu-visible");
      });
    }
    $(function () {
      $(".header-btn").on("click", function () {
        $(".header-contact-wrap, .body-contact-overlay").toggleClass("active");
        $("body").toggleClass("fix");
        return false;
      });
      $(".body-contact-overlay").on("click", function () {
        $(".header-contact-wrap, .body-contact-overlay").removeClass("active");
        $("body").removeClass("fix");
        return false;
      });
    });
  }, []);

  return (
    <>
      <header></header>
    </>
  );
};

export default HeaderArea;

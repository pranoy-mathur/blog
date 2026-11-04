// Small enhancements. The site works without this file.
(function () {
  "use strict";

  // ---- Blog list: show a few posts, more on request, and back again ----
  function setUpPostList(list) {
    var initial = parseInt(list.getAttribute("data-initial"), 10);
    var step = parseInt(list.getAttribute("data-step"), 10) || 5;
    var items = Array.prototype.slice.call(list.children);
    var controls = list.nextElementSibling;
    if (!initial || items.length <= initial || !controls || !controls.classList.contains("post-list-controls")) return;
    var more = controls.querySelector(".more-posts");
    var fewer = controls.querySelector(".fewer-posts");

    var shown = initial;
    function render() {
      items.forEach(function (li, i) { li.hidden = i >= shown; });
      more.hidden = shown >= items.length;
      fewer.hidden = shown <= initial;
    }
    controls.hidden = false;
    render();

    more.addEventListener("click", function () {
      var firstNew = items[shown];
      shown = Math.min(shown + step, items.length);
      render();
      // Move keyboard focus to the first newly shown post.
      var link = firstNew && firstNew.querySelector("a");
      if (link) link.focus({ preventScroll: true });
      if (more.hidden) fewer.focus({ preventScroll: true });
    });

    fewer.addEventListener("click", function () {
      shown = initial;
      render();
      // The list just got shorter: bring the buttons back into view.
      var rect = controls.getBoundingClientRect();
      if (rect.top < 0 || rect.bottom > window.innerHeight) {
        controls.scrollIntoView({ block: "center" });
      }
      more.focus({ preventScroll: true });
    });
  }

  // ---- Nav underline follows the section you are reading ----
  function setUpScrollSpy() {
    var header = document.querySelector(".site-header");
    var nav = document.querySelector(".site-nav");
    if (!header || !nav) return;
    var links = Array.prototype.slice.call(nav.querySelectorAll("a[data-anchor]"));
    var sections = links.map(function (a) { return document.getElementById(a.getAttribute("data-anchor")); });
    if (sections.some(function (s) { return !s; })) return; // not the homepage

    var currentIndex = -1;

    function setCurrent(index) {
      if (index === currentIndex) return;
      currentIndex = index;
      links.forEach(function (a, i) {
        var on = i === index;
        a.classList.toggle("is-current", on);
        if (on) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
      // On phones the nav scrolls sideways: keep the current item in view.
      var a = links[index];
      if (nav.scrollWidth > nav.clientWidth && a) {
        var left = a.offsetLeft - nav.offsetLeft;
        if (left < nav.scrollLeft || left + a.offsetWidth > nav.scrollLeft + nav.clientWidth) {
          nav.scrollTo({ left: Math.max(0, left - 16), behavior: "smooth" });
        }
      }
    }

    // After a nav click, keep the clicked tab underlined until scrolling stops.
    var locked = false, unlockTimer = null;
    function lockUntilScrollEnds() {
      locked = true;
      clearTimeout(unlockTimer);
      unlockTimer = setTimeout(function () { locked = false; }, 200);
    }
    links.forEach(function (a, i) {
      a.addEventListener("click", function () {
        setCurrent(i);
        lockUntilScrollEnds();
      });
    });

    function update() {
      if (locked) { lockUntilScrollEnds(); return; }
      var line = header.getBoundingClientRect().bottom + Math.min(160, window.innerHeight * 0.25);
      var index = 0;
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top <= line) index = i;
      }
      var doc = document.documentElement;
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) index = sections.length - 1;
      setCurrent(index);
    }

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () { ticking = false; update(); });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Big numbers count up when they scroll into view ----
  function setUpCountUp() {
    var nums = Array.prototype.slice.call(document.querySelectorAll("[data-count]"));
    if (!nums.length || reduceMotion || !("IntersectionObserver" in window)) return;

    function run(el) {
      var text = el.getAttribute("data-count");
      var m = text.match(/^([^0-9]*)([0-9][0-9,]*)(.*)$/);
      if (!m) return;
      var target = parseInt(m[2].replace(/,/g, ""), 10);
      var useCommas = m[2].indexOf(",") !== -1;
      var start = null, duration = 1200;
      function frame(t) {
        if (start === null) start = t;
        var k = Math.min(1, (t - start) / duration);
        var eased = 1 - Math.pow(1 - k, 3);
        var n = Math.round(target * eased);
        el.textContent = m[1] + (useCommas ? n.toLocaleString("en-US") : String(n)) + m[3];
        if (k < 1) window.requestAnimationFrame(frame);
      }
      window.requestAnimationFrame(frame);
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { io.unobserve(e.target); run(e.target); }
      });
    }, { threshold: 0.6 });
    nums.forEach(function (el) { io.observe(el); });
  }

  // ---- Cells in the counting grid drift slightly with the mouse ----
  function setUpCells() {
    var block = document.querySelector(".statement-block");
    var cells = block && block.querySelector(".hero-cells");
    if (!cells || reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;
    var pending = false, x = 0, y = 0;
    block.addEventListener("mousemove", function (e) {
      var r = block.getBoundingClientRect();
      x = (e.clientX - r.left) / r.width - 0.5;
      y = (e.clientY - r.top) / r.height - 0.5;
      if (pending) return;
      pending = true;
      window.requestAnimationFrame(function () {
        pending = false;
        cells.style.transform = "translate(" + (x * -14).toFixed(1) + "px, " + (y * -10).toFixed(1) + "px)";
      });
    });
    block.addEventListener("mouseleave", function () { cells.style.transform = ""; });
  }

  // Nav jumps land just below the sticky header, whatever its height.
  function setScrollPadding() {
    var header = document.querySelector(".site-header");
    if (header) document.documentElement.style.scrollPaddingTop = header.offsetHeight + "px";
  }

  function init() {
    setScrollPadding();
    window.addEventListener("resize", setScrollPadding);
    Array.prototype.forEach.call(document.querySelectorAll(".post-list[data-initial]"), setUpPostList);
    // Hiding posts moves the sections below, so re-apply a #section link.
    if (window.location.hash.length > 1) {
      var target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (target) target.scrollIntoView();
    }
    setUpScrollSpy();
    setUpCountUp();
    setUpCells();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

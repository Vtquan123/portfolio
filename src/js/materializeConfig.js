document.addEventListener("DOMContentLoaded", () => {
  let elems = document.querySelectorAll(".sidenav");
  let instance = M.Sidenav.init(elems);
});

document.addEventListener("DOMContentLoaded", () => {
  let elems = document.querySelectorAll(".collapsible");
  let instances = M.Collapsible.init(elems);
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".scrollspy");
  var instances = M.ScrollSpy.init(elems, {
    throttle: 0,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

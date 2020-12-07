document.addEventListener("DOMContentLoaded", () => {
  let elems = document.querySelectorAll(".sidenav");
  let instance = M.Sidenav.init(elems);
});

document.addEventListener("DOMContentLoaded", () => {
  let elems = document.querySelectorAll(".collapsible");
  let instances = M.Collapsible.init(elems);
});

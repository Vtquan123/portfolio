new WOW().init();

const getElementByID = (id) => document.getElementById(id);
const queryElement = (element) => document.querySelector(element);
const queryElementAll = (element) => document.querySelectorAll(element);

getElementByID("sidebarToggler").onclick = () => {
  queryElementAll(".bar").forEach((element) => {
    element.classList.toggle("change");
  });
  getElementByID("sidebar").classList.toggle("active");
};

queryElement(".social__menu").onclick = () => {
  getElementByID("social__link").classList.toggle("show");
};

const windowResize = () => {
  const height = window.innerHeight;
  const width = window.innerWidth;
  if (width > 992) {
    if (height > width) {
      getElementByID("home").classList.add("home__portrait--lg");
    } else {
      getElementByID("home").classList.remove("home__portrait--lg");
    }
  } else {
    if (height > 600) {
      queryElement(".home__portrait").style.display = "block";
      getElementByID("home").style.height = "100vh";
    } else {
      queryElement(".home__portrait").style.display = "none";
      getElementByID("home").style.height = "100vh";
      if (height < 500) {
        getElementByID("home").style.height = "unset";
      }
    }
  }
};
window.onresize = () => {
  windowResize();
};
window.onload = () => {
  windowResize();
  setTimeout(() => {
    queryElement("body").classList.remove("preloading");
  }, 4000);
  setTimeout(() => {
    getElementByID("preload").classList.add("animate__fadeOut");
  }, 3000);
  setTimeout(() => {
    getElementByID("preload").style.display = "none";
  }, 4000);
};

window.onscroll = () => {
  const offset = window.pageYOffset;
  if (offset > 10) {
    getElementByID("header").classList.add("header__on");
    getElementByID("social__link").classList.remove("show");
  } else {
    getElementByID("header").classList.remove("header__on");
    getElementByID("social__link").classList.add("show");
  }
};
queryElementAll(".project").forEach((element) => {
  element.onclick = () => {
    element.classList.add("active");
  };
});

queryElementAll("input").forEach((item) => {
  item.onchange = () => {
    if (item.value === "") {
      item.nextElementSibling.style.top = "25px";
    } else {
      item.nextElementSibling.style.top = "0";
    }
  };
  item.onsubmit = () => {
    item.reset();
  };
});

getElementByID("message").onchange = () => {
  if (getElementByID("message").value === "") {
    getElementByID("message").nextElementSibling.style.top = "25px";
  } else {
    getElementByID("message").nextElementSibling.style.top = "0";
  }
};
getElementByID("message").onsubmit = () => {
  getElementByID("message").reset();
};

/* Typing effect */
let wrapper;
let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const writeAll = async (stringTarget, container) => {
  wrapper = queryElement("#" + container);
  const stringContainer = queryElementAll("." + stringTarget);

  while (wrapper) {
    for (i = 0; i < stringContainer.length; i++) {
      const string = stringContainer[i].textContent;
      await write(string);
      await sleep(1500);
      await erase();
      await sleep(1500);
    }
  }
};

const write = async (text) => {
  let i = 0;
  while (i < text.length) {
    const timeOut = 150;
    await sleep(timeOut);
    i++;
    wrapper.innerHTML = text.substr(0, i);
  }
};

const erase = async () => {
  while (wrapper.textContent.length) {
    const timeOut = 150;
    await sleep(timeOut);
    wrapper.textContent = wrapper.textContent.substring(
      0,
      wrapper.textContent.length - 2
    );
  }
};

writeAll("item", "typingText");

/* Swiper */
var swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

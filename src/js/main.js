const getElementByID = (id) => document.getElementById(id);
const queryElement = (element) => document.querySelector(element);
const queryElementAll = (element) => document.querySelectorAll(element);

getElementByID("sidebarToggler").onclick = () => {
  queryElementAll(".bar").forEach((element) => {
    element.classList.toggle("change");
  });
  getElementByID("sidebar").classList.toggle("active");
};

document.querySelectorAll(".nav-item").forEach((element) => {
  element.onclick = () => {
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  };
});

queryElementAll(".nav-item__sm").forEach((element) => {
  element.onclick = () => {
    queryElementAll(".nav-item__sm").forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  };
});

queryElement(".social__menu").onclick = () => {
  getElementByID("social__link").classList.toggle("show");
};

window.onresize = () => {
  const height = window.innerHeight;
  const width = window.innerWidth;
  if (width > 992) {
    if (height > width) {
      getElementByID("home").classList.add("home__portrait--lg");
    } else {
      getElementByID("home").classList.remove("home__portrait--lg");
    }
  } else if (width < 768) {
    if (height > width) {
      queryElement(".home__portrait").style.display = "none";
      getElementByID("home").style.height = "unset";
    } else {
      getElementByID("home").style.height = "100vh";
    }
  }
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

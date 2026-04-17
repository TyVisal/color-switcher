const jsbtn = document.querySelector(".one");

jsbtn.addEventListener("click", () => {
  jsbtn.classList.toggle("active_one");

  if (jsbtn.classList.contains("active_one")) {
    jsbtn.textContent = "Red to blue";
  } else {
    jsbtn.textContent = "Blue to red";
  }
});

// btn two
const jsbtntwo = document.querySelector(".two");

jsbtntwo.addEventListener("click", () => {
  jsbtntwo.classList.toggle("active_two");

  if (jsbtntwo.classList.contains("active_two")) {
    jsbtntwo.textContent = "chartreuse to yellow";
  } else {
    jsbtntwo.textContent = "Yellow to chartreuse";
  }
});
//btn three
const jsbtnthree = document.querySelector(".three");

jsbtnthree.addEventListener("click", () => {
  jsbtnthree.classList.toggle("active_three");

  if (jsbtnthree.classList.contains("active_three")) {
    jsbtnthree.textContent = "White to pink";
  } else {
    jsbtnthree.textContent = "Pink to white";
  }
});

// btn four
const jsbtnfour = document.querySelector(".four");

jsbtnfour.addEventListener("click", () => {
  jsbtnfour.classList.toggle("active_four");

  if (jsbtnfour.classList.contains("active_four")) {
    jsbtnfour.textContent = "Maroon to Purple";
  } else {
    jsbtnfour.textContent = "Purple to maroon";
  }
});

// btn five
const jsbtnfive = document.querySelector(".five");

jsbtnfive.addEventListener("click", () => {
  jsbtnfive.classList.toggle("active_five");

  if (jsbtnfive.classList.contains("active_five")) {
    jsbtnfive.textContent = "Indigo to green";
  } else {
    jsbtnfive.textContent = "Green to indigo";
  }
});
// btn six
const jsbtnsix = document.querySelector(".six");

jsbtnsix.addEventListener("click", () => {
  jsbtnsix.classList.toggle("active_six");

  if (jsbtnsix.classList.contains("active_six")) {
    jsbtnsix.textContent = "Gray to coral";
  } else {
    jsbtnsix.textContent = "Coral to gray";
  }
});

// btn sevent

const jsbtnsevent = document.querySelector(".sevent");

jsbtnsevent.addEventListener("click", () => {
  jsbtnsevent.classList.toggle("active_sevent");

  if (jsbtnsevent.classList.contains("active_sevent")) {
    jsbtnsevent.textContent = "Peach to brown";
  } else {
    jsbtnsevent.textContent = "Brown to peach";
  }
});
// btn eight
const jsbtneigh = document.querySelector(".eigh");

jsbtneigh.addEventListener("click", () => {
  jsbtneigh.classList.toggle("active_eigh");

  if (jsbtneigh.classList.contains("active_eigh")) {
    jsbtneigh.textContent = "Dark blue to lavender";
  } else {
    jsbtneigh.textContent = "Lavender to dark blue";
  }
});
// btn night
const jsbtnnight = document.querySelector(".night");

jsbtnnight.addEventListener("click", () => {
  jsbtnnight.classList.toggle("active_night");

  if (jsbtnnight.classList.contains("active_night")) {
    jsbtnnight.textContent = "Beige to salmon";
  } else {
    jsbtnnight.textContent = "Salmon to beige";
  }
});

// btn ten

const jsbtnten = document.querySelector(".ten");

jsbtnten.addEventListener("click", () => {
  jsbtnten.classList.toggle("active_ten");

  if (jsbtnten.classList.contains("active_ten")) {
    jsbtnten.textContent = "Lime to olive green ";
  } else {
    jsbtnten.textContent = "Olive green to lime";
  }
});

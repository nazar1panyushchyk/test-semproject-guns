const modal = document.querySelector(".model");

const support = document.querySelector(".one");
console.log(support);

const active = document.querySelector(".active");
support.addEventListener("click", function () {
  modal.classList.add("active");
});

const modal2 = document.querySelector(".container_modal");

const support2 = document.querySelector(".two");
console.log(support2);

const cross = document.querySelector(".container_cross");

// const active2 = document.querySelector('.active2')
support2.addEventListener("click", function () {
  modal2.classList.add("active");
});

cross.addEventListener("click", function () {
  modal2.classList.remove("active");
});

const closeDagger = document.querySelector(".dagger");
console.log(closeDagger);

closeDagger.addEventListener("click", function () {
  modal.classList.remove("active");
});

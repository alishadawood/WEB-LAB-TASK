function changeClass() {
  let element = document.querySelector(".oldClass");
  console.log("Old class name:", element.className);
  element.className = "newClass";
  element.textContent = "Alisha Qureshi";
  console.log("New class name:", element.className);
}

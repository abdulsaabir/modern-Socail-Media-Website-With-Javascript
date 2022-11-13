let menuItems = document.querySelectorAll(".menu-item ");
let notificationsPopup = document.querySelector(".notifications-popup ");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", (e) => {
    let currentTarget = e.currentTarget;
    currentTarget.childElementCount > 2
      ? notificationsPopup.classList.toggle("activeNow")
      : notificationsPopup.classList.remove("activeNow");

    if (currentTarget.classList.contains("active")) return;
    menuItems.forEach((menuitemnow) => menuitemnow.classList.remove("active"));
    currentTarget.classList.add("active");
  });
});

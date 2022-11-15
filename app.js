let backgroundArray = [
  "url('./images/story-1.jpg')",
  "url('./images/story-2.jpg')",
  "url('./images/story-3.jpg')",
  "url('./images/story-4.jpg')",
  "url('./images/story-5.jpg')",
  "url('./images/story-6.jpg')",
];
let photosArray = [
  "./images/feed-1.jpg",
  "./images/feed-2.jpg",
  "./images/feed-3.jpg",
  "./images/feed-4.jpg",
  "./images/feed-5.jpg",
  "./images/feed-6.jpg",
  "./images/feed-7.jpg",
];
let messages = [
  {
    url: "./images/feed-1.jpg",
    name: "hassan kaafi",
    text: "goormee iimaane",
    active: true,
    read: false,
  },
];
let menuItems = document.querySelectorAll(".menu-item ");
let notificationsPopup = document.querySelector(".notifications-popup ");
let stories = document.querySelectorAll(".story");
let photos = document.querySelectorAll(".imagesphoto");
let messagesList = document.querySelector(".messagesList");

notificationsPopup.classList.remove("activeNow");

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

stories.forEach((story, index) => {
  story.style.backgroundImage = backgroundArray[index];
});

photos.forEach((photo, index) => {
  photo.src = photosArray[index];
});

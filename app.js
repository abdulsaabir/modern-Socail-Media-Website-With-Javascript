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
    url: "./images/profile-15.jpg",
    name: "hassan kaafi",
    text: "goormee iimaane",
    active: true,
    read: false,
  },
  {
    url: "./images/profile-4.jpg",
    name: "Julien pete",
    text: "good night babe",
    active: false,
    read: true,
  },
  {
    url: "./images/profile-9.jpg",
    name: "Yusuf mohamuud",
    text: "netflix bassword iisheeg",
    active: true,
    read: false,
  },
  {
    url: "./images/profile-18.jpg",
    name: "Sudlaani yare",
    text: "Hi macalin",
    active: false,
    read: false,
  },
];
let menuItems = document.querySelectorAll(".menu-item ");
let notificationsPopup = document.querySelector(".notifications-popup ");
let stories = document.querySelectorAll(".story");
let photos = document.querySelectorAll(".imagesphoto");
let messagesList = document.querySelector(".messagesList");
let searchMessage = document.getElementById("search-message");
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
window.addEventListener("DOMContentLoaded", () => {
  Loadmessage(messages);
});

function Loadmessage(array) {
  messagesList.innerHTML = "";
  array.forEach((message) => {
    let messagenow = document.createElement("div");
    messagenow.innerHTML = `
  <div class="message">
  <div class="profile-photo">
      <img src=${message.url}>
      ${message.active ? '<div class="active"></div>' : ""}
  </div>
  <div class="message-body">
  <h5>${message.name}</h5>
      <p class=${message.read ? "text-muted" : "text-bold"}>${message.text}</p>
      </div>
      </div>`;
    messagesList.appendChild(messagenow);
  });
}
searchMessage.addEventListener("keyup", (e) => {
  let value = searchMessage.value;
  let FiltredMessages = messages.filter((message) => {
    let name = message.name.toLocaleLowerCase();
    if (name.includes(value)) {
      console.log();
      return message;
    }
  });
  Loadmessage(FiltredMessages);
});

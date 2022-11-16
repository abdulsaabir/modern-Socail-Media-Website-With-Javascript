let menuItems = document.querySelectorAll(".menu-item ");
let notificationsPopup = document.querySelector(".notifications-popup ");
let stories = document.querySelectorAll(".story");
let photos = document.querySelectorAll(".imagesphoto");
let messagesList = document.querySelector(".messagesList");
let searchMessage = document.getElementById("search-message");
notificationsPopup.classList.remove("activeNow");
let messagesnotification = document.getElementById("message-notification");
let messagesbox = document.querySelector(".messages");
let theme = document.getElementById("theme");
let customizeTheme = document.querySelector(".customize-theme");

// stories array
let backgroundArray = [
  "url('./images/story-1.jpg')",
  "url('./images/story-2.jpg')",
  "url('./images/story-3.jpg')",
  "url('./images/story-4.jpg')",
  "url('./images/story-5.jpg')",
  "url('./images/story-6.jpg')",
];
// telmiline photos
let photosArray = [
  "./images/feed-1.jpg",
  "./images/feed-2.jpg",
  "./images/feed-3.jpg",
  "./images/feed-4.jpg",
  "./images/feed-5.jpg",
  "./images/feed-6.jpg",
  "./images/feed-7.jpg",
];
// messages
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

// remove active all the sidebar
function changeActive() {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
}

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActive();
    item.classList.add("active");
    // if the item clicked isn't notification hide notification if was opne
    if (item.id != "notifications") {
      console.log("i am in");
      document.querySelector(".notifications-popup").style.display = "none";
      document.querySelector(".notification-count").style.display = "block";
    } else {
      // open the  notificatin
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(".notification-count").style.display = "none";
    }
  });
});
// genearate stories
stories.forEach((story, index) => {
  story.style.backgroundImage = backgroundArray[index];
});
// generate photos of temline
photos.forEach((photo, index) => {
  photo.src = photosArray[index];
});
//  highlight messages card when message sidebar is clicked
messagesnotification.addEventListener("click", () => {
  messagesbox.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesnotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messagesbox.style.boxShadow = "none";
  }, 2000);
});
//  add the body to the messages
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
  // change to lowercase both the search input and names to match
  let value = searchMessage.value;
  let FiltredMessages = messages.filter((message) => {
    let name = message.name.toLocaleLowerCase();
    if (name.includes(value.toLocaleLowerCase())) {
      console.log();
      return message;
    }
  });
  Loadmessage(FiltredMessages);
});
window.addEventListener("DOMContentLoaded", () => {
  Loadmessage(messages);
});
/* ================================= customize-theme  ================================= */
theme.addEventListener("click", () => {
  customizeTheme.style.display = "grid";
  document.body.classList.add("show");
});

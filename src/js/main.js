import { categories } from "../data/catigory";
import { components } from "../data/componentPro";

// ModalWindow
const modalButton = document.querySelector("#modalButton");
const modalWindow = document.querySelector("#modalWindow");
const blackWindow = document.querySelector("#blackWindow");

modalButton.addEventListener("click", function () {
  modalWindow.classList.remove("hidden");
  blackWindow.classList.remove("hidden");
});

document.addEventListener("click", function (event) {
  var isClockInsideDropdown =
    modalButton.contains(event.target) || modalButton.contains(event.target);
  if (!isClockInsideDropdown) {
    modalWindow.classList.add("hidden");
    modalWindow.classList.remove("flex");
    modalWindow.classList.remove("flex-col");
    blackWindow.classList.add("hidden");
  }
});

/* Login page */
const loginPage = document.querySelector("#loginPage");
const logoutButton = document.querySelector("#logoutButton");
const blackLogin = document.querySelector("#blackLogin");

logoutButton.addEventListener("click", function () {
  blackLogin.classList.remove("hidden"), loginPage.classList.remove("hidden");
});

blackLogin.addEventListener("click", () => {
  blackLogin.classList.add("hidden");
  // loginPage.classList.add("hidden")
});
//  document.addEventListener("click", function(event){
//   let isClock = loginPage.contains(event.target) || blackLogin.contains(event.target)
//   if(!isClock){
//     blackLogin.classList.add("hidden");
//     logoutButton.classList.remove("hidden");
//     loginPage.classList.add("hidden")
//   }
//  })

//  ~~~~~~~~~~~~~~~~~~~~~~ Categories Card ~~~~~~~~~~~~~~~~~~~~~~~~~~~
const hideEl = (el, display = "block") => {
  if (display) {
    el.classList.remove(display);
  }

  el.classList.add("hidden");
};

const showEl = (el, display = "block") => {
  el.classList.remove("hidden");

  if (display) {
    el.classList.add(display);
  }
};

const stringifyObj = (obj) => {
  return JSON.stringify(obj)?.replace(/"/g, "&quot;");
};

const getCateogryTemplate = (category, idx) => {
  return `
    <div
      class="category transition-all duration-200 rounded-xl border border-borderGrey hover:border-mainBlue flex items-center gap-3 shadow-category py-[22px] pr-3 bg-white cursor-pointer group max-sm:col-span-3 "
      onclick="toggleDropdown(${stringifyObj(category.subcategories)}, ${idx})"
    >
      <div
        class="category.img border border-borderGrey shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] rounded-xl p-4 -ml-8 bg-white transition-all duration-200 group-hover:bg-mainBlue group-hover:border-white/20"
      >
        <img src="${category.icon}" :alt="${
    category.name
  }" class="w-8 h-8 icon-blue group-hover:icon-white" />
      </div>
      <div class="flex-grow">
        <h3 class="">${category.name}</h3>
        <p>${category.announcementCount} объявлений</p>
      </div>
      <img src="/public/icons/chevron-right.svg" "checvron-righ" class="category__chevron transition-[transform] duration-200 w-8 h-8" />
    </div>
  `;
};

const renderCatetories = () => {
  const categoriesSection = document.querySelector("div.categories");

  if (categoriesSection) {
    categories.forEach((category, idx) => {
      categoriesSection.innerHTML += getCateogryTemplate(category, idx);
    });
  }
};

renderCatetories();

const getSubcategoryTemplate = (subcategory) => {
  return `
    <a href="#" class="flex items-center justify-between gap-3 p-3">
      <h4>${subcategory.name}</h4>
      <img src="/public/icons/chevron-right.svg" alt="chevron-right" class="w-8 h-8" />
    </a>
  `;
};

let activeIdx = null;

const adjustDropdownPosition = (categoryIdx, dropdownContainer) => {
  const activeRow = Math.floor(categoryIdx / 3) + 2;
  dropdownContainer.style.gridRow = activeRow;
};

const toggleDropdownVisibility = (categoryIdx, dropdownContainer) => {
  if (dropdownContainer.classList.contains("hidden")) {
    showEl(dropdownContainer, "grid");
  } else if (activeIdx === categoryIdx) {
    hideEl(dropdownContainer, "grid");
  }
};

const renderSubcategories = (subcategories, dropdownContainer) => {
  dropdownContainer.innerHTML = subcategories
    ? subcategories.map(getSubcategoryTemplate).join("")
    : "Empty";
};

const toggleCategoryActive = (categoryIdx) => {
  const categories = document.querySelectorAll("div.categories .category");

  categories.forEach((c) => c.classList.remove("active"));

  categories[categoryIdx].classList.toggle("active");
};

window.toggleDropdown = (subcategories, categoryIdx) => {
  const dropdownContainer = document.querySelector(".subcategories-dropdown");

  adjustDropdownPosition(categoryIdx, dropdownContainer);

  toggleDropdownVisibility(categoryIdx, dropdownContainer);

  toggleCategoryActive(categoryIdx);

  renderSubcategories(subcategories, dropdownContainer);

  activeIdx = categoryIdx;
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ComponentCard ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const ComponentCard = (el) => {
  return `
  <div class="bg-white flex flex-col max-w-[278px] rounded-xl hover:text-mainBlue cursor-pointer m-auto">
          <img class="w-[278px] rounded-t-xl" src="${el.img}" alt="cap">
          <div class="p-5 flex flex-col flex-grow">
            <p class="inline-block px-1 border bg-btnColor text-xs fw400 text-textCol rounded-md">${el.city}</p>
            <div class="py-4 flex flex-col">
              <h2 class="text-lg font-semibold">${el.name}</h2>
              <p class="text-sm text-greyCol font-normal">Вчера, 19:20</p>
              <p class="text-base font-semibold text-greyCol">+998 71 200 70 07</p>
            </div>

            <div class="flex flex-grow"></div>

            <div class="flex text-center">
              <h2 class="text-2xl font-bold mr-2 text-blackCol">${el.price}</h2>
              <p class="text-base font-medium text-mainBlue mt-[7px]">UZS</p>
            </div>
          </div>
  </div>
  `;
};

components.forEach((el) => {
  const Card = document.querySelector("#componentData");

  Card.innerHTML += ComponentCard(el);
});

var dropdownBtn = document.getElementById("dropdownButton");
var dropdownMenu = document.getElementById("dropdown-menu");

dropdownBtn.addEventListener("click", () => {
  if (dropdownMenu.classList.contains("hidden")) {
    dropdownMenu.classList.remove("hidden");
    dropdownMenu.classList.add("flex");
    dropdownMenu.classList.add("flex-col");
  } else {
    dropdownMenu.classList.add("hidden");
    dropdownMenu.classList.remove("flex");
    dropdownMenu.classList.remove("flex-col");
  }
});

document.addEventListener("click", function (event) {
  var isClockInsideDropdown =
    dropdownBtn.contains(event.target) || dropdownMenu.contains(event.target);
  if (!isClockInsideDropdown) {
    dropdownMenu.classList.add("hidden");
    dropdownMenu.classList.remove("flex");
    dropdownMenu.classList.remove("flex-col");
  }
});

// ~~~~~~~~~~~~~~~~~~~~~~  form Element  ~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

import API from "./api";
const loginForm = document.querySelector("#loginForm");

// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();

  // let login = document.querySelector("#login").value;
  // let parol = document.querySelector("#parol").value;

  const data =  {
    phone_number: '+998995117179',
    password: 'admin',
  }

  API.post("/accounts/login/", data)
    .then((res) => {
      localStorage.setItem("access", res.access_token);
      localStorage.setItem("refresh", res.refresh_token);
    })
    .catch((err) => {
      // console.log(err);  
    });

  API.get("/accounts/me/")
  .then((res)=>{
    console.log('hey', res);
  })
  .catch(res=>console.log(res))
// })
const form = document.querySelector(".app-header-form");

const appList = document.querySelector(".app-list");
const input = document.querySelector(".app-header-form-input");

const headerError = document.querySelector(".app-header-form-error");

const insertListItem = () => {
  return `<li class="app-item">
          <div class="app-item-checkbox" id="checkbox">
            <i class="fa fa-check app-item-checkbox-icon"></i>
          </div>
          <p class="app-item-name">
            ${input.value}
          </p>
          <i class="fa fa-trash-alt app-item-delete" id="delete"></i>
        </li>`;
};

form.addEventListener("submit", () => {
  const strippedInput = input.value.split(" ").join("");
  if (strippedInput === "") {
    headerError.textContent = `Item can't be empty`;
  } else if (strippedInput.length < 3) {
    headerError.textContent = `Items must have at least 3 characters `;
  } else if (strippedInput.length > 100) {
    headerError.textContent = `Sorry! Items can't have more than 100 characters`;
  } else {
    // The insertAdjacentHtml takes for position
    // 1. beforebegin, 2.beforeend 3.afterbegin 4afterend
    appList.insertAdjacentHTML("afterbegin", insertListItem());
    input.value = "";
  }
});

appList.addEventListener("click", (e) => {
  if (e.target.id === "checkbox") {
    e.target.classList.toggle("checked");
    // e.target.classList.add("checked");
    // e.target.classList.remove("checked");
  } else if (e.target.id === "delete") {
    // const tellUser = alert("you have clicked on the delete key");
    // const promptUser = prompt("How old are you?");
    const confirmUser = confirm("Are you sure you want to delete this?");

    if (confirmUser === true) {
      e.target.parentElement.remove();
    } else {
    }
  }
});

//! LEARNING ES6
/*

const firstName = "Edison";
const lastName = "Kelvin";
const DOB = 1997;
const country = "Nigeria";

getUserInformation(firstName, lastName, DOB, country);

getUserInformation("Edwin", "Chuks", 2000, " United State");

// document.addEventListener("click", () => {
//   const currentDate = new Date().toDateString();
//   console.log(currentDate);
// });

function getUserInformation(fn, ln, DOB, country) {
  const currentYear = new Date().getFullYear();
  //   console.log(
  //     "Below is the user's information \nName: " +
  //       fn +
  //       " " +
  //       ln +
  //       "\nAge:" +
  //       (currentYear - DOB) +
  //       "\nCountry:" +
  //       country +
  //       '\n"Attention!", this info is classified'
  //   );
  console.log(
    `Below is the user's information
     Name: ${fn} ${ln}
     Age: ${currentYear - DOB}
     Country: ${country}
     "Attention": This info is classified
     `
  );
}

// Below is the user's information
// Name: Edison Kelvin
// age : 23
// Country : Nigeria
// "Attention!", this info is classified

// build an Online Greeting app using the date method
 */

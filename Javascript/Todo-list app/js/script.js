const form = document.querySelector(".app-header-form");

const appList = document.querySelector(".app-list");
const input = document.querySelector(".app-header-form-input");

function insertListItem(inputValue) {
  return `<li class="app-item">
          <div class="app-item-checkbox">
            <i class="fa fa-check app-item-checkbox-icon"></i>
          </div>
          <p class="app-item-name">
            ${inputValue}
          </p>
          <i class="fa fa-trash-alt app-item-delete"></i>
        </li>`;
}

form.addEventListener("submit", () => {
  // The insertAdjacentHtml takes for position
  // 1. beforebegin, 2.beforeend 3.afterbegin 4afterend
  appList.insertAdjacentHTML("afterbegin", insertListItem(input.value));
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

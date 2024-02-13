///################ event manage #####################
//#### event hadler:  in html ---> onclick="clicked('Shadi')"
// <h3 onclick="clicked('Shadi')">Sign Up Form</h3>;
// function clicked(fn) {
//      console.log("Hi "+ fn);
//      alert("Hello");
// }

//#### event listner:
// document.querySelector("h3").addEventListener("click", function () {
//        console.log("Hi");
//        alert("Hello");
// })
document.querySelector("#submit-btn").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e);
  const firstNameInput = document.querySelector("#firstName");
  const lastNameInput = document.querySelector("#lastName");
  const emailInput = document.querySelector("#email");
  const degreeInput = document.querySelector('input[name="degree"]:checked');

  const firstNameError = document.querySelector(".firstName-error");
  const lastNameError = document.querySelector(".lastName-error");
  const emailError = document.querySelector(".email-error");
  const degreeError = document.querySelector(".degree-error");

  const nameRegex1 = /^[a-zA-Z]+$/;
  const nameRegex2 = new RegExp(/^[a-zA-Z]+$/);
  // match , test , search

  if (firstNameInput.value == "") {
    firstNameError.innerText = "First Name is required!";
    firstNameInput.style.border = "1px solid red";
  } else if (!nameRegex2.test(firstNameInput.value)) {
    firstNameError.innerText = "First Name is not valid!";
    firstNameInput.style.border = "1px solid red";
  } else {
    firstNameError.innerText = "";
    firstNameInput.style.border = "1px solid rgb(33, 33, 33)";
  }

  if (lastNameInput.value == "") {
    lastNameError.innerText = "Last Name is required!";
    lastNameInput.style.border = "1px solid red";
  } else if (!nameRegex2.test(firstNameInput.value)) {
    lastNameError.innerText = "Last Name is not valid!";
    lastNameInput.style.border = "1px solid red";
  } else {
    lastNameError.innerText = "";
    lastNameInput.style.border = "1px solid rgb(33, 33, 33)";
  }

  if (!degreeInput) {
    degreeError.innerText = "Select a degree";
  } else {
    degreeError.innerText = "";
  }

  const formData = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    degree: degreeInput.value,
  };
  console.log(formData);
});

/////regular expressions   ---> regEx

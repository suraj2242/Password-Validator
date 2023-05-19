function match() {
  let firstPass = document.querySelector("#firstPass");
  let secondPass = document.querySelector("#secondPass");
  firstPass.value === secondPass.value ? passwordMatched(firstPass.value, secondPass.value) : passwordNotMatched(firstPass.value, secondPass.value);
}
function passwordMatched(firstPass, secondPass) {
  let p = document.querySelector("#message");
  if (firstPass !== "" && secondPass !== "") {
    p.innerText = "Password matched";
    p.classList = "matched";
  } else {
    p.innerText = "Enter both fields!";
    p.classList = "enterBoth";
  }
}

function passwordNotMatched(firstPass, secondPass) {
  let p = document.querySelector("#message");
  if (firstPass!=="" && secondPass!=="") {
    p.innerText = "Password  mismatched !";
    p.classList = "notMatched";
  } else {
    p.innerText = "Enter both fields!";
    p.classList = "enterBoth";
  }
}

const messageform = document.getElementById("messageForm");
const emailInput = document.getElementById("email");

messageform.addEventListener("submit", async (event) => {
  event.preventDefault();

  const inputs = messageform.querySelectorAll("input, textarea");
  inputs.forEach((input) => (input.style.border = ""));

  let hasError = false;
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.style.border = "3px solid red";
      hasError = true;
    }
  });

  if (!validator.isEmail(emailInput.value)) {
    emailInput.style.border = "3px solid red";
    alert("Please provide a valid email!");
    hasError = true;
  }

  if (!hasError) {
    messageform.submit();
    alert("Thank you for your message! I will get back to you soon!");
  }
});

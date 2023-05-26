const form = document.getElementById("messageForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputs = form.querySelectorAll("input, textarea");
  inputs.forEach((input) => (input.style.border = ""));

  let hasError = false;
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.style.border = "3px solid red";
      hasError = true;
    }
  });

  if (!hasError) {
    form.submit();
    alert("Thanks for your message, I'll get back to you ASAP!");
  }
});

const messageform = document.getElementById("messageForm");

messageform.addEventListener("submit", (event) => {
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

  if (!hasError) {
    messageform.submit();
    alert("Thanks for your message, I'll get back to you ASAP!");
  }
});

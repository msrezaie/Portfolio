const loginForm = document.getElementById("loginForm");
const usernameInputDOM = document.getElementById("input-uname");
const passwordInputDOM = document.getElementById("input-password");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = usernameInputDOM.value;
  const password = passwordInputDOM.value;

  try {
    await axios.post("/auth", { username, password });
    location.reload();
  } catch (error) {
    Toastify({
      text: error.response.data.msg,
      className: "info",
      style: {
        background: "linear-gradient(to right, #A594AB, #A594AB)",
      },
    }).showToast();
  }
});

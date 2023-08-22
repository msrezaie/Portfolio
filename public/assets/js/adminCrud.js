const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", async () => {
  try {
    await axios.post("/logout");
    location.reload();
  } catch (error) {
    console.log(error);
  }
});

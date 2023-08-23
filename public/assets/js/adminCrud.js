const logoutBtn = document.getElementById("logout");
const eraseBtn = document.getElementById("clearEntry");
const adminForm = document.getElementById("adminForm");
const resumeFile = document.getElementById("resumeFile");
const email = document.getElementById("emailLink");
const phone = document.getElementById("phoneNum");
const github = document.getElementById("githubLink");
const linkedin = document.getElementById("linkedinLink");

adminForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append("resume", resumeFile.files[0]);

  try {
    const response = await axios.post("/admin/profile-update", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    Toastify({
      text: response.data.msg,
      className: "info",
      style: {
        background: "linear-gradient(to right, #A594AB, #A594AB)",
      },
    }).showToast();
  } catch (error) {
    Toastify({
      text: error.response.data.msg,
      className: "error",
      style: {
        background: "linear-gradient(to right, #A594AB, #A594AB)",
      },
    }).showToast();
  }
});

logoutBtn.addEventListener("click", async () => {
  try {
    await axios.post("/auth/logout");
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

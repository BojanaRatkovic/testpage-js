document.getElementById("login").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const myDiv = document.getElementById("form");
  const myLoadingText = document.getElementById("Loading");
  myDiv.style.display = "none";
  myLoadingText.style.display = "block";

  const loginData = { email: email, password: password };

  fetch("https://js-course-server.onrender.com/user/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
          "Content-Type": "application/json",
      },
  })
  .then((response) => response.json())
  .then((data) => {
      if (data.UserId) {
          localStorage.setItem("auth_token", data.token);
          localStorage.setItem("userId", data.UserId);
          alert("Prijava uspešna!");
          window.location.href = "testpage.html";
      } else {
          alert("Neuspešno");
          myDiv.style.display = "block";
          myLoadingText.style.display = "none";
      }
  })
});

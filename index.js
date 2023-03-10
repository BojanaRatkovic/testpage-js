document.getElementById("login").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const myDiv = document.getElementById("form");
  const myLoadingText = document.createElement("p");
  myLoadingText.innerText = "Loading...";
  myDiv.appendChild(myLoadingText);

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
        window.location.href = "quizpage.html";
      } else {
        alert("Neuspešno");
        myDiv.removeChild(myLoadingText);
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Došlo je do greške prilikom prijavljivanja.");
      myDiv.removeChild(myLoadingText);
    });
});

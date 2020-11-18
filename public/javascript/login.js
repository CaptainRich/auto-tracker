// Front-end for the 'sign-up' and 'login' pages.

//////////////////////////////////////////////////////////////////////////////////////////////
// Handle the 'login' activity
async function loginFormHandler(event) {
  event.preventDefault();

  // Get the data from the form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Only do this if all data exists
    const response = await fetch("/api/owners/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/driver");
    } else {
      alert(response.statusText);
    }
  }
}

// The 'listeners' for the submit buttons on the forms.
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

(function () {
  var API_URL = "https://thirupathybright.com/api/website-contact/";

  var form = document.querySelector("form.card-soft");
  if (!form) return;

  var button = form.querySelector('button[type="submit"]');
  var status = document.createElement("p");
  status.setAttribute("role", "status");
  status.style.marginTop = "16px";
  button.insertAdjacentElement("afterend", status);

  function setStatus(msg, ok) {
    status.textContent = msg;
    status.style.color = ok ? "#1a7f37" : "#b42318";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var payload = {
      fullname: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      message: form.message.value.trim(),
    };

    var label = button.textContent;
    button.disabled = true;
    button.textContent = "Sending...";
    setStatus("", true);

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(function (res) {
        if (!res.ok) throw new Error("Request failed: " + res.status);
        form.reset();
        setStatus("Thank you! Your message has been sent.", true);
      })
      .catch(function () {
        setStatus("Sorry, something went wrong. Please try again or contact us directly.", false);
      })
      .finally(function () {
        button.disabled = false;
        button.textContent = label;
      });
  });
})();

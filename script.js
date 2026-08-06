document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  alert(
    "Thank you for contacting Clear Vision! We received your request and will contact you shortly."
  );

  this.reset();
});
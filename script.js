// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  // Listen for form submit
  form.addEventListener("submit", (event) => {
    const name = form.elements["name"].value.trim();
    const phone = form.elements["phone"].value.trim();
    const address = form.elements["address"].value.trim();

    // Basic validation: ensure all fields are filled
    if (!name || !phone || !address) {
      alert("Please fill out all fields before submitting.");
      event.preventDefault(); // Stop form from submitting
      return;
    }

    // Optionally show confirmation (Netlify will handle submission)
    alert("Thank you! Your order has been received. We'll contact you shortly.");

    // Optional: clear form after submission
    // form.reset();
  });
});
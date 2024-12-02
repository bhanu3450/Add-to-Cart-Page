document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".interactive-box");
  const radioButtons = document.querySelectorAll("input[type='radio']");
  
  boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
      
      // Reset all boxes and radio buttons
      boxes.forEach((b) => b.style.backgroundColor = "");
      boxes.forEach( (b) => b.style.borderColor =  "");
      radioButtons.forEach((radio) => radio.checked = false);

       // Highlight the clicked box
       box.style.backgroundColor = "#FFF9FA";
       box.style.borderColor = "#FF6B82";
       box.style.height = '174.11px';

      // Then, check the radio button of the clicked box
      const radioButton = box.querySelector("input[type='radio']");
      if (radioButton) {
        radioButton.checked = true;
      }

      // Collapse all options
      const allOptions = document.querySelectorAll(".options");
      allOptions.forEach(option => {
        option.style.display = "none";
      });

      // If the clicked box has options, toggle them
      const options = box.querySelector(".options");
      if (options) {
        options.style.display = options.style.display === "none" ? "block" : "none";
      }
    });
  });

  // Add a listener for the "Add to Cart" button
  const addToCartButton = document.getElementById("addToCart");
  addToCartButton.addEventListener("click", () => {
    alert("Items added to cart!");
  });
});

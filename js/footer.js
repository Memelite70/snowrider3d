async function loadFooterIntoExistingDiv(existingDivId) {
  try {
      // Fetch the content of the footer.html file
      const response = await fetch('/js/footer.html');

      // Check if the request was successful
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      // Get the text content of the fetched file
      const footerHtml = await response.text();

      // Find the existing div by ID
      const existingDiv = document.getElementById(existingDivId);

      // Check if the existing div exists
      if (existingDiv) {
          // Set the inner HTML of the existing div
          existingDiv.innerHTML = footerHtml;
      } else {
          console.error(`Div with ID "${existingDivId}" not found.`);
      }
  } catch (error) {
      console.error('Error loading footer:', error);
  }
}

// Call the function and pass the ID of the existing div
loadFooterIntoExistingDiv('footer');

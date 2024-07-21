document.addEventListener("DOMContentLoaded", function() {
    loadHTML('navbar.html', 'navbar');
    loadHTML('footer.html', 'footer');
  });
  
  function loadHTML(file, elementID) {
    fetch(file)
      .then(response => response.text())
      .then(data => document.getElementById(elementID).innerHTML = data)
      .catch(error => console.error('Error loading the HTML file:', error));
  }
  
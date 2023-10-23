function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  document.getElementById("processButton").addEventListener("click", processImage);

  function processImage() {
      const imageInput = document.getElementById("imageInput");
      const outputDiv = document.getElementById("output");
      const file = imageInput.files[0];
  
      if (file) {
          Tesseract.create()
              .recognize(file, 'eng')
              .then(({ data: { text } }) => {
                  outputDiv.textContent = text;
              })
              .catch((error) => {
                  console.error("Error: ", error);
              });
      }
  }
  
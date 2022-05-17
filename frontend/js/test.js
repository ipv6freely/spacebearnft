window.addEventListener("DOMContentLoaded", async () => {
  const mintButton = document.getElementById("mintButton");
  mintButton.onclick = () => {
    mint();
  }
});

async function mint() {
  const mintButton = document.getElementById("mintButton");
  mintButton.disabled = true;
  const spinner = '<div class="dot-revolution"></div><span>Waiting...</span>';
  mintButton.innerHTML = spinner;

  try {

      const mintedContainer = document.querySelector('.minted-container');
      const countdownContainer = document.querySelector('.countdown');
      countdownContainer.classList.add('hidden');
      mintedContainer.classList.remove('hidden');
      console.log("Minuted successfully!");

  } catch(e) { // exception
    
    mintButton.innerText = "FAILED";
    mintButton.disabled = false;
    console.log(e);
  
  }

} // end mint() function
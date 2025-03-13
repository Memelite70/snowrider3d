
window.addEventListener('resize', () => {
  const moreGamesLeft = document.querySelector('.moregames_left');
  if (moreGamesLeft) {
    if (moreGamesLeft.offsetWidth < 500) {
      moreGamesLeft.style.left = "calc(66vw + 2px)";
      moreGamesLeft.style.right = "-3em";
      moreGamesLeft.style.width = "30vw";
    } else if (moreGamesLeft.offsetWidth < 400) {
      moreGamesLeft.style.opacity = '0'; 
    } else {
      moreGamesLeft.style.opacity = '1';
      moreGamesLeft.style.left = "calc(56vw + 2px)";
      moreGamesLeft.style.right = "3em";
    }
  }
  function hideCutOffGameFrames() {
    const gameFrameElements = document.querySelectorAll('.gameframe_game');

    gameFrameElements.forEach(gameFrameElement => {
        const parentElement = gameFrameElement.parentElement;
        if (!parentElement) return; // If the parent doesn't exist

        const gameFrameRect = gameFrameElement.getBoundingClientRect();
        const parentRect = parentElement.getBoundingClientRect();

        // Check if the element is cut off by comparing its bounding box with the parent's
        const isCutOff = (
            gameFrameRect.top < parentRect.top ||
            gameFrameRect.bottom > parentRect.bottom ||
            gameFrameRect.left < parentRect.left ||
            gameFrameRect.right > parentRect.right
        );

        // If the element is cut off, hide it
        if (isCutOff) {
            gameFrameElement.style.display = 'none';
        } else {
            gameFrameElement.style.display = ''; // Restore the default display if not cut off
        }
    });
  }

  hideCutOffGameFrames();

});
function loadgame(gameURL, unusedVar) {
  
  const parentElement = event.target.closest('div');
  
  const h1Element = parentElement.querySelector('h1');
  const gameName = h1Element.innerText;
  const element = document.getElementById("gameframe_frame_container");
  if(gameName){
    localStorage.setItem('Title', gameName);
   
    if(gameName === "Snow Rider 3D"){
      window.location.href = "/";
    }
  }
  if (element !== null) {
    const gmsTitle = document.querySelectorAll('#gmsName');
    gmsTitle.forEach(gmsTitle => {
      gmsTitle.innerHTML = localStorage.getItem('Title');
    });
    gmsTitle.innerHTML = localStorage.getItem('Title');
    element.src = '/loader.html?game=' + gameURL;
    window.localStorage.setItem('gameURL', element.src);
    element.contentWindow.focus();
    element.scrollIntoView({ 
      behavior: "smooth" 
    }); 

     } else {
    localStorage.setItem("gameURL", gameURL);

    const text = gameURL;
    const snippet = "./assets/games/";
    const index = text.indexOf(snippet);

    let game2;
    if (index !== -1) {
      game2 = text.substring(index + snippet.length); 
    } else {
      console.log("Snippet not found.");
      game2 = gameURL;
    }

    window.location.href = "/g/?game=" + gameURL;
  }
}
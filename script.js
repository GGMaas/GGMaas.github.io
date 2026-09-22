  function activeerGif() {
    const img = document.getElementById('homepage-gif');
    if (!img) return; 
    
    const gifUrl = img.getAttribute('data-gif');
    


    if (gifUrl) {
      img.src = gifUrl + '?t=' + new Date().getTime();
    }
  }

  // Als de pagina al geladen is, voer het meteen uit. Anders wachten op 'load'.
  if (document.readyState === 'complete') {
    activeerGif();
  } else {
    window.addEventListener('load', activeerGif);
  }

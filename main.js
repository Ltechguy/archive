console.log('>> help')

function validation() {
    var headertext = document.getElementById('logo');
    var textboxtext = document.getElementById('txtbox').value;
  
    if (textboxtext == 'oracio') {
      window.open('https://pesdinfo.github.io/p-e-s-d-hangout-math/oracio.html');
  }
    
     if (textboxtext == 'cam') {
      window.open('https://pesdinfo.github.io/p-e-s-d-hangout-math/cam.html');
  }

      if (textboxtext == 'bob') {
      window.open('https://pesdinfo.github.io/p-e-s-d-hangout-math/bob.html');
  }

      if (textboxtext == "josh") {
      window.open('https://pesdinfo.github.io/p-e-s-d-hangout-math/josh.html')  
  }
  
      if (textboxtext == 'marcus') {
      window.open('https://pesdinfo.github.io/p-e-s-d-hangout-math/marcus.html');
  }
  
      if (textboxtext == 'max') {
      window.open('https://pesdinfo.github.io/p-e-s-d-hangout-math/max.html');
  }

      if (textboxtext == 'tim') {
          window.open('https://pesdinfo.github.io/p-e-s-d-hangout-math/tim.html');
      }

  }
  
  function handle(e){
      if(e.keyCode === 13){
          e.preventDefault();
          validation();
          document.getElementById("txtbox").value = "";
  
      }
  }
  

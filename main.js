console.log('>> help')

function validation() {
    var headertext = document.getElementById('logo');
    var textboxtext = document.getElementById('txtbox').value;
  
    if (textboxtext == 'bbc') {
        window.open('central.html');
  }

      if (textboxtext == 'keyyes') {
      window.open('https://p-e-s-d.github.io/pesd-hangout-math/mathhangout.html');
  }

      if (textboxtext == "github") {
      window.open('https://github.com/cens6r', '_blank')  
  }
  
      if (textboxtext == 'lastfm') {
      window.open('https://last.fm/user/void-star', '_blank');
  }
  
      if (textboxtext == 'spotify') {
      window.open('https://open.spotify.com/user/utqeto9r0v0qsgducht24jl3f', '_blank');
  }

      if (textboxtext == 'discord') {
          window.open('discord://https://discord.com/users/581470718387159040', '_blank');
      }

  }
  
  function handle(e){
      if(e.keyCode === 13){
          e.preventDefault();
          validation();
          document.getElementById("txtbox").value = "";
  
      }
  }
  

const {remote} = require('electron');

window.onload = function buttons () {
    document.getElementById('close').addEventListener('click', closeWindow);
   // document.getElementById('minimize').addEventListener('click', minimizeWindow);
   // document.getElementById('maximize').addEventListener('click', maximizeWindow);
}

function closeWindow () {        
    var window = remote.getCurrentWindow();
    window.close();
}

//function minimizeWindow () {   
  //  var window = remote.getCurrentWindow();
  //  window.minmize();
//}

//function maximizeWindow () {
  //  var window = remote.getCurrentWindow()
  //  window.isMaximized() ? window.unmaximize() : window.maximize();
//}
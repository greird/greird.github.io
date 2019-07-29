(function(){

window.onload = setCanvaSize;
window.addEventListener('resize', setCanvaSize);

function setCanvaSize() {

    var browser = {}; // browser info

    // Get window's width and height
    browser = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    };

    var slide = document.getElementsByClassName("slide");
    for (var i = 0; i < slide.length; i++) {
      if (i === 0) slide[i].style.minHeight = browser.height - 100 + 'px';
      else slide[i].style.minHeight = browser.height + 'px';
    }
}

})();

(function(){

window.onload = setCanvaSize;
window.addEventListener('resize', setCanvaSize);

function setCanvaSize() {

    var browser = {}; // browser info

    // Get window's width and height
    browser = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    }

    var slide = document.getElementsByClassName("slide");
    for (var i = 0; i < slide.length; i++) {
      if (i === 0) slide[i].style.minHeight = browser.height - 100 + 'px';
      else slide[i].style.minHeight = browser.height + 'px';
      console.log(slide[i].style.height);
    }
};

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-7516329-3', 'hubertfauconnier.com');
ga('send', 'pageview');

})();

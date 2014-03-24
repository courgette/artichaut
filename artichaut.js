/* ==========================================================================
   Sommaire

   1 = Prefix navigateur
   2 = Animation JS
   3 =
   4 = Init js
   ========================================================================== */

/* ==========================================================================
   1 = Functions tools 
   ========================================================================== */

  /* ==========================================================================
      Sommaire

      1 - 1 Prefix navigateur
      1 - 2 Set attributes
      ========================================================================== */

  /* ==========================================================================
      1-1 Prefix navigateur
      ========================================================================== */

  var pfx = ["webkit", "moz", "MS", "o", ""];
  function PrefixedEvent(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
      if (!pfx[p]) type = type.toLowerCase();
      element.addEventListener(pfx[p]+type, callback, false);
    }
  }

  /* ==========================================================================
     1-2 Set attributes
     ========================================================================== */

  function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

/* ==========================================================================
   2 = Animation JS
   ========================================================================== */

var artichautAnim = (function() {
  var btnAnim = document.querySelectorAll('.btn-anim'),
      closeBtn = document.getElementById('close');

  Array.prototype.forEach.call(btnAnim, function(el) {
    el.addEventListener('click', function(e){
      e.preventDefault();
      var animation = this.getAttribute('data-anim'),
          reverse = this.getAttribute('data-reverse'),
          id = this.getAttribute('data-target'),
          target = document.getElementById(id);

      if(target.classList.contains(animation)) {
        target.classList.remove(animation);
        if(reverse.length > 0) {
          target.classList.add(reverse);
        }
      }else {
        target.classList.add(animation);
      }
    });
  });

})();

/* ==========================================================================
   3 = Accordeon Js
   ========================================================================== */

var artichautAccordeon = (function(){
  var title = document.querySelectorAll('.title-accordion');

  [].forEach.call(title, function(el) {

    var idNextElement = el.nextElementSibling.id,
        textTitle = el.innerHTML,
        linkTitle = '<a aria-expanded="false" aria-controls="'+idNextElement+'" href="#'+idNextElement+'">'+textTitle+'</a>';

    el.innerHTML = linkTitle;

    el.addEventListener('click', function(e) {
      e.preventDefault();
      var link = this.querySelector('a'),
          nextElement = this.nextElementSibling;

      if(link.getAttribute('aria-expanded') == 'false') {
        nextElement.style.display = "block";
        link.setAttribute('aria-expanded','true');
      }else {
        nextElement.style.display = "none";
        link.setAttribute('aria-expanded','false');
      }
      
    });
  });
})();

/* ==========================================================================
  4 = Init js
   ========================================================================== */


document.addEventListener('DOMContentLoaded', function() {

  /*Class to js mode*/
  document.querySelector("html").className = 'js';

});
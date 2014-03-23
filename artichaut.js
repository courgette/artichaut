/* ==========================================================================
   Prefix navigateur 
   ========================================================================== */

var pfx = ["webkit", "moz", "MS", "o", ""];
function PrefixedEvent(element, type, callback) {
  for (var p = 0; p < pfx.length; p++) {
    if (!pfx[p]) type = type.toLowerCase();
    element.addEventListener(pfx[p]+type, callback, false);
  }
}

document.addEventListener('DOMContentLoaded', function() {

  /*Class to js mode*/
  document.querySelector("html").className = 'js';

  /* ==========================================================================
     Animation JS
     ========================================================================== */

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

});
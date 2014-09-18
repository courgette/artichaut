/* ==========================================================================
   Sommaire

   1 = Prefix navigateur
   2 = Animation JS
   3 = Accordeon JS
   4 = Responsive Table
   5 = Init Js
   ========================================================================== */

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
   4 = Responsive table
   ========================================================================== */

var artichautResponsiveTable = (function(){
  var table = document.getElementsByTagName('table');

  [].forEach.call(table, function(el) {
    var div = document.createElement('div');
    div.classList.add('responsiveTable');
    div.wrap(el);
  });
})();

function artichautGridPinterest(num){
  var grillePinterest = document.querySelector('.grillePinterest'),
      parentGrille = grillePinterest.parentNode,
      childsGrids = grillePinterest.children,
      wrapElement = '<div/>',
      arrChilds = [];

  Array.prototype.forEach.call(childsGrids, function(el, i){
    arrChilds.push(el);
  });

  parentGrille.innerHTML = "<div class='col"+num+" col colMarge isPinterested'></div>";

  var isPinterested = document.querySelector('.isPinterested');
  for (var i=0; i<num; i++) {
    var div = document.createElement('div');
    div.classList.add('element'+i);
    isPinterested.appendChild(div);
    for (var j=0+i; j<arrChilds.length; j=j+(num+2*i)) {
      document.querySelector('.element'+i).appendChild(arrChilds[j]);
    }
  }

  
}

/* ==========================================================================
   5 = Init js
   ========================================================================== */


document.addEventListener('DOMContentLoaded', function() {

  /*Class to js mode*/
  document.querySelector("html").className = 'js';

  artichautGridPinterest(4);

});
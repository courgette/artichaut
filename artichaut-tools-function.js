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



// Wrap an HTMLElement around each element in an HTMLElement array.
HTMLElement.prototype.wrap = function(elms) {
    // Convert `elms` to an array, if necessary.
    if (!elms.length) elms = [elms];

    // Loops backwards to prevent having to clone the wrapper on the
    // first element (see `child` below).
    for (var i = elms.length - 1; i >= 0; i--) {
        var child = (i > 0) ? this.cloneNode(true) : this;
        var el    = elms[i];

        // Cache the current parent and sibling.
        var parent  = el.parentNode;
        var sibling = el.nextSibling;

        // Wrap the element (is automatically removed from its current
        // parent).
        child.appendChild(el);

        // If the element had a sibling, insert the wrapper before
        // the sibling to maintain the HTML structure; otherwise, just
        // append it to the parent.
        if (sibling) {
            parent.insertBefore(child, sibling);
        } else {
            parent.appendChild(child);
        }
    }
};
/* ==========================================================================
  Sommaire

  1 = Prefix navigateur
  2 = Set attributes
  3 = Wrap Element
  4 = Get Multiple Element
  ========================================================================== */

  /* ==========================================================================
      1 = Prefix navigateur
      ========================================================================== */

  var pfx = ["webkit", "moz", "MS", "o", ""];
  function PrefixedEvent(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
      if (!pfx[p]) type = type.toLowerCase();
      element.addEventListener(pfx[p]+type, callback, false);
    }
  }

  /* ==========================================================================
     2 = Set attributes
     ========================================================================== */

  function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

/* ==========================================================================
   3 = Wrap Element
   ========================================================================== */

/*http://stackoverflow.com/questions/3337587/wrapping-a-dom-element-using-pure-javascript/13169465#13169465*/

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

/*==================== Javascript Tools by Darklg https://github.com/Darklg ===================*/

/* ==========================================================================
   4 = Get Multiple Element
   ========================================================================== */

var $$_ = function(selector, parent) {
    var idMatch = /^\#([a-z0-9_-]+)$/,
        classMatch = /^\.([a-z0-9_-]+)$/,
        tagMatch = /^([a-z]+)$/;

    parent = parent || document;

    // If selector looks like an ID, uses $_ for performance
    if (selector.match(idMatch)) {
        return [parent.getElementById(selector)];
    }

    // If selector looks like a CSS Class, uses getElementsByClassName for performance if available
    if (selector.match(classMatch) && "getElementsByClassName" in document) {
        return parent.getElementsByClassName(selector);
    }

    // If selector matches a tag elements, uses getElementsByTagName for performance
    if (selector.match(tagMatch)) {
        return parent.getElementsByTagName(selector);
    }

    // If Query Selector exists, use it
    if ("querySelectorAll" in document) {
        return parent.querySelectorAll(selector);
    }

    return [];
};

if (!Element.prototype.find) {
    Element.prototype.find = function(selector) {
        return $$_(selector, this);
    };
}
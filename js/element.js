class DOMReference {
  constructor(id) {
    this.id = id;
    this.current = id ? window.document.getElementById(id) : null;
  }
}

DOMReference.prototype.setContent = function (text) {
  this.current.textContent = text;
}

DOMReference.prototype.removeClass = function (classToRemove) {
  this.current.classList.remove(classToRemove);
}

DOMReference.prototype.addClass = function (classToAdd) {
  this.current.classList.add(classToAdd);
}

DOMReference.prototype.toggle = function (classToToggle) {
  const classes = this.current.classList.value.split(' ');
  if (classes.includes(classToToggle)) {
    this.removeClass(classToToggle);
  } else {
    this.addClass(classToToggle);
  }
}
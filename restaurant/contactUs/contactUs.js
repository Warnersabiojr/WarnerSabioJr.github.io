(function() {
  'use strict';
  window.addEventListener('load', function() { 
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) { //method checks whether the element has any constraints and whether it satisfies them. If the element fails its constraints, the browser fires a cancelable invalid event at the element, and then returns false.
          
            event.preventDefault(); //method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
          
            event.stopPropagation();//method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.
        }
        form.classList.add('was-validated'); //The classList property returns the class name(s) of an element, as a DOMTokenList object.
      }, false);
    });
  }, false);
})();
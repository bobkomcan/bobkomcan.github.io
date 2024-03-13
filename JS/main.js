$(document).ready(function () {
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });
});

function readMore(button) {
  // We use the button's parent node to scope our search for related elements
  var container = button.parentNode;
  // Find the dots and moreText within the container
  var dots = container.querySelector('.dots');
  var moreText = container.querySelector('.more');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    button.textContent = 'Read More';
    moreText.style.opacity = 0;
    setTimeout(function () {
      moreText.style.display = 'none';
    }, 300); // Match the duration of the transition
  } else {
    dots.style.display = 'none';
    button.textContent = 'Read Less';
    moreText.style.display = 'inline';
    setTimeout(function () {
      moreText.style.opacity = 1;
    }, 10); // Give it a moment to apply display style
  }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';
  window.addEventListener(
    'load',
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          'submit',
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          },
          false
        );
      });
    },
    false
  );
})();

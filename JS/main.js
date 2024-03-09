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

  // Toggle the dots and moreText display style
  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    button.textContent = 'Read More'; // Update the button text
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    button.textContent = 'Read Less'; // Update the button text
    moreText.style.display = 'inline';
  }
}
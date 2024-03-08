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
  var moreText = button.previousElementSibling;
  var btnText = button;

  if (moreText.style.display === 'none') {
    btnText.textContent = 'Read Less';
    moreText.style.display = 'inline';
  } else {
    btnText.textContent = 'Read More';
    moreText.style.display = 'none';
  }
}

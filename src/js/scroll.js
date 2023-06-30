function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId);
  const targetPosition =
    element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000; // Задайте бажану тривалість прокрутки

  let startTime = null;

  function scrollAnimation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }

    const timeElapsed = currentTime - startTime;
    const scrollStep = Math.round((distance * timeElapsed) / duration);

    window.scrollTo(0, startPosition + scrollStep);

    if (timeElapsed < duration) {
      requestAnimationFrame(scrollAnimation);
    } else {
      window.scrollTo(0, targetPosition);
    }
  }

  requestAnimationFrame(scrollAnimation);
}

document.addEventListener('DOMContentLoaded', function () {
  const scrollLinks = document.querySelectorAll('.js-scroll-link');

  scrollLinks.forEach(function (scrollLink) {
    scrollLink.addEventListener('click', function (event) {
      event.preventDefault();
      const target = scrollLink.getAttribute('href');
      const elementId = target.substring(1); // Видаляємо початковий символ "#"
      smoothScrollTo(elementId);
    });
  });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > document.documentElement.scrollHeight * 0.15 ||
    document.documentElement.scrollTop >
      document.documentElement.scrollHeight * 0.15
  ) {
    document.getElementById('scrollUpBtn').style.display = 'flex';
  } else {
    document.getElementById('scrollUpBtn').style.display = 'none';
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

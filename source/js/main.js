'use strict';

(function () {
  const links = document.querySelectorAll('a[href^="#"]');
  for (const link of links) {
    function handleButtonClick(event) {
    event.preventDefault();
      const id = link.getAttribute('href');
      document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
      link.addEventListener('click', handleButtonClick);
  };
}());

(function () {
  const inputElement = document.querySelector('input[type=tel]');
  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  IMask(inputElement, maskOptions);
})();

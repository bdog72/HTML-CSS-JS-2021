//
//

const panels = document.querySelectorAll('.panel');

const removeActiveClasses = function () {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};

panels.forEach(function (panel, i) {
  panel.addEventListener('click', function () {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

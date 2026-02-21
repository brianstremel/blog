(function () {
  var html = document.documentElement;
  var btn = document.getElementById('theme-toggle');

  btn.addEventListener('click', function () {
    var isLight = html.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    btn.textContent = isLight ? '\u2600' : '\u263E';
    btn.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  });

  if (html.classList.contains('light')) btn.textContent = '\u2600';
}());

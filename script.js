// Custom JavaScript for Sanika Gore Portfolio 

document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const icon = themeToggle.querySelector('i');

  themeToggle.addEventListener('click', function () {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
      icon.classList.remove('bi-moon');
      icon.classList.add('bi-sun');
    } else {
      icon.classList.remove('bi-sun');
      icon.classList.add('bi-moon');
    }
  });
}); 
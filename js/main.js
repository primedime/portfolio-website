// Add and remove About Section
document.getElementById('about').addEventListener('click', openAbout);
document.getElementById('close-about').addEventListener('click', closeAbout);

function openAbout() {
  const aboutClass = document.querySelector('.about-section');
  aboutClass.classList.toggle('hidden');
}

function closeAbout() {
  const aboutClass = document.querySelector('.about-section');
  aboutClass.classList.add('hidden');
}

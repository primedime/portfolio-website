document.getElementById('about').addEventListener('click', openAbout);
document.getElementById('close-about').addEventListener('click', closeAbout);

function openAbout() {
  const aboutClass = document.querySelector('.about-section');
  const aboutNavItem = document.getElementById('about');

  aboutClass.classList.toggle('hidden');
  aboutNavItem.classList.toggle('active-link');
}

function closeAbout() {
  const aboutClass = document.querySelector('.about-section');
  const aboutNavItem = document.getElementById('about');

  aboutClass.classList.add('hidden');
  aboutNavItem.classList.remove('active-link');
}

document.getElementById('right-scroll').addEventListener('scroll', checkScroll);

function checkScroll() {
  const element = document.getElementById('right-scroll');
  const leftMain = document.getElementById('left-main');
  const y = element.scrollTop;

  leftMain.setAttribute('style', 'filter:hue-rotate(' + y + 'deg)');
  leftMain.setAttribute('style', '-webkit-filter:hue-rotate(' + y + 'deg)');
}

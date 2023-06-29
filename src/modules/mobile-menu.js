const showMobileMenu = () => {
  const hamburguer = document.getElementById('hamburguer');
  hamburguer.classList.remove('hide');
  const menuContainer = document.getElementById('mobile-menu');
  menuContainer.style.display = 'block';
};

const hideMobileMenu = () => {
  const hamburguer = document.getElementById('hamburguer');
  hamburguer.classList.add('hide');
  const menuContainer = document.getElementById('mobile-menu');
  menuContainer.style.display = 'none';
};

export { showMobileMenu, hideMobileMenu };

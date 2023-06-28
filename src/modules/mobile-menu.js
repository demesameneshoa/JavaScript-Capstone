const showMobileMenu = () => {
  const hamburguer = document.getElementById('hamburguer');
  hamburguer.style.display = 'none';
  const menuContainer = document.getElementById('mobile-menu');
  menuContainer.style.display = 'block';
};

const hideMobileMenu = () => {
  const hamburguer = document.getElementById('hamburguer');
  hamburguer.style.display = 'block';
  const menuContainer = document.getElementById('mobile-menu');
  menuContainer.style.display = 'none';
};

export { showMobileMenu, hideMobileMenu };

const switchTab = (tab) => {
      [].forEach.call(document.getElementsByClassName('menu-item'), (menu) => {
            menu.classList.remove('active');
      });
      tab.classList.add('active');
};

const changeLabel = (query) => {
      const items = document.getElementsByClassName('menu-item');
      if (query.matches) {
            items[0].childNodes[1].innerHTML = '1d';
            items[1].childNodes[1].innerHTML = '7d';
            items[2].childNodes[1].innerHTML = '30d';
      } else {
            items[0].childNodes[1].innerHTML = 'Today';
            items[1].childNodes[1].innerHTML = 'This Week';
            items[2].childNodes[1].innerHTML = 'This Month';
      }
};

const maxWidth = window.matchMedia('(max-width: 576px)');

changeLabel(maxWidth);
maxWidth.addEventListener('change', changeLabel);

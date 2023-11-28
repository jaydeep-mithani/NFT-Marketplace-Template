const expand = () => {
      const x = document.getElementById('nav');
      if (x.className === 'navbar') {
            x.className += ' expand';
      } else {
            x.className = 'navbar';
      }
};

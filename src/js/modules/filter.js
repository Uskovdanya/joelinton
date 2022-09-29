const filter = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);



  header.addEventListener('click', (e) => {
    const target = e.target;
    if (target &&
      (target.classList.contains(tabSelector.replace(/\./, "")) || 
    target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {  // отрезаем точку, така сюда приходит класс
      const targetId = e.target.dataset.id;

      tab.forEach(listItem => listItem.classList.remove(activeClass));
      target.classList.add(activeClass);


      switch(targetId) {
        case 'all':
          getItems('promo__works-img');
          break;
        case 'productDesign':
          getItems(targetId);
            break;
        case 'uxResearch':
          getItems(targetId);
          break;
        case 'logo':
          getItems(targetId);
          break;
        case 'darkDesign':
          getItems(targetId);
          break;
        case 'webflow':
          getItems(targetId);
          break;
        case 'socialMedia':
          getItems(targetId);
          break;
        case 'videoEffect':
          getItems(targetId);
          break;
        case 'nonProfit':
          getItems(targetId);
          break;
        
      }

    }
  });

  function getItems(className) {
    content.forEach(item => {
      if (item.classList.contains(className)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
    
  }
};



export default filter;
import sliderMain from './modules/slider';
import tabs from './modules/tabs';
import darkMode from './modules/darkMode';
import filter from './modules/filter';

window.addEventListener('DOMContentLoaded', () => {
  "use strict";
  tabs('.menu-list','.menu__item', '.promo__tabs', 'active');
  filter('.promo__works-menu', '.promo__works-link', '.promo__works-img', 'promo__works-link_active');

});


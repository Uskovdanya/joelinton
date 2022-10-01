import slider from './modules/slider';
import tabs from './modules/tabs';
import dark from './modules/darkMode';
import filter from './modules/filter';
import onload from './modules/onload';

window.addEventListener('DOMContentLoaded', () => {
  "use strict";
  dark();
  onload();
  slider();
  tabs('.menu-list','.menu__item', '.promo__tabs', 'active');
  filter('.promo__works-menu', '.promo__works-link', '.promo__works-img', 'promo__works-link_active');

});


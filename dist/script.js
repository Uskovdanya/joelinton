/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/darkMode.js":
/*!************************************!*\
  !*** ./src/js/modules/darkMode.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const switcher = document.querySelector('.navbar__switcher');
const span = document.querySelector('.span');

function change() {
  if (span.innerHTML.match(/\bdark\b/)) {
    span.innerHTML = "Switch light";
  } else {
    span.innerHTML = "Switch dark";
  }
}

function darkMode() {
  const body = document.body;
  const wasDarkmode = localStorage.getItem('darkmode') === 'true';
  localStorage.setItem('darkmode', !wasDarkmode);
  body.classList.toggle('dark-mode', !wasDarkmode);
  change();
}

switcher.addEventListener('click', darkMode);

function onload() {
  document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
}

document.addEventListener('DOMContentLoaded', onload);
/* harmony default export */ __webpack_exports__["default"] = (darkMode);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const filter = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);
  header.addEventListener('click', e => {
    const target = e.target;

    if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
      // отрезаем точку, така сюда приходит класс
      const targetId = e.target.dataset.id;
      tab.forEach(listItem => listItem.classList.remove(activeClass));
      target.classList.add(activeClass);

      switch (targetId) {
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

/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const sliderMain = new Swiper('.slider_main', {
  mousewheel: true,
  slidesPerView: 2.2,
  spaceBetween: 12,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (sliderMain);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const tabs = function (headerSelector, tabSelector, contentSelector, activeClass) {
  let display = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'block';
  const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach(item => {
      item.style.display = 'none';
    });
    tab.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    content[i].style.display = display;
    tab[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();
  header.addEventListener('click', e => {
    const target = e.target;

    if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
      // отрезаем точку, така сюда приходит класс
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_darkMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/darkMode */ "./src/js/modules/darkMode.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");




window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])('.menu-list', '.menu__item', '.promo__tabs', 'active');
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_3__["default"])('.promo__works-menu', '.promo__works-link', '.promo__works-img', 'promo__works-link_active');
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map
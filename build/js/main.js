/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/_components.js":
/*!**********************************!*\
  !*** ./source/js/_components.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_getDinamicHeight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/getDinamicHeight */ "./source/js/components/getDinamicHeight.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/select */ "./source/js/components/select.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_select__WEBPACK_IMPORTED_MODULE_1__);
// import './components/accordions';
// import './components/anchor';
// import './components/lift';
// import './components/galery';
// import './components/modals';
// import './components/sliders';
// import './components/replaceEL';
 // import './components/lightbox';

 // import './components/tabs';
// import './components/cursor';
// import './components/parallax';

/***/ }),

/***/ "./source/js/_functions.js":
/*!*********************************!*\
  !*** ./source/js/_functions.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/burger */ "./source/js/functions/burger.js");
/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/disable-scroll */ "./source/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/enable-scroll */ "./source/js/functions/enable-scroll.js");
// ----------------------------------------------------
// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())
// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }
// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);
// Фикс фулскрин-блоков
// import './functions/fix-fullheight';
// Реализация бургер-меню
 // Реализация остановки скролла (не забудьте вызвать функцию)

 // Реализация включения скролла (не забудьте вызвать функцию)

 // Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';
// window.addEventListener("DOMContentLoaded", () => {
//   getHeaderHeight();
// });
// window.addEventListener("resize", () => {
//   getHeaderHeight();
// });
// Подключение плагина кастом-скролла
// import 'simplebar';
// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });
// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();
// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');
// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });
// import { validateForms } from './functions/validate-forms';
// // const rules1 = [...];
// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };
// validateForms('.order-form', rules1, afterForm);

/***/ }),

/***/ "./source/js/_vars.js":
/*!****************************!*\
  !*** ./source/js/_vars.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  overlay: document.querySelector('[data-overlay]'),
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsButton: [...document.querySelectorAll("[data-btn-modal]")],
  header: document.querySelector("header"),
  video: [...document.querySelectorAll("[data-video]")],
  startButton: document.querySelector(".start-button"),
  image: document.querySelector(".our-section__image"),
  customCursor: document.querySelector(".custom-cursor")
});

/***/ }),

/***/ "./source/js/_vendor.js":
/*!******************************!*\
  !*** ./source/js/_vendor.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./source/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_picturefill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/picturefill.js */ "./source/js/vendor/picturefill.js");
/* harmony import */ var _vendor_picturefill_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_picturefill_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_parallax_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/parallax.js */ "./source/js/vendor/parallax.js");
/* harmony import */ var _vendor_parallax_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_parallax_js__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./source/js/components/getDinamicHeight.js":
/*!**************************************************!*\
  !*** ./source/js/components/getDinamicHeight.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./source/js/_vars.js");
/* harmony import */ var _functions_customFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/customFunctions */ "./source/js/functions/customFunctions.js");


(0,_functions_customFunctions__WEBPACK_IMPORTED_MODULE_1__.elementHeight)(_vars__WEBPACK_IMPORTED_MODULE_0__["default"].header, "header-height");
(0,_functions_customFunctions__WEBPACK_IMPORTED_MODULE_1__.elementHeight)(_vars__WEBPACK_IMPORTED_MODULE_0__["default"].startButton, "start-button-heigth");
(0,_functions_customFunctions__WEBPACK_IMPORTED_MODULE_1__.elementHeight)(_vars__WEBPACK_IMPORTED_MODULE_0__["default"].image, "image-height");

/***/ }),

/***/ "./source/js/components/select.js":
/*!****************************************!*\
  !*** ./source/js/components/select.js ***!
  \****************************************/
/***/ (function() {

const select = document.querySelectorAll(".select");

if (select.length) {
  select.forEach(item => {
    const selectCurrent = item.querySelector(".select__current");
    item.addEventListener("click", event => {
      const el = event.target.dataset.choice;
      const text = event.target.innerText;

      if (el === "choosen" && selectCurrent.innerText !== text) {
        selectCurrent.innerText = text;
      }

      item.classList.toggle("active");
    });
    document.addEventListener("click", function (event) {
      if (!item.contains(event.target)) {
        item.classList.remove("active");
      }
    });
  });
}

/***/ }),

/***/ "./source/js/functions/burger.js":
/*!***************************************!*\
  !*** ./source/js/functions/burger.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll */ "./source/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll */ "./source/js/functions/enable-scroll.js");
/* harmony import */ var _functions_header_height__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/header-height */ "./source/js/functions/header-height.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_vars */ "./source/js/_vars.js");
/* harmony import */ var _functions_customFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/customFunctions */ "./source/js/functions/customFunctions.js");





let overlay = document.querySelector('[data-overlay]'); // let mobileMenu = document.querySelector('.mobile-menu');

const burger = document.querySelector('[burger]');
const mobileMenu = document.querySelector('[mobile-header]'); // let burger = document.querySelector('.burger');
// let burgerActive = document.querySelector('.burger.active');
// let header = document.querySelector('header');

const mobileMenuHandler = function (overlay, mobileMenu, burger) {
  burger.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
    burger.classList.toggle('active');
    overlay.classList.toggle('active'); // addCustomClass(_vars.bodyEl, 'fixed')
    // headerTag.classList.toggle('active');

    document.body.classList.toggle('dis-scroll');
    (0,_functions_header_height__WEBPACK_IMPORTED_MODULE_2__.getHeaderHeight)();
  });
};

const hideMenuHandler = function (overlay, mobileMenu, burger) {
  mobileMenu.classList.remove('active');
  burger.classList.remove('active');
  overlay.classList.remove('active'); // removeCustomClass(_vars.bodyEl, 'fixed')
  // headerTag.classList.remove('active');

  document.body.classList.remove('dis-scroll');
};

if (overlay) {
  mobileMenuHandler(overlay, mobileMenu, burger);
  overlay.addEventListener('click', function (e) {
    if (e.target.classList.contains('overlay')) {
      hideMenuHandler(overlay, mobileMenu, burger);
    }
  });
}

/***/ }),

/***/ "./source/js/functions/customFunctions.js":
/*!************************************************!*\
  !*** ./source/js/functions/customFunctions.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClassInArray": function() { return /* binding */ addClassInArray; },
/* harmony export */   "addCustomClass": function() { return /* binding */ addCustomClass; },
/* harmony export */   "elementHeight": function() { return /* binding */ elementHeight; },
/* harmony export */   "removeClassInArray": function() { return /* binding */ removeClassInArray; },
/* harmony export */   "removeCustomClass": function() { return /* binding */ removeCustomClass; },
/* harmony export */   "toggleClassInArray": function() { return /* binding */ toggleClassInArray; },
/* harmony export */   "toggleCustomClass": function() { return /* binding */ toggleCustomClass; }
/* harmony export */ });
const removeCustomClass = (item, customClass) => {
  item.classList.remove(customClass);
}; // ----------------------------------------------------

const addCustomClass = (item, customClass) => {
  item.classList.add(customClass);
}; //-----------------------------------------------------

const toggleCustomClass = (item, customClass) => {
  item.classList.toggle(customClass);
}; // ----------------------------------------------------

const removeClassInArray = (arr, customClass) => {
  arr.map(item => {
    item.classList.remove(customClass);
  });
}; // ----------------------------------------------------

const addClassInArray = (arr, customClass) => {
  arr.map(item => {
    item.classList.add(customClass);
  });
}; // ----------------------------------------------------

const toggleClassInArray = (arr, customClass) => {
  arr.map(item => {
    item.classList.toggle(customClass);
  });
}; //-----------------------------------------------------

const elementHeight = (el, variableName) => {
  // el -- сам елемент (но не коллекция)
  // variableName -- строка, имя создаваемой переменной
  if (el) {
    function initListener() {
      const elementHeight = el.offsetHeight;
      document.querySelector(':root').style.setProperty("--".concat(variableName), "".concat(elementHeight, "px"));
    }

    window.addEventListener('DOMContentLoaded', initListener);
    window.addEventListener('resize', initListener);
  }
};

/***/ }),

/***/ "./source/js/functions/disable-scroll.js":
/*!***********************************************!*\
  !*** ./source/js/functions/disable-scroll.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableScroll": function() { return /* binding */ disableScroll; }
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./source/js/_vars.js");

const disableScroll = () => {
  var _document;

  const fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = "".concat(window.innerWidth - _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth, "px");
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => {
    el.style.paddingRight = paddingOffset;
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('dis-scroll');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = "-".concat(pagePosition, "px");
};

/***/ }),

/***/ "./source/js/functions/enable-scroll.js":
/*!**********************************************!*\
  !*** ./source/js/functions/enable-scroll.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableScroll": function() { return /* binding */ enableScroll; }
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./source/js/_vars.js");

const enableScroll = () => {
  var _document;

  const fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(_vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
  fixBlocks.forEach(el => {
    el.style.paddingRight = '0px';
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0px';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'smooth';
};

/***/ }),

/***/ "./source/js/functions/header-height.js":
/*!**********************************************!*\
  !*** ./source/js/functions/header-height.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHeaderHeight": function() { return /* binding */ getHeaderHeight; }
/* harmony export */ });
const getHeaderHeight = () => {
  var _document;

  const headerHeight = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('.header').offsetHeight;
  document.querySelector(':root').style.setProperty('--header-height', "".concat(headerHeight, "px"));
};

/***/ }),

/***/ "./source/js/vendor/focus-visible.js":
/*!*******************************************!*\
  !*** ./source/js/vendor/focus-visible.js ***!
  \*******************************************/
/***/ (function() {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };
  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */

  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }

    return false;
  }
  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */


  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;

    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }
  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */


  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }

    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }
  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */


  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }

    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }
  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */


  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }

    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }

    hadKeyboardEvent = true;
  }
  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */


  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }
  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */


  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }
  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */


  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }
  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */


  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }

      addInitialPointerMoveListeners();
    }
  }
  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */


  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }
  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */


  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  } // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:


  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners(); // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:

  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true); // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.

  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
} // It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199


if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill; // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:

  var event;

  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }

  window.dispatchEvent(event);
}

if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ }),

/***/ "./source/js/vendor/parallax.js":
/*!**************************************!*\
  !*** ./source/js/vendor/parallax.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function (t) {
  if (true) module.exports = t();else {}
}(function () {
  return function t(e, i, n) {
    function o(r, a) {
      if (!i[r]) {
        if (!e[r]) {
          var l = undefined;
          if (!a && l) return require(r, !0);
          if (s) return s(r, !0);
          var h = new Error("Cannot find module '" + r + "'");
          throw h.code = "MODULE_NOT_FOUND", h;
        }

        var u = i[r] = {
          exports: {}
        };
        e[r][0].call(u.exports, function (t) {
          var i = e[r][1][t];
          return o(i || t);
        }, u, u.exports, t, e, i, n);
      }

      return i[r].exports;
    }

    for (var s = undefined, r = 0; r < n.length; r++) o(n[r]);

    return o;
  }({
    1: [function (t, e, i) {
      "use strict";

      function n(t) {
        if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t);
      }

      var o = Object.getOwnPropertySymbols,
          s = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
      e.exports = function () {
        try {
          if (!Object.assign) return !1;
          var t = new String("abc");
          if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;

          for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;

          if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
            return e[t];
          }).join("")) return !1;
          var n = {};
          return "abcdefghijklmnopqrst".split("").forEach(function (t) {
            n[t] = t;
          }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("");
        } catch (t) {
          return !1;
        }
      }() ? Object.assign : function (t, e) {
        for (var i, a, l = n(t), h = 1; h < arguments.length; h++) {
          i = Object(arguments[h]);

          for (var u in i) s.call(i, u) && (l[u] = i[u]);

          if (o) {
            a = o(i);

            for (var c = 0; c < a.length; c++) r.call(i, a[c]) && (l[a[c]] = i[a[c]]);
          }
        }

        return l;
      };
    }, {}],
    2: [function (t, e, i) {
      (function (t) {
        (function () {
          var i, n, o, s, r, a;
          "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function () {
            return performance.now();
          } : void 0 !== t && null !== t && t.hrtime ? (e.exports = function () {
            return (i() - r) / 1e6;
          }, n = t.hrtime, s = (i = function () {
            var t;
            return 1e9 * (t = n())[0] + t[1];
          })(), a = 1e9 * t.uptime(), r = s - a) : Date.now ? (e.exports = function () {
            return Date.now() - o;
          }, o = Date.now()) : (e.exports = function () {
            return new Date().getTime() - o;
          }, o = new Date().getTime());
        }).call(this);
      }).call(this, t("_process"));
    }, {
      _process: 3
    }],
    3: [function (t, e, i) {
      function n() {
        throw new Error("setTimeout has not been defined");
      }

      function o() {
        throw new Error("clearTimeout has not been defined");
      }

      function s(t) {
        if (c === setTimeout) return setTimeout(t, 0);
        if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);

        try {
          return c(t, 0);
        } catch (e) {
          try {
            return c.call(null, t, 0);
          } catch (e) {
            return c.call(this, t, 0);
          }
        }
      }

      function r(t) {
        if (d === clearTimeout) return clearTimeout(t);
        if ((d === o || !d) && clearTimeout) return d = clearTimeout, clearTimeout(t);

        try {
          return d(t);
        } catch (e) {
          try {
            return d.call(null, t);
          } catch (e) {
            return d.call(this, t);
          }
        }
      }

      function a() {
        v && p && (v = !1, p.length ? f = p.concat(f) : y = -1, f.length && l());
      }

      function l() {
        if (!v) {
          var t = s(a);
          v = !0;

          for (var e = f.length; e;) {
            for (p = f, f = []; ++y < e;) p && p[y].run();

            y = -1, e = f.length;
          }

          p = null, v = !1, r(t);
        }
      }

      function h(t, e) {
        this.fun = t, this.array = e;
      }

      function u() {}

      var c,
          d,
          m = e.exports = {};
      !function () {
        try {
          c = "function" == typeof setTimeout ? setTimeout : n;
        } catch (t) {
          c = n;
        }

        try {
          d = "function" == typeof clearTimeout ? clearTimeout : o;
        } catch (t) {
          d = o;
        }
      }();
      var p,
          f = [],
          v = !1,
          y = -1;
      m.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        f.push(new h(t, e)), 1 !== f.length || v || s(l);
      }, h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, m.title = "browser", m.browser = !0, m.env = {}, m.argv = [], m.version = "", m.versions = {}, m.on = u, m.addListener = u, m.once = u, m.off = u, m.removeListener = u, m.removeAllListeners = u, m.emit = u, m.prependListener = u, m.prependOnceListener = u, m.listeners = function (t) {
        return [];
      }, m.binding = function (t) {
        throw new Error("process.binding is not supported");
      }, m.cwd = function () {
        return "/";
      }, m.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }, m.umask = function () {
        return 0;
      };
    }, {}],
    4: [function (t, e, i) {
      (function (i) {
        for (var n = t("performance-now"), o = "undefined" == typeof window ? i : window, s = ["moz", "webkit"], r = "AnimationFrame", a = o["request" + r], l = o["cancel" + r] || o["cancelRequest" + r], h = 0; !a && h < s.length; h++) a = o[s[h] + "Request" + r], l = o[s[h] + "Cancel" + r] || o[s[h] + "CancelRequest" + r];

        if (!a || !l) {
          var u = 0,
              c = 0,
              d = [];
          a = function (t) {
            if (0 === d.length) {
              var e = n(),
                  i = Math.max(0, 1e3 / 60 - (e - u));
              u = i + e, setTimeout(function () {
                var t = d.slice(0);
                d.length = 0;

                for (var e = 0; e < t.length; e++) if (!t[e].cancelled) try {
                  t[e].callback(u);
                } catch (t) {
                  setTimeout(function () {
                    throw t;
                  }, 0);
                }
              }, Math.round(i));
            }

            return d.push({
              handle: ++c,
              callback: t,
              cancelled: !1
            }), c;
          }, l = function (t) {
            for (var e = 0; e < d.length; e++) d[e].handle === t && (d[e].cancelled = !0);
          };
        }

        e.exports = function (t) {
          return a.call(o, t);
        }, e.exports.cancel = function () {
          l.apply(o, arguments);
        }, e.exports.polyfill = function () {
          o.requestAnimationFrame = a, o.cancelAnimationFrame = l;
        };
      }).call(this, "undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "performance-now": 2
    }],
    5: [function (t, e, i) {
      "use strict";

      function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }

      var o = function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }

        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      }(),
          s = t("raf"),
          r = t("object-assign"),
          a = {
        propertyCache: {},
        vendors: [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]],
        clamp: function (t, e, i) {
          return e < i ? t < e ? e : t > i ? i : t : t < i ? i : t > e ? e : t;
        },
        data: function (t, e) {
          return a.deserialize(t.getAttribute("data-" + e));
        },
        deserialize: function (t) {
          return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t);
        },
        camelCase: function (t) {
          return t.replace(/-+(.)?/g, function (t, e) {
            return e ? e.toUpperCase() : "";
          });
        },
        accelerate: function (t) {
          a.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), a.css(t, "transform-style", "preserve-3d"), a.css(t, "backface-visibility", "hidden");
        },
        transformSupport: function (t) {
          for (var e = document.createElement("div"), i = !1, n = null, o = !1, s = null, r = null, l = 0, h = a.vendors.length; l < h; l++) if (null !== a.vendors[l] ? (s = a.vendors[l][0] + "transform", r = a.vendors[l][1] + "Transform") : (s = "transform", r = "transform"), void 0 !== e.style[r]) {
            i = !0;
            break;
          }

          switch (t) {
            case "2D":
              o = i;
              break;

            case "3D":
              if (i) {
                var u = document.body || document.createElement("body"),
                    c = document.documentElement,
                    d = c.style.overflow,
                    m = !1;
                document.body || (m = !0, c.style.overflow = "hidden", c.appendChild(u), u.style.overflow = "hidden", u.style.background = ""), u.appendChild(e), e.style[r] = "translate3d(1px,1px,1px)", o = void 0 !== (n = window.getComputedStyle(e).getPropertyValue(s)) && n.length > 0 && "none" !== n, c.style.overflow = d, u.removeChild(e), m && (u.removeAttribute("style"), u.parentNode.removeChild(u));
              }

          }

          return o;
        },
        css: function (t, e, i) {
          var n = a.propertyCache[e];
          if (!n) for (var o = 0, s = a.vendors.length; o < s; o++) if (n = null !== a.vendors[o] ? a.camelCase(a.vendors[o][1] + "-" + e) : e, void 0 !== t.style[n]) {
            a.propertyCache[e] = n;
            break;
          }
          t.style[n] = i;
        }
      },
          l = {
        relativeInput: !1,
        clipRelativeInput: !1,
        inputElement: null,
        hoverOnly: !1,
        calibrationThreshold: 100,
        calibrationDelay: 500,
        supportDelay: 500,
        calibrateX: !1,
        calibrateY: !0,
        invertX: !0,
        invertY: !0,
        limitX: !1,
        limitY: !1,
        scalarX: 10,
        scalarY: 10,
        frictionX: .1,
        frictionY: .1,
        originX: .5,
        originY: .5,
        pointerEvents: !1,
        precision: 1,
        onReady: null,
        selector: null
      },
          h = function () {
        function t(e, i) {
          n(this, t), this.element = e;
          var o = {
            calibrateX: a.data(this.element, "calibrate-x"),
            calibrateY: a.data(this.element, "calibrate-y"),
            invertX: a.data(this.element, "invert-x"),
            invertY: a.data(this.element, "invert-y"),
            limitX: a.data(this.element, "limit-x"),
            limitY: a.data(this.element, "limit-y"),
            scalarX: a.data(this.element, "scalar-x"),
            scalarY: a.data(this.element, "scalar-y"),
            frictionX: a.data(this.element, "friction-x"),
            frictionY: a.data(this.element, "friction-y"),
            originX: a.data(this.element, "origin-x"),
            originY: a.data(this.element, "origin-y"),
            pointerEvents: a.data(this.element, "pointer-events"),
            precision: a.data(this.element, "precision"),
            relativeInput: a.data(this.element, "relative-input"),
            clipRelativeInput: a.data(this.element, "clip-relative-input"),
            hoverOnly: a.data(this.element, "hover-only"),
            inputElement: document.querySelector(a.data(this.element, "input-element")),
            selector: a.data(this.element, "selector")
          };

          for (var s in o) null === o[s] && delete o[s];

          r(this, l, o, i), this.inputElement || (this.inputElement = this.element), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.elementPositionX = 0, this.elementPositionY = 0, this.elementWidth = 0, this.elementHeight = 0, this.elementCenterX = 0, this.elementCenterY = 0, this.elementRangeX = 0, this.elementRangeY = 0, this.calibrationX = 0, this.calibrationY = 0, this.inputX = 0, this.inputY = 0, this.motionX = 0, this.motionY = 0, this.velocityX = 0, this.velocityY = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onDeviceMotion = this.onDeviceMotion.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onMotionTimer = this.onMotionTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.windowWidth = null, this.windowHeight = null, this.windowCenterX = null, this.windowCenterY = null, this.windowRadiusX = null, this.windowRadiusY = null, this.portrait = !1, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), this.motionSupport = !!window.DeviceMotionEvent && !this.desktop, this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop, this.orientationStatus = 0, this.motionStatus = 0, this.initialise();
        }

        return o(t, [{
          key: "initialise",
          value: function () {
            void 0 === this.transform2DSupport && (this.transform2DSupport = a.transformSupport("2D"), this.transform3DSupport = a.transformSupport("3D")), this.transform3DSupport && a.accelerate(this.element), "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"), this.pointerEvents || (this.element.style.pointerEvents = "none"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay);
          }
        }, {
          key: "doReadyCallback",
          value: function () {
            this.onReady && this.onReady();
          }
        }, {
          key: "updateLayers",
          value: function () {
            this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children, this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."), this.depthsX = [], this.depthsY = [];

            for (var t = 0; t < this.layers.length; t++) {
              var e = this.layers[t];
              this.transform3DSupport && a.accelerate(e), e.style.position = t ? "absolute" : "relative", e.style.display = "block", e.style.left = 0, e.style.top = 0;
              var i = a.data(e, "depth") || 0;
              this.depthsX.push(a.data(e, "depth-x") || i), this.depthsY.push(a.data(e, "depth-y") || i);
            }
          }
        }, {
          key: "updateDimensions",
          value: function () {
            this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.windowCenterX = this.windowWidth * this.originX, this.windowCenterY = this.windowHeight * this.originY, this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX), this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY);
          }
        }, {
          key: "updateBounds",
          value: function () {
            this.bounds = this.inputElement.getBoundingClientRect(), this.elementPositionX = this.bounds.left, this.elementPositionY = this.bounds.top, this.elementWidth = this.bounds.width, this.elementHeight = this.bounds.height, this.elementCenterX = this.elementWidth * this.originX, this.elementCenterY = this.elementHeight * this.originY, this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX), this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY);
          }
        }, {
          key: "queueCalibration",
          value: function (t) {
            clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t);
          }
        }, {
          key: "enable",
          value: function () {
            this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = !1, window.addEventListener("deviceorientation", this.onDeviceOrientation), this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1, window.addEventListener("devicemotion", this.onDeviceMotion), this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0, this.calibrationY = 0, this.portrait = !1, window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()), window.addEventListener("resize", this.onWindowResize), this.raf = s(this.onAnimationFrame));
          }
        }, {
          key: "disable",
          value: function () {
            this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), s.cancel(this.raf));
          }
        }, {
          key: "calibrate",
          value: function (t, e) {
            this.calibrateX = void 0 === t ? this.calibrateX : t, this.calibrateY = void 0 === e ? this.calibrateY : e;
          }
        }, {
          key: "invert",
          value: function (t, e) {
            this.invertX = void 0 === t ? this.invertX : t, this.invertY = void 0 === e ? this.invertY : e;
          }
        }, {
          key: "friction",
          value: function (t, e) {
            this.frictionX = void 0 === t ? this.frictionX : t, this.frictionY = void 0 === e ? this.frictionY : e;
          }
        }, {
          key: "scalar",
          value: function (t, e) {
            this.scalarX = void 0 === t ? this.scalarX : t, this.scalarY = void 0 === e ? this.scalarY : e;
          }
        }, {
          key: "limit",
          value: function (t, e) {
            this.limitX = void 0 === t ? this.limitX : t, this.limitY = void 0 === e ? this.limitY : e;
          }
        }, {
          key: "origin",
          value: function (t, e) {
            this.originX = void 0 === t ? this.originX : t, this.originY = void 0 === e ? this.originY : e;
          }
        }, {
          key: "setInputElement",
          value: function (t) {
            this.inputElement = t, this.updateDimensions();
          }
        }, {
          key: "setPosition",
          value: function (t, e, i) {
            e = e.toFixed(this.precision) + "px", i = i.toFixed(this.precision) + "px", this.transform3DSupport ? a.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? a.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i);
          }
        }, {
          key: "onOrientationTimer",
          value: function () {
            this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), this.orientationSupport = !1, this.enable()) : this.doReadyCallback();
          }
        }, {
          key: "onMotionTimer",
          value: function () {
            this.motionSupport && 0 === this.motionStatus ? (this.disable(), this.motionSupport = !1, this.enable()) : this.doReadyCallback();
          }
        }, {
          key: "onCalibrationTimer",
          value: function () {
            this.calibrationFlag = !0;
          }
        }, {
          key: "onWindowResize",
          value: function () {
            this.updateDimensions();
          }
        }, {
          key: "onAnimationFrame",
          value: function () {
            this.updateBounds();
            var t = this.inputX - this.calibrationX,
                e = this.inputY - this.calibrationY;
            (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.motionX = this.calibrateX ? e : this.inputY, this.motionY = this.calibrateY ? t : this.inputX) : (this.motionX = this.calibrateX ? t : this.inputX, this.motionY = this.calibrateY ? e : this.inputY), this.motionX *= this.elementWidth * (this.scalarX / 100), this.motionY *= this.elementHeight * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.motionX = a.clamp(this.motionX, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.motionY = a.clamp(this.motionY, -this.limitY, this.limitY)), this.velocityX += (this.motionX - this.velocityX) * this.frictionX, this.velocityY += (this.motionY - this.velocityY) * this.frictionY;

            for (var i = 0; i < this.layers.length; i++) {
              var n = this.layers[i],
                  o = this.depthsX[i],
                  r = this.depthsY[i],
                  l = this.velocityX * (o * (this.invertX ? -1 : 1)),
                  h = this.velocityY * (r * (this.invertY ? -1 : 1));
              this.setPosition(n, l, h);
            }

            this.raf = s(this.onAnimationFrame);
          }
        }, {
          key: "rotate",
          value: function (t, e) {
            var i = (t || 0) / 30,
                n = (e || 0) / 30,
                o = this.windowHeight > this.windowWidth;
            this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.calibrationX = i, this.calibrationY = n), this.inputX = i, this.inputY = n;
          }
        }, {
          key: "onDeviceOrientation",
          value: function (t) {
            var e = t.beta,
                i = t.gamma;
            null !== e && null !== i && (this.orientationStatus = 1, this.rotate(e, i));
          }
        }, {
          key: "onDeviceMotion",
          value: function (t) {
            var e = t.rotationRate.beta,
                i = t.rotationRate.gamma;
            null !== e && null !== i && (this.motionStatus = 1, this.rotate(e, i));
          }
        }, {
          key: "onMouseMove",
          value: function (t) {
            var e = t.clientX,
                i = t.clientY;
            if (this.hoverOnly && (e < this.elementPositionX || e > this.elementPositionX + this.elementWidth || i < this.elementPositionY || i > this.elementPositionY + this.elementHeight)) return this.inputX = 0, void (this.inputY = 0);
            this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.elementPositionX), e = Math.min(e, this.elementPositionX + this.elementWidth), i = Math.max(i, this.elementPositionY), i = Math.min(i, this.elementPositionY + this.elementHeight)), this.elementRangeX && this.elementRangeY && (this.inputX = (e - this.elementPositionX - this.elementCenterX) / this.elementRangeX, this.inputY = (i - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (e - this.windowCenterX) / this.windowRadiusX, this.inputY = (i - this.windowCenterY) / this.windowRadiusY);
          }
        }, {
          key: "destroy",
          value: function () {
            this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");

            for (var t = 0; t < this.layers.length; t++) this.layers[t].removeAttribute("style");

            delete this.element, delete this.layers;
          }
        }, {
          key: "version",
          value: function () {
            return "3.1.0";
          }
        }]), t;
      }();

      e.exports = h;
    }, {
      "object-assign": 1,
      raf: 4
    }]
  }, {}, [5])(5);
});

/***/ }),

/***/ "./source/js/vendor/picturefill.js":
/*!*****************************************!*\
  !*** ./source/js/vendor/picturefill.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */

/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
!function (e) {
  var t,
      s,
      r,
      i,
      n,
      c,
      a,
      u = navigator.userAgent;
  e.HTMLPictureElement && /ecko/.test(u) && u.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", (s = document.createElement("source"), r = function (e) {
    var t,
        r,
        i = e.parentNode;
    "PICTURE" === i.nodeName.toUpperCase() ? (t = s.cloneNode(), i.insertBefore(t, i.firstElementChild), setTimeout(function () {
      i.removeChild(t);
    })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, r = e.sizes, e.sizes += ",100vw", setTimeout(function () {
      e.sizes = r;
    }));
  }, i = function () {
    var e,
        t = document.querySelectorAll("picture > img, img[srcset][sizes]");

    for (e = 0; e < t.length; e++) r(t[e]);
  }, n = function () {
    clearTimeout(t), t = setTimeout(i, 99);
  }, c = e.matchMedia && matchMedia("(orientation: landscape)"), a = function () {
    n(), c && c.addListener && c.addListener(n);
  }, s.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a), n));
}(window),
/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */
function (e, t, s) {
  "use strict";

  var r, i, n;
  t.createElement("picture");

  var c = {},
      a = !1,
      u = function () {},
      o = t.createElement("img"),
      l = o.getAttribute,
      f = o.setAttribute,
      d = o.removeAttribute,
      p = t.documentElement,
      A = {},
      m = {
    algorithm: ""
  },
      h = navigator.userAgent,
      g = /rident/.test(h) || /ecko/.test(h) && h.match(/rv\:(\d+)/) && RegExp.$1 > 35,
      v = "currentSrc",
      w = /\s+\+?\d+(e\d+)?w/,
      S = /(\([^)]+\))?\s*(.+)/,
      x = e.picturefillCFG,
      y = "font-size:100%!important;",
      E = !0,
      z = {},
      b = {},
      T = e.devicePixelRatio,
      C = {
    px: 1,
    in: 96
  },
      R = t.createElement("a"),
      L = !1,
      M = /^[ \t\n\r\u000c]+/,
      P = /^[, \t\n\r\u000c]+/,
      D = /^[^ \t\n\r\u000c]+/,
      B = /[,]+$/,
      I = /^\d+$/,
      U = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
      $ = function (e, t, s, r) {
    e.addEventListener ? e.addEventListener(t, s, r || !1) : e.attachEvent && e.attachEvent("on" + t, s);
  },
      k = function (e) {
    var t = {};
    return function (s) {
      return s in t || (t[s] = e(s)), t[s];
    };
  };

  function W(e) {
    return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e;
  }

  var Q,
      G,
      H,
      F,
      N,
      O,
      q,
      j,
      V,
      _,
      K,
      J,
      X,
      Y,
      Z,
      ee,
      te = (Q = /^([\d\.]+)(em|vw|px)$/, G = k(function (e) {
    return "return " + function () {
      for (var e = arguments, t = 0, s = e[0]; (++t in e);) s = s.replace(e[t], e[++t]);

      return s;
    }((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";";
  }), function (e, t) {
    var s;
    if (!(e in z)) if (z[e] = !1, t && (s = e.match(Q))) z[e] = s[1] * C[s[2]];else try {
      z[e] = new Function("e", G(e))(C);
    } catch (e) {}
    return z[e];
  }),
      se = function (e, t) {
    return e.w ? (e.cWidth = c.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e;
  },
      re = function (e) {
    if (a) {
      var s,
          r,
          i,
          n = e || {};

      if (n.elements && 1 === n.elements.nodeType && ("IMG" === n.elements.nodeName.toUpperCase() ? n.elements = [n.elements] : (n.context = n.elements, n.elements = null)), i = (s = n.elements || c.qsa(n.context || t, n.reevaluate || n.reselect ? c.sel : c.selShort)).length) {
        for (c.setupRun(n), L = !0, r = 0; r < i; r++) c.fillImg(s[r], n);

        c.teardownRun(n);
      }
    }
  };

  function ie(e, t) {
    return e.res - t.res;
  }

  function ne(e, t) {
    var s, r, i;
    if (e && t) for (i = c.parseSet(t), e = c.makeUrl(e), s = 0; s < i.length; s++) if (e === c.makeUrl(i[s].url)) {
      r = i[s];
      break;
    }
    return r;
  }

  e.console && console.warn, v in o || (v = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, A["image/svg+xml"] = t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), c.ns = ("pf" + new Date().getTime()).substr(0, 9), c.supSrcset = "srcset" in o, c.supSizes = "sizes" in o, c.supPicture = !!e.HTMLPictureElement, c.supSrcset && c.supPicture && !c.supSizes && (H = t.createElement("img"), o.srcset = "data:,a", H.src = "data:,a", c.supSrcset = o.complete === H.complete, c.supPicture = c.supSrcset && c.supPicture), c.supSrcset && !c.supSizes ? (F = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", N = t.createElement("img"), O = function () {
    2 === N.width && (c.supSizes = !0), i = c.supSrcset && !c.supSizes, a = !0, setTimeout(re);
  }, N.onload = O, N.onerror = O, N.setAttribute("sizes", "9px"), N.srcset = F + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", N.src = F) : a = !0, c.selShort = "picture>img,img[srcset]", c.sel = c.selShort, c.cfg = m, c.DPR = T || 1, c.u = C, c.types = A, c.setSize = u, c.makeUrl = k(function (e) {
    return R.href = e, R.href;
  }), c.qsa = function (e, t) {
    return "querySelector" in e ? e.querySelectorAll(t) : [];
  }, c.matchesMedia = function () {
    return e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? c.matchesMedia = function (e) {
      return !e || matchMedia(e).matches;
    } : c.matchesMedia = c.mMQ, c.matchesMedia.apply(this, arguments);
  }, c.mMQ = function (e) {
    return !e || te(e);
  }, c.calcLength = function (e) {
    var t = te(e, !0) || !1;
    return t < 0 && (t = !1), t;
  }, c.supportsType = function (e) {
    return !e || A[e];
  }, c.parseSize = k(function (e) {
    var t = (e || "").match(S);
    return {
      media: t && t[1],
      length: t && t[2]
    };
  }), c.parseSet = function (e) {
    return e.cands || (e.cands = function (e, t) {
      function s(t) {
        var s,
            r = t.exec(e.substring(o));
        if (r) return s = r[0], o += s.length, s;
      }

      var r,
          i,
          n,
          c,
          a,
          u = e.length,
          o = 0,
          l = [];

      function f() {
        var e,
            s,
            n,
            c,
            a,
            u,
            o,
            f,
            d,
            p = !1,
            A = {};

        for (c = 0; c < i.length; c++) u = (a = i[c])[a.length - 1], o = a.substring(0, a.length - 1), f = parseInt(o, 10), d = parseFloat(o), I.test(o) && "w" === u ? ((e || s) && (p = !0), 0 === f ? p = !0 : e = f) : U.test(o) && "x" === u ? ((e || s || n) && (p = !0), d < 0 ? p = !0 : s = d) : I.test(o) && "h" === u ? ((n || s) && (p = !0), 0 === f ? p = !0 : n = f) : p = !0;

        p || (A.url = r, e && (A.w = e), s && (A.d = s), n && (A.h = n), n || s || e || (A.d = 1), 1 === A.d && (t.has1x = !0), A.set = t, l.push(A));
      }

      function d() {
        for (s(M), n = "", c = "in descriptor";;) {
          if (a = e.charAt(o), "in descriptor" === c) {
            if (W(a)) n && (i.push(n), n = "", c = "after descriptor");else {
              if ("," === a) return o += 1, n && i.push(n), void f();
              if ("(" === a) n += a, c = "in parens";else {
                if ("" === a) return n && i.push(n), void f();
                n += a;
              }
            }
          } else if ("in parens" === c) {
            if (")" === a) n += a, c = "in descriptor";else {
              if ("" === a) return i.push(n), void f();
              n += a;
            }
          } else if ("after descriptor" === c) if (W(a)) ;else {
            if ("" === a) return void f();
            c = "in descriptor", o -= 1;
          }
          o += 1;
        }
      }

      for (;;) {
        if (s(P), o >= u) return l;
        r = s(D), i = [], "," === r.slice(-1) ? (r = r.replace(B, ""), f()) : d();
      }
    }(e.srcset, e)), e.cands;
  }, c.getEmValue = function () {
    var e;

    if (!r && (e = t.body)) {
      var s = t.createElement("div"),
          i = p.style.cssText,
          n = e.style.cssText;
      s.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", p.style.cssText = y, e.style.cssText = y, e.appendChild(s), r = s.offsetWidth, e.removeChild(s), r = parseFloat(r, 10), p.style.cssText = i, e.style.cssText = n;
    }

    return r || 16;
  }, c.calcListLength = function (e) {
    if (!(e in b) || m.uT) {
      var t = c.calcLength(function (e) {
        var t,
            s,
            r,
            i,
            n,
            a,
            u,
            o = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
            l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

        for (r = (s = function (e) {
          var t,
              s = "",
              r = [],
              i = [],
              n = 0,
              c = 0,
              a = !1;

          function u() {
            s && (r.push(s), s = "");
          }

          function o() {
            r[0] && (i.push(r), r = []);
          }

          for (;;) {
            if ("" === (t = e.charAt(c))) return u(), o(), i;

            if (a) {
              if ("*" === t && "/" === e[c + 1]) {
                a = !1, c += 2, u();
                continue;
              }

              c += 1;
            } else {
              if (W(t)) {
                if (e.charAt(c - 1) && W(e.charAt(c - 1)) || !s) {
                  c += 1;
                  continue;
                }

                if (0 === n) {
                  u(), c += 1;
                  continue;
                }

                t = " ";
              } else if ("(" === t) n += 1;else if (")" === t) n -= 1;else {
                if ("," === t) {
                  u(), o(), c += 1;
                  continue;
                }

                if ("/" === t && "*" === e.charAt(c + 1)) {
                  a = !0, c += 2;
                  continue;
                }
              }

              s += t, c += 1;
            }
          }
        }(e)).length, t = 0; t < r; t++) if (n = (i = s[t])[i.length - 1], u = n, o.test(u) && parseFloat(u) >= 0 || l.test(u) || "0" === u || "-0" === u || "+0" === u) {
          if (a = n, i.pop(), 0 === i.length) return a;
          if (i = i.join(" "), c.matchesMedia(i)) return a;
        }

        return "100vw";
      }(e));
      b[e] = t || C.width;
    }

    return b[e];
  }, c.setRes = function (e) {
    var t;
    if (e) for (var s = 0, r = (t = c.parseSet(e)).length; s < r; s++) se(t[s], e.sizes);
    return t;
  }, c.setRes.res = se, c.applySetCandidate = function (e, t) {
    if (e.length) {
      var s,
          r,
          i,
          n,
          a,
          u,
          o,
          l,
          f,
          d,
          p,
          A,
          h,
          w,
          S,
          x,
          y = t[c.ns],
          E = c.DPR;
      if (u = y.curSrc || t[v], (o = y.curCan || function (e, t, s) {
        var r;
        return !s && t && (s = (s = e[c.ns].sets) && s[s.length - 1]), (r = ne(t, s)) && (t = c.makeUrl(t), e[c.ns].curSrc = t, e[c.ns].curCan = r, r.res || se(r, r.set.sizes)), r;
      }(t, u, e[0].set)) && o.set === e[0].set && ((f = g && !t.complete && o.res - .1 > E) || (o.cached = !0, o.res >= E && (a = o))), !a) for (e.sort(ie), a = e[(n = e.length) - 1], r = 0; r < n; r++) if ((s = e[r]).res >= E) {
        a = e[i = r - 1] && (f || u !== c.makeUrl(s.url)) && (d = e[i].res, p = s.res, A = E, h = e[i].cached, w = void 0, S = void 0, x = void 0, "saveData" === m.algorithm ? d > 2.7 ? x = A + 1 : (S = (p - A) * (w = Math.pow(d - .6, 1.5)), h && (S += .1 * w), x = d + S) : x = A > 1 ? Math.sqrt(d * p) : d, x > A) ? e[i] : s;
        break;
      }
      a && (l = c.makeUrl(a.url), y.curSrc = l, y.curCan = a, l !== u && c.setSrc(t, a), c.setSize(t));
    }
  }, c.setSrc = function (e, t) {
    var s;
    e.src = t.url, "image/svg+xml" === t.set.type && (s = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = s));
  }, c.getSet = function (e) {
    var t,
        s,
        r,
        i = !1,
        n = e[c.ns].sets;

    for (t = 0; t < n.length && !i; t++) if ((s = n[t]).srcset && c.matchesMedia(s.media) && (r = c.supportsType(s.type))) {
      "pending" === r && (s = r), i = s;
      break;
    }

    return i;
  }, c.parseSets = function (e, t, s) {
    var r,
        n,
        a,
        u,
        o = t && "PICTURE" === t.nodeName.toUpperCase(),
        p = e[c.ns];
    (void 0 === p.src || s.src) && (p.src = l.call(e, "src"), p.src ? f.call(e, "data-pfsrc", p.src) : d.call(e, "data-pfsrc")), (void 0 === p.srcset || s.srcset || !c.supSrcset || e.srcset) && (r = l.call(e, "srcset"), p.srcset = r, u = !0), p.sets = [], o && (p.pic = !0, function (e, t) {
      var s,
          r,
          i,
          n,
          a = e.getElementsByTagName("source");

      for (s = 0, r = a.length; s < r; s++) (i = a[s])[c.ns] = !0, (n = i.getAttribute("srcset")) && t.push({
        srcset: n,
        media: i.getAttribute("media"),
        type: i.getAttribute("type"),
        sizes: i.getAttribute("sizes")
      });
    }(t, p.sets)), p.srcset ? (n = {
      srcset: p.srcset,
      sizes: l.call(e, "sizes")
    }, p.sets.push(n), (a = (i || p.src) && w.test(p.srcset || "")) || !p.src || ne(p.src, n) || n.has1x || (n.srcset += ", " + p.src, n.cands.push({
      url: p.src,
      d: 1,
      set: n
    }))) : p.src && p.sets.push({
      srcset: p.src,
      sizes: null
    }), p.curCan = null, p.curSrc = void 0, p.supported = !(o || n && !c.supSrcset || a && !c.supSizes), u && c.supSrcset && !p.supported && (r ? (f.call(e, "data-pfsrcset", r), e.srcset = "") : d.call(e, "data-pfsrcset")), p.supported && !p.srcset && (!p.src && e.src || e.src !== c.makeUrl(p.src)) && (null === p.src ? e.removeAttribute("src") : e.src = p.src), p.parsed = !0;
  }, c.fillImg = function (e, t) {
    var s,
        r = t.reselect || t.reevaluate;
    e[c.ns] || (e[c.ns] = {}), s = e[c.ns], (r || s.evaled !== n) && (s.parsed && !t.reevaluate || c.parseSets(e, e.parentNode, t), s.supported ? s.evaled = n : function (e) {
      var t,
          s = c.getSet(e),
          r = !1;
      "pending" !== s && (r = n, s && (t = c.setRes(s), c.applySetCandidate(t, e))), e[c.ns].evaled = r;
    }(e));
  }, c.setupRun = function () {
    L && !E && T === e.devicePixelRatio || (E = !1, T = e.devicePixelRatio, z = {}, b = {}, c.DPR = T || 1, C.width = Math.max(e.innerWidth || 0, p.clientWidth), C.height = Math.max(e.innerHeight || 0, p.clientHeight), C.vw = C.width / 100, C.vh = C.height / 100, n = [C.height, C.width, T].join("-"), C.em = c.getEmValue(), C.rem = C.em);
  }, c.supPicture ? (re = u, c.fillImg = u) : (X = e.attachEvent ? /d$|^c/ : /d$|^c|^i/, Y = function () {
    var e = t.readyState || "";
    Z = setTimeout(Y, "loading" === e ? 200 : 999), t.body && (c.fillImgs(), (q = q || X.test(e)) && clearTimeout(Z));
  }, Z = setTimeout(Y, t.body ? 9 : 99), ee = p.clientHeight, $(e, "resize", (j = function () {
    E = Math.max(e.innerWidth || 0, p.clientWidth) !== C.width || p.clientHeight !== ee, ee = p.clientHeight, E && c.fillImgs();
  }, V = 99, J = function () {
    var e = new Date() - K;
    e < V ? _ = setTimeout(J, V - e) : (_ = null, j());
  }, function () {
    K = new Date(), _ || (_ = setTimeout(J, V));
  })), $(t, "readystatechange", Y)), c.picturefill = re, c.fillImgs = re, c.teardownRun = u, re._ = c, e.picturefillCFG = {
    pf: c,
    push: function (e) {
      var t = e.shift();
      "function" == typeof c[t] ? c[t].apply(c, e) : (m[t] = e[0], L && c.fillImgs({
        reselect: !0
      }));
    }
  };

  for (; x && x.length;) e.picturefillCFG.push(x.shift());

  e.picturefill = re,  true && "object" == typeof module.exports ? module.exports = re :  true && !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return re;
  }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), c.supPicture || (A["image/webp"] = function (t, s) {
    var r = new e.Image();
    return r.onerror = function () {
      A[t] = !1, re();
    }, r.onload = function () {
      A[t] = 1 === r.width, re();
    }, r.src = s, "pending";
  }("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="));
}(window, document);

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./source/js/_vendor.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_functions */ "./source/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components */ "./source/js/_components.js");



}();
/******/ })()
;
//# sourceMappingURL=main.js.map
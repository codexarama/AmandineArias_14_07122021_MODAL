"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useModal;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

// CUSTOM MODAL HOOK
function useModal() {
  // modal's state
  const [isOpen, setIsOpen] = (0, _react.useState)(false); // close modal when open

  function toggle() {
    setIsOpen(!isOpen);
  } // close modal by pressing escape key when keyboard navigation


  function escToClose(e) {
    if (e.key === 'Escape') {
      toggle();
    }
  }

  return {
    isOpen,
    toggle,
    escToClose
  };
}
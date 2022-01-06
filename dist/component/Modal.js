"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Modal
 *
 * @param   {object}     props
 * @param   {boolean}    props.modal            [display Modal || null]
 * @param   {function}   props.close            [handling Modal close when click]
 * @param   {string}     props.x                [image source]
 * @param   {string}     props.icon             [image source]
 * @param   {boolean}    props.hideIcon         [display item || null]
 * @param   {string}     props.title            [title of message]
 * @param   {boolean}    props.hideTitle        [display item || null]
 * @param   {string}     props.msgL1            [body of message, Line 1]
 * @param   {string}     props.msgL2            [body of message, Line 2]
 * @param   {boolean}    props.hideMsgL2        [display item || null]
 * @param   {string}     props.btn1             [label for btn1]
 * @param   {boolean}    props.disableBtn1      [add || remove 'disabled' attribute on its className]
 * @param   {boolean}    props.hideBtn1         [display item || null]
 * @param   {string}     props.btn2             [label for btn2]
 * @param   {boolean}    props.disableBtn2      [add || remove 'disabled' attribute on its className]
 * @param   {boolean}    props.hideBtn2         [display item || null]
 * @param   {function}   props.redirect         [handling redirect to another page when click]
 * @param   {boolean}    props.hideHeader       [display item || null]
 * @param   {boolean}    props.hideFooter       [display item || null]
 *
 * @returns {Reactnode}  jsx injected in DOM
 */
function Modal(_ref) {
  let {
    modal,
    close,
    x,
    icon,
    hideIcon,
    title,
    hideTitle,
    msgL1,
    msgL2,
    hideMsgL2,
    btn1,
    disableBtn1 = '',
    hideBtn1,
    btn2,
    disableBtn2 = '',
    hideBtn2,
    redirect,
    hideHeader,
    hideFooter
  } = _ref;
  if (disableBtn1) disableBtn1 = 'disabled';
  if (disableBtn2) disableBtn2 = 'disabled';
  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: modal ? /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      autoFocus: true,
      className: "modal",
      role: "main" // close modal when click outside of it
      ,
      onClick: () => {
        close();
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
        className: "modal-container",
        role: "dialog",
        "aria-label": "pop up message",
        id: "modal-component",
        "aria-modal": "true",
        tabIndex: -1,
        "aria-labelledby": "dialogTitle",
        "aria-describedby": "dialogDescription",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "modal-container--close",
          "aria-label": "Close",
          onClick: close,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: x,
            alt: "close icon"
          })
        }), hideHeader ? null : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
            className: "modal-header",
            children: [hideIcon ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              className: "modal-header--icon",
              src: icon,
              alt: icon
            }), hideTitle ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
              tabIndex: "0",
              className: "modal-header--title",
              id: "dialogTitle",
              children: title
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
            className: "modal-header--separator"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
          className: "modal-main--msg",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            tabIndex: "0",
            id: "dialogDescription",
            className: "modal-main--msgL1",
            children: msgL1
          }), hideMsgL2 ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            tabIndex: "0",
            id: "dialogDescription",
            className: "modal-main--msgL2",
            children: msgL2
          })]
        }), hideFooter ? null : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
            className: "modal-footer--separator"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("footer", {
            className: "modal-footer",
            children: [hideBtn1 ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              className: "modal-footer--btn1 ".concat(disableBtn1),
              "aria-label": "Close",
              onClick: close,
              children: btn1
            }), hideBtn2 ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              className: "modal-footer--btn2 ".concat(disableBtn2),
              "aria-label": "Link",
              onClick: redirect,
              children: btn2
            })]
          })]
        })]
      })
    }) : null
  }), document.body);
}
/**
 * Modal PROPTYPES
 */


Modal.propTypes = {
  modal: _propTypes.default.bool.isRequired,
  close: _propTypes.default.func.isRequired,
  x: _propTypes.default.string,
  icon: _propTypes.default.string,
  hideIcon: _propTypes.default.bool,
  title: _propTypes.default.string,
  hideTitle: _propTypes.default.bool,
  msgL1: _propTypes.default.string.isRequired,
  msgL2: _propTypes.default.string,
  hideMsgL2: _propTypes.default.bool,
  btn1: _propTypes.default.string,
  disableBtn1: _propTypes.default.bool,
  hideBtn1: _propTypes.default.bool,
  btn2: _propTypes.default.string,
  redirect: _propTypes.default.func,
  disableBtn2: _propTypes.default.bool,
  hideBtn2: _propTypes.default.bool,
  hideHeader: _propTypes.default.bool,
  hideFooter: _propTypes.default.bool
};
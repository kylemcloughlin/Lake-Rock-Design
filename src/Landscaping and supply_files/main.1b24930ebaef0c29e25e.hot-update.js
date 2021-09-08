webpackHotUpdate("main",{

/***/ "./src/components/orderSummary.jsx":
/*!*****************************************!*\
  !*** ./src/components/orderSummary.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_orderSummary_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/orderSummary.css */ "./src/styles/orderSummary.css");
/* harmony import */ var _styles_orderSummary_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_orderSummary_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/kyle/code/dulder-landscaping/src/components/orderSummary.jsx",
    _s = __webpack_require__.$Refresh$.signature();





function OrderSummary({
  customersItems,
  updateCart
}) {
  _s();

  console.log(customersItems);
  let [orders, SetOrders] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  let [dropOff, SetdropOff] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let [pickUp, SetPickUp] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  console.log('order summary', customersItems);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (customersItems) {
      SetOrders(customersItems);
    }

    console.log('order summary', customersItems);
  }, [customersItems]);

  const handleRemove = e => {
    updateCart(e, 'remove');
  };

  const handlePos = e => {
    console.log(e);
    updateCart(e, 'add');
  };

  const handleNeg = e => {
    console.log(e);
    updateCart(e, 'neg');
  };

  const priceHelper = price => {
    let output = price.toString();
    output = output.split("");
    let one = output[output.length - 1];
    let two = output[output.length - 2];
    output.splice(output.length - 2, 2, ".", `${one}${two}`);
    output = output.join("");
    return output;
  };

  const totalHelper = (price, multi) => {
    if (Number(multi) === 0) {
      return '0';
    } else {
      let newNum = Number(price) * Number(multi);
      console.log(newNum);
      let output = newNum.toString();
      output = output.split("");
      let one = output[output.length - 1];
      let two = output[output.length - 2];
      output.splice(output.length - 2, 2, ".", `${one}${two}`);
      output = output.join("");
      return output;
    }
  };

  const hst = orders => {
    let price = 0;
    orders.forEach(item => {
      let newNum = Number(item.price) * Number(item.value);
      price = price + newNum;
    });
    let output = Number(price) * 0.13;
    output = Math.floor(output);

    if (output === 0) {
      return '0';
    } else {
      output = output.toString();
      output = output.split("");
      let one = output[output.length - 1];
      let two = output[output.length - 2];
      output.splice(output.length - 2, 2, ".", `${one}${two}`);
      output = output.join("");
      return output;
    }
  };

  const totalSum = orders => {
    let output = 0;
    orders.forEach(item => {
      let newNum = Number(item.price) * Number(item.value);
      output = output + newNum;
    });

    if (output === 0) {
      return '0';
    } else {
      output = output.toString();
      output = output.split("");
      let one = output[output.length - 1];
      let two = output[output.length - 2];
      output.splice(output.length - 2, 2, ".", `${one}${two}`);
      output = output.join("");
      return output;
    }
  };

  const totalWithTax = orders => {
    console.log('hahaahahahahah', orders);

    if (orders.value < 0) {
      return 0;
    } else {
      let output = 0;
      orders.forEach(item => {
        let newNum = Number(item.price) * Number(item.value);
        output = output + newNum;
      });
      let hst = Number(output) * 0.13;
      output = Math.floor(output);

      if (output === 0) {
        return '0';
      } else {
        output = output + hst;
        output = output.toString();
        output = output.split("");
        let one = output[output.length - 1];
        let two = output[output.length - 2];
        output.splice(output.length - 2, 2, ".", `${one}${two}`);
        output = output.join("");
        return output;
      }
    }
  };

  const handleCheckBox = e => {
    let name = e.target.name;

    if (name === 'pickup') {
      SetdropOff(false);
      SetPickUp(true);
    } else {
      SetdropOff(true);
      SetPickUp(false);
    }
  };

  if (orders.length === 0) {
    console.log(orders);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }, this);
  }

  console.log(orders.length > 0);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "order-head",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        children: "Order Summary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h5", {
        className: "product",
        children: "Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h5", {
        className: "quant",
        children: "Quantity"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h5", {
        className: "ppu",
        children: "Price Per Unit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h5", {
        className: "ttl",
        children: "Total"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "left",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
        children: orders.map(item => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
            className: "item-checkout",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "name-and-button",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
                children: item.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
                className: "remove-button",
                onClick: handleRemove.bind(this, item),
                children: "x"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 18
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "co-value",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
                children: item.value
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 20
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
                value: "+",
                onClick: handlePos.bind(this, item),
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 17
              }, this), item.value > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
                value: "-",
                onClick: handleNeg.bind(this, item),
                children: "-"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 37
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 107
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 16
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
              className: "co-price",
              children: ["$", priceHelper(item.price)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 14
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
              className: "co-total",
              children: [" $", totalHelper(item.price, item.value)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 14
            }, this)]
          }, item.id, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 14
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "underline"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "os-total-holder",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
          className: "subtotal-os",
          children: ["Subtotal: $", totalSum(orders)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            for: "checkbox",
            children: "Request Shipping Quote"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            name: "checkbox",
            type: "checkbox",
            checked: dropOff,
            onClick: handleCheckBox
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            for: "pickup",
            children: "Pick Up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            name: "pickup",
            type: "checkbox",
            checked: pickUp,
            onClick: handleCheckBox
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
          className: "hst-os",
          children: ["HST: $", hst(orders)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
          className: "total-os",
          children: ["Total: $", totalWithTax(orders), "(CAD)"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 7
  }, this);
}

_s(OrderSummary, "qCadka/LWnldoOzA7PanqqovOe0=");

_c = OrderSummary;
/* harmony default export */ __webpack_exports__["default"] = (OrderSummary);

var _c;

__webpack_require__.$Refresh$.register(_c, "OrderSummary");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.1b24930ebaef0c29e25e.hot-update.js.map
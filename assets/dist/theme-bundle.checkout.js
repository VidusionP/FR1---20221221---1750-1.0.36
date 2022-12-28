/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/checkout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/checkout.js":
/*!*******************************!*\
  !*** ./assets/js/checkout.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


var allureException = ["coco", "rose", "adele", "angelina", "jessica", "selena", "taylor", "julia", "nicole", "gwyneth", "ev7914", "tl6814", "ev5714", "mo5514", "mo7608", "ev5512", "ev5706", "ev6810", "eg6612", "eh16", "mh2206", "sh5206", "ep3608", "mh2216", "maya", "noya"];
var cartItems = null;
var skus = [];
var teamdeskItems = null;
var teamdeskPOItems = null;
var pShippingGroup = {};

/**
 * Get the inventory and po from teamdesk
 */
function cartGetDelivery() {
  if (cartItems) {
    // console.log(cartItems);
    skus = cartItems.lineItems.physicalItems.map(function (i) {
      var sku = i.sku;
      if (sku.indexOf("_N") == sku.length - 2) {
        sku = sku.slice(0, sku.length - 2);
      }
      return encodeURIComponent(sku);
    });
    fetch("//shp-webserver.glitch.me/get-teamdesk", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify({
        table: 'Inventory',
        filter: "Any([SKU],'" + skus.join(",") + "')"
      })
    }).then(function (r) {
      return r.json();
    }).then(function (r) {
      teamdeskItems = r;
      teamdeskPOItems = [];
      cartSetDelivery();
      // fetch(`//shp-webserver.glitch.me/get-teamdesk`, {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json',
      //         'Accept': 'application/json'
      //     },
      //     body: JSON.stringify({
      //         table: 't_763479',
      //         options: `?filter=Any([SKU],'${skus.join(",")}') and [Incoming Quantity]>0 and [Arrival Due Date]>ToDate('1/1/1')&sort=Arrival Due Date//ASC`                        
      //     })
      // })
      // .then(r=>r.json())
      // .then(r=>{
      //     teamdeskPOItems = r;
      //     cartSetDelivery();
      // })
      // .catch(e=>{
      //     console.log(e);
      //     cartSetDelivery();
      // })
    }).catch(function (e) {
      return console.log(e);
    });
  }
}

/**
 * Fill in the delivery information
 */
function cartSetDelivery() {
  if (teamdeskItems) {
    var qtyChecked = [];
    var _loop = function _loop() {
      var _step$value = _step.value,
        index = _step$value[0],
        sku = _step$value[1];
      if (sku.indexOf("_N") == sku.length - 2) {
        sku = sku.slice(0, sku.length - 2);
      }
      var item = teamdeskItems.find(function (s) {
        return encodeURIComponent(s.SKU.toUpperCase()) == sku.toUpperCase();
      });
      if (item) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").find(".cart-delivery").length == 0) {
          var qty = cartItems.lineItems.physicalItems[index].quantity;
          var buff = 0;
          if (qtyChecked[item.SKU]) {
            buff = qtyChecked[item.SKU];
            qtyChecked[item.SKU] += qty;
          } else {
            qtyChecked[item.SKU] = qty;
          }
          var content = "<strong>Heure d'exp\xE9dition pr\xE9vue:</strong><br/>";
          if (item["Total On Hand"] == item["Available Quantity"]) {
            if (Number(item["Quantity USA"]) > 0) {
              if (Number(item["Quantity USA"]) - buff > 0) {
                content += "Dans 3-4 jours: quantit\xE9 <strong>" + Math.min(item["Quantity USA"] - buff, qty) + "</strong><br/>";
                qty = qty - Math.min(item["Quantity USA"] - buff, qty);
                buff = 0;
              } else {
                buff -= Number(item["Quantity USA"]);
              }
            }
            if (Number(item["Quantity Canada"]) > 0 && qty > 0) {
              if (Number(item["Quantity Canada"]) - buff > 0) {
                content += "Dans 5-8 jours: quantit\xE9 <strong>" + Math.min(item["Quantity Canada"] - buff, qty) + "</strong><br/>";
                qty = qty - Math.min(item["Quantity Canada"] - buff, qty);
                buff = 0;
              } else {
                buff -= Number(item["Quantity Canada"]);
              }
            }
          } else {
            if (Number(item["Available Quantity"]) > 0) {
              if (Number(item["Available Quantity"]) - buff > 0) {
                content += "Dans 3-8 jours: quantit\xE9 <strong>" + Math.min(item["Available Quantity"] - buff, qty) + "</strong><br/>";
                qty = qty - Math.min(item["Available Quantity"] - buff, qty);
                buff = 0;
              } else {
                buff -= Number(item["Available Quantity"]);
              }
            }
          }
          // if (item["Virtual Quantity"] && qty>0) {                            
          //     if (item["Lock Status"]!="Locked for processing" && Number(item["Unlocked for sale quantity"]) > 0 && qty>0) {
          //         if (Number(item["Unlocked for sale quantity"])-buff > 0) {                                    
          //             content+=`1 week later: quantity <strong>${Math.min(item["Unlocked for sale quantity"]-buff, qty)}</strong><br/>`;                                    
          //             qty = qty - Math.min(item["Unlocked for sale quantity"]-buff, qty);                                    
          //             buff=0;
          //         } else {
          //             buff-=Number(item["Unlocked for sale quantity"]);
          //         }
          //     }
          //     let virtual={};                        
          //     if (Number(item["Quantity Incoming"])-2 > 0 && qty>0) {
          //         if (Number(item["Quantity Incoming"])-2 -buff > 0) {
          //             let inItems = teamdeskPOItems.filter(p=>p.SKU.toUpperCase() == item["SKU"].toUpperCase());
          //             let i=0, totalP=buff, tempqty = qty;
          //             while (i<inItems.length && tempqty>0) {
          //                 totalP+=Number(inItems[i]["Incoming Quantity"]);
          //                 tempqty = tempqty - Math.min(Number(inItems[i]["Incoming Quantity"]), tempqty);
          //                 i++;                                
          //             }
          //             if (i>0) {
          //                 let inItem = inItems[i-1];                                    
          //                 let mdiff = monthDiff(new Date(), new Date(inItem["Arrival Due Date"]));
          //                 if (mdiff==0) {                                    
          //                     if (allureException.includes(inItem["Part Number"])) {
          //                         mdiff+=3;
          //                     } else {
          //                         mdiff+=1;
          //                     }
          //                 } else if (allureException.includes(inItem["Part Number"])) {
          //                     mdiff+=2;
          //                 }
          //                 virtual[mdiff] = Math.min(totalP, qty);                                        
          //                 qty = tempqty;
          //                 buff=0;
          //             }
          //         } else {
          //             buff = buff - Number(item["Quantity Incoming"]) + 2;
          //         }
          //     }
          //     if (qty>0) {
          //         let m = item["Virtual Location"].slice(0,-1);
          //         if (virtual[m]) {
          //             virtual[m]+=qty;
          //         } else {
          //             virtual[m]=qty;
          //         }
          //     }
          //     // console.log(virtual);
          //     if (Object.keys(virtual).length > 0) {
          //         const options = {year: 'numeric', month: 'long'};
          //         let vkeys = Object.keys(virtual).sort(function(a,b) {
          //             return b-a;
          //         })                
          //         for (let key of vkeys) {
          //             if (Number(key)) {
          //                 let date = new Date();
          //                 date = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
          //                 date.setMonth(date.getMonth()+Number(key));
          //                 content+=`${date.toLocaleDateString('en-US', options)}: quantity <strong>${virtual[key]}</strong><br/>`;
          //             } else {
          //                 content+=`${key.replace("_","-")} months later: quantity <strong>${virtual[key]}</strong><br/>`;
          //             }
          //         }
          //     }
          // } 

          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").length > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").append("<li class=\"product-option cart-delivery\">" + content + "</li>");
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find(".product-body").append("\n                            <ul class=\"product-options\"><li class=\"product-option cart-delivery\">" + content + "</li></ul>\n                        ");
          }
        } else {
          var _qty = cartItems.lineItems.physicalItems[index].quantity;
          if (qtyChecked[item.SKU]) {
            qtyChecked[item.SKU] += _qty;
          } else {
            qtyChecked[item.SKU] = _qty;
          }
        }
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").find(".cart-delivery").length == 0) {
        cmhRushItems = ['CMH', 'CMLACE', 'CMMONO', 'CMLACEPOLY', 'CMSKIN'];
        hairService = ["style#221", "style#222", "style#231", "style#232", "style#233", "style#234", "style#251", "style#331", "style#332", "style#334", "style#335", "style#341", "style#342", "style#343", "style#551", "style#552", "Style #Your_Own", "Online Services Pack"];
        var _content = "";
        if (cmhRushItems.includes(sku.toUpperCase())) {
          _content = "<strong>Heure d'exp\xE9dition pr\xE9vue:</strong><br/>Ivraison garantie dans un d\xE9lai de trois mois<br/>";
        } else if (hairService.includes(sku)) {
          _content = "<strong>Heure d'exp\xE9dition pr\xE9vue:</strong><br/>Dans 2-3 semaines<br/>";
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").append("<div class=\"cart-delivery\">" + _content + "</div>");
      }
    };
    for (var _iterator = _createForOfIteratorHelperLoose(skus.entries()), _step; !(_step = _iterator()).done;) {
      var cmhRushItems, hairService;
      _loop();
    }
  }
}
function checkProducts() {
  var token = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name=store-token]").val();
  // console.log(cartItems);
  if (cartItems) {
    var ids = cartItems.lineItems.physicalItems.map(function (i) {
      return i.productId;
    });
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + token
      },
      body: JSON.stringify({
        query: "\n            query SeveralProductsByID {\n                site {\n                    products(entityIds: [" + ids.join(",") + "]) {\n                        edges {\n                            node {\n                                name\n                                sku\n                                entityId\n                                metafields (namespace: \"shipping.shipperhq\") {\n                                    edges {\n                                        node {\n                                            key\n                                            value\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n            "
      })
    }).then(function (data) {
      return data.json();
    }).then(function (data) {
      if (data.data) {
        for (var _iterator2 = _createForOfIteratorHelperLoose(data.data.site.products.edges), _step2; !(_step2 = _iterator2()).done;) {
          var product = _step2.value;
          var shippingGroup = null;
          if (product.node.metafields.edges.length > 0) {
            for (var _iterator4 = _createForOfIteratorHelperLoose(product.node.metafields.edges), _step4; !(_step4 = _iterator4()).done;) {
              var group = _step4.value;
              if (group.node.key == "shipping-groups") {
                shippingGroup = group.node.value;
                break;
              }
            }
          }
          pShippingGroup[product.node.entityId] = shippingGroup;
        }
        var totalhp = 0;
        for (var _iterator3 = _createForOfIteratorHelperLoose(cartItems.lineItems.physicalItems), _step3; !(_step3 = _iterator3()).done;) {
          var item = _step3.value;
          if (pShippingGroup[item.productId]) {
            if (pShippingGroup[item.productId].toLowerCase().includes("hairpiece")) {
              totalhp += item.quantity;
            }
          }
        }
        setShipment(cartItems.baseAmount > 500 || totalhp > 2);
      } else {
        setShipment();
      }
    }).catch(function (error) {
      setShipment();
    });
  }
}
/**
 * Check and set shipment
 * 
 * @param {boolean} isLarger True if having more than 2 pieces of hairpieces or subtotal larger than 500
 */
function setShipment(isLarger) {
  if (isLarger === void 0) {
    isLarger = false;
  }
  var group = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name=customer-group]").val();
  switch (group) {
    case "Newcomer":
      if (isLarger) {
        swal.fire({
          text: "En tant que nouveau client, certaines restrictions sont imposées à votre compte pendant que vous placez les trois premières commandes. Une fois que vous aurez surpassé les trois commandes, ces restrictions sur le total de votre panier seront supprimées. Si vous souhaitez régler votre facture par carte de crédit, veuillez réduire le total de votre panier au montant maximum de 500,00 euros ou bien réduire la quantité de compléments capillaires dans votre panier jusqu'au maximum de deux",
          icon: 'info'
        });
        setInterval(function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(".checkout-step--payment").find(".checkout-view-content").length > 0 && jquery__WEBPACK_IMPORTED_MODULE_0___default()(".checkout-step--payment").find(".checkout-view-content").find("li.form-checklist-item").filter(function () {
            return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".paymentProviderHeader-name").eq(0).text().toLowerCase().includes("credit card") || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("#radio-applepay").length > 0 || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("#radio-googlepaystripeupe").length > 0;
          }).css("display", "none");
        }, 500);
      }
      break;
    case 'Blocklist':
      setInterval(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".checkout-step--payment").find(".checkout-view-content").length > 0 && jquery__WEBPACK_IMPORTED_MODULE_0___default()(".checkout-step--payment").find(".checkout-view-content").find("li.form-checklist-item").filter(function () {
          return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".paymentProviderHeader-name").eq(0).text().toLowerCase().includes("credit card") || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("#radio-applepay").length > 0 || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("#radio-googlepaystripeupe").length > 0;
        }).css("display", "none");
      }, 500);
      break;
  }
}
window.addEventListener("DOMContentLoaded", function () {
  var _this = this;
  _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.getCart({
    includeOptions: true
  }, function (err, myCart) {
    if (err) {
      return;
    }
    if (myCart) {
      cartItems = {
        id: myCart.id,
        baseAmount: myCart.baseAmount,
        lineItems: myCart.lineItems
      };
      var group = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[name=customer-group]").val();
      if (group) {
        if (group == "Blocklist") {
          setShipment();
        } else {
          checkProducts();
        }
      }
      var checkInit = setInterval(function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#cart-edit-link").length > 0 && ".cart-section".length > 0) {
          _this.clearInterval(checkInit);
          cartGetDelivery();
          var baction = setInterval(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".cart-actions button").length > 0) {
              clearInterval(baction);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(".cart-actions button").on("click", function () {
                setTimeout(function () {
                  cartSetDelivery();
                }, 500);
              });
            }
          }, 500);
        }
      }, 500);
    }
  });
});

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api.js":
/*!************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/request */ "./node_modules/@bigcommerce/stencil-utils/src/lib/request.js");
/* harmony import */ var _api_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/countries */ "./node_modules/@bigcommerce/stencil-utils/src/api/countries.js");
/* harmony import */ var _api_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/product */ "./node_modules/@bigcommerce/stencil-utils/src/api/product.js");
/* harmony import */ var _api_product_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/product-attributes */ "./node_modules/@bigcommerce/stencil-utils/src/api/product-attributes.js");
/* harmony import */ var _api_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/search */ "./node_modules/@bigcommerce/stencil-utils/src/api/search.js");
/* harmony import */ var _api_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/cart */ "./node_modules/@bigcommerce/stencil-utils/src/api/cart.js");






var internals = {};

/**
 * Convenience function to request a page via ajax
 *
 * @param url
 * @param options
 * @param callback
 */
internals.getPage = function (url, options, callback) {
  Object(_lib_request__WEBPACK_IMPORTED_MODULE_0__["default"])(url, {
    method: 'GET',
    requestOptions: options
  }, callback);
};
/* harmony default export */ __webpack_exports__["default"] = ({
  country: new _api_countries__WEBPACK_IMPORTED_MODULE_1__["default"](),
  productAttributes: new _api_product_attributes__WEBPACK_IMPORTED_MODULE_3__["default"](),
  product: new _api_product__WEBPACK_IMPORTED_MODULE_2__["default"](),
  search: new _api_search__WEBPACK_IMPORTED_MODULE_4__["default"](),
  cart: new _api_cart__WEBPACK_IMPORTED_MODULE_5__["default"](),
  getPage: internals.getPage
});

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/base.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/request */ "./node_modules/@bigcommerce/stencil-utils/src/lib/request.js");

var _default = /*#__PURE__*/function () {
  /**
   * @Constructor
   */
  function _default(version) {
    this.remoteVersion = version || 'v1';
    this.remoteBaseEndpoint = '/remote/';
  }

  /**
   *
   * @param {String} url
   * @param {String} method ['GET', 'POST', 'PUT', 'DELETE']
   * @param {Object} options
   * @param {Boolean} remote
   * @param {Function} callback
   */
  var _proto = _default.prototype;
  _proto.makeRequest = function makeRequest(url, method, options, remote, callback) {
    Object(_lib_request__WEBPACK_IMPORTED_MODULE_0__["default"])(url, {
      method: method,
      remote: remote,
      requestOptions: options
    }, callback);
  }

  /**
   *
   * @param {String} endpoint
   * @param {String} method ['GET', 'POST', 'PUT', 'DELETE']
   * @param {Object} options
   * @param {Function} callback
   */;
  _proto.remoteRequest = function remoteRequest(endpoint, method, options, callback) {
    var remoteUrl = this.remoteBaseEndpoint + this.remoteVersion + endpoint;
    this.makeRequest(remoteUrl, method, options, true, callback);
  };
  return _default;
}();


/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/cart.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/cart.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);
  function _default() {
    return _Base.apply(this, arguments) || this;
  }
  var _proto = _default.prototype;
  /**
   * Get a collection of Carts. For now, this will only return an array of a single cart as multiple carts per session
   * are not currently supported.
   *
   * @param options
   * @param {Function} callback
   */
  _proto.getCarts = function getCarts(options, callback) {
    if (options === void 0) {
      options = {};
    }
    var url = '/api/storefront/carts';
    if (options.includeOptions) {
      url = this.includeOptions(url);
    }
    this.makeRequest(url, 'GET', options, true, function (err, response) {
      callback(err, response);
    });
  }

  /**
   * Get the current Cart's details, either with or without Product Option selections.
   * Can also be used to get a particular cart provided a cartId in the options.
   *
   * @param options
   * @param {Function} callback
   */;
  _proto.getCart = function getCart(options, callback) {
    if (options === void 0) {
      options = {};
    }
    /* If no cart ID is provided, get the collection of carts and return the first one */
    if (!options.cartId) {
      return this.getCarts(options, function (err, response) {
        return callback(err, response[0]);
      });
    }
    var url = "/api/storefront/carts/" + options.cartId;
    if (options.includeOptions) {
      url = this.includeOptions(url);
    }
    this.makeRequest(url, 'GET', options, true, function (err, response) {
      callback(err, response);
    });
  }

  /**
   * Add the parameters to a URL needed to get product option details on cart line items
   * @param url
   */;
  _proto.includeOptions = function includeOptions(url) {
    return url + "?include=lineItems.physicalItems.options,lineItems.digitalItems.options";
  }

  /**
   * Get a sum of the cart line item quantities
   *
   * @param options
   * @param {Function} callback
   */;
  _proto.getCartQuantity = function getCartQuantity(options, callback) {
    if (options === void 0) {
      options = {};
    }
    this.getCart(options, function (err, response) {
      if (err) {
        return callback(err);
      }
      var quantity = 0;
      if (response) {
        var cart = response;
        var lineItemQuantities = [cart.lineItems.physicalItems, cart.lineItems.digitalItems, cart.lineItems.customItems].reduce(function (a, b) {
          return a.concat(b);
        }).filter(function (lineItem) {
          return !lineItem.parentId;
        }).map(function (lineItem) {
          return lineItem.quantity;
        }).reduce(function (accumulator, lineItemQuantity) {
          return accumulator + lineItemQuantity;
        }, 0);
        var giftCertificateQuantity = cart.lineItems.giftCertificates.length;
        quantity = lineItemQuantities + giftCertificateQuantity;
      }
      callback(null, quantity);
    });
  }

  /**
   * Add item to cart with options (variants)
   *
   * @param {FormData} formData
   * @param {Function} callback
   */;
  _proto.itemAdd = function itemAdd(formData, callback) {
    this.remoteRequest('/cart/add', 'POST', {
      formData: formData
    }, function (err, response) {
      var emitData = {
        err: err,
        response: response
      };
      _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart-item-add-remote', emitData);
      callback(err, response);
    });
  }

  /**
   * Update cart item quantity
   *
   * @param {String|Object} itemId
   * @param {Number|Function} qty
   * @param {Function|null} callback
   */;
  _proto.itemUpdate = function itemUpdate(itemId, qty, callback) {
    var callbackArg = callback;
    var items;
    if (Array.isArray(itemId) && typeof qty === 'function') {
      callbackArg = qty;
      items = itemId;
    } else {
      items = [{
        id: itemId,
        quantity: qty
      }];
    }
    this.update(items, function (err, response) {
      var emitData = {
        items: items,
        err: err,
        response: response
      };
      _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart-item-update-remote', emitData);
      callbackArg(err, response);
    });
  }

  /**
   * Remove cart items
   *
   * Calls the internal update function with quantity: 0
   *
   * @param {String} itemId
   * @param {Function} callback
   */;
  _proto.itemRemove = function itemRemove(itemId, callback) {
    var items = [{
      id: itemId,
      quantity: 0
    }];
    this.update(items, function (err, response) {
      var emitData = {
        items: items,
        err: err,
        response: response
      };
      _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart-item-remove-remote', emitData);
      callback(err, response);
    });
  }

  /**
   * Get giftwrapping options
   * @param {String} itemId
   * @param {Object|Function} options
   * @param {Function|null} callback
   */;
  _proto.getItemGiftWrappingOptions = function getItemGiftWrappingOptions(itemId, options, callback) {
    var opts = options || {};
    var callbackArg = callback;
    if (typeof opts === 'function') {
      callbackArg = opts;
      opts = {};
    }
    this.remoteRequest("/gift-wrapping/" + itemId, 'GET', opts, callbackArg);
  }

  /**
   * Submit giftwrapping options
   *
   * @param {String} itemId
   * @param {Function} callback
   */;
  _proto.submitItemGiftWrappingOption = function submitItemGiftWrappingOption(itemId, params, callback) {
    this.remoteRequest("/gift-wrapping/" + itemId, 'POST', {
      params: params
    }, callback);
  }

  /**
   * Update cart items
   *
   * @param {Array} items
   * @param {Function} callback
   */;
  _proto.update = function update(items, callback) {
    var payload = {
      items: items
    };
    this.remoteRequest('/cart/update', 'POST', {
      params: payload
    }, callback);
  }

  /**
   * Get cart content
   *
   * @param {Object} options
   * @param {Function} callback
   */;
  _proto.getContent = function getContent(options, callback) {
    var opts = options || {};
    var callbackArg = callback;
    if (typeof opts === 'function') {
      callbackArg = opts;
      opts = {};
    }
    this.makeRequest('/cart.php', 'GET', opts, false, callbackArg);
  }

  /**
   * Get cart shipping quote
   *
   * @param {Object} params
   * @param {String|Array|Object} renderWith
   * @param {Function} callback
   */;
  _proto.getShippingQuotes = function getShippingQuotes(params, renderWith, callback) {
    var options = {
      params: params
    };
    var callbackArg = callback;
    var renderWithArg = renderWith;
    if (typeof callbackArg !== 'function') {
      callbackArg = renderWithArg;
      renderWithArg = null;
    }
    if (renderWithArg) {
      options.template = renderWithArg;
    }
    this.remoteRequest('/shipping-quote', 'GET', options, callbackArg);
  }

  /**
   * Submit shipping quote based on quoteId
   *
   * @param {Number} quoteId
   * @param {Function} callback
   */;
  _proto.submitShippingQuote = function submitShippingQuote(quoteId, callback) {
    var options = {
      params: {
        shipping_method: quoteId
      }
    };
    this.remoteRequest('/shipping-quote', 'POST', options, callback);
  }

  /**
   * Apply a coupon code or gift certificate to the cart
   *
   * @param {String} code
   * @param {Function} callback
   */;
  _proto.applyCode = function applyCode(code, callback) {
    var options = {
      params: {
        code: code
      }
    };
    this.remoteRequest('/apply-code', 'POST', options, callback);
  }

  /**
   * Apply a coupon code or gift certificate to the cart
   *
   * @param {Number} code
   * @param {Function} callback
   */;
  _proto.applyGiftCertificate = function applyGiftCertificate(code, callback) {
    var options = {
      params: {
        code: code
      }
    };
    this.remoteRequest('/gift-certificates', 'POST', options, callback);
  };
  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/countries.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/countries.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);
  /**
   * @Constructor
   */
  function _default(version) {
    var _this;
    // call parent
    _this = _Base.call(this, version) || this;

    // set up class variables
    _this.endpoint = '/country-states/';
    return _this;
  }

  /**
   *
   * Get country data by id wrapper
   *
   * @param {Number} id
   * @param {Function} callback
   */
  var _proto = _default.prototype;
  _proto.getById = function getById(id, callback) {
    var url = this.endpoint + id;
    this.remoteRequest(url, 'GET', {}, callback);
  }

  /**
   * Get country data by country name
   * @param name
   * @param callback
   */;
  _proto.getByName = function getByName(name, callback) {
    var url = this.endpoint + name;
    this.remoteRequest(url, 'GET', {}, callback);
  };
  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/product-attributes.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/product-attributes.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/utils */ "./node_modules/@bigcommerce/stencil-utils/src/lib/utils.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);
  /**
   * @Constructor
   */
  function _default(version) {
    var _this;
    // call parent
    _this = _Base.call(this, version) || this;

    // set up class variables
    _this.endpoint = '/product-attributes/';
    _this.inCartEndpoint = '/configure-options/';
    return _this;
  }

  /**
   * @param {Number} productId
   * @param {Object} params
   * @param callback
   */
  var _proto = _default.prototype;
  _proto.optionChange = function optionChange(productId, params, template, callback) {
    if (template === void 0) {
      template = null;
    }
    var templateArg = template;
    var callbackArg = callback;
    if (typeof templateArg === 'function') {
      callbackArg = templateArg;
      templateArg = null;
    }
    var normalizedQs = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["normalizeQueryStringParams"])(params);
    this.remoteRequest(this.endpoint + productId, 'POST', {
      params: normalizedQs,
      template: templateArg
    }, function (err, response) {
      var emitData = {
        err: err,
        response: response
      };
      _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].emit('product-options-change-remote', emitData);
      callbackArg(err, response);
    });
  }

  /**
   * @param {Number} itemId
   * @param {Object} params
   * @param callback
   */;
  _proto.configureInCart = function configureInCart(itemId, params, callback) {
    this.remoteRequest(this.inCartEndpoint + itemId, 'GET', params, function (err, response) {
      callback(err, response);
    });
  };
  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/product.js":
/*!********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/product.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);
  /**
   * @Constructor
   */
  function _default(version) {
    var _this;
    // call parent
    _this = _Base.call(this, version) || this;

    // set up class variables
    _this.endpoint = '/products.php?productId=';
    return _this;
  }

  /**
   *
   * @param {Number} productId
   * @param {Object} params
   * @param {Function} callback
   */
  var _proto = _default.prototype;
  _proto.getById = function getById(productId, params, callback) {
    var url = this.endpoint + productId;
    var paramsArg = params;
    var callbackArg = callback;
    if (typeof paramsArg === 'function') {
      callbackArg = paramsArg;
      paramsArg = {};
    }
    this.makeRequest(url, 'GET', paramsArg, false, callbackArg);
  };
  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/search.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/search.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);
  /**
   * @Constructor
   */
  function _default(version) {
    var _this;
    // call parent
    _this = _Base.call(this, version) || this;

    // set up class variables
    _this.endpoint = '/search.php?search_query=';
    return _this;
  }

  /**
   * Get search results
   * @param {String} query
   * @param {Object} params
   * @param {Function} callback
   */
  var _proto = _default.prototype;
  _proto.search = function search(query, params, callback) {
    var url = this.endpoint + encodeURIComponent(query);
    var paramsArg = params;
    var callbackArg = callback;
    if (typeof paramsArg === 'function') {
      callbackArg = paramsArg;
      paramsArg = {};
    }
    _hooks__WEBPACK_IMPORTED_MODULE_0__["default"].emit('search-quick-remote', query);
    this.makeRequest(url, 'GET', paramsArg, false, callbackArg);
  };
  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js":
/*!**************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks/cart */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/cart.js");
/* harmony import */ var _hooks_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/cookie */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/cookie.js");
/* harmony import */ var _hooks_currency_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/currency-selector */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/currency-selector.js");
/* harmony import */ var _hooks_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/product */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/product.js");
/* harmony import */ var _hooks_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/search */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/search.js");
/* harmony import */ var _hooks_faceted_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/faceted-search */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/faceted-search.js");
/* harmony import */ var _hooks_sort_by__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/sort-by */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/sort-by.js");







var internals = {};
internals.classes = {
  cart: new _hooks_cart__WEBPACK_IMPORTED_MODULE_0__["default"](),
  cookie: new _hooks_cookie__WEBPACK_IMPORTED_MODULE_1__["default"](),
  currencySelector: new _hooks_currency_selector__WEBPACK_IMPORTED_MODULE_2__["default"](),
  product: new _hooks_product__WEBPACK_IMPORTED_MODULE_3__["default"](),
  search: new _hooks_search__WEBPACK_IMPORTED_MODULE_4__["default"](),
  facetedSearch: new _hooks_faceted_search__WEBPACK_IMPORTED_MODULE_5__["default"](),
  sortBy: new _hooks_sort_by__WEBPACK_IMPORTED_MODULE_6__["default"]()
};
internals.parseHooks = function (hookName) {
  var hookType = hookName.split('-')[0];
  if (internals.classes[hookType] === undefined) {
    throw new Error(hookType + " is not a valid hookType");
  }
  return internals.classes[hookType];
};
var Hooks = /*#__PURE__*/function () {
  function Hooks() {}
  var _proto = Hooks.prototype;
  _proto.on = function on(hookName, callback) {
    var hook = internals.parseHooks(hookName);
    return hook.on(hookName, callback);
  };
  _proto.off = function off(hookName, callback) {
    var hook = internals.parseHooks(hookName);
    return hook.off(hookName, callback);
  };
  _proto.emit = function emit(hookName) {
    var hook = internals.parseHooks(hookName);
    return hook.emit.apply(hook, arguments);
  };
  return Hooks;
}();
/* harmony default export */ __webpack_exports__["default"] = (new Hooks());

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var eventemitter2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter2 */ "./node_modules/eventemitter2/lib/eventemitter2.js");
/* harmony import */ var eventemitter2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var _default = /*#__PURE__*/function (_EventEmitter) {
  _inheritsLoose(_default, _EventEmitter);
  function _default() {
    var _this;
    _this = _EventEmitter.call(this) || this;
    _this.$body = jquery__WEBPACK_IMPORTED_MODULE_1___default()('body');
    return _this;
  }
  return _default;
}(eventemitter2__WEBPACK_IMPORTED_MODULE_0___default.a);


/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/cart.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/cart.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);
  /**
   * @Constructor
   */
  function _default() {
    var _this;
    // call parent
    _this = _BaseHooks.call(this) || this;
    _this.itemAdd();
    return _this;
  }
  var _proto = _default.prototype;
  _proto.itemAdd = function itemAdd() {
    var _this2 = this;
    this.$body.on('submit', '[data-cart-item-add]', function (event) {
      _this2.emit('cart-item-add', event, event.target);
    });
  };
  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/cookie.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/cookie.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);
  function _default() {
    return _BaseHooks.apply(this, arguments) || this;
  }
  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/currency-selector.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/currency-selector.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);
  /**
   * @Constructor
   */
  function _default() {
    var _this;
    // call parent
    _this = _BaseHooks.call(this) || this;
    _this.currencySelector();
    return _this;
  }
  var _proto = _default.prototype;
  _proto.currencySelector = function currencySelector() {
    var _this2 = this;
    this.$body.on('input', '[data-currency-selector-toggle]', function (event) {
      _this2.emit('currencySelector-toggle', event);
    });
  };
  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/faceted-search.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/faceted-search.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);
  /**
   * @Constructor
   */
  function _default() {
    var _this;
    // call parent
    _this = _BaseHooks.call(this) || this;
    _this.searchEvents();
    return _this;
  }
  var _proto = _default.prototype;
  _proto.searchEvents = function searchEvents() {
    var _this2 = this;
    this.$body.on('click', '[data-faceted-search-facet]', function (event) {
      _this2.emit('facetedSearch-facet-clicked', event);
    });
    this.$body.on('submit', '[data-faceted-search-range]', function (event) {
      _this2.emit('facetedSearch-range-submitted', event);
    });
  };
  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/product.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/product.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);
  /**
   * @Constructor
   */
  function _default() {
    var _this;
    // call parent
    _this = _BaseHooks.call(this) || this;
    _this.optionsChange();
    return _this;
  }
  var _proto = _default.prototype;
  _proto.optionsChange = function optionsChange() {
    var _this2 = this;
    this.$body.on('change', '[data-product-option-change]', function (event) {
      _this2.emit('product-option-change', event, event.target);
    });
  };
  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/search.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/search.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);
  /**
   * @Constructor
   */
  function _default() {
    var _this;
    // call parent
    _this = _BaseHooks.call(this) || this;
    _this.quickSearch();
    return _this;
  }
  var _proto = _default.prototype;
  _proto.quickSearch = function quickSearch() {
    var _this2 = this;
    this.$body.on('input', '[data-search-quick]', function (event) {
      _this2.emit('search-quick', event);
    });
  };
  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/sort-by.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/sort-by.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);
  /**
   * @Constructor
   */
  function _default() {
    var _this;
    // call parent
    _this = _BaseHooks.call(this) || this;
    _this.sortByEvents();
    return _this;
  }
  var _proto = _default.prototype;
  _proto.sortByEvents = function sortByEvents() {
    var _this2 = this;
    this.$body.on('submit', '[data-sort-by]', function (event) {
      _this2.emit('sortBy-submitted', event);
    });
    this.$body.on('change', '[data-sort-by] select', function (event) {
      _this2.emit('sortBy-select-changed', event);
      if (!event.isDefaultPrevented()) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.currentTarget).closest('form').trigger('submit');
      }
    });
  };
  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/lib/request.js":
/*!********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/lib/request.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Checks whether or not the current method passed in is valid
 *
 * @param {string} method
 * @returns {boolean}
 */
function isValidHTTPMethod(method) {
  var allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];
  return allowedMethods.indexOf(method) !== -1;
}
/* harmony default export */ __webpack_exports__["default"] = (function (relativeUrl, opts, callback) {
  var defaultOptions = {
    method: 'GET',
    remote: false,
    requestOptions: {
      baseUrl: null,
      formData: null,
      params: {},
      config: {},
      template: []
    }
  };
  var options = Object.assign({}, defaultOptions, opts);
  var data = options.requestOptions.formData ? options.requestOptions.formData : options.requestOptions.params;
  var headers = {
    'stencil-config': options.requestOptions.config ? JSON.stringify(options.requestOptions.config) : '{}',
    'stencil-options': '{}',
    'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
  };
  var requestedTemplate = options.requestOptions.template;
  var usingTemplates = false;
  var usingSections = false;
  var templates = [];

  // Not a valid method
  if (!isValidHTTPMethod(options.method)) {
    return callback(new Error('Not a valid HTTP method'));
  }
  if (typeof requestedTemplate === 'object' && !Array.isArray(requestedTemplate)) {
    var template;
    usingSections = true;
    templates = [];
    for (template in requestedTemplate) {
      if (requestedTemplate.hasOwnProperty(template)) {
        templates.push(requestedTemplate[template]);
      }
    }
  } else if (typeof requestedTemplate === 'string') {
    templates = [requestedTemplate];
  } else if (Array.isArray(requestedTemplate) && requestedTemplate.length > 0) {
    templates = requestedTemplate;
  }
  if (templates.length > 0) {
    usingTemplates = true;
    headers['stencil-options'] = JSON.stringify({
      render_with: templates.join(',')
    });
  }
  var url = relativeUrl;
  if (options.requestOptions.baseUrl) {
    url = "" + options.requestOptions.baseUrl + url;
  }

  // make ajax request using jquery
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
    method: options.method,
    url: url,
    xhrFields: {
      withCredentials: true
    },
    contentType: options.requestOptions.formData ? false : 'application/x-www-form-urlencoded; charset=UTF-8',
    processData: !options.requestOptions.formData,
    success: function success(response) {
      var ret;
      var content = options.remote ? response.content : response;
      if (usingTemplates) {
        // Remove the `components` prefix from the response if it's an object
        if (typeof content === 'object') {
          var keys = Object.keys(content);
          var key;
          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            key = _keys[_i];
            var cleanKey = key.replace(/^components\//, '');
            content[cleanKey] = content[key];
            delete content[key];
          }
        }

        // If using "sections", morph the content into the arbitrary keys => content object.
        if (usingSections) {
          var templateVariableNames = Object.keys(requestedTemplate);
          var templateVariable;
          for (var _i2 = 0, _templateVariableName = templateVariableNames; _i2 < _templateVariableName.length; _i2++) {
            templateVariable = _templateVariableName[_i2];
            content[templateVariable] = content[requestedTemplate[templateVariable]];
            delete content[requestedTemplate[templateVariable]];
          }
        }
        if (options.remote) {
          ret = response;
          ret.content = content;
        } else {
          ret = content;
        }
      } else {
        ret = response;
      }
      callback(null, ret);
    },
    error: function error(XHR, textStatus, err) {
      callback(err);
    },
    data: data,
    headers: headers
  });
});

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/lib/utils.js":
/*!******************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/lib/utils.js ***!
  \******************************************************************/
/*! exports provided: normalizeQueryStringParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeQueryStringParams", function() { return normalizeQueryStringParams; });
// Utilities
var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

/**
 * Normalize querystring params. Remove empty array values
 * @param {string} params
 * @returns {string} Normalized querystring
 */
function normalizeQueryStringParams(params) {
  var qsParams = queryString.parse(params);
  var isValidParam = function isValidParam(value) {
    return value !== '' && value !== undefined;
  };
  var optionsCollection = Object.keys(qsParams).reduce(function (normalized, key) {
    var param;
    if (qsParams[key] instanceof Array) {
      var _param;
      var filtered = qsParams[key].filter(isValidParam);
      param = (_param = {}, _param[key] = filtered, _param);
    } else if (isValidParam(qsParams[key])) {
      var _param2;
      param = (_param2 = {}, _param2[key] = qsParams[key], _param2);
    }
    return Object.assign({}, normalized, param);
  }, {});
  var paramString = queryString.stringify(optionsCollection);
  return paramString;
}

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/main.js":
/*!*************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/main.js ***!
  \*************************************************************/
/*! exports provided: hooks, api, tools, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks */ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hooks", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./node_modules/@bigcommerce/stencil-utils/src/api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "api", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools */ "./node_modules/@bigcommerce/stencil-utils/src/tools.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tools", function() { return _tools__WEBPACK_IMPORTED_MODULE_2__["default"]; });




var StencilUtils = {
  hooks: _hooks__WEBPACK_IMPORTED_MODULE_0__["default"],
  api: _api__WEBPACK_IMPORTED_MODULE_1__["default"],
  tools: _tools__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (StencilUtils);

/* global define */
(function (root) {
  if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") && root) {
    // Ignores below for https://github.com/eslint/eslint/issues/5150
    define(function () {
      // eslint-disable-line prefer-arrow-callback
      root.stencilUtils = StencilUtils; // eslint-disable-line no-param-reassign
    });
  } else if ( true && module.exports) {
    module.exports = StencilUtils;
  } else {
    window.stencilUtils = StencilUtils;
  }
})(undefined);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/tools.js":
/*!**************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/tools.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/image */ "./node_modules/@bigcommerce/stencil-utils/src/tools/image.js");
/* harmony import */ var _tools_imageSrcset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/imageSrcset */ "./node_modules/@bigcommerce/stencil-utils/src/tools/imageSrcset.js");
/* harmony import */ var _tools_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/storage */ "./node_modules/@bigcommerce/stencil-utils/src/tools/storage.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  image: new _tools_image__WEBPACK_IMPORTED_MODULE_0__["default"](),
  imageSrcset: new _tools_imageSrcset__WEBPACK_IMPORTED_MODULE_1__["default"](),
  storage: new _tools_storage__WEBPACK_IMPORTED_MODULE_2__["default"]()
});

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/tools/image.js":
/*!********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/tools/image.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
var _default = /*#__PURE__*/function () {
  function _default() {}
  var _proto = _default.prototype;
  _proto.getSrc = function getSrc(path, dimensions) {
    // Regex to test size string is of the form 123x123 or 100w
    var sizeRegex = /(^\d+w$)|(^(\d+?)x(\d+?)$)/g;
    var size;
    if (typeof dimensions === 'object') {
      var width = dimensions.width || 100;
      var height = dimensions.height || 100;
      size = width + "x" + height;
    } else if (typeof dimensions === 'string' && sizeRegex.test(dimensions)) {
      // If dimensions is a string and match the NNNxNNN or NNNw format
      size = dimensions;
    } else {
      // Use the original image size
      size = 'original';
    }
    return path.replace('{:size}', size);
  };
  return _default;
}();


/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/tools/imageSrcset.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/tools/imageSrcset.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
var _default = /*#__PURE__*/function () {
  function _default() {}
  var _proto = _default.prototype;
  _proto.getSrcset = function getSrcset(url, sizes) {
    // Regex to test size string is of the form 123x123 or 100w
    var sizeRegex = /(^\d+w$)|(^(\d+?)x(\d+?)$)/;
    // Regex to test to that srcset descriptor is of the form 1x 1.5x 2x OR 123w
    var descriptorRegex = /(^\d+w$)|(^([0-9](\.[0-9]+)?)x)$/;
    var srcsets = {};
    if (!sizes) {
      // Use default srcsets if none are provided
      srcsets = {
        '80w': '80w',
        '160w': '160w',
        '320w': '320w',
        '640w': '640w',
        '960w': '960w',
        '1280w': '1280w',
        '1920w': '1920w',
        '2560w': '2560w'
      };
    } else if (sizes === Object(sizes) && !Object.keys(sizes).some(function (descriptor) {
      return !(descriptorRegex.test(descriptor) && sizeRegex.test(sizes[descriptor]));
    })) {
      // If object consists of valid srcsets, use it instead
      srcsets = sizes;
      // If there's only one argument, return a `src` only (also works for `srcset`)
      if (Object.keys(srcsets).length === 1) {
        return url.replace('{:size}', srcsets[Object.keys(srcsets)[0]]);
      }
    } else {
      throw new Error('Invalid srcset descriptor or size');
    }

    // eslint-disable-next-line new-cap
    return Object.keys(srcsets).map(function (descriptor) {
      return [url.replace('{:size}', srcsets[descriptor]), descriptor].join(' ');
    }).join(', ');
  };
  return _default;
}();


/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/tools/storage.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/tools/storage.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
var _default = /*#__PURE__*/function () {
  function _default() {}
  var _proto = _default.prototype;
  /**
   * Check if a storage type (like localStorage or sessionStorage) is available for use
   * https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability
   * @param type
   * @returns boolean
   */
  _proto.storageAvailable = function storageAvailable(type) {
    var storage = window[type];
    try {
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0;
    }
  };
  _proto.localStorageAvailable = function localStorageAvailable() {
    return this.storageAvailable('localStorage');
  };
  return _default;
}();


/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp('(' + token + ')|([^%]+?)', 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return [decodeURIComponent(components.join(''))];
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher) || [];

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher) || [];
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/eventemitter2/lib/eventemitter2.js":
/*!*********************************************************!*\
  !*** ./node_modules/eventemitter2/lib/eventemitter2.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
;!function(undefined) {

  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };
  var defaultMaxListeners = 10;

  function init() {
    this._events = {};
    if (this._conf) {
      configure.call(this, this._conf);
    }
  }

  function configure(conf) {
    if (conf) {

      this._conf = conf;

      conf.delimiter && (this.delimiter = conf.delimiter);
      conf.maxListeners && (this._events.maxListeners = conf.maxListeners);
      conf.wildcard && (this.wildcard = conf.wildcard);
      conf.newListener && (this.newListener = conf.newListener);

      if (this.wildcard) {
        this.listenerTree = {};
      }
    }
  }

  function EventEmitter(conf) {
    this._events = {};
    this.newListener = false;
    configure.call(this, conf);
  }

  //
  // Attention, function return type now is array, always !
  // It has zero elements if no any matches found and one or more
  // elements (leafs) if there are matches
  //
  function searchListenerTree(handlers, type, tree, i) {
    if (!tree) {
      return [];
    }
    var listeners=[], leaf, len, branch, xTree, xxTree, isolatedBranch, endReached,
        typeLength = type.length, currentType = type[i], nextType = type[i+1];
    if (i === typeLength && tree._listeners) {
      //
      // If at the end of the event(s) list and the tree has listeners
      // invoke those listeners.
      //
      if (typeof tree._listeners === 'function') {
        handlers && handlers.push(tree._listeners);
        return [tree];
      } else {
        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
          handlers && handlers.push(tree._listeners[leaf]);
        }
        return [tree];
      }
    }

    if ((currentType === '*' || currentType === '**') || tree[currentType]) {
      //
      // If the event emitted is '*' at this part
      // or there is a concrete match at this patch
      //
      if (currentType === '*') {
        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+1));
          }
        }
        return listeners;
      } else if(currentType === '**') {
        endReached = (i+1 === typeLength || (i+2 === typeLength && nextType === '*'));
        if(endReached && tree._listeners) {
          // The next element has a _listeners, add it to the handlers.
          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
        }

        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            if(branch === '*' || branch === '**') {
              if(tree[branch]._listeners && !endReached) {
                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
              }
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            } else if(branch === nextType) {
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+2));
            } else {
              // No match on this one, shift into the tree but not in the type array.
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            }
          }
        }
        return listeners;
      }

      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i+1));
    }

    xTree = tree['*'];
    if (xTree) {
      //
      // If the listener tree will allow any match for this part,
      // then recursively explore all branches of the tree
      //
      searchListenerTree(handlers, type, xTree, i+1);
    }

    xxTree = tree['**'];
    if(xxTree) {
      if(i < typeLength) {
        if(xxTree._listeners) {
          // If we have a listener on a '**', it will catch all, so add its handler.
          searchListenerTree(handlers, type, xxTree, typeLength);
        }

        // Build arrays of matching next branches and others.
        for(branch in xxTree) {
          if(branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
            if(branch === nextType) {
              // We know the next element will match, so jump twice.
              searchListenerTree(handlers, type, xxTree[branch], i+2);
            } else if(branch === currentType) {
              // Current node matches, move into the tree.
              searchListenerTree(handlers, type, xxTree[branch], i+1);
            } else {
              isolatedBranch = {};
              isolatedBranch[branch] = xxTree[branch];
              searchListenerTree(handlers, type, { '**': isolatedBranch }, i+1);
            }
          }
        }
      } else if(xxTree._listeners) {
        // We have reached the end and still on a '**'
        searchListenerTree(handlers, type, xxTree, typeLength);
      } else if(xxTree['*'] && xxTree['*']._listeners) {
        searchListenerTree(handlers, type, xxTree['*'], typeLength);
      }
    }

    return listeners;
  }

  function growListenerTree(type, listener) {

    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();

    //
    // Looks for two consecutive '**', if so, don't add the event at all.
    //
    for(var i = 0, len = type.length; i+1 < len; i++) {
      if(type[i] === '**' && type[i+1] === '**') {
        return;
      }
    }

    var tree = this.listenerTree;
    var name = type.shift();

    while (name) {

      if (!tree[name]) {
        tree[name] = {};
      }

      tree = tree[name];

      if (type.length === 0) {

        if (!tree._listeners) {
          tree._listeners = listener;
        }
        else if(typeof tree._listeners === 'function') {
          tree._listeners = [tree._listeners, listener];
        }
        else if (isArray(tree._listeners)) {

          tree._listeners.push(listener);

          if (!tree._listeners.warned) {

            var m = defaultMaxListeners;

            if (typeof this._events.maxListeners !== 'undefined') {
              m = this._events.maxListeners;
            }

            if (m > 0 && tree._listeners.length > m) {

              tree._listeners.warned = true;
              console.error('(node) warning: possible EventEmitter memory ' +
                            'leak detected. %d listeners added. ' +
                            'Use emitter.setMaxListeners() to increase limit.',
                            tree._listeners.length);
              console.trace();
            }
          }
        }
        return true;
      }
      name = type.shift();
    }
    return true;
  }

  // By default EventEmitters will print a warning if more than
  // 10 listeners are added to it. This is a useful default which
  // helps finding memory leaks.
  //
  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.

  EventEmitter.prototype.delimiter = '.';

  EventEmitter.prototype.setMaxListeners = function(n) {
    this._events || init.call(this);
    this._events.maxListeners = n;
    if (!this._conf) this._conf = {};
    this._conf.maxListeners = n;
  };

  EventEmitter.prototype.event = '';

  EventEmitter.prototype.once = function(event, fn) {
    this.many(event, 1, fn);
    return this;
  };

  EventEmitter.prototype.many = function(event, ttl, fn) {
    var self = this;

    if (typeof fn !== 'function') {
      throw new Error('many only accepts instances of Function');
    }

    function listener() {
      if (--ttl === 0) {
        self.off(event, listener);
      }
      fn.apply(this, arguments);
    }

    listener._origin = fn;

    this.on(event, listener);

    return self;
  };

  EventEmitter.prototype.emit = function() {

    this._events || init.call(this);

    var type = arguments[0];

    if (type === 'newListener' && !this.newListener) {
      if (!this._events.newListener) { return false; }
    }

    // Loop through the *_all* functions and invoke them.
    if (this._all) {
      var l = arguments.length;
      var args = new Array(l - 1);
      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
      for (i = 0, l = this._all.length; i < l; i++) {
        this.event = type;
        this._all[i].apply(this, args);
      }
    }

    // If there is no 'error' event listener then throw.
    if (type === 'error') {

      if (!this._all &&
        !this._events.error &&
        !(this.wildcard && this.listenerTree.error)) {

        if (arguments[1] instanceof Error) {
          throw arguments[1]; // Unhandled 'error' event
        } else {
          throw new Error("Uncaught, unspecified 'error' event.");
        }
        return false;
      }
    }

    var handler;

    if(this.wildcard) {
      handler = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
    }
    else {
      handler = this._events[type];
    }

    if (typeof handler === 'function') {
      this.event = type;
      if (arguments.length === 1) {
        handler.call(this);
      }
      else if (arguments.length > 1)
        switch (arguments.length) {
          case 2:
            handler.call(this, arguments[1]);
            break;
          case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;
          // slower
          default:
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            handler.apply(this, args);
        }
      return true;
    }
    else if (handler) {
      var l = arguments.length;
      var args = new Array(l - 1);
      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];

      var listeners = handler.slice();
      for (var i = 0, l = listeners.length; i < l; i++) {
        this.event = type;
        listeners[i].apply(this, args);
      }
      return (listeners.length > 0) || !!this._all;
    }
    else {
      return !!this._all;
    }

  };

  EventEmitter.prototype.on = function(type, listener) {

    if (typeof type === 'function') {
      this.onAny(type);
      return this;
    }

    if (typeof listener !== 'function') {
      throw new Error('on only accepts instances of Function');
    }
    this._events || init.call(this);

    // To avoid recursion in the case that type == "newListeners"! Before
    // adding it to the listeners, first emit "newListeners".
    this.emit('newListener', type, listener);

    if(this.wildcard) {
      growListenerTree.call(this, type, listener);
      return this;
    }

    if (!this._events[type]) {
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;
    }
    else if(typeof this._events[type] === 'function') {
      // Adding the second element, need to change to array.
      this._events[type] = [this._events[type], listener];
    }
    else if (isArray(this._events[type])) {
      // If we've already got an array, just append.
      this._events[type].push(listener);

      // Check for listener leak
      if (!this._events[type].warned) {

        var m = defaultMaxListeners;

        if (typeof this._events.maxListeners !== 'undefined') {
          m = this._events.maxListeners;
        }

        if (m > 0 && this._events[type].length > m) {

          this._events[type].warned = true;
          console.error('(node) warning: possible EventEmitter memory ' +
                        'leak detected. %d listeners added. ' +
                        'Use emitter.setMaxListeners() to increase limit.',
                        this._events[type].length);
          console.trace();
        }
      }
    }
    return this;
  };

  EventEmitter.prototype.onAny = function(fn) {

    if (typeof fn !== 'function') {
      throw new Error('onAny only accepts instances of Function');
    }

    if(!this._all) {
      this._all = [];
    }

    // Add the function to the event listener collection.
    this._all.push(fn);
    return this;
  };

  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  EventEmitter.prototype.off = function(type, listener) {
    if (typeof listener !== 'function') {
      throw new Error('removeListener only takes instances of Function');
    }

    var handlers,leafs=[];

    if(this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
    }
    else {
      // does not use listeners(), so no side effect of creating _events[type]
      if (!this._events[type]) return this;
      handlers = this._events[type];
      leafs.push({_listeners:handlers});
    }

    for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
      var leaf = leafs[iLeaf];
      handlers = leaf._listeners;
      if (isArray(handlers)) {

        var position = -1;

        for (var i = 0, length = handlers.length; i < length; i++) {
          if (handlers[i] === listener ||
            (handlers[i].listener && handlers[i].listener === listener) ||
            (handlers[i]._origin && handlers[i]._origin === listener)) {
            position = i;
            break;
          }
        }

        if (position < 0) {
          continue;
        }

        if(this.wildcard) {
          leaf._listeners.splice(position, 1);
        }
        else {
          this._events[type].splice(position, 1);
        }

        if (handlers.length === 0) {
          if(this.wildcard) {
            delete leaf._listeners;
          }
          else {
            delete this._events[type];
          }
        }
        return this;
      }
      else if (handlers === listener ||
        (handlers.listener && handlers.listener === listener) ||
        (handlers._origin && handlers._origin === listener)) {
        if(this.wildcard) {
          delete leaf._listeners;
        }
        else {
          delete this._events[type];
        }
      }
    }

    return this;
  };

  EventEmitter.prototype.offAny = function(fn) {
    var i = 0, l = 0, fns;
    if (fn && this._all && this._all.length > 0) {
      fns = this._all;
      for(i = 0, l = fns.length; i < l; i++) {
        if(fn === fns[i]) {
          fns.splice(i, 1);
          return this;
        }
      }
    } else {
      this._all = [];
    }
    return this;
  };

  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

  EventEmitter.prototype.removeAllListeners = function(type) {
    if (arguments.length === 0) {
      !this._events || init.call(this);
      return this;
    }

    if(this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);

      for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
        var leaf = leafs[iLeaf];
        leaf._listeners = null;
      }
    }
    else {
      if (!this._events[type]) return this;
      this._events[type] = null;
    }
    return this;
  };

  EventEmitter.prototype.listeners = function(type) {
    if(this.wildcard) {
      var handlers = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
      return handlers;
    }

    this._events || init.call(this);

    if (!this._events[type]) this._events[type] = [];
    if (!isArray(this._events[type])) {
      this._events[type] = [this._events[type]];
    }
    return this._events[type];
  };

  EventEmitter.prototype.listenersAny = function() {

    if(this._all) {
      return this._all;
    }
    else {
      return [];
    }

  };

  if (true) {
     // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return EventEmitter;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}();


/***/ }),

/***/ "./node_modules/jquery/dist/jquery.min.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/dist/jquery.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict"; true&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},S=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||S).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.3",E=function(e,t){return new E.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,S,y,s,c,v,E="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,S)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=E)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{if(d.cssSupportsSelector&&!CSS.supports("selector(:is("+c+"))"))throw new Error;return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===E&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[E]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,S=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssSupportsSelector=ce(function(){return CSS.supports("selector(*)")&&C.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=E,!C.getElementsByName||!C.getElementsByName(E).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&S)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+E+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssSupportsSelector||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&S&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==r?r:d.attributes||!S?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[E]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[E]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[E]&&(y=Ce(y)),v&&!v[E]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Se(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[E]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Se(e.slice(s,n)),n<r&&Se(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Se(t[n]))[E]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!S);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&S&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!S,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=E.split("").sort(j).join("")===E,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);E.find=d,E.expr=d.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=d.uniqueSort,E.text=d.getText,E.isXMLDoc=d.isXML,E.contains=d.contains,E.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),N.test(r[1])&&E.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=S.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,D=E(S);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(H[r]||E.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),C.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){C.setTimeout(function(){throw e})};var F=E.Deferred();function $(){S.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),E.ready()}E.fn.ready=function(e){return F.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||F.resolveWith(S,[E])}}),E.ready.then=F.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?C.setTimeout(E.ready):(S.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=S.documentElement,ie=function(e){return E.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=S.createDocumentFragment().appendChild(S.createElement("div")),(fe=S.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))E.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return S.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Ee(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&E.event.add(e,i,we)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=E.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=E.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(t,e){E.event.special[t]={setup:function(){return Ee(this,t,Ce),!1},trigger:function(){return Ee(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r)},one:function(e,t,n,r){return Se(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){E.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)E.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=E.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=E.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=S.createElement("div"),l=S.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=S.createElement("table"),t=S.createElement("tr"),n=S.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=S.createElement("div").style,Xe={};function Ve(e){var t=E.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),Je(0,t,s)}}}),E.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=Je)}),E.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=et.prototype.init,E.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===S.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,E.fx.interval),E.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)E.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){var e=ft(this,E.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),E.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),tt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){nt||(nt=!0,st())},E.fx.stop=function(){nt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=S.createElement("input"),it=S.createElement("select").appendChild(S.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=S.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return B(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||E.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return B(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){E(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=E(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:yt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||S],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||S,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+E.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[E.expando]?e:new E.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||S)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},St=/\?/;E.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Et=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||Et.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=S.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e}Wt.href=Tt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,E.ajaxSettings),t):Bt(E.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=E.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?E(v):E.event,x=E.Deferred(),b=E.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=S.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=E.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=E.event&&y.global)&&0==E.active++&&E.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(St.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(St.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(E.lastModified[f]&&T.setRequestHeader("If-Modified-Since",E.lastModified[f]),E.etag[f]&&T.setRequestHeader("If-None-Match",E.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<E.inArray("script",y.dataTypes)&&E.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(E.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(E.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=E.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,E.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||E.expando+"_"+Ct.guid++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?E(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(r)):t=S),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||re})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=m,E.isWindow=x,E.camelCase=X,E.type=w,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")}, true&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return E}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Yt=C.jQuery,Qt=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=Qt),e&&C.jQuery===E&&(C.jQuery=Yt),E},"undefined"==typeof e&&(C.jQuery=C.$=E),E});


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

function extract(str) {
	var queryStart = str.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return str.slice(queryStart + 1);
}

function parse(str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^[?#&]/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	if (opts.sort === false) {
		opts.sort = function () {};
	}

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

exports.parseUrl = function (str, opts) {
	return {
		url: str.split('?')[0] || '',
		query: parse(extract(str), opts)
	};
};


/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoZWNrb3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvYXBpL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9hcGkvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL2FwaS9jb3VudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9hcGkvcHJvZHVjdC1hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvYXBpL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9hcGkvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvaG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9ob29rcy9iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvaG9va3MvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL2hvb2tzL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL2hvb2tzL2N1cnJlbmN5LXNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvaG9va3MvZmFjZXRlZC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9ob29rcy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvaG9va3Mvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvaG9va3Mvc29ydC1ieS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL2xpYi9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL3Rvb2xzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvdG9vbHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy90b29scy9pbWFnZVNyY3NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL3Rvb2xzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlY29kZS11cmktY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ldmVudGVtaXR0ZXIyL2xpYi9ldmVudGVtaXR0ZXIyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeS1zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiXSwibmFtZXMiOlsiYWxsdXJlRXhjZXB0aW9uIiwiY2FydEl0ZW1zIiwic2t1cyIsInRlYW1kZXNrSXRlbXMiLCJ0ZWFtZGVza1BPSXRlbXMiLCJwU2hpcHBpbmdHcm91cCIsImNhcnRHZXREZWxpdmVyeSIsImxpbmVJdGVtcyIsInBoeXNpY2FsSXRlbXMiLCJtYXAiLCJpIiwic2t1IiwiaW5kZXhPZiIsImxlbmd0aCIsInNsaWNlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0YWJsZSIsImZpbHRlciIsImpvaW4iLCJ0aGVuIiwiciIsImpzb24iLCJjYXJ0U2V0RGVsaXZlcnkiLCJjYXRjaCIsImUiLCJjb25zb2xlIiwibG9nIiwicXR5Q2hlY2tlZCIsImluZGV4IiwiaXRlbSIsImZpbmQiLCJzIiwiU0tVIiwidG9VcHBlckNhc2UiLCIkIiwiZXEiLCJxdHkiLCJxdWFudGl0eSIsImJ1ZmYiLCJjb250ZW50IiwiTnVtYmVyIiwiTWF0aCIsIm1pbiIsImFwcGVuZCIsImNtaFJ1c2hJdGVtcyIsImhhaXJTZXJ2aWNlIiwiaW5jbHVkZXMiLCJlbnRyaWVzIiwiY2hlY2tQcm9kdWN0cyIsInRva2VuIiwidmFsIiwiaWRzIiwicHJvZHVjdElkIiwicXVlcnkiLCJkYXRhIiwic2l0ZSIsInByb2R1Y3RzIiwiZWRnZXMiLCJwcm9kdWN0Iiwic2hpcHBpbmdHcm91cCIsIm5vZGUiLCJtZXRhZmllbGRzIiwiZ3JvdXAiLCJrZXkiLCJ2YWx1ZSIsImVudGl0eUlkIiwidG90YWxocCIsInRvTG93ZXJDYXNlIiwic2V0U2hpcG1lbnQiLCJiYXNlQW1vdW50IiwiZXJyb3IiLCJpc0xhcmdlciIsInN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJzZXRJbnRlcnZhbCIsImNzcyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1dGlscyIsImFwaSIsImNhcnQiLCJnZXRDYXJ0IiwiaW5jbHVkZU9wdGlvbnMiLCJlcnIiLCJteUNhcnQiLCJpZCIsImNoZWNrSW5pdCIsImNsZWFySW50ZXJ2YWwiLCJiYWN0aW9uIiwib24iLCJzZXRUaW1lb3V0IiwiaW50ZXJuYWxzIiwiZ2V0UGFnZSIsInVybCIsIm9wdGlvbnMiLCJjYWxsYmFjayIsInJlcXVlc3QiLCJyZXF1ZXN0T3B0aW9ucyIsImNvdW50cnkiLCJDb3VudHJ5QXBpIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJQcm9kdWN0QXR0cmlidXRlc0FwaSIsIlByb2R1Y3RBcGkiLCJzZWFyY2giLCJTZWFyY2hBcGkiLCJDYXJ0QXBpIiwidmVyc2lvbiIsInJlbW90ZVZlcnNpb24iLCJyZW1vdGVCYXNlRW5kcG9pbnQiLCJtYWtlUmVxdWVzdCIsInJlbW90ZSIsInJlbW90ZVJlcXVlc3QiLCJlbmRwb2ludCIsInJlbW90ZVVybCIsImdldENhcnRzIiwicmVzcG9uc2UiLCJjYXJ0SWQiLCJnZXRDYXJ0UXVhbnRpdHkiLCJsaW5lSXRlbVF1YW50aXRpZXMiLCJkaWdpdGFsSXRlbXMiLCJjdXN0b21JdGVtcyIsInJlZHVjZSIsImEiLCJiIiwiY29uY2F0IiwibGluZUl0ZW0iLCJwYXJlbnRJZCIsImFjY3VtdWxhdG9yIiwibGluZUl0ZW1RdWFudGl0eSIsImdpZnRDZXJ0aWZpY2F0ZVF1YW50aXR5IiwiZ2lmdENlcnRpZmljYXRlcyIsIml0ZW1BZGQiLCJmb3JtRGF0YSIsImVtaXREYXRhIiwiSG9va3MiLCJlbWl0IiwiaXRlbVVwZGF0ZSIsIml0ZW1JZCIsImNhbGxiYWNrQXJnIiwiaXRlbXMiLCJBcnJheSIsImlzQXJyYXkiLCJ1cGRhdGUiLCJpdGVtUmVtb3ZlIiwiZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMiLCJvcHRzIiwic3VibWl0SXRlbUdpZnRXcmFwcGluZ09wdGlvbiIsInBhcmFtcyIsInBheWxvYWQiLCJnZXRDb250ZW50IiwiZ2V0U2hpcHBpbmdRdW90ZXMiLCJyZW5kZXJXaXRoIiwicmVuZGVyV2l0aEFyZyIsInRlbXBsYXRlIiwic3VibWl0U2hpcHBpbmdRdW90ZSIsInF1b3RlSWQiLCJzaGlwcGluZ19tZXRob2QiLCJhcHBseUNvZGUiLCJjb2RlIiwiYXBwbHlHaWZ0Q2VydGlmaWNhdGUiLCJCYXNlIiwiZ2V0QnlJZCIsImdldEJ5TmFtZSIsIm5hbWUiLCJpbkNhcnRFbmRwb2ludCIsIm9wdGlvbkNoYW5nZSIsInRlbXBsYXRlQXJnIiwibm9ybWFsaXplZFFzIiwibm9ybWFsaXplUXVlcnlTdHJpbmdQYXJhbXMiLCJjb25maWd1cmVJbkNhcnQiLCJwYXJhbXNBcmciLCJjbGFzc2VzIiwiQ2FydEhvb2tzIiwiY29va2llIiwiQ29va2llSG9va3MiLCJjdXJyZW5jeVNlbGVjdG9yIiwiQ3VycmVuY3lTZWxlY3Rvckhvb2tzIiwiUHJvZHVjdEhvb2tzIiwiU2VhcmNoSG9va3MiLCJmYWNldGVkU2VhcmNoIiwiRmFjZXRlZFNlYXJjaEhvb2tzIiwic29ydEJ5IiwiU29ydEJ5SG9va3MiLCJwYXJzZUhvb2tzIiwiaG9va05hbWUiLCJob29rVHlwZSIsInNwbGl0IiwidW5kZWZpbmVkIiwiRXJyb3IiLCJob29rIiwib2ZmIiwiYXBwbHkiLCJhcmd1bWVudHMiLCIkYm9keSIsIkV2ZW50RW1pdHRlciIsImV2ZW50IiwidGFyZ2V0IiwiQmFzZUhvb2tzIiwic2VhcmNoRXZlbnRzIiwib3B0aW9uc0NoYW5nZSIsInF1aWNrU2VhcmNoIiwic29ydEJ5RXZlbnRzIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJ0cmlnZ2VyIiwiaXNWYWxpZEhUVFBNZXRob2QiLCJhbGxvd2VkTWV0aG9kcyIsInJlbGF0aXZlVXJsIiwiZGVmYXVsdE9wdGlvbnMiLCJiYXNlVXJsIiwiY29uZmlnIiwiT2JqZWN0IiwiYXNzaWduIiwiQkNEYXRhIiwiY3NyZl90b2tlbiIsInJlcXVlc3RlZFRlbXBsYXRlIiwidXNpbmdUZW1wbGF0ZXMiLCJ1c2luZ1NlY3Rpb25zIiwidGVtcGxhdGVzIiwiaGFzT3duUHJvcGVydHkiLCJwdXNoIiwicmVuZGVyX3dpdGgiLCJhamF4IiwieGhyRmllbGRzIiwid2l0aENyZWRlbnRpYWxzIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsInN1Y2Nlc3MiLCJyZXQiLCJrZXlzIiwiY2xlYW5LZXkiLCJyZXBsYWNlIiwidGVtcGxhdGVWYXJpYWJsZU5hbWVzIiwidGVtcGxhdGVWYXJpYWJsZSIsIlhIUiIsInRleHRTdGF0dXMiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJxc1BhcmFtcyIsInBhcnNlIiwiaXNWYWxpZFBhcmFtIiwib3B0aW9uc0NvbGxlY3Rpb24iLCJub3JtYWxpemVkIiwicGFyYW0iLCJmaWx0ZXJlZCIsInBhcmFtU3RyaW5nIiwiU3RlbmNpbFV0aWxzIiwiaG9va3MiLCJ0b29scyIsInJvb3QiLCJkZWZpbmUiLCJzdGVuY2lsVXRpbHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW1hZ2UiLCJJbWFnZVRvb2wiLCJpbWFnZVNyY3NldCIsIkltYWdlU3Jjc2V0VG9vbCIsInN0b3JhZ2UiLCJTdG9yYWdlVG9vbHMiLCJnZXRTcmMiLCJwYXRoIiwiZGltZW5zaW9ucyIsInNpemVSZWdleCIsInNpemUiLCJ3aWR0aCIsImhlaWdodCIsInRlc3QiLCJnZXRTcmNzZXQiLCJzaXplcyIsImRlc2NyaXB0b3JSZWdleCIsInNyY3NldHMiLCJzb21lIiwiZGVzY3JpcHRvciIsInN0b3JhZ2VBdmFpbGFibGUiLCJ0eXBlIiwieCIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiRE9NRXhjZXB0aW9uIiwibG9jYWxTdG9yYWdlQXZhaWxhYmxlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGdUI7QUFFd0I7QUFFL0MsSUFBSUEsZUFBZSxHQUFHLENBQ2xCLE1BQU0sRUFDTixNQUFNLEVBQ04sT0FBTyxFQUNQLFVBQVUsRUFDVixTQUFTLEVBQ1QsUUFBUSxFQUNSLFFBQVEsRUFDUixPQUFPLEVBQ1AsUUFBUSxFQUNSLFNBQVMsRUFDVCxRQUFRLEVBQ1IsUUFBUSxFQUNSLFFBQVEs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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isb0JBQW9COztBQUUxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9OYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2hlY2tvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9jaGVja291dC5qc1wiKTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBfLCB7IG1pbiB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcblxyXG52YXIgYWxsdXJlRXhjZXB0aW9uID0gW1xyXG4gICAgXCJjb2NvXCIsXHJcbiAgICBcInJvc2VcIixcclxuICAgIFwiYWRlbGVcIixcclxuICAgIFwiYW5nZWxpbmFcIixcclxuICAgIFwiamVzc2ljYVwiLFxyXG4gICAgXCJzZWxlbmFcIixcclxuICAgIFwidGF5bG9yXCIsXHJcbiAgICBcImp1bGlhXCIsXHJcbiAgICBcIm5pY29sZVwiLFxyXG4gICAgXCJnd3luZXRoXCIsXHJcbiAgICBcImV2NzkxNFwiLFxyXG4gICAgXCJ0bDY4MTRcIixcclxuICAgIFwiZXY1NzE0XCIsXHJcbiAgICBcIm1vNTUxNFwiLFxyXG4gICAgXCJtbzc2MDhcIixcclxuICAgIFwiZXY1NTEyXCIsXHJcbiAgICBcImV2NTcwNlwiLFxyXG4gICAgXCJldjY4MTBcIixcclxuICAgIFwiZWc2NjEyXCIsXHJcbiAgICBcImVoMTZcIixcclxuICAgIFwibWgyMjA2XCIsXHJcbiAgICBcInNoNTIwNlwiLFxyXG4gICAgXCJlcDM2MDhcIixcclxuICAgIFwibWgyMjE2XCIsXHJcbiAgICBcIm1heWFcIixcclxuICAgIFwibm95YVwiLFxyXG5dO1xyXG5cclxudmFyIGNhcnRJdGVtcyA9IG51bGw7XHJcbnZhciBza3VzPVtdO1xyXG52YXIgdGVhbWRlc2tJdGVtcyA9IG51bGw7XHJcbnZhciB0ZWFtZGVza1BPSXRlbXMgPSBudWxsO1xyXG52YXIgcFNoaXBwaW5nR3JvdXA9e307XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBpbnZlbnRvcnkgYW5kIHBvIGZyb20gdGVhbWRlc2tcclxuICovXHJcbiBmdW5jdGlvbiBjYXJ0R2V0RGVsaXZlcnkoKSB7ICAgIFxyXG4gICAgaWYgKGNhcnRJdGVtcykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNhcnRJdGVtcyk7XHJcbiAgICAgICAgc2t1cyA9IGNhcnRJdGVtcy5saW5lSXRlbXMucGh5c2ljYWxJdGVtcy5tYXAoaT0+e1xyXG4gICAgICAgICAgICBsZXQgc2t1ID0gaS5za3U7XHJcbiAgICAgICAgICAgIGlmIChza3UuaW5kZXhPZihcIl9OXCIpPT1za3UubGVuZ3RoLTIpIHtcclxuICAgICAgICAgICAgICAgIHNrdSA9IHNrdS5zbGljZSgwLHNrdS5sZW5ndGgtMik7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc2t1KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmZXRjaChgLy9zaHAtd2Vic2VydmVyLmdsaXRjaC5tZS9nZXQtdGVhbWRlc2tgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgdGFibGU6ICdJbnZlbnRvcnknLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBgQW55KFtTS1VdLCcke3NrdXMuam9pbihcIixcIil9JylgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyPT5yLmpzb24oKSlcclxuICAgICAgICAudGhlbihyPT57XHJcbiAgICAgICAgICAgIHRlYW1kZXNrSXRlbXMgPSByOyAgXHJcblxyXG4gICAgICAgICAgICB0ZWFtZGVza1BPSXRlbXMgPSBbXTsgICAgICAgXHJcbiAgICAgICAgICAgIGNhcnRTZXREZWxpdmVyeSgpO1xyXG4gICAgICAgICAgICAvLyBmZXRjaChgLy9zaHAtd2Vic2VydmVyLmdsaXRjaC5tZS9nZXQtdGVhbWRlc2tgLCB7XHJcbiAgICAgICAgICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGFibGU6ICd0Xzc2MzQ3OScsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgb3B0aW9uczogYD9maWx0ZXI9QW55KFtTS1VdLCcke3NrdXMuam9pbihcIixcIil9JykgYW5kIFtJbmNvbWluZyBRdWFudGl0eV0+MCBhbmQgW0Fycml2YWwgRHVlIERhdGVdPlRvRGF0ZSgnMS8xLzEnKSZzb3J0PUFycml2YWwgRHVlIERhdGUvL0FTQ2AgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIC50aGVuKHI9PnIuanNvbigpKVxyXG4gICAgICAgICAgICAvLyAudGhlbihyPT57XHJcbiAgICAgICAgICAgIC8vICAgICB0ZWFtZGVza1BPSXRlbXMgPSByO1xyXG4gICAgICAgICAgICAvLyAgICAgY2FydFNldERlbGl2ZXJ5KCk7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIC5jYXRjaChlPT57XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgLy8gICAgIGNhcnRTZXREZWxpdmVyeSgpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGU9PmNvbnNvbGUubG9nKGUpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbGwgaW4gdGhlIGRlbGl2ZXJ5IGluZm9ybWF0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBjYXJ0U2V0RGVsaXZlcnkoKSB7ICAgICAgICBcclxuICAgIGlmICh0ZWFtZGVza0l0ZW1zKSB7XHJcbiAgICAgICAgbGV0IHF0eUNoZWNrZWQ9W107XHJcbiAgICAgICAgZm9yIChsZXQgW2luZGV4LCBza3VdIG9mIHNrdXMuZW50cmllcygpKSB7ICAgIFxyXG4gICAgICAgICAgICBpZiAoc2t1LmluZGV4T2YoXCJfTlwiKT09c2t1Lmxlbmd0aC0yKSB7XHJcbiAgICAgICAgICAgICAgICBza3UgPSBza3Uuc2xpY2UoMCxza3UubGVuZ3RoLTIpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGVhbWRlc2tJdGVtcy5maW5kKHM9PmVuY29kZVVSSUNvbXBvbmVudChzLlNLVS50b1VwcGVyQ2FzZSgpKT09c2t1LnRvVXBwZXJDYXNlKCkpOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoaXRlbSkgeyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoJChcIi5wcm9kdWN0TGlzdFwiKS5maW5kKFwibGkucHJvZHVjdExpc3QtaXRlbVwiKS5lcShpbmRleCkuZmluZChcInVsLnByb2R1Y3Qtb3B0aW9uc1wiKS5maW5kKFwiLmNhcnQtZGVsaXZlcnlcIikubGVuZ3RoPT0wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHF0eSA9IGNhcnRJdGVtcy5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1tpbmRleF0ucXVhbnRpdHk7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYnVmZiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHF0eUNoZWNrZWRbaXRlbS5TS1VdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmYgPSBxdHlDaGVja2VkW2l0ZW0uU0tVXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXR5Q2hlY2tlZFtpdGVtLlNLVV0rPXF0eTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdHlDaGVja2VkW2l0ZW0uU0tVXT1xdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50PWA8c3Ryb25nPkhldXJlIGQnZXhww6lkaXRpb24gcHLDqXZ1ZTo8L3N0cm9uZz48YnIvPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW1wiVG90YWwgT24gSGFuZFwiXSA9PSBpdGVtW1wiQXZhaWxhYmxlIFF1YW50aXR5XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoaXRlbVtcIlF1YW50aXR5IFVTQVwiXSk+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcihpdGVtW1wiUXVhbnRpdHkgVVNBXCJdKS1idWZmPjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50Kz1gRGFucyAzLTQgam91cnM6IHF1YW50aXTDqSA8c3Ryb25nPiR7TWF0aC5taW4oaXRlbVtcIlF1YW50aXR5IFVTQVwiXS1idWZmLCBxdHkpfTwvc3Ryb25nPjxici8+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdHkgPSBxdHkgLSBNYXRoLm1pbihpdGVtW1wiUXVhbnRpdHkgVVNBXCJdLWJ1ZmYsIHF0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZj0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmLT1OdW1iZXIoaXRlbVtcIlF1YW50aXR5IFVTQVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcihpdGVtW1wiUXVhbnRpdHkgQ2FuYWRhXCJdKT4wICYmIHF0eT4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGl0ZW1bXCJRdWFudGl0eSBDYW5hZGFcIl0pLWJ1ZmY+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQrPWBEYW5zIDUtOCBqb3VyczogcXVhbnRpdMOpIDxzdHJvbmc+JHtNYXRoLm1pbihpdGVtW1wiUXVhbnRpdHkgQ2FuYWRhXCJdLWJ1ZmYsIHF0eSl9PC9zdHJvbmc+PGJyLz5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF0eSA9IHF0eSAtIE1hdGgubWluKGl0ZW1bXCJRdWFudGl0eSBDYW5hZGFcIl0tYnVmZiwgcXR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmYgLT0gTnVtYmVyKGl0ZW1bXCJRdWFudGl0eSBDYW5hZGFcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcihpdGVtW1wiQXZhaWxhYmxlIFF1YW50aXR5XCJdKT4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGl0ZW1bXCJBdmFpbGFibGUgUXVhbnRpdHlcIl0pLWJ1ZmY+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQrPWBEYW5zIDMtOCBqb3VyczogcXVhbnRpdMOpIDxzdHJvbmc+JHtNYXRoLm1pbihpdGVtW1wiQXZhaWxhYmxlIFF1YW50aXR5XCJdLWJ1ZmYsIHF0eSl9PC9zdHJvbmc+PGJyLz5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF0eSA9IHF0eSAtIE1hdGgubWluKGl0ZW1bXCJBdmFpbGFibGUgUXVhbnRpdHlcIl0tYnVmZiwgcXR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmYgLT0gTnVtYmVyKGl0ZW1bXCJBdmFpbGFibGUgUXVhbnRpdHlcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChpdGVtW1wiVmlydHVhbCBRdWFudGl0eVwiXSAmJiBxdHk+MCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGl0ZW1bXCJMb2NrIFN0YXR1c1wiXSE9XCJMb2NrZWQgZm9yIHByb2Nlc3NpbmdcIiAmJiBOdW1iZXIoaXRlbVtcIlVubG9ja2VkIGZvciBzYWxlIHF1YW50aXR5XCJdKSA+IDAgJiYgcXR5PjApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChOdW1iZXIoaXRlbVtcIlVubG9ja2VkIGZvciBzYWxlIHF1YW50aXR5XCJdKS1idWZmID4gMCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnRlbnQrPWAxIHdlZWsgbGF0ZXI6IHF1YW50aXR5IDxzdHJvbmc+JHtNYXRoLm1pbihpdGVtW1wiVW5sb2NrZWQgZm9yIHNhbGUgcXVhbnRpdHlcIl0tYnVmZiwgcXR5KX08L3N0cm9uZz48YnIvPmA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcXR5ID0gcXR5IC0gTWF0aC5taW4oaXRlbVtcIlVubG9ja2VkIGZvciBzYWxlIHF1YW50aXR5XCJdLWJ1ZmYsIHF0eSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYnVmZj0wO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBidWZmLT1OdW1iZXIoaXRlbVtcIlVubG9ja2VkIGZvciBzYWxlIHF1YW50aXR5XCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgdmlydHVhbD17fTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKE51bWJlcihpdGVtW1wiUXVhbnRpdHkgSW5jb21pbmdcIl0pLTIgPiAwICYmIHF0eT4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZiAoTnVtYmVyKGl0ZW1bXCJRdWFudGl0eSBJbmNvbWluZ1wiXSktMiAtYnVmZiA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsZXQgaW5JdGVtcyA9IHRlYW1kZXNrUE9JdGVtcy5maWx0ZXIocD0+cC5TS1UudG9VcHBlckNhc2UoKSA9PSBpdGVtW1wiU0tVXCJdLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxldCBpPTAsIHRvdGFsUD1idWZmLCB0ZW1wcXR5ID0gcXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHdoaWxlIChpPGluSXRlbXMubGVuZ3RoICYmIHRlbXBxdHk+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0b3RhbFArPU51bWJlcihpbkl0ZW1zW2ldW1wiSW5jb21pbmcgUXVhbnRpdHlcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0ZW1wcXR5ID0gdGVtcHF0eSAtIE1hdGgubWluKE51bWJlcihpbkl0ZW1zW2ldW1wiSW5jb21pbmcgUXVhbnRpdHlcIl0pLCB0ZW1wcXR5KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaSsrOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlmIChpPjApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGluSXRlbSA9IGluSXRlbXNbaS0xXTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbGV0IG1kaWZmID0gbW9udGhEaWZmKG5ldyBEYXRlKCksIG5ldyBEYXRlKGluSXRlbVtcIkFycml2YWwgRHVlIERhdGVcIl0pKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKG1kaWZmPT0wKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAoYWxsdXJlRXhjZXB0aW9uLmluY2x1ZGVzKGluSXRlbVtcIlBhcnQgTnVtYmVyXCJdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG1kaWZmKz0zO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBtZGlmZis9MTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhbGx1cmVFeGNlcHRpb24uaW5jbHVkZXMoaW5JdGVtW1wiUGFydCBOdW1iZXJcIl0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBtZGlmZis9MjtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB2aXJ0dWFsW21kaWZmXSA9IE1hdGgubWluKHRvdGFsUCwgcXR5KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHF0eSA9IHRlbXBxdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGJ1ZmY9MDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJ1ZmYgPSBidWZmIC0gTnVtYmVyKGl0ZW1bXCJRdWFudGl0eSBJbmNvbWluZ1wiXSkgKyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChxdHk+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGV0IG0gPSBpdGVtW1wiVmlydHVhbCBMb2NhdGlvblwiXS5zbGljZSgwLC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmICh2aXJ0dWFsW21dKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmlydHVhbFttXSs9cXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2aXJ0dWFsW21dPXF0eTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh2aXJ0dWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKE9iamVjdC5rZXlzKHZpcnR1YWwpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7eWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnfTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCB2a2V5cyA9IE9iamVjdC5rZXlzKHZpcnR1YWwpLnNvcnQoZnVuY3Rpb24oYSxiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIGItYTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZm9yIChsZXQga2V5IG9mIHZrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKE51bWJlcihrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGF0ZS5nZXRVVENNb250aCgpLCBkYXRlLmdldFVUQ0RhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpK051bWJlcihrZXkpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29udGVudCs9YCR7ZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgb3B0aW9ucyl9OiBxdWFudGl0eSA8c3Ryb25nPiR7dmlydHVhbFtrZXldfTwvc3Ryb25nPjxici8+YDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb250ZW50Kz1gJHtrZXkucmVwbGFjZShcIl9cIixcIi1cIil9IG1vbnRocyBsYXRlcjogcXVhbnRpdHkgPHN0cm9uZz4ke3ZpcnR1YWxba2V5XX08L3N0cm9uZz48YnIvPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCIucHJvZHVjdExpc3RcIikuZmluZChcImxpLnByb2R1Y3RMaXN0LWl0ZW1cIikuZXEoaW5kZXgpLmZpbmQoXCJ1bC5wcm9kdWN0LW9wdGlvbnNcIikubGVuZ3RoPjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0TGlzdFwiKS5maW5kKFwibGkucHJvZHVjdExpc3QtaXRlbVwiKS5lcShpbmRleCkuZmluZChcInVsLnByb2R1Y3Qtb3B0aW9uc1wiKS5hcHBlbmQoYDxsaSBjbGFzcz1cInByb2R1Y3Qtb3B0aW9uIGNhcnQtZGVsaXZlcnlcIj4ke2NvbnRlbnR9PC9saT5gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3RMaXN0XCIpLmZpbmQoXCJsaS5wcm9kdWN0TGlzdC1pdGVtXCIpLmVxKGluZGV4KS5maW5kKFwiLnByb2R1Y3QtYm9keVwiKS5hcHBlbmQoYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicHJvZHVjdC1vcHRpb25zXCI+PGxpIGNsYXNzPVwicHJvZHVjdC1vcHRpb24gY2FydC1kZWxpdmVyeVwiPiR7Y29udGVudH08L2xpPjwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHF0eSA9IGNhcnRJdGVtcy5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1tpbmRleF0ucXVhbnRpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHF0eUNoZWNrZWRbaXRlbS5TS1VdKSB7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF0eUNoZWNrZWRbaXRlbS5TS1VdKz1xdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXR5Q2hlY2tlZFtpdGVtLlNLVV09cXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICgkKFwiLnByb2R1Y3RMaXN0XCIpLmZpbmQoXCJsaS5wcm9kdWN0TGlzdC1pdGVtXCIpLmVxKGluZGV4KS5maW5kKFwidWwucHJvZHVjdC1vcHRpb25zXCIpLmZpbmQoXCIuY2FydC1kZWxpdmVyeVwiKS5sZW5ndGg9PTApIHtcclxuICAgICAgICAgICAgICAgIHZhciBjbWhSdXNoSXRlbXMgPSBbJ0NNSCcsICdDTUxBQ0UnLCAnQ01NT05PJywgJ0NNTEFDRVBPTFknLCAnQ01TS0lOJ107XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFpclNlcnZpY2UgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMyMjFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzIyMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjMjMxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMyMzJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzIzM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjMjM0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMyNTFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzMzMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjMzMyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMzMzRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzMzNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjMzQxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMzNDJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzM0M1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjNTUxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSM1NTJcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlN0eWxlICNZb3VyX093blwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiT25saW5lIFNlcnZpY2VzIFBhY2tcIixcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNtaFJ1c2hJdGVtcy5pbmNsdWRlcyhza3UudG9VcHBlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PWA8c3Ryb25nPkhldXJlIGQnZXhww6lkaXRpb24gcHLDqXZ1ZTo8L3N0cm9uZz48YnIvPkl2cmFpc29uIGdhcmFudGllIGRhbnMgdW4gZMOpbGFpIGRlIHRyb2lzIG1vaXM8YnIvPmA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhaXJTZXJ2aWNlLmluY2x1ZGVzKHNrdSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PWA8c3Ryb25nPkhldXJlIGQnZXhww6lkaXRpb24gcHLDqXZ1ZTo8L3N0cm9uZz48YnIvPkRhbnMgMi0zIHNlbWFpbmVzPGJyLz5gO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdExpc3RcIikuZmluZChcImxpLnByb2R1Y3RMaXN0LWl0ZW1cIikuZXEoaW5kZXgpLmZpbmQoXCJ1bC5wcm9kdWN0LW9wdGlvbnNcIikuYXBwZW5kKGA8ZGl2IGNsYXNzPVwiY2FydC1kZWxpdmVyeVwiPiR7Y29udGVudH08L2Rpdj5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrUHJvZHVjdHMoKSB7XHJcbiAgICBsZXQgdG9rZW4gPSAkKFwiW25hbWU9c3RvcmUtdG9rZW5dXCIpLnZhbCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coY2FydEl0ZW1zKTtcclxuICAgIGlmIChjYXJ0SXRlbXMpIHtcclxuICAgICAgICBsZXQgaWRzID0gY2FydEl0ZW1zLmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zLm1hcChpPT5pLnByb2R1Y3RJZCk7ICAgICAgICBcclxuICAgICAgICBmZXRjaCgnL2dyYXBocWwnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgIHF1ZXJ5IFNldmVyYWxQcm9kdWN0c0J5SUQge1xyXG4gICAgICAgICAgICAgICAgc2l0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMoZW50aXR5SWRzOiBbJHtpZHMuam9pbihcIixcIil9XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2t1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZmllbGRzIChuYW1lc3BhY2U6IFwic2hpcHBpbmcuc2hpcHBlcmhxXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGE9PnsgICBcclxuICAgICAgICAgICAgaWYgKGRhdGEuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvZHVjdCBvZiBkYXRhLmRhdGEuc2l0ZS5wcm9kdWN0cy5lZGdlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzaGlwcGluZ0dyb3VwID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvZHVjdC5ub2RlLm1ldGFmaWVsZHMuZWRnZXMubGVuZ3RoPjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZ3JvdXAgb2YgcHJvZHVjdC5ub2RlLm1ldGFmaWVsZHMuZWRnZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cC5ub2RlLmtleSA9PSBcInNoaXBwaW5nLWdyb3Vwc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdHcm91cCA9IGdyb3VwLm5vZGUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBwU2hpcHBpbmdHcm91cFtwcm9kdWN0Lm5vZGUuZW50aXR5SWRdID0gc2hpcHBpbmdHcm91cDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbGhwPTA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGNhcnRJdGVtcy5saW5lSXRlbXMucGh5c2ljYWxJdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocFNoaXBwaW5nR3JvdXBbaXRlbS5wcm9kdWN0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocFNoaXBwaW5nR3JvdXBbaXRlbS5wcm9kdWN0SWRdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJoYWlycGllY2VcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbGhwICs9IGl0ZW0ucXVhbnRpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgc2V0U2hpcG1lbnQoKGNhcnRJdGVtcy5iYXNlQW1vdW50KSA+IDUwMCB8fCB0b3RhbGhwID4gMik7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFNoaXBtZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSlcclxuICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgc2V0U2hpcG1lbnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQ2hlY2sgYW5kIHNldCBzaGlwbWVudFxyXG4gKiBcclxuICogQHBhcmFtIHtib29sZWFufSBpc0xhcmdlciBUcnVlIGlmIGhhdmluZyBtb3JlIHRoYW4gMiBwaWVjZXMgb2YgaGFpcnBpZWNlcyBvciBzdWJ0b3RhbCBsYXJnZXIgdGhhbiA1MDBcclxuICovXHJcbiBmdW5jdGlvbiBzZXRTaGlwbWVudChpc0xhcmdlcj1mYWxzZSkgeyAgXHJcbiAgXHJcbiAgICBsZXQgZ3JvdXAgPSAkKFwiW25hbWU9Y3VzdG9tZXItZ3JvdXBdXCIpLnZhbCgpO1xyXG4gICAgc3dpdGNoIChncm91cCkge1xyXG4gICAgICAgIGNhc2UgXCJOZXdjb21lclwiOlxyXG4gICAgICAgICAgICBpZiAoaXNMYXJnZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkVuIHRhbnQgcXVlIG5vdXZlYXUgY2xpZW50LCBjZXJ0YWluZXMgcmVzdHJpY3Rpb25zIHNvbnQgaW1wb3PDqWVzIMOgIHZvdHJlIGNvbXB0ZSBwZW5kYW50IHF1ZSB2b3VzIHBsYWNleiBsZXMgdHJvaXMgcHJlbWnDqHJlcyBjb21tYW5kZXMuIFVuZSBmb2lzIHF1ZSB2b3VzIGF1cmV6IHN1cnBhc3PDqSBsZXMgdHJvaXMgY29tbWFuZGVzLCBjZXMgcmVzdHJpY3Rpb25zIHN1ciBsZSB0b3RhbCBkZSB2b3RyZSBwYW5pZXIgc2Vyb250IHN1cHByaW3DqWVzLiBTaSB2b3VzIHNvdWhhaXRleiByw6lnbGVyIHZvdHJlIGZhY3R1cmUgcGFyIGNhcnRlIGRlIGNyw6lkaXQsIHZldWlsbGV6IHLDqWR1aXJlIGxlIHRvdGFsIGRlIHZvdHJlIHBhbmllciBhdSBtb250YW50IG1heGltdW0gZGUgNTAwLDAwIGV1cm9zIG91IGJpZW4gcsOpZHVpcmUgbGEgcXVhbnRpdMOpIGRlIGNvbXBsw6ltZW50cyBjYXBpbGxhaXJlcyBkYW5zIHZvdHJlIHBhbmllciBqdXNxdSdhdSBtYXhpbXVtIGRlIGRldXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdpbmZvJywgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9KSAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuY2hlY2tvdXQtc3RlcC0tcGF5bWVudFwiKS5maW5kKFwiLmNoZWNrb3V0LXZpZXctY29udGVudFwiKS5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuY2hlY2tvdXQtc3RlcC0tcGF5bWVudFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5jaGVja291dC12aWV3LWNvbnRlbnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCJsaS5mb3JtLWNoZWNrbGlzdC1pdGVtXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoXCIucGF5bWVudFByb3ZpZGVySGVhZGVyLW5hbWVcIikuZXEoMCkudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJjcmVkaXQgY2FyZFwiKSB8fCAkKHRoaXMpLmZpbmQoXCIjcmFkaW8tYXBwbGVwYXlcIikubGVuZ3RoPjAgfHwgJCh0aGlzKS5maW5kKFwiI3JhZGlvLWdvb2dsZXBheXN0cmlwZXVwZVwiKS5sZW5ndGg+MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQmxvY2tsaXN0JzpcclxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJChcIi5jaGVja291dC1zdGVwLS1wYXltZW50XCIpLmZpbmQoXCIuY2hlY2tvdXQtdmlldy1jb250ZW50XCIpLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmNoZWNrb3V0LXN0ZXAtLXBheW1lbnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuY2hlY2tvdXQtdmlldy1jb250ZW50XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKFwibGkuZm9ybS1jaGVja2xpc3QtaXRlbVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKFwiLnBheW1lbnRQcm92aWRlckhlYWRlci1uYW1lXCIpLmVxKDApLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiY3JlZGl0IGNhcmRcIikgfHwgJCh0aGlzKS5maW5kKFwiI3JhZGlvLWFwcGxlcGF5XCIpLmxlbmd0aD4wIHx8ICQodGhpcykuZmluZChcIiNyYWRpby1nb29nbGVwYXlzdHJpcGV1cGVcIikubGVuZ3RoPjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkgeyAgICBcclxuICAgIHV0aWxzLmFwaS5jYXJ0LmdldENhcnQoe2luY2x1ZGVPcHRpb25zOiB0cnVlfSwgKGVyciwgbXlDYXJ0KSA9PiB7ICAgICAgICBcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBpZiAobXlDYXJ0KSB7XHJcbiAgICAgICAgICAgIGNhcnRJdGVtcyA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBteUNhcnQuaWQsXHJcbiAgICAgICAgICAgICAgICBiYXNlQW1vdW50OiBteUNhcnQuYmFzZUFtb3VudCxcclxuICAgICAgICAgICAgICAgIGxpbmVJdGVtczogbXlDYXJ0LmxpbmVJdGVtcyxcclxuICAgICAgICAgICAgfTsgIFxyXG4gICAgICAgICAgICBsZXQgZ3JvdXAgPSAkKFwiW25hbWU9Y3VzdG9tZXItZ3JvdXBdXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICBpZiAoZ3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGlmIChncm91cCA9PSBcIkJsb2NrbGlzdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hpcG1lbnQoKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja1Byb2R1Y3RzKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICB2YXIgY2hlY2tJbml0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoXCIjY2FydC1lZGl0LWxpbmtcIikubGVuZ3RoPjAgJiYgKFwiLmNhcnQtc2VjdGlvblwiKS5sZW5ndGg+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJJbnRlcnZhbChjaGVja0luaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRHZXREZWxpdmVyeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYWN0aW9uID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIi5jYXJ0LWFjdGlvbnMgYnV0dG9uXCIpLmxlbmd0aD4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGJhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5jYXJ0LWFjdGlvbnMgYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydFNldERlbGl2ZXJ5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgNTAwKTsgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9saWIvcmVxdWVzdCc7XG5cbmltcG9ydCBDb3VudHJ5QXBpIGZyb20gJy4vYXBpL2NvdW50cmllcyc7XG5pbXBvcnQgUHJvZHVjdEFwaSBmcm9tICcuL2FwaS9wcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0QXR0cmlidXRlc0FwaSBmcm9tICcuL2FwaS9wcm9kdWN0LWF0dHJpYnV0ZXMnO1xuaW1wb3J0IFNlYXJjaEFwaSBmcm9tICcuL2FwaS9zZWFyY2gnO1xuaW1wb3J0IENhcnRBcGkgZnJvbSAnLi9hcGkvY2FydCc7XG5cbmNvbnN0IGludGVybmFscyA9IHt9O1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHJlcXVlc3QgYSBwYWdlIHZpYSBhamF4XG4gKlxuICogQHBhcmFtIHVybFxuICogQHBhcmFtIG9wdGlvbnNcbiAqIEBwYXJhbSBjYWxsYmFja1xuICovXG5pbnRlcm5hbHMuZ2V0UGFnZSA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgcmVxdWVzdCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcmVxdWVzdE9wdGlvbnM6IG9wdGlvbnMsXG4gICAgfSwgY2FsbGJhY2spO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvdW50cnk6IG5ldyBDb3VudHJ5QXBpKCksXG4gICAgcHJvZHVjdEF0dHJpYnV0ZXM6IG5ldyBQcm9kdWN0QXR0cmlidXRlc0FwaSgpLFxuICAgIHByb2R1Y3Q6IG5ldyBQcm9kdWN0QXBpKCksXG4gICAgc2VhcmNoOiBuZXcgU2VhcmNoQXBpKCksXG4gICAgY2FydDogbmV3IENhcnRBcGkoKSxcbiAgICBnZXRQYWdlOiBpbnRlcm5hbHMuZ2V0UGFnZSxcbn07XG4iLCJpbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9saWIvcmVxdWVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzXG57XG4gICAgLyoqXG4gICAgICogQENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmVyc2lvbikge1xuICAgICAgICB0aGlzLnJlbW90ZVZlcnNpb24gPSB2ZXJzaW9uIHx8ICd2MSc7XG4gICAgICAgIHRoaXMucmVtb3RlQmFzZUVuZHBvaW50ID0gJy9yZW1vdGUvJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kIFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ0RFTEVURSddXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJlbW90ZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgbWFrZVJlcXVlc3QodXJsLCBtZXRob2QsIG9wdGlvbnMsIHJlbW90ZSwgY2FsbGJhY2spIHtcbiAgICAgICAgcmVxdWVzdCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgIHJlbW90ZSxcbiAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zOiBvcHRpb25zLFxuICAgICAgICB9LCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZW5kcG9pbnRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kIFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ0RFTEVURSddXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIHJlbW90ZVJlcXVlc3QoZW5kcG9pbnQsIG1ldGhvZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgcmVtb3RlVXJsID0gdGhpcy5yZW1vdGVCYXNlRW5kcG9pbnQgKyB0aGlzLnJlbW90ZVZlcnNpb24gKyBlbmRwb2ludDtcblxuICAgICAgICB0aGlzLm1ha2VSZXF1ZXN0KHJlbW90ZVVybCwgbWV0aG9kLCBvcHRpb25zLCB0cnVlLCBjYWxsYmFjayk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcbmltcG9ydCBIb29rcyBmcm9tICcuLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQmFzZSB7XG4gICAgLyoqXG4gICAgICogR2V0IGEgY29sbGVjdGlvbiBvZiBDYXJ0cy4gRm9yIG5vdywgdGhpcyB3aWxsIG9ubHkgcmV0dXJuIGFuIGFycmF5IG9mIGEgc2luZ2xlIGNhcnQgYXMgbXVsdGlwbGUgY2FydHMgcGVyIHNlc3Npb25cbiAgICAgKiBhcmUgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgZ2V0Q2FydHMob3B0aW9ucyA9IHt9LCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgdXJsID0gJy9hcGkvc3RvcmVmcm9udC9jYXJ0cyc7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaW5jbHVkZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHVybCA9IHRoaXMuaW5jbHVkZU9wdGlvbnModXJsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFrZVJlcXVlc3QodXJsLCAnR0VUJywgb3B0aW9ucywgdHJ1ZSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgQ2FydCdzIGRldGFpbHMsIGVpdGhlciB3aXRoIG9yIHdpdGhvdXQgUHJvZHVjdCBPcHRpb24gc2VsZWN0aW9ucy5cbiAgICAgKiBDYW4gYWxzbyBiZSB1c2VkIHRvIGdldCBhIHBhcnRpY3VsYXIgY2FydCBwcm92aWRlZCBhIGNhcnRJZCBpbiB0aGUgb3B0aW9ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBnZXRDYXJ0KG9wdGlvbnMgPSB7fSwgY2FsbGJhY2spIHtcbiAgICAgICAgLyogSWYgbm8gY2FydCBJRCBpcyBwcm92aWRlZCwgZ2V0IHRoZSBjb2xsZWN0aW9uIG9mIGNhcnRzIGFuZCByZXR1cm4gdGhlIGZpcnN0IG9uZSAqL1xuICAgICAgICBpZiAoIW9wdGlvbnMuY2FydElkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDYXJ0cyhvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4gY2FsbGJhY2soZXJyLCByZXNwb25zZVswXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVybCA9IGAvYXBpL3N0b3JlZnJvbnQvY2FydHMvJHtvcHRpb25zLmNhcnRJZH1gO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmluY2x1ZGVPcHRpb25zKSB7XG4gICAgICAgICAgICB1cmwgPSB0aGlzLmluY2x1ZGVPcHRpb25zKHVybCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1ha2VSZXF1ZXN0KHVybCwgJ0dFVCcsIG9wdGlvbnMsIHRydWUsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHRoZSBwYXJhbWV0ZXJzIHRvIGEgVVJMIG5lZWRlZCB0byBnZXQgcHJvZHVjdCBvcHRpb24gZGV0YWlscyBvbiBjYXJ0IGxpbmUgaXRlbXNcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgaW5jbHVkZU9wdGlvbnModXJsKSB7XG4gICAgICAgIHJldHVybiBgJHt1cmx9P2luY2x1ZGU9bGluZUl0ZW1zLnBoeXNpY2FsSXRlbXMub3B0aW9ucyxsaW5lSXRlbXMuZGlnaXRhbEl0ZW1zLm9wdGlvbnNgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIHN1bSBvZiB0aGUgY2FydCBsaW5lIGl0ZW0gcXVhbnRpdGllc1xuICAgICAqXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGdldENhcnRRdWFudGl0eShvcHRpb25zID0ge30sIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZ2V0Q2FydChvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHF1YW50aXR5ID0gMDtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcnQgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lSXRlbVF1YW50aXRpZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgIGNhcnQubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXMsXG4gICAgICAgICAgICAgICAgICAgIGNhcnQubGluZUl0ZW1zLmRpZ2l0YWxJdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgY2FydC5saW5lSXRlbXMuY3VzdG9tSXRlbXMsXG4gICAgICAgICAgICAgICAgXS5yZWR1Y2UoKGEsIGIpID0+IGEuY29uY2F0KGIpKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGxpbmVJdGVtID0+ICFsaW5lSXRlbS5wYXJlbnRJZClcbiAgICAgICAgICAgICAgICAgICAgLm1hcChsaW5lSXRlbSA9PiBsaW5lSXRlbS5xdWFudGl0eSlcbiAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjdW11bGF0b3IsIGxpbmVJdGVtUXVhbnRpdHkpID0+IGFjY3VtdWxhdG9yICsgbGluZUl0ZW1RdWFudGl0eSwgMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2lmdENlcnRpZmljYXRlUXVhbnRpdHkgPSBjYXJ0LmxpbmVJdGVtcy5naWZ0Q2VydGlmaWNhdGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBxdWFudGl0eSA9IGxpbmVJdGVtUXVhbnRpdGllcyArIGdpZnRDZXJ0aWZpY2F0ZVF1YW50aXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcXVhbnRpdHkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgaXRlbSB0byBjYXJ0IHdpdGggb3B0aW9ucyAodmFyaWFudHMpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBmb3JtRGF0YVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgaXRlbUFkZChmb3JtRGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5yZW1vdGVSZXF1ZXN0KCcvY2FydC9hZGQnLCAnUE9TVCcsIHsgZm9ybURhdGEgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVtaXREYXRhID0ge1xuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIEhvb2tzLmVtaXQoJ2NhcnQtaXRlbS1hZGQtcmVtb3RlJywgZW1pdERhdGEpO1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjYXJ0IGl0ZW0gcXVhbnRpdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gaXRlbUlkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8RnVuY3Rpb259IHF0eVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb258bnVsbH0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBpdGVtVXBkYXRlKGl0ZW1JZCwgcXR5LCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgY2FsbGJhY2tBcmcgPSBjYWxsYmFjaztcbiAgICAgICAgbGV0IGl0ZW1zO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1JZCkgJiYgdHlwZW9mIHF0eSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2tBcmcgPSBxdHk7XG4gICAgICAgICAgICBpdGVtcyA9IGl0ZW1JZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW1JZCxcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IHF0eSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlKGl0ZW1zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW1pdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgSG9va3MuZW1pdCgnY2FydC1pdGVtLXVwZGF0ZS1yZW1vdGUnLCBlbWl0RGF0YSk7XG4gICAgICAgICAgICBjYWxsYmFja0FyZyhlcnIsIHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGNhcnQgaXRlbXNcbiAgICAgKlxuICAgICAqIENhbGxzIHRoZSBpbnRlcm5hbCB1cGRhdGUgZnVuY3Rpb24gd2l0aCBxdWFudGl0eTogMFxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGl0ZW1JZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgaXRlbVJlbW92ZShpdGVtSWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBpdGVtSWQsXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMudXBkYXRlKGl0ZW1zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW1pdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgSG9va3MuZW1pdCgnY2FydC1pdGVtLXJlbW92ZS1yZW1vdGUnLCBlbWl0RGF0YSk7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGdpZnR3cmFwcGluZyBvcHRpb25zXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGl0ZW1JZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fEZ1bmN0aW9ufSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbnxudWxsfSBjYWxsYmFja1xuICAgICAqL1xuICAgIGdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zKGl0ZW1JZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBsZXQgY2FsbGJhY2tBcmcgPSBjYWxsYmFjaztcblxuICAgICAgICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrQXJnID0gb3B0cztcbiAgICAgICAgICAgIG9wdHMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVtb3RlUmVxdWVzdChgL2dpZnQtd3JhcHBpbmcvJHtpdGVtSWR9YCwgJ0dFVCcsIG9wdHMsIGNhbGxiYWNrQXJnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgZ2lmdHdyYXBwaW5nIG9wdGlvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtSWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIHN1Ym1pdEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb24oaXRlbUlkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucmVtb3RlUmVxdWVzdChgL2dpZnQtd3JhcHBpbmcvJHtpdGVtSWR9YCwgJ1BPU1QnLCB7IHBhcmFtcyB9LCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNhcnQgaXRlbXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICB1cGRhdGUoaXRlbXMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlbW90ZVJlcXVlc3QoJy9jYXJ0L3VwZGF0ZScsICdQT1NUJywgeyBwYXJhbXM6IHBheWxvYWQgfSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjYXJ0IGNvbnRlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBnZXRDb250ZW50KG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgbGV0IGNhbGxiYWNrQXJnID0gY2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFja0FyZyA9IG9wdHM7XG4gICAgICAgICAgICBvcHRzID0ge307XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1ha2VSZXF1ZXN0KCcvY2FydC5waHAnLCAnR0VUJywgb3B0cywgZmFsc2UsIGNhbGxiYWNrQXJnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2FydCBzaGlwcGluZyBxdW90ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fE9iamVjdH0gcmVuZGVyV2l0aFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgZ2V0U2hpcHBpbmdRdW90ZXMocGFyYW1zLCByZW5kZXJXaXRoLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9O1xuICAgICAgICBsZXQgY2FsbGJhY2tBcmcgPSBjYWxsYmFjaztcbiAgICAgICAgbGV0IHJlbmRlcldpdGhBcmcgPSByZW5kZXJXaXRoO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2tBcmcgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrQXJnID0gcmVuZGVyV2l0aEFyZztcbiAgICAgICAgICAgIHJlbmRlcldpdGhBcmcgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlbmRlcldpdGhBcmcpIHtcbiAgICAgICAgICAgIG9wdGlvbnMudGVtcGxhdGUgPSByZW5kZXJXaXRoQXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW1vdGVSZXF1ZXN0KCcvc2hpcHBpbmctcXVvdGUnLCAnR0VUJywgb3B0aW9ucywgY2FsbGJhY2tBcmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBzaGlwcGluZyBxdW90ZSBiYXNlZCBvbiBxdW90ZUlkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcXVvdGVJZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgc3VibWl0U2hpcHBpbmdRdW90ZShxdW90ZUlkLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgc2hpcHBpbmdfbWV0aG9kOiBxdW90ZUlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlbW90ZVJlcXVlc3QoJy9zaGlwcGluZy1xdW90ZScsICdQT1NUJywgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGEgY291cG9uIGNvZGUgb3IgZ2lmdCBjZXJ0aWZpY2F0ZSB0byB0aGUgY2FydFxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvZGVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGFwcGx5Q29kZShjb2RlLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZW1vdGVSZXF1ZXN0KCcvYXBwbHktY29kZScsICdQT1NUJywgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGEgY291cG9uIGNvZGUgb3IgZ2lmdCBjZXJ0aWZpY2F0ZSB0byB0aGUgY2FydFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvZGVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGFwcGx5R2lmdENlcnRpZmljYXRlKGNvZGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBjb2RlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlbW90ZVJlcXVlc3QoJy9naWZ0LWNlcnRpZmljYXRlcycsICdQT1NUJywgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQmFzZVxue1xuICAgIC8qKlxuICAgICAqIEBDb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZlcnNpb24pIHtcbiAgICAgICAgLy8gY2FsbCBwYXJlbnRcbiAgICAgICAgc3VwZXIodmVyc2lvbik7XG5cbiAgICAgICAgLy8gc2V0IHVwIGNsYXNzIHZhcmlhYmxlc1xuICAgICAgICB0aGlzLmVuZHBvaW50ID0gJy9jb3VudHJ5LXN0YXRlcy8nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogR2V0IGNvdW50cnkgZGF0YSBieSBpZCB3cmFwcGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGdldEJ5SWQoaWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZW5kcG9pbnQgKyBpZDtcblxuICAgICAgICB0aGlzLnJlbW90ZVJlcXVlc3QodXJsLCAnR0VUJywge30sIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY291bnRyeSBkYXRhIGJ5IGNvdW50cnkgbmFtZVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgZ2V0QnlOYW1lKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZW5kcG9pbnQgKyBuYW1lO1xuXG4gICAgICAgIHRoaXMucmVtb3RlUmVxdWVzdCh1cmwsICdHRVQnLCB7fSwgY2FsbGJhY2spO1xuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgSG9va3MgZnJvbSAnLi4vaG9va3MnO1xuaW1wb3J0IHsgbm9ybWFsaXplUXVlcnlTdHJpbmdQYXJhbXMgfSBmcm9tICcuLi9saWIvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2VcbntcbiAgICAvKipcbiAgICAgKiBAQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2ZXJzaW9uKSB7XG4gICAgICAgIC8vIGNhbGwgcGFyZW50XG4gICAgICAgIHN1cGVyKHZlcnNpb24pO1xuXG4gICAgICAgIC8vIHNldCB1cCBjbGFzcyB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy5lbmRwb2ludCA9ICcvcHJvZHVjdC1hdHRyaWJ1dGVzLyc7XG4gICAgICAgIHRoaXMuaW5DYXJ0RW5kcG9pbnQgPSAnL2NvbmZpZ3VyZS1vcHRpb25zLyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHByb2R1Y3RJZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBvcHRpb25DaGFuZ2UocHJvZHVjdElkLCBwYXJhbXMsIHRlbXBsYXRlID0gbnVsbCwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlQXJnID0gdGVtcGxhdGU7XG4gICAgICAgIGxldCBjYWxsYmFja0FyZyA9IGNhbGxiYWNrO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGVtcGxhdGVBcmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrQXJnID0gdGVtcGxhdGVBcmc7XG4gICAgICAgICAgICB0ZW1wbGF0ZUFyZyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3JtYWxpemVkUXMgPSBub3JtYWxpemVRdWVyeVN0cmluZ1BhcmFtcyhwYXJhbXMpO1xuICAgICAgICB0aGlzLnJlbW90ZVJlcXVlc3QodGhpcy5lbmRwb2ludCArIHByb2R1Y3RJZCwgJ1BPU1QnLCB7IHBhcmFtczogbm9ybWFsaXplZFFzLCB0ZW1wbGF0ZTogdGVtcGxhdGVBcmcgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVtaXREYXRhID0ge1xuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIEhvb2tzLmVtaXQoJ3Byb2R1Y3Qtb3B0aW9ucy1jaGFuZ2UtcmVtb3RlJywgZW1pdERhdGEpO1xuICAgICAgICAgICAgY2FsbGJhY2tBcmcoZXJyLCByZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpdGVtSWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgY29uZmlndXJlSW5DYXJ0KGl0ZW1JZCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnJlbW90ZVJlcXVlc3QodGhpcy5pbkNhcnRFbmRwb2ludCArIGl0ZW1JZCwgJ0dFVCcsIHBhcmFtcywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2VcbntcbiAgICAvKipcbiAgICAgKiBAQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2ZXJzaW9uKSB7XG4gICAgICAgIC8vIGNhbGwgcGFyZW50XG4gICAgICAgIHN1cGVyKHZlcnNpb24pO1xuXG4gICAgICAgIC8vIHNldCB1cCBjbGFzcyB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy5lbmRwb2ludCA9ICcvcHJvZHVjdHMucGhwP3Byb2R1Y3RJZD0nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHByb2R1Y3RJZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGdldEJ5SWQocHJvZHVjdElkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZW5kcG9pbnQgKyBwcm9kdWN0SWQ7XG4gICAgICAgIGxldCBwYXJhbXNBcmcgPSBwYXJhbXM7XG4gICAgICAgIGxldCBjYWxsYmFja0FyZyA9IGNhbGxiYWNrO1xuXG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNBcmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrQXJnID0gcGFyYW1zQXJnO1xuICAgICAgICAgICAgcGFyYW1zQXJnID0ge307XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1ha2VSZXF1ZXN0KHVybCwgJ0dFVCcsIHBhcmFtc0FyZywgZmFsc2UsIGNhbGxiYWNrQXJnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgSG9va3MgZnJvbSAnLi4vaG9va3MnO1xuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBCYXNlXG57XG4gICAgLyoqXG4gICAgICogQENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmVyc2lvbikge1xuICAgICAgICAvLyBjYWxsIHBhcmVudFxuICAgICAgICBzdXBlcih2ZXJzaW9uKTtcblxuICAgICAgICAvLyBzZXQgdXAgY2xhc3MgdmFyaWFibGVzXG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSAnL3NlYXJjaC5waHA/c2VhcmNoX3F1ZXJ5PSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHNlYXJjaCByZXN1bHRzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgc2VhcmNoKHF1ZXJ5LCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZW5kcG9pbnQgKyBlbmNvZGVVUklDb21wb25lbnQocXVlcnkpO1xuICAgICAgICBsZXQgcGFyYW1zQXJnID0gcGFyYW1zO1xuICAgICAgICBsZXQgY2FsbGJhY2tBcmcgPSBjYWxsYmFjaztcblxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtc0FyZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2tBcmcgPSBwYXJhbXNBcmc7XG4gICAgICAgICAgICBwYXJhbXNBcmcgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIEhvb2tzLmVtaXQoJ3NlYXJjaC1xdWljay1yZW1vdGUnLCBxdWVyeSk7XG4gICAgICAgIHRoaXMubWFrZVJlcXVlc3QodXJsLCAnR0VUJywgcGFyYW1zQXJnLCBmYWxzZSwgY2FsbGJhY2tBcmcpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDYXJ0SG9va3MgZnJvbSAnLi9ob29rcy9jYXJ0JztcbmltcG9ydCBDb29raWVIb29rcyBmcm9tICcuL2hvb2tzL2Nvb2tpZSc7XG5pbXBvcnQgQ3VycmVuY3lTZWxlY3Rvckhvb2tzIGZyb20gJy4vaG9va3MvY3VycmVuY3ktc2VsZWN0b3InO1xuaW1wb3J0IFByb2R1Y3RIb29rcyBmcm9tICcuL2hvb2tzL3Byb2R1Y3QnO1xuaW1wb3J0IFNlYXJjaEhvb2tzIGZyb20gJy4vaG9va3Mvc2VhcmNoJztcbmltcG9ydCBGYWNldGVkU2VhcmNoSG9va3MgZnJvbSAnLi9ob29rcy9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgU29ydEJ5SG9va3MgZnJvbSAnLi9ob29rcy9zb3J0LWJ5JztcblxuY29uc3QgaW50ZXJuYWxzID0ge307XG5cbmludGVybmFscy5jbGFzc2VzID0ge1xuICAgIGNhcnQ6IG5ldyBDYXJ0SG9va3MoKSxcbiAgICBjb29raWU6IG5ldyBDb29raWVIb29rcygpLFxuICAgIGN1cnJlbmN5U2VsZWN0b3I6IG5ldyBDdXJyZW5jeVNlbGVjdG9ySG9va3MoKSxcbiAgICBwcm9kdWN0OiBuZXcgUHJvZHVjdEhvb2tzKCksXG4gICAgc2VhcmNoOiBuZXcgU2VhcmNoSG9va3MoKSxcbiAgICBmYWNldGVkU2VhcmNoOiBuZXcgRmFjZXRlZFNlYXJjaEhvb2tzKCksXG4gICAgc29ydEJ5OiBuZXcgU29ydEJ5SG9va3MoKSxcbn07XG5cbmludGVybmFscy5wYXJzZUhvb2tzID0gZnVuY3Rpb24gKGhvb2tOYW1lKSB7XG4gICAgY29uc3QgaG9va1R5cGUgPSBob29rTmFtZS5zcGxpdCgnLScpWzBdO1xuXG4gICAgaWYgKGludGVybmFscy5jbGFzc2VzW2hvb2tUeXBlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtob29rVHlwZX0gaXMgbm90IGEgdmFsaWQgaG9va1R5cGVgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJuYWxzLmNsYXNzZXNbaG9va1R5cGVdO1xufTtcblxuY2xhc3MgSG9va3Mge1xuICAgIG9uKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBob29rID0gaW50ZXJuYWxzLnBhcnNlSG9va3MoaG9va05hbWUpO1xuXG4gICAgICAgIHJldHVybiBob29rLm9uKGhvb2tOYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgb2ZmKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBob29rID0gaW50ZXJuYWxzLnBhcnNlSG9va3MoaG9va05hbWUpO1xuXG4gICAgICAgIHJldHVybiBob29rLm9mZihob29rTmFtZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIGVtaXQoaG9va05hbWUpIHtcbiAgICAgICAgY29uc3QgaG9vayA9IGludGVybmFscy5wYXJzZUhvb2tzKGhvb2tOYW1lKTtcblxuICAgICAgICByZXR1cm4gaG9vay5lbWl0LmFwcGx5KGhvb2ssIGFyZ3VtZW50cyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgSG9va3MoKTtcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRlbWl0dGVyMic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQmFzZUhvb2tzIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQmFzZUhvb2tzIHtcblxuICAgIC8qKlxuICAgICAqIEBDb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBjYWxsIHBhcmVudFxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaXRlbUFkZCgpO1xuICAgIH1cblxuICAgIGl0ZW1BZGQoKSB7XG4gICAgICAgIHRoaXMuJGJvZHkub24oJ3N1Ym1pdCcsICdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdjYXJ0LWl0ZW0tYWRkJywgZXZlbnQsIGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlSG9va3MgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBCYXNlSG9va3Mge31cbiIsImltcG9ydCBCYXNlSG9va3MgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBCYXNlSG9va3Mge1xuXG4gICAgLyoqXG4gICAgICogQENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIGNhbGwgcGFyZW50XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW5jeVNlbGVjdG9yKCk7XG4gICAgfVxuXG4gICAgY3VycmVuY3lTZWxlY3RvcigpIHtcbiAgICAgICAgdGhpcy4kYm9keS5vbignaW5wdXQnLCAnW2RhdGEtY3VycmVuY3ktc2VsZWN0b3ItdG9nZ2xlXScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdjdXJyZW5jeVNlbGVjdG9yLXRvZ2dsZScsIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2VIb29rcyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2VIb29rcyB7XG5cbiAgICAvKipcbiAgICAgKiBAQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gY2FsbCBwYXJlbnRcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnNlYXJjaEV2ZW50cygpO1xuICAgIH1cblxuICAgIHNlYXJjaEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kYm9keS5vbignY2xpY2snLCAnW2RhdGEtZmFjZXRlZC1zZWFyY2gtZmFjZXRdJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kYm9keS5vbignc3VibWl0JywgJ1tkYXRhLWZhY2V0ZWQtc2VhcmNoLXJhbmdlXScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2VIb29rcyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2VIb29rcyB7XG5cbiAgICAvKipcbiAgICAgKiBAQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gY2FsbCBwYXJlbnRcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnNDaGFuZ2UoKTtcbiAgICB9XG5cbiAgICBvcHRpb25zQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLiRib2R5Lm9uKCdjaGFuZ2UnLCAnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdwcm9kdWN0LW9wdGlvbi1jaGFuZ2UnLCBldmVudCwgZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2VIb29rcyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2VIb29rcyB7XG5cbiAgICAvKipcbiAgICAgKiBAQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gY2FsbCBwYXJlbnRcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnF1aWNrU2VhcmNoKCk7XG4gICAgfVxuXG4gICAgcXVpY2tTZWFyY2goKSB7XG4gICAgICAgIHRoaXMuJGJvZHkub24oJ2lucHV0JywgJ1tkYXRhLXNlYXJjaC1xdWlja10nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc2VhcmNoLXF1aWNrJywgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQmFzZUhvb2tzIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2VIb29rcyB7XG5cbiAgICAvKipcbiAgICAgKiBAQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gY2FsbCBwYXJlbnRcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnNvcnRCeUV2ZW50cygpO1xuICAgIH1cblxuICAgIHNvcnRCeUV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kYm9keS5vbignc3VibWl0JywgJ1tkYXRhLXNvcnQtYnldJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3NvcnRCeS1zdWJtaXR0ZWQnLCBldmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGJvZHkub24oJ2NoYW5nZScsICdbZGF0YS1zb3J0LWJ5XSBzZWxlY3QnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc29ydEJ5LXNlbGVjdC1jaGFuZ2VkJywgZXZlbnQpO1xuXG4gICAgICAgICAgICBpZiAoISBldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuY2xvc2VzdCgnZm9ybScpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGUgY3VycmVudCBtZXRob2QgcGFzc2VkIGluIGlzIHZhbGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRIVFRQTWV0aG9kKG1ldGhvZCkge1xuICAgIGNvbnN0IGFsbG93ZWRNZXRob2RzID0gWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnREVMRVRFJ107XG5cbiAgICByZXR1cm4gYWxsb3dlZE1ldGhvZHMuaW5kZXhPZihtZXRob2QpICE9PSAtMTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVsYXRpdmVVcmwsIG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHJlbW90ZTogZmFsc2UsXG4gICAgICAgIHJlcXVlc3RPcHRpb25zOiB7XG4gICAgICAgICAgICBiYXNlVXJsOiBudWxsLFxuICAgICAgICAgICAgZm9ybURhdGE6IG51bGwsXG4gICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgY29uZmlnOiB7fSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBbXSxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0cyk7XG4gICAgY29uc3QgZGF0YSA9IG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuZm9ybURhdGEgPyBvcHRpb25zLnJlcXVlc3RPcHRpb25zLmZvcm1EYXRhIDogb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5wYXJhbXM7XG4gICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgJ3N0ZW5jaWwtY29uZmlnJzogb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5jb25maWcgPyBKU09OLnN0cmluZ2lmeShvcHRpb25zLnJlcXVlc3RPcHRpb25zLmNvbmZpZykgOiAne30nLFxuICAgICAgICAnc3RlbmNpbC1vcHRpb25zJzogJ3t9JyxcbiAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXG4gICAgfTtcbiAgICBjb25zdCByZXF1ZXN0ZWRUZW1wbGF0ZSA9IG9wdGlvbnMucmVxdWVzdE9wdGlvbnMudGVtcGxhdGU7XG5cbiAgICBsZXQgdXNpbmdUZW1wbGF0ZXMgPSBmYWxzZTtcbiAgICBsZXQgdXNpbmdTZWN0aW9ucyA9IGZhbHNlO1xuICAgIGxldCB0ZW1wbGF0ZXMgPSBbXTtcblxuXG4gICAgLy8gTm90IGEgdmFsaWQgbWV0aG9kXG4gICAgaWYgKCFpc1ZhbGlkSFRUUE1ldGhvZChvcHRpb25zLm1ldGhvZCkpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBFcnJvcignTm90IGEgdmFsaWQgSFRUUCBtZXRob2QnKSk7XG4gICAgfVxuXG5cbiAgICBpZiAodHlwZW9mKHJlcXVlc3RlZFRlbXBsYXRlKSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVxdWVzdGVkVGVtcGxhdGUpKSB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZTtcblxuICAgICAgICB1c2luZ1NlY3Rpb25zID0gdHJ1ZTtcbiAgICAgICAgdGVtcGxhdGVzID0gW107XG5cbiAgICAgICAgZm9yICh0ZW1wbGF0ZSBpbiByZXF1ZXN0ZWRUZW1wbGF0ZSkge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3RlZFRlbXBsYXRlLmhhc093blByb3BlcnR5KHRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlcy5wdXNoKHJlcXVlc3RlZFRlbXBsYXRlW3RlbXBsYXRlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZihyZXF1ZXN0ZWRUZW1wbGF0ZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRlbXBsYXRlcyA9IFtyZXF1ZXN0ZWRUZW1wbGF0ZV07XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlcXVlc3RlZFRlbXBsYXRlKSAmJiByZXF1ZXN0ZWRUZW1wbGF0ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRlbXBsYXRlcyA9IHJlcXVlc3RlZFRlbXBsYXRlO1xuICAgIH1cblxuICAgIGlmICh0ZW1wbGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB1c2luZ1RlbXBsYXRlcyA9IHRydWU7XG5cbiAgICAgICAgaGVhZGVyc1snc3RlbmNpbC1vcHRpb25zJ10gPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICByZW5kZXJfd2l0aDogdGVtcGxhdGVzLmpvaW4oJywnKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHVybCA9IHJlbGF0aXZlVXJsO1xuICAgIGlmIChvcHRpb25zLnJlcXVlc3RPcHRpb25zLmJhc2VVcmwpIHtcbiAgICAgICAgdXJsID0gYCR7b3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5iYXNlVXJsfSR7dXJsfWA7XG4gICAgfVxuXG4gICAgLy8gbWFrZSBhamF4IHJlcXVlc3QgdXNpbmcganF1ZXJ5XG4gICAgJC5hamF4KHtcbiAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudFR5cGU6IG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuZm9ybURhdGEgPyBmYWxzZSA6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICBwcm9jZXNzRGF0YTogIW9wdGlvbnMucmVxdWVzdE9wdGlvbnMuZm9ybURhdGEsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJldDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBvcHRpb25zLnJlbW90ZSA/IHJlc3BvbnNlLmNvbnRlbnQgOiByZXNwb25zZTtcblxuICAgICAgICAgICAgaWYgKHVzaW5nVGVtcGxhdGVzKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBgY29tcG9uZW50c2AgcHJlZml4IGZyb20gdGhlIHJlc3BvbnNlIGlmIGl0J3MgYW4gb2JqZWN0XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZihjb250ZW50KSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQga2V5O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoa2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuS2V5ID0ga2V5LnJlcGxhY2UoL15jb21wb25lbnRzXFwvLywgJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50W2NsZWFuS2V5XSA9IGNvbnRlbnRba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZShjb250ZW50W2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgdXNpbmcgXCJzZWN0aW9uc1wiLCBtb3JwaCB0aGUgY29udGVudCBpbnRvIHRoZSBhcmJpdHJhcnkga2V5cyA9PiBjb250ZW50IG9iamVjdC5cbiAgICAgICAgICAgICAgICBpZiAodXNpbmdTZWN0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZVZhcmlhYmxlTmFtZXMgPSBPYmplY3Qua2V5cyhyZXF1ZXN0ZWRUZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wbGF0ZVZhcmlhYmxlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHRlbXBsYXRlVmFyaWFibGUgb2YgdGVtcGxhdGVWYXJpYWJsZU5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50W3RlbXBsYXRlVmFyaWFibGVdID0gY29udGVudFtyZXF1ZXN0ZWRUZW1wbGF0ZVt0ZW1wbGF0ZVZhcmlhYmxlXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY29udGVudFtyZXF1ZXN0ZWRUZW1wbGF0ZVt0ZW1wbGF0ZVZhcmlhYmxlXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldC5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJldCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoWEhSLCB0ZXh0U3RhdHVzLCBlcnIpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGhlYWRlcnMsXG4gICAgfSk7XG59XG4iLCIvLyBVdGlsaXRpZXNcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbi8qKlxuICogTm9ybWFsaXplIHF1ZXJ5c3RyaW5nIHBhcmFtcy4gUmVtb3ZlIGVtcHR5IGFycmF5IHZhbHVlc1xuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtc1xuICogQHJldHVybnMge3N0cmluZ30gTm9ybWFsaXplZCBxdWVyeXN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUXVlcnlTdHJpbmdQYXJhbXMocGFyYW1zKSB7XG4gICAgY29uc3QgcXNQYXJhbXMgPSBxdWVyeVN0cmluZy5wYXJzZShwYXJhbXMpO1xuXG4gICAgY29uc3QgaXNWYWxpZFBhcmFtID0gKHZhbHVlKSA9PiAodmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSB1bmRlZmluZWQpO1xuXG4gICAgY29uc3Qgb3B0aW9uc0NvbGxlY3Rpb24gPSBPYmplY3Qua2V5cyhxc1BhcmFtcykucmVkdWNlKChub3JtYWxpemVkLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IHBhcmFtO1xuXG4gICAgICAgIGlmIChxc1BhcmFtc1trZXldIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkID0gcXNQYXJhbXNba2V5XS5maWx0ZXIoaXNWYWxpZFBhcmFtKTtcbiAgICAgICAgICAgIHBhcmFtID0geyBba2V5XTogZmlsdGVyZWQgfTtcbiAgICAgICAgfSBlbHNlIGlmIChpc1ZhbGlkUGFyYW0ocXNQYXJhbXNba2V5XSkpIHtcbiAgICAgICAgICAgIHBhcmFtID0geyBba2V5XTogcXNQYXJhbXNba2V5XSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG5vcm1hbGl6ZWQsIHBhcmFtKTtcbiAgICB9LCB7fSk7XG5cbiAgICBjb25zdCBwYXJhbVN0cmluZyA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShvcHRpb25zQ29sbGVjdGlvbik7XG4gICAgcmV0dXJuIHBhcmFtU3RyaW5nO1xufVxuIiwiaW1wb3J0IGhvb2tzIGZyb20gJy4vaG9va3MnO1xuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgdG9vbHMgZnJvbSAnLi90b29scyc7XG5cbmNvbnN0IFN0ZW5jaWxVdGlscyA9IHtcbiAgICBob29rcyxcbiAgICBhcGksXG4gICAgdG9vbHMsXG59O1xuXG5leHBvcnQgeyBob29rcywgYXBpLCB0b29scyB9O1xuZXhwb3J0IGRlZmF1bHQgU3RlbmNpbFV0aWxzO1xuXG4vKiBnbG9iYWwgZGVmaW5lICovXG4oZnVuY3Rpb24gKHJvb3QpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICYmIHJvb3QpIHtcbiAgICAgICAgLy8gSWdub3JlcyBiZWxvdyBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2VzbGludC9lc2xpbnQvaXNzdWVzLzUxNTBcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uICgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItYXJyb3ctY2FsbGJhY2tcbiAgICAgICAgICAgIHJvb3Quc3RlbmNpbFV0aWxzID0gU3RlbmNpbFV0aWxzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBTdGVuY2lsVXRpbHM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnN0ZW5jaWxVdGlscyA9IFN0ZW5jaWxVdGlscztcbiAgICB9XG59KHRoaXMpKTtcbiIsImltcG9ydCBJbWFnZVRvb2wgZnJvbSAnLi90b29scy9pbWFnZSc7XG5pbXBvcnQgSW1hZ2VTcmNzZXRUb29sIGZyb20gJy4vdG9vbHMvaW1hZ2VTcmNzZXQnO1xuaW1wb3J0IFN0b3JhZ2VUb29scyBmcm9tICcuL3Rvb2xzL3N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW1hZ2U6IG5ldyBJbWFnZVRvb2woKSxcbiAgICBpbWFnZVNyY3NldDogbmV3IEltYWdlU3Jjc2V0VG9vbCgpLFxuICAgIHN0b3JhZ2U6IG5ldyBTdG9yYWdlVG9vbHMoKSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgZ2V0U3JjKHBhdGgsIGRpbWVuc2lvbnMpIHtcbiAgICAgICAgLy8gUmVnZXggdG8gdGVzdCBzaXplIHN0cmluZyBpcyBvZiB0aGUgZm9ybSAxMjN4MTIzIG9yIDEwMHdcbiAgICAgICAgY29uc3Qgc2l6ZVJlZ2V4ID0gLyheXFxkK3ckKXwoXihcXGQrPyl4KFxcZCs/KSQpL2c7XG4gICAgICAgIGxldCBzaXplO1xuXG4gICAgICAgIGlmICh0eXBlb2YoZGltZW5zaW9ucykgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGRpbWVuc2lvbnMud2lkdGggfHwgMTAwO1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQgfHwgMTAwO1xuXG4gICAgICAgICAgICBzaXplID0gYCR7d2lkdGh9eCR7aGVpZ2h0fWA7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mKGRpbWVuc2lvbnMpID09PSAnc3RyaW5nJyAmJiBzaXplUmVnZXgudGVzdChkaW1lbnNpb25zKSkge1xuICAgICAgICAgICAgLy8gSWYgZGltZW5zaW9ucyBpcyBhIHN0cmluZyBhbmQgbWF0Y2ggdGhlIE5OTnhOTk4gb3IgTk5OdyBmb3JtYXRcbiAgICAgICAgICAgIHNpemUgPSBkaW1lbnNpb25zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVXNlIHRoZSBvcmlnaW5hbCBpbWFnZSBzaXplXG4gICAgICAgICAgICBzaXplID0gJ29yaWdpbmFsJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRoLnJlcGxhY2UoJ3s6c2l6ZX0nLCBzaXplKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgZ2V0U3Jjc2V0KHVybCwgc2l6ZXMpIHtcbiAgICAgICAgLy8gUmVnZXggdG8gdGVzdCBzaXplIHN0cmluZyBpcyBvZiB0aGUgZm9ybSAxMjN4MTIzIG9yIDEwMHdcbiAgICAgICAgY29uc3Qgc2l6ZVJlZ2V4ID0gLyheXFxkK3ckKXwoXihcXGQrPyl4KFxcZCs/KSQpLztcbiAgICAgICAgLy8gUmVnZXggdG8gdGVzdCB0byB0aGF0IHNyY3NldCBkZXNjcmlwdG9yIGlzIG9mIHRoZSBmb3JtIDF4IDEuNXggMnggT1IgMTIzd1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yUmVnZXggPSAvKF5cXGQrdyQpfCheKFswLTldKFxcLlswLTldKyk/KXgpJC87XG5cbiAgICAgICAgbGV0IHNyY3NldHMgPSB7fTtcblxuICAgICAgICBpZiAoIXNpemVzKSB7XG4gICAgICAgICAgICAvLyBVc2UgZGVmYXVsdCBzcmNzZXRzIGlmIG5vbmUgYXJlIHByb3ZpZGVkXG4gICAgICAgICAgICBzcmNzZXRzID0ge1xuICAgICAgICAgICAgICAgICc4MHcnOiAnODB3JyxcbiAgICAgICAgICAgICAgICAnMTYwdyc6ICcxNjB3JyxcbiAgICAgICAgICAgICAgICAnMzIwdyc6ICczMjB3JyxcbiAgICAgICAgICAgICAgICAnNjQwdyc6ICc2NDB3JyxcbiAgICAgICAgICAgICAgICAnOTYwdyc6ICc5NjB3JyxcbiAgICAgICAgICAgICAgICAnMTI4MHcnOiAnMTI4MHcnLFxuICAgICAgICAgICAgICAgICcxOTIwdyc6ICcxOTIwdycsXG4gICAgICAgICAgICAgICAgJzI1NjB3JzogJzI1NjB3JyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoKHNpemVzID09PSBPYmplY3Qoc2l6ZXMpKSAmJiAhT2JqZWN0LmtleXMoc2l6ZXMpLnNvbWUoZGVzY3JpcHRvciA9PlxuICAgICAgICAgICAgIShkZXNjcmlwdG9yUmVnZXgudGVzdChkZXNjcmlwdG9yKSAmJiBzaXplUmVnZXgudGVzdChzaXplc1tkZXNjcmlwdG9yXSkpXG4gICAgICAgICkpIHtcbiAgICAgICAgICAgIC8vIElmIG9iamVjdCBjb25zaXN0cyBvZiB2YWxpZCBzcmNzZXRzLCB1c2UgaXQgaW5zdGVhZFxuICAgICAgICAgICAgc3Jjc2V0cyA9IHNpemVzO1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBvbmx5IG9uZSBhcmd1bWVudCwgcmV0dXJuIGEgYHNyY2Agb25seSAoYWxzbyB3b3JrcyBmb3IgYHNyY3NldGApXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3Jjc2V0cykubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh1cmwucmVwbGFjZSgnezpzaXplfScsIHNyY3NldHNbT2JqZWN0LmtleXMoc3Jjc2V0cylbMF1dKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3Jjc2V0IGRlc2NyaXB0b3Igb3Igc2l6ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5ldy1jYXBcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHNyY3NldHMpLm1hcChkZXNjcmlwdG9yID0+XG4gICAgICAgICAgICBbdXJsLnJlcGxhY2UoJ3s6c2l6ZX0nLCBzcmNzZXRzW2Rlc2NyaXB0b3JdKSwgZGVzY3JpcHRvcl0uam9pbignICcpXG4gICAgICAgICkuam9pbignLCAnKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBzdG9yYWdlIHR5cGUgKGxpa2UgbG9jYWxTdG9yYWdlIG9yIHNlc3Npb25TdG9yYWdlKSBpcyBhdmFpbGFibGUgZm9yIHVzZVxuICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XZWJfU3RvcmFnZV9BUEkvVXNpbmdfdGhlX1dlYl9TdG9yYWdlX0FQSSNUZXN0aW5nX2Zvcl9hdmFpbGFiaWxpdHlcbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvY2FsU3RvcmFnZUF2YWlsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJyk7XG4gICAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRva2VuID0gJyVbYS1mMC05XXsyfSc7XG52YXIgc2luZ2xlTWF0Y2hlciA9IG5ldyBSZWdFeHAoJygnICsgdG9rZW4gKyAnKXwoW14lXSs/KScsICdnaScpO1xudmFyIG11bHRpTWF0Y2hlciA9IG5ldyBSZWdFeHAoJygnICsgdG9rZW4gKyAnKSsnLCAnZ2knKTtcblxuZnVuY3Rpb24gZGVjb2RlQ29tcG9uZW50cyhjb21wb25lbnRzLCBzcGxpdCkge1xuXHR0cnkge1xuXHRcdC8vIFRyeSB0byBkZWNvZGUgdGhlIGVudGlyZSBzdHJpbmcgZmlyc3Rcblx0XHRyZXR1cm4gW2RlY29kZVVSSUNvbXBvbmVudChjb21wb25lbnRzLmpvaW4oJycpKV07XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIERvIG5vdGhpbmdcblx0fVxuXG5cdGlmIChjb21wb25lbnRzLmxlbmd0aCA9PT0gMSkge1xuXHRcdHJldHVybiBjb21wb25lbnRzO1xuXHR9XG5cblx0c3BsaXQgPSBzcGxpdCB8fCAxO1xuXG5cdC8vIFNwbGl0IHRoZSBhcnJheSBpbiAyIHBhcnRzXG5cdHZhciBsZWZ0ID0gY29tcG9uZW50cy5zbGljZSgwLCBzcGxpdCk7XG5cdHZhciByaWdodCA9IGNvbXBvbmVudHMuc2xpY2Uoc3BsaXQpO1xuXG5cdHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmNhbGwoW10sIGRlY29kZUNvbXBvbmVudHMobGVmdCksIGRlY29kZUNvbXBvbmVudHMocmlnaHQpKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlKGlucHV0KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChpbnB1dCk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdHZhciB0b2tlbnMgPSBpbnB1dC5tYXRjaChzaW5nbGVNYXRjaGVyKSB8fCBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAxOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpbnB1dCA9IGRlY29kZUNvbXBvbmVudHModG9rZW5zLCBpKS5qb2luKCcnKTtcblxuXHRcdFx0dG9rZW5zID0gaW5wdXQubWF0Y2goc2luZ2xlTWF0Y2hlcikgfHwgW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGN1c3RvbURlY29kZVVSSUNvbXBvbmVudChpbnB1dCkge1xuXHQvLyBLZWVwIHRyYWNrIG9mIGFsbCB0aGUgcmVwbGFjZW1lbnRzIGFuZCBwcmVmaWxsIHRoZSBtYXAgd2l0aCB0aGUgYEJPTWBcblx0dmFyIHJlcGxhY2VNYXAgPSB7XG5cdFx0JyVGRSVGRic6ICdcXHVGRkZEXFx1RkZGRCcsXG5cdFx0JyVGRiVGRSc6ICdcXHVGRkZEXFx1RkZGRCdcblx0fTtcblxuXHR2YXIgbWF0Y2ggPSBtdWx0aU1hdGNoZXIuZXhlYyhpbnB1dCk7XG5cdHdoaWxlIChtYXRjaCkge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBEZWNvZGUgYXMgYmlnIGNodW5rcyBhcyBwb3NzaWJsZVxuXHRcdFx0cmVwbGFjZU1hcFttYXRjaFswXV0gPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbMF0pO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0dmFyIHJlc3VsdCA9IGRlY29kZShtYXRjaFswXSk7XG5cblx0XHRcdGlmIChyZXN1bHQgIT09IG1hdGNoWzBdKSB7XG5cdFx0XHRcdHJlcGxhY2VNYXBbbWF0Y2hbMF1dID0gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG1hdGNoID0gbXVsdGlNYXRjaGVyLmV4ZWMoaW5wdXQpO1xuXHR9XG5cblx0Ly8gQWRkIGAlQzJgIGF0IHRoZSBlbmQgb2YgdGhlIG1hcCB0byBtYWtlIHN1cmUgaXQgZG9lcyBub3QgcmVwbGFjZSB0aGUgY29tYmluYXRvciBiZWZvcmUgZXZlcnl0aGluZyBlbHNlXG5cdHJlcGxhY2VNYXBbJyVDMiddID0gJ1xcdUZGRkQnO1xuXG5cdHZhciBlbnRyaWVzID0gT2JqZWN0LmtleXMocmVwbGFjZU1hcCk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gUmVwbGFjZSBhbGwgZGVjb2RlZCBjb21wb25lbnRzXG5cdFx0dmFyIGtleSA9IGVudHJpZXNbaV07XG5cdFx0aW5wdXQgPSBpbnB1dC5yZXBsYWNlKG5ldyBSZWdFeHAoa2V5LCAnZycpLCByZXBsYWNlTWFwW2tleV0pO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbmNvZGVkVVJJKSB7XG5cdGlmICh0eXBlb2YgZW5jb2RlZFVSSSAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBgZW5jb2RlZFVSSWAgdG8gYmUgb2YgdHlwZSBgc3RyaW5nYCwgZ290IGAnICsgdHlwZW9mIGVuY29kZWRVUkkgKyAnYCcpO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRlbmNvZGVkVVJJID0gZW5jb2RlZFVSSS5yZXBsYWNlKC9cXCsvZywgJyAnKTtcblxuXHRcdC8vIFRyeSB0aGUgYnVpbHQgaW4gZGVjb2RlciBmaXJzdFxuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZFVSSSk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIEZhbGxiYWNrIHRvIGEgbW9yZSBhZHZhbmNlZCBkZWNvZGVyXG5cdFx0cmV0dXJuIGN1c3RvbURlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkVVJJKTtcblx0fVxufTtcbiIsIi8qIVxuICogRXZlbnRFbWl0dGVyMlxuICogaHR0cHM6Ly9naXRodWIuY29tL2hpajFueC9FdmVudEVtaXR0ZXIyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzIGhpajFueFxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG47IWZ1bmN0aW9uKHVuZGVmaW5lZCkge1xuXG4gIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSA/IEFycmF5LmlzQXJyYXkgOiBmdW5jdGlvbiBfaXNBcnJheShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgfTtcbiAgdmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGlmICh0aGlzLl9jb25mKSB7XG4gICAgICBjb25maWd1cmUuY2FsbCh0aGlzLCB0aGlzLl9jb25mKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb25maWd1cmUoY29uZikge1xuICAgIGlmIChjb25mKSB7XG5cbiAgICAgIHRoaXMuX2NvbmYgPSBjb25mO1xuXG4gICAgICBjb25mLmRlbGltaXRlciAmJiAodGhpcy5kZWxpbWl0ZXIgPSBjb25mLmRlbGltaXRlcik7XG4gICAgICBjb25mLm1heExpc3RlbmVycyAmJiAodGhpcy5fZXZlbnRzLm1heExpc3RlbmVycyA9IGNvbmYubWF4TGlzdGVuZXJzKTtcbiAgICAgIGNvbmYud2lsZGNhcmQgJiYgKHRoaXMud2lsZGNhcmQgPSBjb25mLndpbGRjYXJkKTtcbiAgICAgIGNvbmYubmV3TGlzdGVuZXIgJiYgKHRoaXMubmV3TGlzdGVuZXIgPSBjb25mLm5ld0xpc3RlbmVyKTtcblxuICAgICAgaWYgKHRoaXMud2lsZGNhcmQpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lclRyZWUgPSB7fTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBFdmVudEVtaXR0ZXIoY29uZikge1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHRoaXMubmV3TGlzdGVuZXIgPSBmYWxzZTtcbiAgICBjb25maWd1cmUuY2FsbCh0aGlzLCBjb25mKTtcbiAgfVxuXG4gIC8vXG4gIC8vIEF0dGVudGlvbiwgZnVuY3Rpb24gcmV0dXJuIHR5cGUgbm93IGlzIGFycmF5LCBhbHdheXMgIVxuICAvLyBJdCBoYXMgemVybyBlbGVtZW50cyBpZiBubyBhbnkgbWF0Y2hlcyBmb3VuZCBhbmQgb25lIG9yIG1vcmVcbiAgLy8gZWxlbWVudHMgKGxlYWZzKSBpZiB0aGVyZSBhcmUgbWF0Y2hlc1xuICAvL1xuICBmdW5jdGlvbiBzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHRyZWUsIGkpIHtcbiAgICBpZiAoIXRyZWUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdmFyIGxpc3RlbmVycz1bXSwgbGVhZiwgbGVuLCBicmFuY2gsIHhUcmVlLCB4eFRyZWUsIGlzb2xhdGVkQnJhbmNoLCBlbmRSZWFjaGVkLFxuICAgICAgICB0eXBlTGVuZ3RoID0gdHlwZS5sZW5ndGgsIGN1cnJlbnRUeXBlID0gdHlwZVtpXSwgbmV4dFR5cGUgPSB0eXBlW2krMV07XG4gICAgaWYgKGkgPT09IHR5cGVMZW5ndGggJiYgdHJlZS5fbGlzdGVuZXJzKSB7XG4gICAgICAvL1xuICAgICAgLy8gSWYgYXQgdGhlIGVuZCBvZiB0aGUgZXZlbnQocykgbGlzdCBhbmQgdGhlIHRyZWUgaGFzIGxpc3RlbmVyc1xuICAgICAgLy8gaW52b2tlIHRob3NlIGxpc3RlbmVycy5cbiAgICAgIC8vXG4gICAgICBpZiAodHlwZW9mIHRyZWUuX2xpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBoYW5kbGVycyAmJiBoYW5kbGVycy5wdXNoKHRyZWUuX2xpc3RlbmVycyk7XG4gICAgICAgIHJldHVybiBbdHJlZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxlYWYgPSAwLCBsZW4gPSB0cmVlLl9saXN0ZW5lcnMubGVuZ3RoOyBsZWFmIDwgbGVuOyBsZWFmKyspIHtcbiAgICAgICAgICBoYW5kbGVycyAmJiBoYW5kbGVycy5wdXNoKHRyZWUuX2xpc3RlbmVyc1tsZWFmXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFt0cmVlXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoKGN1cnJlbnRUeXBlID09PSAnKicgfHwgY3VycmVudFR5cGUgPT09ICcqKicpIHx8IHRyZWVbY3VycmVudFR5cGVdKSB7XG4gICAgICAvL1xuICAgICAgLy8gSWYgdGhlIGV2ZW50IGVtaXR0ZWQgaXMgJyonIGF0IHRoaXMgcGFydFxuICAgICAgLy8gb3IgdGhlcmUgaXMgYSBjb25jcmV0ZSBtYXRjaCBhdCB0aGlzIHBhdGNoXG4gICAgICAvL1xuICAgICAgaWYgKGN1cnJlbnRUeXBlID09PSAnKicpIHtcbiAgICAgICAgZm9yIChicmFuY2ggaW4gdHJlZSkge1xuICAgICAgICAgIGlmIChicmFuY2ggIT09ICdfbGlzdGVuZXJzJyAmJiB0cmVlLmhhc093blByb3BlcnR5KGJyYW5jaCkpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5jb25jYXQoc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB0cmVlW2JyYW5jaF0sIGkrMSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgICAgfSBlbHNlIGlmKGN1cnJlbnRUeXBlID09PSAnKionKSB7XG4gICAgICAgIGVuZFJlYWNoZWQgPSAoaSsxID09PSB0eXBlTGVuZ3RoIHx8IChpKzIgPT09IHR5cGVMZW5ndGggJiYgbmV4dFR5cGUgPT09ICcqJykpO1xuICAgICAgICBpZihlbmRSZWFjaGVkICYmIHRyZWUuX2xpc3RlbmVycykge1xuICAgICAgICAgIC8vIFRoZSBuZXh0IGVsZW1lbnQgaGFzIGEgX2xpc3RlbmVycywgYWRkIGl0IHRvIHRoZSBoYW5kbGVycy5cbiAgICAgICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuY29uY2F0KHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgdHJlZSwgdHlwZUxlbmd0aCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChicmFuY2ggaW4gdHJlZSkge1xuICAgICAgICAgIGlmIChicmFuY2ggIT09ICdfbGlzdGVuZXJzJyAmJiB0cmVlLmhhc093blByb3BlcnR5KGJyYW5jaCkpIHtcbiAgICAgICAgICAgIGlmKGJyYW5jaCA9PT0gJyonIHx8IGJyYW5jaCA9PT0gJyoqJykge1xuICAgICAgICAgICAgICBpZih0cmVlW2JyYW5jaF0uX2xpc3RlbmVycyAmJiAhZW5kUmVhY2hlZCkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5jb25jYXQoc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB0cmVlW2JyYW5jaF0sIHR5cGVMZW5ndGgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuY29uY2F0KHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgdHJlZVticmFuY2hdLCBpKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoYnJhbmNoID09PSBuZXh0VHlwZSkge1xuICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuY29uY2F0KHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgdHJlZVticmFuY2hdLCBpKzIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIE5vIG1hdGNoIG9uIHRoaXMgb25lLCBzaGlmdCBpbnRvIHRoZSB0cmVlIGJ1dCBub3QgaW4gdGhlIHR5cGUgYXJyYXkuXG4gICAgICAgICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5jb25jYXQoc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB0cmVlW2JyYW5jaF0sIGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmNvbmNhdChzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHRyZWVbY3VycmVudFR5cGVdLCBpKzEpKTtcbiAgICB9XG5cbiAgICB4VHJlZSA9IHRyZWVbJyonXTtcbiAgICBpZiAoeFRyZWUpIHtcbiAgICAgIC8vXG4gICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgdHJlZSB3aWxsIGFsbG93IGFueSBtYXRjaCBmb3IgdGhpcyBwYXJ0LFxuICAgICAgLy8gdGhlbiByZWN1cnNpdmVseSBleHBsb3JlIGFsbCBicmFuY2hlcyBvZiB0aGUgdHJlZVxuICAgICAgLy9cbiAgICAgIHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgeFRyZWUsIGkrMSk7XG4gICAgfVxuXG4gICAgeHhUcmVlID0gdHJlZVsnKionXTtcbiAgICBpZih4eFRyZWUpIHtcbiAgICAgIGlmKGkgPCB0eXBlTGVuZ3RoKSB7XG4gICAgICAgIGlmKHh4VHJlZS5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIGxpc3RlbmVyIG9uIGEgJyoqJywgaXQgd2lsbCBjYXRjaCBhbGwsIHNvIGFkZCBpdHMgaGFuZGxlci5cbiAgICAgICAgICBzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHh4VHJlZSwgdHlwZUxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCdWlsZCBhcnJheXMgb2YgbWF0Y2hpbmcgbmV4dCBicmFuY2hlcyBhbmQgb3RoZXJzLlxuICAgICAgICBmb3IoYnJhbmNoIGluIHh4VHJlZSkge1xuICAgICAgICAgIGlmKGJyYW5jaCAhPT0gJ19saXN0ZW5lcnMnICYmIHh4VHJlZS5oYXNPd25Qcm9wZXJ0eShicmFuY2gpKSB7XG4gICAgICAgICAgICBpZihicmFuY2ggPT09IG5leHRUeXBlKSB7XG4gICAgICAgICAgICAgIC8vIFdlIGtub3cgdGhlIG5leHQgZWxlbWVudCB3aWxsIG1hdGNoLCBzbyBqdW1wIHR3aWNlLlxuICAgICAgICAgICAgICBzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHh4VHJlZVticmFuY2hdLCBpKzIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGJyYW5jaCA9PT0gY3VycmVudFR5cGUpIHtcbiAgICAgICAgICAgICAgLy8gQ3VycmVudCBub2RlIG1hdGNoZXMsIG1vdmUgaW50byB0aGUgdHJlZS5cbiAgICAgICAgICAgICAgc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB4eFRyZWVbYnJhbmNoXSwgaSsxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlzb2xhdGVkQnJhbmNoID0ge307XG4gICAgICAgICAgICAgIGlzb2xhdGVkQnJhbmNoW2JyYW5jaF0gPSB4eFRyZWVbYnJhbmNoXTtcbiAgICAgICAgICAgICAgc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB7ICcqKic6IGlzb2xhdGVkQnJhbmNoIH0sIGkrMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYoeHhUcmVlLl9saXN0ZW5lcnMpIHtcbiAgICAgICAgLy8gV2UgaGF2ZSByZWFjaGVkIHRoZSBlbmQgYW5kIHN0aWxsIG9uIGEgJyoqJ1xuICAgICAgICBzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHh4VHJlZSwgdHlwZUxlbmd0aCk7XG4gICAgICB9IGVsc2UgaWYoeHhUcmVlWycqJ10gJiYgeHhUcmVlWycqJ10uX2xpc3RlbmVycykge1xuICAgICAgICBzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHh4VHJlZVsnKiddLCB0eXBlTGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdGVuZXJzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ3Jvd0xpc3RlbmVyVHJlZSh0eXBlLCBsaXN0ZW5lcikge1xuXG4gICAgdHlwZSA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUuc3BsaXQodGhpcy5kZWxpbWl0ZXIpIDogdHlwZS5zbGljZSgpO1xuXG4gICAgLy9cbiAgICAvLyBMb29rcyBmb3IgdHdvIGNvbnNlY3V0aXZlICcqKicsIGlmIHNvLCBkb24ndCBhZGQgdGhlIGV2ZW50IGF0IGFsbC5cbiAgICAvL1xuICAgIGZvcih2YXIgaSA9IDAsIGxlbiA9IHR5cGUubGVuZ3RoOyBpKzEgPCBsZW47IGkrKykge1xuICAgICAgaWYodHlwZVtpXSA9PT0gJyoqJyAmJiB0eXBlW2krMV0gPT09ICcqKicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB0cmVlID0gdGhpcy5saXN0ZW5lclRyZWU7XG4gICAgdmFyIG5hbWUgPSB0eXBlLnNoaWZ0KCk7XG5cbiAgICB3aGlsZSAobmFtZSkge1xuXG4gICAgICBpZiAoIXRyZWVbbmFtZV0pIHtcbiAgICAgICAgdHJlZVtuYW1lXSA9IHt9O1xuICAgICAgfVxuXG4gICAgICB0cmVlID0gdHJlZVtuYW1lXTtcblxuICAgICAgaWYgKHR5cGUubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgaWYgKCF0cmVlLl9saXN0ZW5lcnMpIHtcbiAgICAgICAgICB0cmVlLl9saXN0ZW5lcnMgPSBsaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHR5cGVvZiB0cmVlLl9saXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0cmVlLl9saXN0ZW5lcnMgPSBbdHJlZS5fbGlzdGVuZXJzLCBsaXN0ZW5lcl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheSh0cmVlLl9saXN0ZW5lcnMpKSB7XG5cbiAgICAgICAgICB0cmVlLl9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICAgICAgICBpZiAoIXRyZWUuX2xpc3RlbmVycy53YXJuZWQpIHtcblxuICAgICAgICAgICAgdmFyIG0gPSBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2V2ZW50cy5tYXhMaXN0ZW5lcnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIG0gPSB0aGlzLl9ldmVudHMubWF4TGlzdGVuZXJzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobSA+IDAgJiYgdHJlZS5fbGlzdGVuZXJzLmxlbmd0aCA+IG0pIHtcblxuICAgICAgICAgICAgICB0cmVlLl9saXN0ZW5lcnMud2FybmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlZS5fbGlzdGVuZXJzLmxlbmd0aCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBuYW1lID0gdHlwZS5zaGlmdCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW5cbiAgLy8gMTAgbGlzdGVuZXJzIGFyZSBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoXG4gIC8vIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuICAvL1xuICAvLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3NcbiAgLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5kZWxpbWl0ZXIgPSAnLic7XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gICAgdGhpcy5fZXZlbnRzIHx8IGluaXQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9ldmVudHMubWF4TGlzdGVuZXJzID0gbjtcbiAgICBpZiAoIXRoaXMuX2NvbmYpIHRoaXMuX2NvbmYgPSB7fTtcbiAgICB0aGlzLl9jb25mLm1heExpc3RlbmVycyA9IG47XG4gIH07XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudCA9ICcnO1xuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbikge1xuICAgIHRoaXMubWFueShldmVudCwgMSwgZm4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUubWFueSA9IGZ1bmN0aW9uKGV2ZW50LCB0dGwsIGZuKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYW55IG9ubHkgYWNjZXB0cyBpbnN0YW5jZXMgb2YgRnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgIGlmICgtLXR0bCA9PT0gMCkge1xuICAgICAgICBzZWxmLm9mZihldmVudCwgbGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lci5fb3JpZ2luID0gZm47XG5cbiAgICB0aGlzLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuX2V2ZW50cyB8fCBpbml0LmNhbGwodGhpcyk7XG5cbiAgICB2YXIgdHlwZSA9IGFyZ3VtZW50c1swXTtcblxuICAgIGlmICh0eXBlID09PSAnbmV3TGlzdGVuZXInICYmICF0aGlzLm5ld0xpc3RlbmVyKSB7XG4gICAgICBpZiAoIXRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcikgeyByZXR1cm4gZmFsc2U7IH1cbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggdGhlICpfYWxsKiBmdW5jdGlvbnMgYW5kIGludm9rZSB0aGVtLlxuICAgIGlmICh0aGlzLl9hbGwpIHtcbiAgICAgIHZhciBsID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGwgLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbDsgaSsrKSBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSB0aGlzLl9hbGwubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHRoaXMuZXZlbnQgPSB0eXBlO1xuICAgICAgICB0aGlzLl9hbGxbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICAgIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG5cbiAgICAgIGlmICghdGhpcy5fYWxsICYmXG4gICAgICAgICF0aGlzLl9ldmVudHMuZXJyb3IgJiZcbiAgICAgICAgISh0aGlzLndpbGRjYXJkICYmIHRoaXMubGlzdGVuZXJUcmVlLmVycm9yKSkge1xuXG4gICAgICAgIGlmIChhcmd1bWVudHNbMV0gaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHRocm93IGFyZ3VtZW50c1sxXTsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmNhdWdodCwgdW5zcGVjaWZpZWQgJ2Vycm9yJyBldmVudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBoYW5kbGVyO1xuXG4gICAgaWYodGhpcy53aWxkY2FyZCkge1xuICAgICAgaGFuZGxlciA9IFtdO1xuICAgICAgdmFyIG5zID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZS5zcGxpdCh0aGlzLmRlbGltaXRlcikgOiB0eXBlLnNsaWNlKCk7XG4gICAgICBzZWFyY2hMaXN0ZW5lclRyZWUuY2FsbCh0aGlzLCBoYW5kbGVyLCBucywgdGhpcy5saXN0ZW5lclRyZWUsIDApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmV2ZW50ID0gdHlwZTtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBzbG93ZXJcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyIGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkobCAtIDEpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBsOyBpKyspIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGhhbmRsZXIpIHtcbiAgICAgIHZhciBsID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGwgLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbDsgaSsrKSBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgdmFyIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB0aGlzLmV2ZW50ID0gdHlwZTtcbiAgICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChsaXN0ZW5lcnMubGVuZ3RoID4gMCkgfHwgISF0aGlzLl9hbGw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuICEhdGhpcy5fYWxsO1xuICAgIH1cblxuICB9O1xuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9uQW55KHR5cGUpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdvbiBvbmx5IGFjY2VwdHMgaW5zdGFuY2VzIG9mIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHRoaXMuX2V2ZW50cyB8fCBpbml0LmNhbGwodGhpcyk7XG5cbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09IFwibmV3TGlzdGVuZXJzXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJzXCIuXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICAgIGlmKHRoaXMud2lsZGNhcmQpIHtcbiAgICAgIGdyb3dMaXN0ZW5lclRyZWUuY2FsbCh0aGlzLCB0eXBlLCBsaXN0ZW5lcik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSkge1xuICAgICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICB9XG4gICAgZWxzZSBpZih0eXBlb2YgdGhpcy5fZXZlbnRzW3R5cGVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBcnJheSh0aGlzLl9ldmVudHNbdHlwZV0pKSB7XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG5cbiAgICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcblxuICAgICAgICB2YXIgbSA9IGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9ldmVudHMubWF4TGlzdGVuZXJzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIG0gPSB0aGlzLl9ldmVudHMubWF4TGlzdGVuZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG5cbiAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbkFueSA9IGZ1bmN0aW9uKGZuKSB7XG5cbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ29uQW55IG9ubHkgYWNjZXB0cyBpbnN0YW5jZXMgb2YgRnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5fYWxsKSB7XG4gICAgICB0aGlzLl9hbGwgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGZ1bmN0aW9uIHRvIHRoZSBldmVudCBsaXN0ZW5lciBjb2xsZWN0aW9uLlxuICAgIHRoaXMuX2FsbC5wdXNoKGZuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbjtcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZW1vdmVMaXN0ZW5lciBvbmx5IHRha2VzIGluc3RhbmNlcyBvZiBGdW5jdGlvbicpO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVycyxsZWFmcz1bXTtcblxuICAgIGlmKHRoaXMud2lsZGNhcmQpIHtcbiAgICAgIHZhciBucyA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUuc3BsaXQodGhpcy5kZWxpbWl0ZXIpIDogdHlwZS5zbGljZSgpO1xuICAgICAgbGVhZnMgPSBzZWFyY2hMaXN0ZW5lclRyZWUuY2FsbCh0aGlzLCBudWxsLCBucywgdGhpcy5saXN0ZW5lclRyZWUsIDApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIGRvZXMgbm90IHVzZSBsaXN0ZW5lcnMoKSwgc28gbm8gc2lkZSBlZmZlY3Qgb2YgY3JlYXRpbmcgX2V2ZW50c1t0eXBlXVxuICAgICAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pIHJldHVybiB0aGlzO1xuICAgICAgaGFuZGxlcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgICBsZWFmcy5wdXNoKHtfbGlzdGVuZXJzOmhhbmRsZXJzfSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaUxlYWY9MDsgaUxlYWY8bGVhZnMubGVuZ3RoOyBpTGVhZisrKSB7XG4gICAgICB2YXIgbGVhZiA9IGxlYWZzW2lMZWFmXTtcbiAgICAgIGhhbmRsZXJzID0gbGVhZi5fbGlzdGVuZXJzO1xuICAgICAgaWYgKGlzQXJyYXkoaGFuZGxlcnMpKSB7XG5cbiAgICAgICAgdmFyIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGhhbmRsZXJzW2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgICAgKGhhbmRsZXJzW2ldLmxpc3RlbmVyICYmIGhhbmRsZXJzW2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikgfHxcbiAgICAgICAgICAgIChoYW5kbGVyc1tpXS5fb3JpZ2luICYmIGhhbmRsZXJzW2ldLl9vcmlnaW4gPT09IGxpc3RlbmVyKSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy53aWxkY2FyZCkge1xuICAgICAgICAgIGxlYWYuX2xpc3RlbmVycy5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhbmRsZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGlmKHRoaXMud2lsZGNhcmQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsZWFmLl9saXN0ZW5lcnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChoYW5kbGVycyA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgKGhhbmRsZXJzLmxpc3RlbmVyICYmIGhhbmRsZXJzLmxpc3RlbmVyID09PSBsaXN0ZW5lcikgfHxcbiAgICAgICAgKGhhbmRsZXJzLl9vcmlnaW4gJiYgaGFuZGxlcnMuX29yaWdpbiA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIGlmKHRoaXMud2lsZGNhcmQpIHtcbiAgICAgICAgICBkZWxldGUgbGVhZi5fbGlzdGVuZXJzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZkFueSA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgdmFyIGkgPSAwLCBsID0gMCwgZm5zO1xuICAgIGlmIChmbiAmJiB0aGlzLl9hbGwgJiYgdGhpcy5fYWxsLmxlbmd0aCA+IDApIHtcbiAgICAgIGZucyA9IHRoaXMuX2FsbDtcbiAgICAgIGZvcihpID0gMCwgbCA9IGZucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYoZm4gPT09IGZuc1tpXSkge1xuICAgICAgICAgIGZucy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWxsID0gW107XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZjtcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgIXRoaXMuX2V2ZW50cyB8fCBpbml0LmNhbGwodGhpcyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZih0aGlzLndpbGRjYXJkKSB7XG4gICAgICB2YXIgbnMgPSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlLnNwbGl0KHRoaXMuZGVsaW1pdGVyKSA6IHR5cGUuc2xpY2UoKTtcbiAgICAgIHZhciBsZWFmcyA9IHNlYXJjaExpc3RlbmVyVHJlZS5jYWxsKHRoaXMsIG51bGwsIG5zLCB0aGlzLmxpc3RlbmVyVHJlZSwgMCk7XG5cbiAgICAgIGZvciAodmFyIGlMZWFmPTA7IGlMZWFmPGxlYWZzLmxlbmd0aDsgaUxlYWYrKykge1xuICAgICAgICB2YXIgbGVhZiA9IGxlYWZzW2lMZWFmXTtcbiAgICAgICAgbGVhZi5fbGlzdGVuZXJzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSkgcmV0dXJuIHRoaXM7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICBpZih0aGlzLndpbGRjYXJkKSB7XG4gICAgICB2YXIgaGFuZGxlcnMgPSBbXTtcbiAgICAgIHZhciBucyA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUuc3BsaXQodGhpcy5kZWxpbWl0ZXIpIDogdHlwZS5zbGljZSgpO1xuICAgICAgc2VhcmNoTGlzdGVuZXJUcmVlLmNhbGwodGhpcywgaGFuZGxlcnMsIG5zLCB0aGlzLmxpc3RlbmVyVHJlZSwgMCk7XG4gICAgICByZXR1cm4gaGFuZGxlcnM7XG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzIHx8IGluaXQuY2FsbCh0aGlzKTtcblxuICAgIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKSB0aGlzLl9ldmVudHNbdHlwZV0gPSBbXTtcbiAgICBpZiAoIWlzQXJyYXkodGhpcy5fZXZlbnRzW3R5cGVdKSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9ldmVudHNbdHlwZV07XG4gIH07XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnNBbnkgPSBmdW5jdGlvbigpIHtcblxuICAgIGlmKHRoaXMuX2FsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FsbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gIH07XG5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEV2ZW50RW1pdHRlcjtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBDb21tb25KU1xuICAgIGV4cG9ydHMuRXZlbnRFbWl0dGVyMiA9IEV2ZW50RW1pdHRlcjtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbC5cbiAgICB3aW5kb3cuRXZlbnRFbWl0dGVyMiA9IEV2ZW50RW1pdHRlcjtcbiAgfVxufSgpO1xuIiwiLyohIGpRdWVyeSB2My42LjMgfCAoYykgT3BlbkpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUuZG9jdW1lbnQ/dChlLCEwKTpmdW5jdGlvbihlKXtpZighZS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiB0KGUpfTp0KGUpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKEMsZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9W10scj1PYmplY3QuZ2V0UHJvdG90eXBlT2Yscz10LnNsaWNlLGc9dC5mbGF0P2Z1bmN0aW9uKGUpe3JldHVybiB0LmZsYXQuY2FsbChlKX06ZnVuY3Rpb24oZSl7cmV0dXJuIHQuY29uY2F0LmFwcGx5KFtdLGUpfSx1PXQucHVzaCxpPXQuaW5kZXhPZixuPXt9LG89bi50b1N0cmluZyx5PW4uaGFzT3duUHJvcGVydHksYT15LnRvU3RyaW5nLGw9YS5jYWxsKE9iamVjdCksdj17fSxtPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJlwibnVtYmVyXCIhPXR5cGVvZiBlLm5vZGVUeXBlJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlLml0ZW19LHg9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUmJmU9PT1lLndpbmRvd30sUz1DLmRvY3VtZW50LGM9e3R5cGU6ITAsc3JjOiEwLG5vbmNlOiEwLG5vTW9kdWxlOiEwfTtmdW5jdGlvbiBiKGUsdCxuKXt2YXIgcixpLG89KG49bnx8UykuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZihvLnRleHQ9ZSx0KWZvcihyIGluIGMpKGk9dFtyXXx8dC5nZXRBdHRyaWJ1dGUmJnQuZ2V0QXR0cmlidXRlKHIpKSYmby5zZXRBdHRyaWJ1dGUocixpKTtuLmhlYWQuYXBwZW5kQ2hpbGQobykucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKX1mdW5jdGlvbiB3KGUpe3JldHVybiBudWxsPT1lP2UrXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZT9uW28uY2FsbChlKV18fFwib2JqZWN0XCI6dHlwZW9mIGV9dmFyIGY9XCIzLjYuM1wiLEU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IEUuZm4uaW5pdChlLHQpfTtmdW5jdGlvbiBwKGUpe3ZhciB0PSEhZSYmXCJsZW5ndGhcImluIGUmJmUubGVuZ3RoLG49dyhlKTtyZXR1cm4hbShlKSYmIXgoZSkmJihcImFycmF5XCI9PT1ufHwwPT09dHx8XCJudW1iZXJcIj09dHlwZW9mIHQmJjA8dCYmdC0xIGluIGUpfUUuZm49RS5wcm90b3R5cGU9e2pxdWVyeTpmLGNvbnN0cnVjdG9yOkUsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBzLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9zLmNhbGwodGhpcyk6ZTwwP3RoaXNbZSt0aGlzLmxlbmd0aF06dGhpc1tlXX0scHVzaFN0YWNrOmZ1bmN0aW9uKGUpe3ZhciB0PUUubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGUpO3JldHVybiB0LnByZXZPYmplY3Q9dGhpcyx0fSxlYWNoOmZ1bmN0aW9uKGUpe3JldHVybiBFLmVhY2godGhpcyxlKX0sbWFwOmZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLnB1c2hTdGFjayhFLm1hcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIG4uY2FsbChlLHQsZSl9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHMuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXZlbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhFLmdyZXAodGhpcyxmdW5jdGlvbihlLHQpe3JldHVybih0KzEpJTJ9KSl9LG9kZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhFLmdyZXAodGhpcyxmdW5jdGlvbihlLHQpe3JldHVybiB0JTJ9KSl9LGVxOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMubGVuZ3RoLG49K2UrKGU8MD90OjApO3JldHVybiB0aGlzLnB1c2hTdGFjaygwPD1uJiZuPHQ/W3RoaXNbbl1dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOnUsc29ydDp0LnNvcnQsc3BsaWNlOnQuc3BsaWNlfSxFLmV4dGVuZD1FLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBlLHQsbixyLGksbyxhPWFyZ3VtZW50c1swXXx8e30scz0xLHU9YXJndW1lbnRzLmxlbmd0aCxsPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGEmJihsPWEsYT1hcmd1bWVudHNbc118fHt9LHMrKyksXCJvYmplY3RcIj09dHlwZW9mIGF8fG0oYSl8fChhPXt9KSxzPT09dSYmKGE9dGhpcyxzLS0pO3M8dTtzKyspaWYobnVsbCE9KGU9YXJndW1lbnRzW3NdKSlmb3IodCBpbiBlKXI9ZVt0XSxcIl9fcHJvdG9fX1wiIT09dCYmYSE9PXImJihsJiZyJiYoRS5pc1BsYWluT2JqZWN0KHIpfHwoaT1BcnJheS5pc0FycmF5KHIpKSk/KG49YVt0XSxvPWkmJiFBcnJheS5pc0FycmF5KG4pP1tdOml8fEUuaXNQbGFpbk9iamVjdChuKT9uOnt9LGk9ITEsYVt0XT1FLmV4dGVuZChsLG8scikpOnZvaWQgMCE9PXImJihhW3RdPXIpKTtyZXR1cm4gYX0sRS5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisoZitNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihlKX0sbm9vcDpmdW5jdGlvbigpe30saXNQbGFpbk9iamVjdDpmdW5jdGlvbihlKXt2YXIgdCxuO3JldHVybiEoIWV8fFwiW29iamVjdCBPYmplY3RdXCIhPT1vLmNhbGwoZSkpJiYoISh0PXIoZSkpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZihuPXkuY2FsbCh0LFwiY29uc3RydWN0b3JcIikmJnQuY29uc3RydWN0b3IpJiZhLmNhbGwobik9PT1sKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihlKXt2YXIgdDtmb3IodCBpbiBlKXJldHVybiExO3JldHVybiEwfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGUsdCxuKXtiKGUse25vbmNlOnQmJnQubm9uY2V9LG4pfSxlYWNoOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wO2lmKHAoZSkpe2ZvcihuPWUubGVuZ3RoO3I8bjtyKyspaWYoITE9PT10LmNhbGwoZVtyXSxyLGVbcl0pKWJyZWFrfWVsc2UgZm9yKHIgaW4gZSlpZighMT09PXQuY2FsbChlW3JdLHIsZVtyXSkpYnJlYWs7cmV0dXJuIGV9LG1ha2VBcnJheTpmdW5jdGlvbihlLHQpe3ZhciBuPXR8fFtdO3JldHVybiBudWxsIT1lJiYocChPYmplY3QoZSkpP0UubWVyZ2UobixcInN0cmluZ1wiPT10eXBlb2YgZT9bZV06ZSk6dS5jYWxsKG4sZSkpLG59LGluQXJyYXk6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBudWxsPT10Py0xOmkuY2FsbCh0LGUsbil9LG1lcmdlOmZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPSt0Lmxlbmd0aCxyPTAsaT1lLmxlbmd0aDtyPG47cisrKWVbaSsrXT10W3JdO3JldHVybiBlLmxlbmd0aD1pLGV9LGdyZXA6ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1bXSxpPTAsbz1lLmxlbmd0aCxhPSFuO2k8bztpKyspIXQoZVtpXSxpKSE9PWEmJnIucHVzaChlW2ldKTtyZXR1cm4gcn0sbWFwOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89MCxhPVtdO2lmKHAoZSkpZm9yKHI9ZS5sZW5ndGg7bzxyO28rKyludWxsIT0oaT10KGVbb10sbyxuKSkmJmEucHVzaChpKTtlbHNlIGZvcihvIGluIGUpbnVsbCE9KGk9dChlW29dLG8sbikpJiZhLnB1c2goaSk7cmV0dXJuIGcoYSl9LGd1aWQ6MSxzdXBwb3J0OnZ9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihFLmZuW1N5bWJvbC5pdGVyYXRvcl09dFtTeW1ib2wuaXRlcmF0b3JdKSxFLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLHQpe25bXCJbb2JqZWN0IFwiK3QrXCJdXCJdPXQudG9Mb3dlckNhc2UoKX0pO3ZhciBkPWZ1bmN0aW9uKG4pe3ZhciBlLGQsYixvLGksaCxmLGcsdyx1LGwsVCxDLGEsUyx5LHMsYyx2LEU9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHA9bi5kb2N1bWVudCxrPTAscj0wLG09dWUoKSx4PXVlKCksQT11ZSgpLE49dWUoKSxqPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9PT10JiYobD0hMCksMH0sRD17fS5oYXNPd25Qcm9wZXJ0eSx0PVtdLHE9dC5wb3AsTD10LnB1c2gsSD10LnB1c2gsTz10LnNsaWNlLFA9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspaWYoZVtuXT09PXQpcmV0dXJuIG47cmV0dXJuLTF9LFI9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLE09XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLEk9XCIoPzpcXFxcXFxcXFtcXFxcZGEtZkEtRl17MSw2fVwiK00rXCI/fFxcXFxcXFxcW15cXFxcclxcXFxuXFxcXGZdfFtcXFxcdy1dfFteXFwwLVxcXFx4N2ZdKStcIixXPVwiXFxcXFtcIitNK1wiKihcIitJK1wiKSg/OlwiK00rXCIqKFsqXiR8IX5dPz0pXCIrTStcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiK0krXCIpKXwpXCIrTStcIipcXFxcXVwiLEY9XCI6KFwiK0krXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK1crXCIpKil8LiopXFxcXCl8KVwiLCQ9bmV3IFJlZ0V4cChNK1wiK1wiLFwiZ1wiKSxCPW5ldyBSZWdFeHAoXCJeXCIrTStcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIrTStcIiskXCIsXCJnXCIpLF89bmV3IFJlZ0V4cChcIl5cIitNK1wiKixcIitNK1wiKlwiKSx6PW5ldyBSZWdFeHAoXCJeXCIrTStcIiooWz4rfl18XCIrTStcIilcIitNK1wiKlwiKSxVPW5ldyBSZWdFeHAoTStcInw+XCIpLFg9bmV3IFJlZ0V4cChGKSxWPW5ldyBSZWdFeHAoXCJeXCIrSStcIiRcIiksRz17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK0krXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrSStcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK0krXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrVyksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrRiksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrTStcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK00rXCIqKD86KFsrLV18KVwiK00rXCIqKFxcXFxkKyl8KSlcIitNK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK1IrXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitNK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitNK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitNK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxZPS9IVE1MJC9pLFE9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxKPS9eaFxcZCQvaSxLPS9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sWj0vXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLyxlZT0vWyt+XS8sdGU9bmV3IFJlZ0V4cChcIlxcXFxcXFxcW1xcXFxkYS1mQS1GXXsxLDZ9XCIrTStcIj98XFxcXFxcXFwoW15cXFxcclxcXFxuXFxcXGZdKVwiLFwiZ1wiKSxuZT1mdW5jdGlvbihlLHQpe3ZhciBuPVwiMHhcIitlLnNsaWNlKDEpLTY1NTM2O3JldHVybiB0fHwobjwwP1N0cmluZy5mcm9tQ2hhckNvZGUobis2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShuPj4xMHw1NTI5NiwxMDIzJm58NTYzMjApKX0scmU9LyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFwwLVxceDFmXFx4N2YtXFx1RkZGRlxcdy1dL2csaWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD9cIlxcMFwiPT09ZT9cIlxcdWZmZmRcIjplLnNsaWNlKDAsLTEpK1wiXFxcXFwiK2UuY2hhckNvZGVBdChlLmxlbmd0aC0xKS50b1N0cmluZygxNikrXCIgXCI6XCJcXFxcXCIrZX0sb2U9ZnVuY3Rpb24oKXtUKCl9LGFlPWJlKGZ1bmN0aW9uKGUpe3JldHVybiEwPT09ZS5kaXNhYmxlZCYmXCJmaWVsZHNldFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpfSx7ZGlyOlwicGFyZW50Tm9kZVwiLG5leHQ6XCJsZWdlbmRcIn0pO3RyeXtILmFwcGx5KHQ9Ty5jYWxsKHAuY2hpbGROb2RlcykscC5jaGlsZE5vZGVzKSx0W3AuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlfWNhdGNoKGUpe0g9e2FwcGx5OnQubGVuZ3RoP2Z1bmN0aW9uKGUsdCl7TC5hcHBseShlLE8uY2FsbCh0KSl9OmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5sZW5ndGgscj0wO3doaWxlKGVbbisrXT10W3IrK10pO2UubGVuZ3RoPW4tMX19fWZ1bmN0aW9uIHNlKHQsZSxuLHIpe3ZhciBpLG8sYSxzLHUsbCxjLGY9ZSYmZS5vd25lckRvY3VtZW50LHA9ZT9lLm5vZGVUeXBlOjk7aWYobj1ufHxbXSxcInN0cmluZ1wiIT10eXBlb2YgdHx8IXR8fDEhPT1wJiY5IT09cCYmMTEhPT1wKXJldHVybiBuO2lmKCFyJiYoVChlKSxlPWV8fEMsUykpe2lmKDExIT09cCYmKHU9Wi5leGVjKHQpKSlpZihpPXVbMV0pe2lmKDk9PT1wKXtpZighKGE9ZS5nZXRFbGVtZW50QnlJZChpKSkpcmV0dXJuIG47aWYoYS5pZD09PWkpcmV0dXJuIG4ucHVzaChhKSxufWVsc2UgaWYoZiYmKGE9Zi5nZXRFbGVtZW50QnlJZChpKSkmJnYoZSxhKSYmYS5pZD09PWkpcmV0dXJuIG4ucHVzaChhKSxufWVsc2V7aWYodVsyXSlyZXR1cm4gSC5hcHBseShuLGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUodCkpLG47aWYoKGk9dVszXSkmJmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBILmFwcGx5KG4sZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGkpKSxufWlmKGQucXNhJiYhTlt0K1wiIFwiXSYmKCF5fHwheS50ZXN0KHQpKSYmKDEhPT1wfHxcIm9iamVjdFwiIT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSl7aWYoYz10LGY9ZSwxPT09cCYmKFUudGVzdCh0KXx8ei50ZXN0KHQpKSl7KGY9ZWUudGVzdCh0KSYmdmUoZS5wYXJlbnROb2RlKXx8ZSk9PT1lJiZkLnNjb3BlfHwoKHM9ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/cz1zLnJlcGxhY2UocmUsaWUpOmUuc2V0QXR0cmlidXRlKFwiaWRcIixzPUUpKSxvPShsPWgodCkpLmxlbmd0aDt3aGlsZShvLS0pbFtvXT0ocz9cIiNcIitzOlwiOnNjb3BlXCIpK1wiIFwiK3hlKGxbb10pO2M9bC5qb2luKFwiLFwiKX10cnl7aWYoZC5jc3NTdXBwb3J0c1NlbGVjdG9yJiYhQ1NTLnN1cHBvcnRzKFwic2VsZWN0b3IoOmlzKFwiK2MrXCIpKVwiKSl0aHJvdyBuZXcgRXJyb3I7cmV0dXJuIEguYXBwbHkobixmLnF1ZXJ5U2VsZWN0b3JBbGwoYykpLG59Y2F0Y2goZSl7Tih0LCEwKX1maW5hbGx5e3M9PT1FJiZlLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIGcodC5yZXBsYWNlKEIsXCIkMVwiKSxlLG4scil9ZnVuY3Rpb24gdWUoKXt2YXIgcj1bXTtyZXR1cm4gZnVuY3Rpb24gZSh0LG4pe3JldHVybiByLnB1c2godCtcIiBcIik+Yi5jYWNoZUxlbmd0aCYmZGVsZXRlIGVbci5zaGlmdCgpXSxlW3QrXCIgXCJdPW59fWZ1bmN0aW9uIGxlKGUpe3JldHVybiBlW0VdPSEwLGV9ZnVuY3Rpb24gY2UoZSl7dmFyIHQ9Qy5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7dHJ5e3JldHVybiEhZSh0KX1jYXRjaChlKXtyZXR1cm4hMX1maW5hbGx5e3QucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpLHQ9bnVsbH19ZnVuY3Rpb24gZmUoZSx0KXt2YXIgbj1lLnNwbGl0KFwifFwiKSxyPW4ubGVuZ3RoO3doaWxlKHItLSliLmF0dHJIYW5kbGVbbltyXV09dH1mdW5jdGlvbiBwZShlLHQpe3ZhciBuPXQmJmUscj1uJiYxPT09ZS5ub2RlVHlwZSYmMT09PXQubm9kZVR5cGUmJmUuc291cmNlSW5kZXgtdC5zb3VyY2VJbmRleDtpZihyKXJldHVybiByO2lmKG4pd2hpbGUobj1uLm5leHRTaWJsaW5nKWlmKG49PT10KXJldHVybi0xO3JldHVybiBlPzE6LTF9ZnVuY3Rpb24gZGUodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVyblwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmZS50eXBlPT09dH19ZnVuY3Rpb24gaGUobil7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09dHx8XCJidXR0b25cIj09PXQpJiZlLnR5cGU9PT1ufX1mdW5jdGlvbiBnZSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuXCJmb3JtXCJpbiBlP2UucGFyZW50Tm9kZSYmITE9PT1lLmRpc2FibGVkP1wibGFiZWxcImluIGU/XCJsYWJlbFwiaW4gZS5wYXJlbnROb2RlP2UucGFyZW50Tm9kZS5kaXNhYmxlZD09PXQ6ZS5kaXNhYmxlZD09PXQ6ZS5pc0Rpc2FibGVkPT09dHx8ZS5pc0Rpc2FibGVkIT09IXQmJmFlKGUpPT09dDplLmRpc2FibGVkPT09dDpcImxhYmVsXCJpbiBlJiZlLmRpc2FibGVkPT09dH19ZnVuY3Rpb24geWUoYSl7cmV0dXJuIGxlKGZ1bmN0aW9uKG8pe3JldHVybiBvPStvLGxlKGZ1bmN0aW9uKGUsdCl7dmFyIG4scj1hKFtdLGUubGVuZ3RoLG8pLGk9ci5sZW5ndGg7d2hpbGUoaS0tKWVbbj1yW2ldXSYmKGVbbl09ISh0W25dPWVbbl0pKX0pfSl9ZnVuY3Rpb24gdmUoZSl7cmV0dXJuIGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lJiZlfWZvcihlIGluIGQ9c2Uuc3VwcG9ydD17fSxpPXNlLmlzWE1MPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUubmFtZXNwYWNlVVJJLG49ZSYmKGUub3duZXJEb2N1bWVudHx8ZSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiFZLnRlc3QodHx8biYmbi5ub2RlTmFtZXx8XCJIVE1MXCIpfSxUPXNlLnNldERvY3VtZW50PWZ1bmN0aW9uKGUpe3ZhciB0LG4scj1lP2Uub3duZXJEb2N1bWVudHx8ZTpwO3JldHVybiByIT1DJiY5PT09ci5ub2RlVHlwZSYmci5kb2N1bWVudEVsZW1lbnQmJihhPShDPXIpLmRvY3VtZW50RWxlbWVudCxTPSFpKEMpLHAhPUMmJihuPUMuZGVmYXVsdFZpZXcpJiZuLnRvcCE9PW4mJihuLmFkZEV2ZW50TGlzdGVuZXI/bi5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsb2UsITEpOm4uYXR0YWNoRXZlbnQmJm4uYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLG9lKSksZC5zY29wZT1jZShmdW5jdGlvbihlKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChlKS5hcHBlbmRDaGlsZChDLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGwmJiFlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6c2NvcGUgZmllbGRzZXQgZGl2XCIpLmxlbmd0aH0pLGQuY3NzU3VwcG9ydHNTZWxlY3Rvcj1jZShmdW5jdGlvbigpe3JldHVybiBDU1Muc3VwcG9ydHMoXCJzZWxlY3RvcigqKVwiKSYmQy5xdWVyeVNlbGVjdG9yQWxsKFwiOmlzKDpqcWZha2UpXCIpJiYhQ1NTLnN1cHBvcnRzKFwic2VsZWN0b3IoOmlzKCosOmpxZmFrZSkpXCIpfSksZC5hdHRyaWJ1dGVzPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNsYXNzTmFtZT1cImlcIiwhZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxkLmdldEVsZW1lbnRzQnlUYWdOYW1lPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmFwcGVuZENoaWxkKEMuY3JlYXRlQ29tbWVudChcIlwiKSksIWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1LLnRlc3QoQy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxkLmdldEJ5SWQ9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQoZSkuaWQ9RSwhQy5nZXRFbGVtZW50c0J5TmFtZXx8IUMuZ2V0RWxlbWVudHNCeU5hbWUoRSkubGVuZ3RofSksZC5nZXRCeUlkPyhiLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UodGUsbmUpO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PXR9fSxiLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50QnlJZCYmUyl7dmFyIG49dC5nZXRFbGVtZW50QnlJZChlKTtyZXR1cm4gbj9bbl06W119fSk6KGIuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciBuPWUucmVwbGFjZSh0ZSxuZSk7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEF0dHJpYnV0ZU5vZGUmJmUuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiB0JiZ0LnZhbHVlPT09bn19LGIuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZTKXt2YXIgbixyLGksbz10LmdldEVsZW1lbnRCeUlkKGUpO2lmKG8pe2lmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dO2k9dC5nZXRFbGVtZW50c0J5TmFtZShlKSxyPTA7d2hpbGUobz1pW3IrK10paWYoKG49by5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIikpJiZuLnZhbHVlPT09ZSlyZXR1cm5bb119cmV0dXJuW119fSksYi5maW5kLlRBRz1kLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGUsdCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudHNCeVRhZ05hbWU/dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTpkLnFzYT90LnF1ZXJ5U2VsZWN0b3JBbGwoZSk6dm9pZCAwfTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT0wLG89dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTtpZihcIipcIj09PWUpe3doaWxlKG49b1tpKytdKTE9PT1uLm5vZGVUeXBlJiZyLnB1c2gobik7cmV0dXJuIHJ9cmV0dXJuIG99LGIuZmluZC5DTEFTUz1kLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmUylyZXR1cm4gdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGUpfSxzPVtdLHk9W10sKGQucXNhPUsudGVzdChDLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKGNlKGZ1bmN0aW9uKGUpe3ZhciB0O2EuYXBwZW5kQ2hpbGQoZSkuaW5uZXJIVE1MPVwiPGEgaWQ9J1wiK0UrXCInPjwvYT48c2VsZWN0IGlkPSdcIitFK1wiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsZS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoJiZ5LnB1c2goXCJbKl4kXT1cIitNK1wiKig/OicnfFxcXCJcXFwiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8eS5wdXNoKFwiXFxcXFtcIitNK1wiKig/OnZhbHVlfFwiK1IrXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIrRStcIi1dXCIpLmxlbmd0aHx8eS5wdXNoKFwifj1cIiksKHQ9Qy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIlwiKSxlLmFwcGVuZENoaWxkKHQpLGUucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPScnXVwiKS5sZW5ndGh8fHkucHVzaChcIlxcXFxbXCIrTStcIipuYW1lXCIrTStcIio9XCIrTStcIiooPzonJ3xcXFwiXFxcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHx5LnB1c2goXCI6Y2hlY2tlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK0UrXCIrKlwiKS5sZW5ndGh8fHkucHVzaChcIi4jLitbK35dXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIlxcXFxcXGZcIikseS5wdXNoKFwiW1xcXFxyXFxcXG5cXFxcZl1cIil9KSxjZShmdW5jdGlvbihlKXtlLmlubmVySFRNTD1cIjxhIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+PHNlbGVjdCBkaXNhYmxlZD0nZGlzYWJsZWQnPjxvcHRpb24vPjwvc2VsZWN0PlwiO3ZhciB0PUMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO3Quc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGUuYXBwZW5kQ2hpbGQodCkuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnkucHVzaChcIm5hbWVcIitNK1wiKlsqXiR8IX5dPz1cIiksMiE9PWUucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aCYmeS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLmFwcGVuZENoaWxkKGUpLmRpc2FibGVkPSEwLDIhPT1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZGlzYWJsZWRcIikubGVuZ3RoJiZ5LnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikseS5wdXNoKFwiLC4qOlwiKX0pKSwoZC5tYXRjaGVzU2VsZWN0b3I9Sy50ZXN0KGM9YS5tYXRjaGVzfHxhLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8YS5tb3pNYXRjaGVzU2VsZWN0b3J8fGEub01hdGNoZXNTZWxlY3Rvcnx8YS5tc01hdGNoZXNTZWxlY3RvcikpJiZjZShmdW5jdGlvbihlKXtkLmRpc2Nvbm5lY3RlZE1hdGNoPWMuY2FsbChlLFwiKlwiKSxjLmNhbGwoZSxcIltzIT0nJ106eFwiKSxzLnB1c2goXCIhPVwiLEYpfSksZC5jc3NTdXBwb3J0c1NlbGVjdG9yfHx5LnB1c2goXCI6aGFzXCIpLHk9eS5sZW5ndGgmJm5ldyBSZWdFeHAoeS5qb2luKFwifFwiKSkscz1zLmxlbmd0aCYmbmV3IFJlZ0V4cChzLmpvaW4oXCJ8XCIpKSx0PUsudGVzdChhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSx2PXR8fEsudGVzdChhLmNvbnRhaW5zKT9mdW5jdGlvbihlLHQpe3ZhciBuPTk9PT1lLm5vZGVUeXBlJiZlLmRvY3VtZW50RWxlbWVudHx8ZSxyPXQmJnQucGFyZW50Tm9kZTtyZXR1cm4gZT09PXJ8fCEoIXJ8fDEhPT1yLm5vZGVUeXBlfHwhKG4uY29udGFpbnM/bi5jb250YWlucyhyKTplLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHIpKSl9OmZ1bmN0aW9uKGUsdCl7aWYodCl3aGlsZSh0PXQucGFyZW50Tm9kZSlpZih0PT09ZSlyZXR1cm4hMDtyZXR1cm4hMX0saj10P2Z1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGw9ITAsMDt2YXIgbj0hZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gbnx8KDEmKG49KGUub3duZXJEb2N1bWVudHx8ZSk9PSh0Lm93bmVyRG9jdW1lbnR8fHQpP2UuY29tcGFyZURvY3VtZW50UG9zaXRpb24odCk6MSl8fCFkLnNvcnREZXRhY2hlZCYmdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKT09PW4/ZT09Q3x8ZS5vd25lckRvY3VtZW50PT1wJiZ2KHAsZSk/LTE6dD09Q3x8dC5vd25lckRvY3VtZW50PT1wJiZ2KHAsdCk/MTp1P1AodSxlKS1QKHUsdCk6MDo0Jm4/LTE6MSl9OmZ1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGw9ITAsMDt2YXIgbixyPTAsaT1lLnBhcmVudE5vZGUsbz10LnBhcmVudE5vZGUsYT1bZV0scz1bdF07aWYoIWl8fCFvKXJldHVybiBlPT1DPy0xOnQ9PUM/MTppPy0xOm8/MTp1P1AodSxlKS1QKHUsdCk6MDtpZihpPT09bylyZXR1cm4gcGUoZSx0KTtuPWU7d2hpbGUobj1uLnBhcmVudE5vZGUpYS51bnNoaWZ0KG4pO249dDt3aGlsZShuPW4ucGFyZW50Tm9kZSlzLnVuc2hpZnQobik7d2hpbGUoYVtyXT09PXNbcl0pcisrO3JldHVybiByP3BlKGFbcl0sc1tyXSk6YVtyXT09cD8tMTpzW3JdPT1wPzE6MH0pLEN9LHNlLm1hdGNoZXM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gc2UoZSxudWxsLG51bGwsdCl9LHNlLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihlLHQpe2lmKFQoZSksZC5tYXRjaGVzU2VsZWN0b3ImJlMmJiFOW3QrXCIgXCJdJiYoIXN8fCFzLnRlc3QodCkpJiYoIXl8fCF5LnRlc3QodCkpKXRyeXt2YXIgbj1jLmNhbGwoZSx0KTtpZihufHxkLmRpc2Nvbm5lY3RlZE1hdGNofHxlLmRvY3VtZW50JiYxMSE9PWUuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIG59Y2F0Y2goZSl7Tih0LCEwKX1yZXR1cm4gMDxzZSh0LEMsbnVsbCxbZV0pLmxlbmd0aH0sc2UuY29udGFpbnM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZS5vd25lckRvY3VtZW50fHxlKSE9QyYmVChlKSx2KGUsdCl9LHNlLmF0dHI9ZnVuY3Rpb24oZSx0KXsoZS5vd25lckRvY3VtZW50fHxlKSE9QyYmVChlKTt2YXIgbj1iLmF0dHJIYW5kbGVbdC50b0xvd2VyQ2FzZSgpXSxyPW4mJkQuY2FsbChiLmF0dHJIYW5kbGUsdC50b0xvd2VyQ2FzZSgpKT9uKGUsdCwhUyk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1yP3I6ZC5hdHRyaWJ1dGVzfHwhUz9lLmdldEF0dHJpYnV0ZSh0KToocj1lLmdldEF0dHJpYnV0ZU5vZGUodCkpJiZyLnNwZWNpZmllZD9yLnZhbHVlOm51bGx9LHNlLmVzY2FwZT1mdW5jdGlvbihlKXtyZXR1cm4oZStcIlwiKS5yZXBsYWNlKHJlLGllKX0sc2UuZXJyb3I9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrZSl9LHNlLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1bXSxyPTAsaT0wO2lmKGw9IWQuZGV0ZWN0RHVwbGljYXRlcyx1PSFkLnNvcnRTdGFibGUmJmUuc2xpY2UoMCksZS5zb3J0KGopLGwpe3doaWxlKHQ9ZVtpKytdKXQ9PT1lW2ldJiYocj1uLnB1c2goaSkpO3doaWxlKHItLSllLnNwbGljZShuW3JdLDEpfXJldHVybiB1PW51bGwsZX0sbz1zZS5nZXRUZXh0PWZ1bmN0aW9uKGUpe3ZhciB0LG49XCJcIixyPTAsaT1lLm5vZGVUeXBlO2lmKGkpe2lmKDE9PT1pfHw5PT09aXx8MTE9PT1pKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZS50ZXh0Q29udGVudClyZXR1cm4gZS50ZXh0Q29udGVudDtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpbis9byhlKX1lbHNlIGlmKDM9PT1pfHw0PT09aSlyZXR1cm4gZS5ub2RlVmFsdWV9ZWxzZSB3aGlsZSh0PWVbcisrXSluKz1vKHQpO3JldHVybiBufSwoYj1zZS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzpsZSxtYXRjaDpHLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS5yZXBsYWNlKHRlLG5lKSxlWzNdPShlWzNdfHxlWzRdfHxlWzVdfHxcIlwiKS5yZXBsYWNlKHRlLG5lKSxcIn49XCI9PT1lWzJdJiYoZVszXT1cIiBcIitlWzNdK1wiIFwiKSxlLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09ZVsxXS5zbGljZSgwLDMpPyhlWzNdfHxzZS5lcnJvcihlWzBdKSxlWzRdPSsoZVs0XT9lWzVdKyhlWzZdfHwxKToyKihcImV2ZW5cIj09PWVbM118fFwib2RkXCI9PT1lWzNdKSksZVs1XT0rKGVbN10rZVs4XXx8XCJvZGRcIj09PWVbM10pKTplWzNdJiZzZS5lcnJvcihlWzBdKSxlfSxQU0VVRE86ZnVuY3Rpb24oZSl7dmFyIHQsbj0hZVs2XSYmZVsyXTtyZXR1cm4gRy5DSElMRC50ZXN0KGVbMF0pP251bGw6KGVbM10/ZVsyXT1lWzRdfHxlWzVdfHxcIlwiOm4mJlgudGVzdChuKSYmKHQ9aChuLCEwKSkmJih0PW4uaW5kZXhPZihcIilcIixuLmxlbmd0aC10KS1uLmxlbmd0aCkmJihlWzBdPWVbMF0uc2xpY2UoMCx0KSxlWzJdPW4uc2xpY2UoMCx0KSksZS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZSh0ZSxuZSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWU/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oZSl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXR9fSxDTEFTUzpmdW5jdGlvbihlKXt2YXIgdD1tW2UrXCIgXCJdO3JldHVybiB0fHwodD1uZXcgUmVnRXhwKFwiKF58XCIrTStcIilcIitlK1wiKFwiK00rXCJ8JClcIikpJiZtKGUsZnVuY3Rpb24oZSl7cmV0dXJuIHQudGVzdChcInN0cmluZ1wiPT10eXBlb2YgZS5jbGFzc05hbWUmJmUuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24obixyLGkpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1zZS5hdHRyKGUsbik7cmV0dXJuIG51bGw9PXQ/XCIhPVwiPT09cjohcnx8KHQrPVwiXCIsXCI9XCI9PT1yP3Q9PT1pOlwiIT1cIj09PXI/dCE9PWk6XCJePVwiPT09cj9pJiYwPT09dC5pbmRleE9mKGkpOlwiKj1cIj09PXI/aSYmLTE8dC5pbmRleE9mKGkpOlwiJD1cIj09PXI/aSYmdC5zbGljZSgtaS5sZW5ndGgpPT09aTpcIn49XCI9PT1yPy0xPChcIiBcIit0LnJlcGxhY2UoJCxcIiBcIikrXCIgXCIpLmluZGV4T2YoaSk6XCJ8PVwiPT09ciYmKHQ9PT1pfHx0LnNsaWNlKDAsaS5sZW5ndGgrMSk9PT1pK1wiLVwiKSl9fSxDSElMRDpmdW5jdGlvbihoLGUsdCxnLHkpe3ZhciB2PVwibnRoXCIhPT1oLnNsaWNlKDAsMyksbT1cImxhc3RcIiE9PWguc2xpY2UoLTQpLHg9XCJvZi10eXBlXCI9PT1lO3JldHVybiAxPT09ZyYmMD09PXk/ZnVuY3Rpb24oZSl7cmV0dXJuISFlLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbD12IT09bT9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixjPWUucGFyZW50Tm9kZSxmPXgmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxwPSFuJiYheCxkPSExO2lmKGMpe2lmKHYpe3doaWxlKGwpe2E9ZTt3aGlsZShhPWFbbF0paWYoeD9hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1mOjE9PT1hLm5vZGVUeXBlKXJldHVybiExO3U9bD1cIm9ubHlcIj09PWgmJiF1JiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYodT1bbT9jLmZpcnN0Q2hpbGQ6Yy5sYXN0Q2hpbGRdLG0mJnApe2Q9KHM9KHI9KGk9KG89KGE9YylbRV18fChhW0VdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF18fFtdKVswXT09PWsmJnJbMV0pJiZyWzJdLGE9cyYmYy5jaGlsZE5vZGVzW3NdO3doaWxlKGE9KytzJiZhJiZhW2xdfHwoZD1zPTApfHx1LnBvcCgpKWlmKDE9PT1hLm5vZGVUeXBlJiYrK2QmJmE9PT1lKXtpW2hdPVtrLHMsZF07YnJlYWt9fWVsc2UgaWYocCYmKGQ9cz0ocj0oaT0obz0oYT1lKVtFXXx8KGFbRV09e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXXx8W10pWzBdPT09ayYmclsxXSksITE9PT1kKXdoaWxlKGE9KytzJiZhJiZhW2xdfHwoZD1zPTApfHx1LnBvcCgpKWlmKCh4P2Eubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWY6MT09PWEubm9kZVR5cGUpJiYrK2QmJihwJiYoKGk9KG89YVtFXXx8KGFbRV09e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXT1bayxkXSksYT09PWUpKWJyZWFrO3JldHVybihkLT15KT09PWd8fGQlZz09MCYmMDw9ZC9nfX19LFBTRVVETzpmdW5jdGlvbihlLG8pe3ZhciB0LGE9Yi5wc2V1ZG9zW2VdfHxiLnNldEZpbHRlcnNbZS50b0xvd2VyQ2FzZSgpXXx8c2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2UpO3JldHVybiBhW0VdP2Eobyk6MTxhLmxlbmd0aD8odD1bZSxlLFwiXCIsb10sYi5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGUudG9Mb3dlckNhc2UoKSk/bGUoZnVuY3Rpb24oZSx0KXt2YXIgbixyPWEoZSxvKSxpPXIubGVuZ3RoO3doaWxlKGktLSllW249UChlLHJbaV0pXT0hKHRbbl09cltpXSl9KTpmdW5jdGlvbihlKXtyZXR1cm4gYShlLDAsdCl9KTphfX0scHNldWRvczp7bm90OmxlKGZ1bmN0aW9uKGUpe3ZhciByPVtdLGk9W10scz1mKGUucmVwbGFjZShCLFwiJDFcIikpO3JldHVybiBzW0VdP2xlKGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG89cyhlLG51bGwscixbXSksYT1lLmxlbmd0aDt3aGlsZShhLS0pKGk9b1thXSkmJihlW2FdPSEodFthXT1pKSl9KTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHJbMF09ZSxzKHIsbnVsbCxuLGkpLHJbMF09bnVsbCwhaS5wb3AoKX19KSxoYXM6bGUoZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiAwPHNlKHQsZSkubGVuZ3RofX0pLGNvbnRhaW5zOmxlKGZ1bmN0aW9uKHQpe3JldHVybiB0PXQucmVwbGFjZSh0ZSxuZSksZnVuY3Rpb24oZSl7cmV0dXJuLTE8KGUudGV4dENvbnRlbnR8fG8oZSkpLmluZGV4T2YodCl9fSksbGFuZzpsZShmdW5jdGlvbihuKXtyZXR1cm4gVi50ZXN0KG58fFwiXCIpfHxzZS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK24pLG49bi5yZXBsYWNlKHRlLG5lKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGUpe3ZhciB0O2Rve2lmKHQ9Uz9lLmxhbmc6ZS5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8ZS5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybih0PXQudG9Mb3dlckNhc2UoKSk9PT1ufHwwPT09dC5pbmRleE9mKG4rXCItXCIpfXdoaWxlKChlPWUucGFyZW50Tm9kZSkmJjE9PT1lLm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9bi5sb2NhdGlvbiYmbi5sb2NhdGlvbi5oYXNoO3JldHVybiB0JiZ0LnNsaWNlKDEpPT09ZS5pZH0scm9vdDpmdW5jdGlvbihlKXtyZXR1cm4gZT09PWF9LGZvY3VzOmZ1bmN0aW9uKGUpe3JldHVybiBlPT09Qy5hY3RpdmVFbGVtZW50JiYoIUMuaGFzRm9jdXN8fEMuaGFzRm9jdXMoKSkmJiEhKGUudHlwZXx8ZS5ocmVmfHx+ZS50YWJJbmRleCl9LGVuYWJsZWQ6Z2UoITEpLGRpc2FibGVkOmdlKCEwKSxjaGVja2VkOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiYhIWUuY2hlY2tlZHx8XCJvcHRpb25cIj09PXQmJiEhZS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsITA9PT1lLnNlbGVjdGVkfSxlbXB0eTpmdW5jdGlvbihlKXtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpaWYoZS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIWIucHNldWRvcy5lbXB0eShlKX0saGVhZGVyOmZ1bmN0aW9uKGUpe3JldHVybiBKLnRlc3QoZS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGUpe3JldHVybiBRLnRlc3QoZS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmXCJidXR0b25cIj09PWUudHlwZXx8XCJidXR0b25cIj09PXR9LHRleHQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWUudHlwZSYmKG51bGw9PSh0PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09dC50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6eWUoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0OnllKGZ1bmN0aW9uKGUsdCl7cmV0dXJuW3QtMV19KSxlcTp5ZShmdW5jdGlvbihlLHQsbil7cmV0dXJuW248MD9uK3Q6bl19KSxldmVuOnllKGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTA7bjx0O24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksb2RkOnllKGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTE7bjx0O24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksbHQ6eWUoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1uPDA/bit0OnQ8bj90Om47MDw9LS1yOyllLnB1c2gocik7cmV0dXJuIGV9KSxndDp5ZShmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPW48MD9uK3Q6bjsrK3I8dDspZS5wdXNoKHIpO3JldHVybiBlfSl9fSkucHNldWRvcy5udGg9Yi5wc2V1ZG9zLmVxLHtyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSliLnBzZXVkb3NbZV09ZGUoZSk7Zm9yKGUgaW57c3VibWl0OiEwLHJlc2V0OiEwfSliLnBzZXVkb3NbZV09aGUoZSk7ZnVuY3Rpb24gbWUoKXt9ZnVuY3Rpb24geGUoZSl7Zm9yKHZhciB0PTAsbj1lLmxlbmd0aCxyPVwiXCI7dDxuO3QrKylyKz1lW3RdLnZhbHVlO3JldHVybiByfWZ1bmN0aW9uIGJlKHMsZSx0KXt2YXIgdT1lLmRpcixsPWUubmV4dCxjPWx8fHUsZj10JiZcInBhcmVudE5vZGVcIj09PWMscD1yKys7cmV0dXJuIGUuZmlyc3Q/ZnVuY3Rpb24oZSx0LG4pe3doaWxlKGU9ZVt1XSlpZigxPT09ZS5ub2RlVHlwZXx8ZilyZXR1cm4gcyhlLHQsbik7cmV0dXJuITF9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT1bayxwXTtpZihuKXt3aGlsZShlPWVbdV0paWYoKDE9PT1lLm5vZGVUeXBlfHxmKSYmcyhlLHQsbikpcmV0dXJuITB9ZWxzZSB3aGlsZShlPWVbdV0paWYoMT09PWUubm9kZVR5cGV8fGYpaWYoaT0obz1lW0VdfHwoZVtFXT17fSkpW2UudW5pcXVlSURdfHwob1tlLnVuaXF1ZUlEXT17fSksbCYmbD09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSllPWVbdV18fGU7ZWxzZXtpZigocj1pW2NdKSYmclswXT09PWsmJnJbMV09PT1wKXJldHVybiBhWzJdPXJbMl07aWYoKGlbY109YSlbMl09cyhlLHQsbikpcmV0dXJuITB9cmV0dXJuITF9fWZ1bmN0aW9uIHdlKGkpe3JldHVybiAxPGkubGVuZ3RoP2Z1bmN0aW9uKGUsdCxuKXt2YXIgcj1pLmxlbmd0aDt3aGlsZShyLS0paWYoIWlbcl0oZSx0LG4pKXJldHVybiExO3JldHVybiEwfTppWzBdfWZ1bmN0aW9uIFRlKGUsdCxuLHIsaSl7Zm9yKHZhciBvLGE9W10scz0wLHU9ZS5sZW5ndGgsbD1udWxsIT10O3M8dTtzKyspKG89ZVtzXSkmJihuJiYhbihvLHIsaSl8fChhLnB1c2gobyksbCYmdC5wdXNoKHMpKSk7cmV0dXJuIGF9ZnVuY3Rpb24gQ2UoZCxoLGcseSx2LGUpe3JldHVybiB5JiYheVtFXSYmKHk9Q2UoeSkpLHYmJiF2W0VdJiYodj1DZSh2LGUpKSxsZShmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscz1bXSx1PVtdLGw9dC5sZW5ndGgsYz1lfHxmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPTAsaT10Lmxlbmd0aDtyPGk7cisrKXNlKGUsdFtyXSxuKTtyZXR1cm4gbn0oaHx8XCIqXCIsbi5ub2RlVHlwZT9bbl06bixbXSksZj0hZHx8IWUmJmg/YzpUZShjLHMsZCxuLHIpLHA9Zz92fHwoZT9kOmx8fHkpP1tdOnQ6ZjtpZihnJiZnKGYscCxuLHIpLHkpe2k9VGUocCx1KSx5KGksW10sbixyKSxvPWkubGVuZ3RoO3doaWxlKG8tLSkoYT1pW29dKSYmKHBbdVtvXV09IShmW3Vbb11dPWEpKX1pZihlKXtpZih2fHxkKXtpZih2KXtpPVtdLG89cC5sZW5ndGg7d2hpbGUoby0tKShhPXBbb10pJiZpLnB1c2goZltvXT1hKTt2KG51bGwscD1bXSxpLHIpfW89cC5sZW5ndGg7d2hpbGUoby0tKShhPXBbb10pJiYtMTwoaT12P1AoZSxhKTpzW29dKSYmKGVbaV09ISh0W2ldPWEpKX19ZWxzZSBwPVRlKHA9PT10P3Auc3BsaWNlKGwscC5sZW5ndGgpOnApLHY/dihudWxsLHQscCxyKTpILmFwcGx5KHQscCl9KX1mdW5jdGlvbiBTZShlKXtmb3IodmFyIGksdCxuLHI9ZS5sZW5ndGgsbz1iLnJlbGF0aXZlW2VbMF0udHlwZV0sYT1vfHxiLnJlbGF0aXZlW1wiIFwiXSxzPW8/MTowLHU9YmUoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1pfSxhLCEwKSxsPWJlKGZ1bmN0aW9uKGUpe3JldHVybi0xPFAoaSxlKX0sYSwhMCksYz1bZnVuY3Rpb24oZSx0LG4pe3ZhciByPSFvJiYobnx8dCE9PXcpfHwoKGk9dCkubm9kZVR5cGU/dShlLHQsbik6bChlLHQsbikpO3JldHVybiBpPW51bGwscn1dO3M8cjtzKyspaWYodD1iLnJlbGF0aXZlW2Vbc10udHlwZV0pYz1bYmUod2UoYyksdCldO2Vsc2V7aWYoKHQ9Yi5maWx0ZXJbZVtzXS50eXBlXS5hcHBseShudWxsLGVbc10ubWF0Y2hlcykpW0VdKXtmb3Iobj0rK3M7bjxyO24rKylpZihiLnJlbGF0aXZlW2Vbbl0udHlwZV0pYnJlYWs7cmV0dXJuIENlKDE8cyYmd2UoYyksMTxzJiZ4ZShlLnNsaWNlKDAscy0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09ZVtzLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKEIsXCIkMVwiKSx0LHM8biYmU2UoZS5zbGljZShzLG4pKSxuPHImJlNlKGU9ZS5zbGljZShuKSksbjxyJiZ4ZShlKSl9Yy5wdXNoKHQpfXJldHVybiB3ZShjKX1yZXR1cm4gbWUucHJvdG90eXBlPWIuZmlsdGVycz1iLnBzZXVkb3MsYi5zZXRGaWx0ZXJzPW5ldyBtZSxoPXNlLnRva2VuaXplPWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzLHUsbD14W2UrXCIgXCJdO2lmKGwpcmV0dXJuIHQ/MDpsLnNsaWNlKDApO2E9ZSxzPVtdLHU9Yi5wcmVGaWx0ZXI7d2hpbGUoYSl7Zm9yKG8gaW4gbiYmIShyPV8uZXhlYyhhKSl8fChyJiYoYT1hLnNsaWNlKHJbMF0ubGVuZ3RoKXx8YSkscy5wdXNoKGk9W10pKSxuPSExLChyPXouZXhlYyhhKSkmJihuPXIuc2hpZnQoKSxpLnB1c2goe3ZhbHVlOm4sdHlwZTpyWzBdLnJlcGxhY2UoQixcIiBcIil9KSxhPWEuc2xpY2Uobi5sZW5ndGgpKSxiLmZpbHRlcikhKHI9R1tvXS5leGVjKGEpKXx8dVtvXSYmIShyPXVbb10ocikpfHwobj1yLnNoaWZ0KCksaS5wdXNoKHt2YWx1ZTpuLHR5cGU6byxtYXRjaGVzOnJ9KSxhPWEuc2xpY2Uobi5sZW5ndGgpKTtpZighbilicmVha31yZXR1cm4gdD9hLmxlbmd0aDphP3NlLmVycm9yKGUpOngoZSxzKS5zbGljZSgwKX0sZj1zZS5jb21waWxlPWZ1bmN0aW9uKGUsdCl7dmFyIG4seSx2LG0seCxyLGk9W10sbz1bXSxhPUFbZStcIiBcIl07aWYoIWEpe3R8fCh0PWgoZSkpLG49dC5sZW5ndGg7d2hpbGUobi0tKShhPVNlKHRbbl0pKVtFXT9pLnB1c2goYSk6by5wdXNoKGEpOyhhPUEoZSwoeT1vLG09MDwodj1pKS5sZW5ndGgseD0wPHkubGVuZ3RoLHI9ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdT0wLGw9XCIwXCIsYz1lJiZbXSxmPVtdLHA9dyxkPWV8fHgmJmIuZmluZC5UQUcoXCIqXCIsaSksaD1rKz1udWxsPT1wPzE6TWF0aC5yYW5kb20oKXx8LjEsZz1kLmxlbmd0aDtmb3IoaSYmKHc9dD09Q3x8dHx8aSk7bCE9PWcmJm51bGwhPShvPWRbbF0pO2wrKyl7aWYoeCYmbyl7YT0wLHR8fG8ub3duZXJEb2N1bWVudD09Q3x8KFQobyksbj0hUyk7d2hpbGUocz15W2ErK10paWYocyhvLHR8fEMsbikpe3IucHVzaChvKTticmVha31pJiYoaz1oKX1tJiYoKG89IXMmJm8pJiZ1LS0sZSYmYy5wdXNoKG8pKX1pZih1Kz1sLG0mJmwhPT11KXthPTA7d2hpbGUocz12W2ErK10pcyhjLGYsdCxuKTtpZihlKXtpZigwPHUpd2hpbGUobC0tKWNbbF18fGZbbF18fChmW2xdPXEuY2FsbChyKSk7Zj1UZShmKX1ILmFwcGx5KHIsZiksaSYmIWUmJjA8Zi5sZW5ndGgmJjE8dSt2Lmxlbmd0aCYmc2UudW5pcXVlU29ydChyKX1yZXR1cm4gaSYmKGs9aCx3PXApLGN9LG0/bGUocik6cikpKS5zZWxlY3Rvcj1lfXJldHVybiBhfSxnPXNlLnNlbGVjdD1mdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSxjPSFyJiZoKGU9bC5zZWxlY3Rvcnx8ZSk7aWYobj1ufHxbXSwxPT09Yy5sZW5ndGgpe2lmKDI8KG89Y1swXT1jWzBdLnNsaWNlKDApKS5sZW5ndGgmJlwiSURcIj09PShhPW9bMF0pLnR5cGUmJjk9PT10Lm5vZGVUeXBlJiZTJiZiLnJlbGF0aXZlW29bMV0udHlwZV0pe2lmKCEodD0oYi5maW5kLklEKGEubWF0Y2hlc1swXS5yZXBsYWNlKHRlLG5lKSx0KXx8W10pWzBdKSlyZXR1cm4gbjtsJiYodD10LnBhcmVudE5vZGUpLGU9ZS5zbGljZShvLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1pPUcubmVlZHNDb250ZXh0LnRlc3QoZSk/MDpvLmxlbmd0aDt3aGlsZShpLS0pe2lmKGE9b1tpXSxiLnJlbGF0aXZlW3M9YS50eXBlXSlicmVhaztpZigodT1iLmZpbmRbc10pJiYocj11KGEubWF0Y2hlc1swXS5yZXBsYWNlKHRlLG5lKSxlZS50ZXN0KG9bMF0udHlwZSkmJnZlKHQucGFyZW50Tm9kZSl8fHQpKSl7aWYoby5zcGxpY2UoaSwxKSwhKGU9ci5sZW5ndGgmJnhlKG8pKSlyZXR1cm4gSC5hcHBseShuLHIpLG47YnJlYWt9fX1yZXR1cm4obHx8ZihlLGMpKShyLHQsIVMsbiwhdHx8ZWUudGVzdChlKSYmdmUodC5wYXJlbnROb2RlKXx8dCksbn0sZC5zb3J0U3RhYmxlPUUuc3BsaXQoXCJcIikuc29ydChqKS5qb2luKFwiXCIpPT09RSxkLmRldGVjdER1cGxpY2F0ZXM9ISFsLFQoKSxkLnNvcnREZXRhY2hlZD1jZShmdW5jdGlvbihlKXtyZXR1cm4gMSZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKEMuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpKX0pLGNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGZlKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbilyZXR1cm4gZS5nZXRBdHRyaWJ1dGUodCxcInR5cGVcIj09PXQudG9Mb3dlckNhc2UoKT8xOjIpfSksZC5hdHRyaWJ1dGVzJiZjZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGUuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8ZmUoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbiYmXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiBlLmRlZmF1bHRWYWx1ZX0pLGNlKGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGZlKFIsZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKCFuKXJldHVybiEwPT09ZVt0XT90LnRvTG93ZXJDYXNlKCk6KHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmci5zcGVjaWZpZWQ/ci52YWx1ZTpudWxsfSksc2V9KEMpO0UuZmluZD1kLEUuZXhwcj1kLnNlbGVjdG9ycyxFLmV4cHJbXCI6XCJdPUUuZXhwci5wc2V1ZG9zLEUudW5pcXVlU29ydD1FLnVuaXF1ZT1kLnVuaXF1ZVNvcnQsRS50ZXh0PWQuZ2V0VGV4dCxFLmlzWE1MRG9jPWQuaXNYTUwsRS5jb250YWlucz1kLmNvbnRhaW5zLEUuZXNjYXBlU2VsZWN0b3I9ZC5lc2NhcGU7dmFyIGg9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVtdLGk9dm9pZCAwIT09bjt3aGlsZSgoZT1lW3RdKSYmOSE9PWUubm9kZVR5cGUpaWYoMT09PWUubm9kZVR5cGUpe2lmKGkmJkUoZSkuaXMobikpYnJlYWs7ci5wdXNoKGUpfXJldHVybiByfSxUPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPVtdO2U7ZT1lLm5leHRTaWJsaW5nKTE9PT1lLm5vZGVUeXBlJiZlIT09dCYmbi5wdXNoKGUpO3JldHVybiBufSxrPUUuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7ZnVuY3Rpb24gQShlLHQpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10LnRvTG93ZXJDYXNlKCl9dmFyIE49L148KFthLXpdW15cXC9cXDA+OlxceDIwXFx0XFxyXFxuXFxmXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXC8/Pig/OjxcXC9cXDE+fCkkL2k7ZnVuY3Rpb24gaihlLG4scil7cmV0dXJuIG0obik/RS5ncmVwKGUsZnVuY3Rpb24oZSx0KXtyZXR1cm4hIW4uY2FsbChlLHQsZSkhPT1yfSk6bi5ub2RlVHlwZT9FLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gZT09PW4hPT1yfSk6XCJzdHJpbmdcIiE9dHlwZW9mIG4/RS5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuLTE8aS5jYWxsKG4sZSkhPT1yfSk6RS5maWx0ZXIobixlLHIpfUUuZmlsdGVyPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10WzBdO3JldHVybiBuJiYoZT1cIjpub3QoXCIrZStcIilcIiksMT09PXQubGVuZ3RoJiYxPT09ci5ub2RlVHlwZT9FLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHIsZSk/W3JdOltdOkUuZmluZC5tYXRjaGVzKGUsRS5ncmVwKHQsZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfSkpfSxFLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihlKXt2YXIgdCxuLHI9dGhpcy5sZW5ndGgsaT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiB0aGlzLnB1c2hTdGFjayhFKGUpLmZpbHRlcihmdW5jdGlvbigpe2Zvcih0PTA7dDxyO3QrKylpZihFLmNvbnRhaW5zKGlbdF0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKG49dGhpcy5wdXNoU3RhY2soW10pLHQ9MDt0PHI7dCsrKUUuZmluZChlLGlbdF0sbik7cmV0dXJuIDE8cj9FLnVuaXF1ZVNvcnQobik6bn0sZmlsdGVyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhqKHRoaXMsZXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhqKHRoaXMsZXx8W10sITApKX0saXM6ZnVuY3Rpb24oZSl7cmV0dXJuISFqKHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGUmJmsudGVzdChlKT9FKGUpOmV8fFtdLCExKS5sZW5ndGh9fSk7dmFyIEQscT0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLzsoRS5mbi5pbml0PWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpO2lmKCFlKXJldHVybiB0aGlzO2lmKG49bnx8RCxcInN0cmluZ1wiPT10eXBlb2YgZSl7aWYoIShyPVwiPFwiPT09ZVswXSYmXCI+XCI9PT1lW2UubGVuZ3RoLTFdJiYzPD1lLmxlbmd0aD9bbnVsbCxlLG51bGxdOnEuZXhlYyhlKSl8fCFyWzFdJiZ0KXJldHVybiF0fHx0LmpxdWVyeT8odHx8bikuZmluZChlKTp0aGlzLmNvbnN0cnVjdG9yKHQpLmZpbmQoZSk7aWYoclsxXSl7aWYodD10IGluc3RhbmNlb2YgRT90WzBdOnQsRS5tZXJnZSh0aGlzLEUucGFyc2VIVE1MKHJbMV0sdCYmdC5ub2RlVHlwZT90Lm93bmVyRG9jdW1lbnR8fHQ6UywhMCkpLE4udGVzdChyWzFdKSYmRS5pc1BsYWluT2JqZWN0KHQpKWZvcihyIGluIHQpbSh0aGlzW3JdKT90aGlzW3JdKHRbcl0pOnRoaXMuYXR0cihyLHRbcl0pO3JldHVybiB0aGlzfXJldHVybihpPVMuZ2V0RWxlbWVudEJ5SWQoclsyXSkpJiYodGhpc1swXT1pLHRoaXMubGVuZ3RoPTEpLHRoaXN9cmV0dXJuIGUubm9kZVR5cGU/KHRoaXNbMF09ZSx0aGlzLmxlbmd0aD0xLHRoaXMpOm0oZSk/dm9pZCAwIT09bi5yZWFkeT9uLnJlYWR5KGUpOmUoRSk6RS5tYWtlQXJyYXkoZSx0aGlzKX0pLnByb3RvdHlwZT1FLmZuLEQ9RShTKTt2YXIgTD0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxIPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O2Z1bmN0aW9uIE8oZSx0KXt3aGlsZSgoZT1lW3RdKSYmMSE9PWUubm9kZVR5cGUpO3JldHVybiBlfUUuZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oZSl7dmFyIHQ9RShlLHRoaXMpLG49dC5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTxuO2UrKylpZihFLmNvbnRhaW5zKHRoaXMsdFtlXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXRoaXMubGVuZ3RoLG89W10sYT1cInN0cmluZ1wiIT10eXBlb2YgZSYmRShlKTtpZighay50ZXN0KGUpKWZvcig7cjxpO3IrKylmb3Iobj10aGlzW3JdO24mJm4hPT10O249bi5wYXJlbnROb2RlKWlmKG4ubm9kZVR5cGU8MTEmJihhPy0xPGEuaW5kZXgobik6MT09PW4ubm9kZVR5cGUmJkUuZmluZC5tYXRjaGVzU2VsZWN0b3IobixlKSkpe28ucHVzaChuKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soMTxvLmxlbmd0aD9FLnVuaXF1ZVNvcnQobyk6byl9LGluZGV4OmZ1bmN0aW9uKGUpe3JldHVybiBlP1wic3RyaW5nXCI9PXR5cGVvZiBlP2kuY2FsbChFKGUpLHRoaXNbMF0pOmkuY2FsbCh0aGlzLGUuanF1ZXJ5P2VbMF06ZSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRS51bmlxdWVTb3J0KEUubWVyZ2UodGhpcy5nZXQoKSxFKGUsdCkpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWU/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoZSkpfX0pLEUuZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmMTEhPT10Lm5vZGVUeXBlP3Q6bnVsbH0scGFyZW50czpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwicGFyZW50Tm9kZVwiLG4pfSxuZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBPKGUsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihlKXtyZXR1cm4gTyhlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBoKGUsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBoKGUsXCJuZXh0U2libGluZ1wiLG4pfSxwcmV2VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBoKGUsXCJwcmV2aW91c1NpYmxpbmdcIixuKX0sc2libGluZ3M6ZnVuY3Rpb24oZSl7cmV0dXJuIFQoKGUucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsZSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGUpe3JldHVybiBUKGUuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lLmNvbnRlbnREb2N1bWVudCYmcihlLmNvbnRlbnREb2N1bWVudCk/ZS5jb250ZW50RG9jdW1lbnQ6KEEoZSxcInRlbXBsYXRlXCIpJiYoZT1lLmNvbnRlbnR8fGUpLEUubWVyZ2UoW10sZS5jaGlsZE5vZGVzKSl9fSxmdW5jdGlvbihyLGkpe0UuZm5bcl09ZnVuY3Rpb24oZSx0KXt2YXIgbj1FLm1hcCh0aGlzLGksZSk7cmV0dXJuXCJVbnRpbFwiIT09ci5zbGljZSgtNSkmJih0PWUpLHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0JiYobj1FLmZpbHRlcih0LG4pKSwxPHRoaXMubGVuZ3RoJiYoSFtyXXx8RS51bmlxdWVTb3J0KG4pLEwudGVzdChyKSYmbi5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKG4pfX0pO3ZhciBQPS9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZztmdW5jdGlvbiBSKGUpe3JldHVybiBlfWZ1bmN0aW9uIE0oZSl7dGhyb3cgZX1mdW5jdGlvbiBJKGUsdCxuLHIpe3ZhciBpO3RyeXtlJiZtKGk9ZS5wcm9taXNlKT9pLmNhbGwoZSkuZG9uZSh0KS5mYWlsKG4pOmUmJm0oaT1lLnRoZW4pP2kuY2FsbChlLHQsbik6dC5hcHBseSh2b2lkIDAsW2VdLnNsaWNlKHIpKX1jYXRjaChlKXtuLmFwcGx5KHZvaWQgMCxbZV0pfX1FLkNhbGxiYWNrcz1mdW5jdGlvbihyKXt2YXIgZSxuO3I9XCJzdHJpbmdcIj09dHlwZW9mIHI/KGU9cixuPXt9LEUuZWFjaChlLm1hdGNoKFApfHxbXSxmdW5jdGlvbihlLHQpe25bdF09ITB9KSxuKTpFLmV4dGVuZCh7fSxyKTt2YXIgaSx0LG8sYSxzPVtdLHU9W10sbD0tMSxjPWZ1bmN0aW9uKCl7Zm9yKGE9YXx8ci5vbmNlLG89aT0hMDt1Lmxlbmd0aDtsPS0xKXt0PXUuc2hpZnQoKTt3aGlsZSgrK2w8cy5sZW5ndGgpITE9PT1zW2xdLmFwcGx5KHRbMF0sdFsxXSkmJnIuc3RvcE9uRmFsc2UmJihsPXMubGVuZ3RoLHQ9ITEpfXIubWVtb3J5fHwodD0hMSksaT0hMSxhJiYocz10P1tdOlwiXCIpfSxmPXthZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gcyYmKHQmJiFpJiYobD1zLmxlbmd0aC0xLHUucHVzaCh0KSksZnVuY3Rpb24gbihlKXtFLmVhY2goZSxmdW5jdGlvbihlLHQpe20odCk/ci51bmlxdWUmJmYuaGFzKHQpfHxzLnB1c2godCk6dCYmdC5sZW5ndGgmJlwic3RyaW5nXCIhPT13KHQpJiZuKHQpfSl9KGFyZ3VtZW50cyksdCYmIWkmJmMoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIEUuZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oZSx0KXt2YXIgbjt3aGlsZSgtMTwobj1FLmluQXJyYXkodCxzLG4pKSlzLnNwbGljZShuLDEpLG48PWwmJmwtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZT8tMTxFLmluQXJyYXkoZSxzKTowPHMubGVuZ3RofSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBzJiYocz1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBhPXU9W10scz10PVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hc30sbG9jazpmdW5jdGlvbigpe3JldHVybiBhPXU9W10sdHx8aXx8KHM9dD1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWF9LGZpcmVXaXRoOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGF8fCh0PVtlLCh0PXR8fFtdKS5zbGljZT90LnNsaWNlKCk6dF0sdS5wdXNoKHQpLGl8fGMoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBmLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhb319O3JldHVybiBmfSxFLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oZSl7dmFyIG89W1tcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixFLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSxFLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSwyXSxbXCJyZXNvbHZlXCIsXCJkb25lXCIsRS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxFLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDAsXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixFLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLEUuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMSxcInJlamVjdGVkXCJdXSxpPVwicGVuZGluZ1wiLGE9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGl9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBzLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sXCJjYXRjaFwiOmZ1bmN0aW9uKGUpe3JldHVybiBhLnRoZW4obnVsbCxlKX0scGlwZTpmdW5jdGlvbigpe3ZhciBpPWFyZ3VtZW50cztyZXR1cm4gRS5EZWZlcnJlZChmdW5jdGlvbihyKXtFLmVhY2gobyxmdW5jdGlvbihlLHQpe3ZhciBuPW0oaVt0WzRdXSkmJmlbdFs0XV07c1t0WzFdXShmdW5jdGlvbigpe3ZhciBlPW4mJm4uYXBwbHkodGhpcyxhcmd1bWVudHMpO2UmJm0oZS5wcm9taXNlKT9lLnByb21pc2UoKS5wcm9ncmVzcyhyLm5vdGlmeSkuZG9uZShyLnJlc29sdmUpLmZhaWwoci5yZWplY3QpOnJbdFswXStcIldpdGhcIl0odGhpcyxuP1tlXTphcmd1bWVudHMpfSl9KSxpPW51bGx9KS5wcm9taXNlKCl9LHRoZW46ZnVuY3Rpb24odCxuLHIpe3ZhciB1PTA7ZnVuY3Rpb24gbChpLG8sYSxzKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj10aGlzLHI9YXJndW1lbnRzLGU9ZnVuY3Rpb24oKXt2YXIgZSx0O2lmKCEoaTx1KSl7aWYoKGU9YS5hcHBseShuLHIpKT09PW8ucHJvbWlzZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIik7dD1lJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpJiZlLnRoZW4sbSh0KT9zP3QuY2FsbChlLGwodSxvLFIscyksbCh1LG8sTSxzKSk6KHUrKyx0LmNhbGwoZSxsKHUsbyxSLHMpLGwodSxvLE0scyksbCh1LG8sUixvLm5vdGlmeVdpdGgpKSk6KGEhPT1SJiYobj12b2lkIDAscj1bZV0pLChzfHxvLnJlc29sdmVXaXRoKShuLHIpKX19LHQ9cz9lOmZ1bmN0aW9uKCl7dHJ5e2UoKX1jYXRjaChlKXtFLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2smJkUuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayhlLHQuc3RhY2tUcmFjZSksdTw9aSsxJiYoYSE9PU0mJihuPXZvaWQgMCxyPVtlXSksby5yZWplY3RXaXRoKG4scikpfX07aT90KCk6KEUuRGVmZXJyZWQuZ2V0U3RhY2tIb29rJiYodC5zdGFja1RyYWNlPUUuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCkpLEMuc2V0VGltZW91dCh0KSl9fXJldHVybiBFLkRlZmVycmVkKGZ1bmN0aW9uKGUpe29bMF1bM10uYWRkKGwoMCxlLG0ocik/cjpSLGUubm90aWZ5V2l0aCkpLG9bMV1bM10uYWRkKGwoMCxlLG0odCk/dDpSKSksb1syXVszXS5hZGQobCgwLGUsbShuKT9uOk0pKX0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZT9FLmV4dGVuZChlLGEpOmF9fSxzPXt9O3JldHVybiBFLmVhY2gobyxmdW5jdGlvbihlLHQpe3ZhciBuPXRbMl0scj10WzVdO2FbdFsxXV09bi5hZGQsciYmbi5hZGQoZnVuY3Rpb24oKXtpPXJ9LG9bMy1lXVsyXS5kaXNhYmxlLG9bMy1lXVszXS5kaXNhYmxlLG9bMF1bMl0ubG9jayxvWzBdWzNdLmxvY2spLG4uYWRkKHRbM10uZmlyZSksc1t0WzBdXT1mdW5jdGlvbigpe3JldHVybiBzW3RbMF0rXCJXaXRoXCJdKHRoaXM9PT1zP3ZvaWQgMDp0aGlzLGFyZ3VtZW50cyksdGhpc30sc1t0WzBdK1wiV2l0aFwiXT1uLmZpcmVXaXRofSksYS5wcm9taXNlKHMpLGUmJmUuY2FsbChzLHMpLHN9LHdoZW46ZnVuY3Rpb24oZSl7dmFyIG49YXJndW1lbnRzLmxlbmd0aCx0PW4scj1BcnJheSh0KSxpPXMuY2FsbChhcmd1bWVudHMpLG89RS5EZWZlcnJlZCgpLGE9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JbdF09dGhpcyxpW3RdPTE8YXJndW1lbnRzLmxlbmd0aD9zLmNhbGwoYXJndW1lbnRzKTplLC0tbnx8by5yZXNvbHZlV2l0aChyLGkpfX07aWYobjw9MSYmKEkoZSxvLmRvbmUoYSh0KSkucmVzb2x2ZSxvLnJlamVjdCwhbiksXCJwZW5kaW5nXCI9PT1vLnN0YXRlKCl8fG0oaVt0XSYmaVt0XS50aGVuKSkpcmV0dXJuIG8udGhlbigpO3doaWxlKHQtLSlJKGlbdF0sYSh0KSxvLnJlamVjdCk7cmV0dXJuIG8ucHJvbWlzZSgpfX0pO3ZhciBXPS9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO0UuRGVmZXJyZWQuZXhjZXB0aW9uSG9vaz1mdW5jdGlvbihlLHQpe0MuY29uc29sZSYmQy5jb25zb2xlLndhcm4mJmUmJlcudGVzdChlLm5hbWUpJiZDLmNvbnNvbGUud2FybihcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246IFwiK2UubWVzc2FnZSxlLnN0YWNrLHQpfSxFLnJlYWR5RXhjZXB0aW9uPWZ1bmN0aW9uKGUpe0Muc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGV9KX07dmFyIEY9RS5EZWZlcnJlZCgpO2Z1bmN0aW9uICQoKXtTLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsJCksQy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCQpLEUucmVhZHkoKX1FLmZuLnJlYWR5PWZ1bmN0aW9uKGUpe3JldHVybiBGLnRoZW4oZSlbXCJjYXRjaFwiXShmdW5jdGlvbihlKXtFLnJlYWR5RXhjZXB0aW9uKGUpfSksdGhpc30sRS5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEscmVhZHk6ZnVuY3Rpb24oZSl7KCEwPT09ZT8tLUUucmVhZHlXYWl0OkUuaXNSZWFkeSl8fChFLmlzUmVhZHk9ITApIT09ZSYmMDwtLUUucmVhZHlXYWl0fHxGLnJlc29sdmVXaXRoKFMsW0VdKX19KSxFLnJlYWR5LnRoZW49Ri50aGVuLFwiY29tcGxldGVcIj09PVMucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1TLnJlYWR5U3RhdGUmJiFTLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbD9DLnNldFRpbWVvdXQoRS5yZWFkeSk6KFMuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwkKSxDLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsJCkpO3ZhciBCPWZ1bmN0aW9uKGUsdCxuLHIsaSxvLGEpe3ZhciBzPTAsdT1lLmxlbmd0aCxsPW51bGw9PW47aWYoXCJvYmplY3RcIj09PXcobikpZm9yKHMgaW4gaT0hMCxuKUIoZSx0LHMsbltzXSwhMCxvLGEpO2Vsc2UgaWYodm9pZCAwIT09ciYmKGk9ITAsbShyKXx8KGE9ITApLGwmJihhPyh0LmNhbGwoZSxyKSx0PW51bGwpOihsPXQsdD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIGwuY2FsbChFKGUpLG4pfSkpLHQpKWZvcig7czx1O3MrKyl0KGVbc10sbixhP3I6ci5jYWxsKGVbc10scyx0KGVbc10sbikpKTtyZXR1cm4gaT9lOmw/dC5jYWxsKGUpOnU/dChlWzBdLG4pOm99LF89L14tbXMtLyx6PS8tKFthLXpdKS9nO2Z1bmN0aW9uIFUoZSx0KXtyZXR1cm4gdC50b1VwcGVyQ2FzZSgpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIGUucmVwbGFjZShfLFwibXMtXCIpLnJlcGxhY2UoeixVKX12YXIgVj1mdW5jdGlvbihlKXtyZXR1cm4gMT09PWUubm9kZVR5cGV8fDk9PT1lLm5vZGVUeXBlfHwhK2Uubm9kZVR5cGV9O2Z1bmN0aW9uIEcoKXt0aGlzLmV4cGFuZG89RS5leHBhbmRvK0cudWlkKyt9Ry51aWQ9MSxHLnByb3RvdHlwZT17Y2FjaGU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZVt0aGlzLmV4cGFuZG9dO3JldHVybiB0fHwodD17fSxWKGUpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dDpPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0aGlzLmV4cGFuZG8se3ZhbHVlOnQsY29uZmlndXJhYmxlOiEwfSkpKSx0fSxzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9dGhpcy5jYWNoZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdClpW1godCldPW47ZWxzZSBmb3IociBpbiB0KWlbWChyKV09dFtyXTtyZXR1cm4gaX0sZ2V0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQ/dGhpcy5jYWNoZShlKTplW3RoaXMuZXhwYW5kb10mJmVbdGhpcy5leHBhbmRvXVtYKHQpXX0sYWNjZXNzOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdm9pZCAwPT09dHx8dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQmJnZvaWQgMD09PW4/dGhpcy5nZXQoZSx0KToodGhpcy5zZXQoZSx0LG4pLHZvaWQgMCE9PW4/bjp0KX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1lW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09cil7aWYodm9pZCAwIT09dCl7bj0odD1BcnJheS5pc0FycmF5KHQpP3QubWFwKFgpOih0PVgodCkpaW4gcj9bdF06dC5tYXRjaChQKXx8W10pLmxlbmd0aDt3aGlsZShuLS0pZGVsZXRlIHJbdFtuXV19KHZvaWQgMD09PXR8fEUuaXNFbXB0eU9iamVjdChyKSkmJihlLm5vZGVUeXBlP2VbdGhpcy5leHBhbmRvXT12b2lkIDA6ZGVsZXRlIGVbdGhpcy5leHBhbmRvXSl9fSxoYXNEYXRhOmZ1bmN0aW9uKGUpe3ZhciB0PWVbdGhpcy5leHBhbmRvXTtyZXR1cm4gdm9pZCAwIT09dCYmIUUuaXNFbXB0eU9iamVjdCh0KX19O3ZhciBZPW5ldyBHLFE9bmV3IEcsSj0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sSz0vW0EtWl0vZztmdW5jdGlvbiBaKGUsdCxuKXt2YXIgcixpO2lmKHZvaWQgMD09PW4mJjE9PT1lLm5vZGVUeXBlKWlmKHI9XCJkYXRhLVwiK3QucmVwbGFjZShLLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksXCJzdHJpbmdcIj09dHlwZW9mKG49ZS5nZXRBdHRyaWJ1dGUocikpKXt0cnl7bj1cInRydWVcIj09PShpPW4pfHxcImZhbHNlXCIhPT1pJiYoXCJudWxsXCI9PT1pP251bGw6aT09PStpK1wiXCI/K2k6Si50ZXN0KGkpP0pTT04ucGFyc2UoaSk6aSl9Y2F0Y2goZSl7fVEuc2V0KGUsdCxuKX1lbHNlIG49dm9pZCAwO3JldHVybiBufUUuZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiBRLmhhc0RhdGEoZSl8fFkuaGFzRGF0YShlKX0sZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFEuYWNjZXNzKGUsdCxuKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe1EucmVtb3ZlKGUsdCl9LF9kYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gWS5hY2Nlc3MoZSx0LG4pfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe1kucmVtb3ZlKGUsdCl9fSksRS5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24obixlKXt2YXIgdCxyLGksbz10aGlzWzBdLGE9byYmby5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PW4pe2lmKHRoaXMubGVuZ3RoJiYoaT1RLmdldChvKSwxPT09by5ub2RlVHlwZSYmIVkuZ2V0KG8sXCJoYXNEYXRhQXR0cnNcIikpKXt0PWEubGVuZ3RoO3doaWxlKHQtLSlhW3RdJiYwPT09KHI9YVt0XS5uYW1lKS5pbmRleE9mKFwiZGF0YS1cIikmJihyPVgoci5zbGljZSg1KSksWihvLHIsaVtyXSkpO1kuc2V0KG8sXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGl9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIG4/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7US5zZXQodGhpcyxuKX0pOkIodGhpcyxmdW5jdGlvbihlKXt2YXIgdDtpZihvJiZ2b2lkIDA9PT1lKXJldHVybiB2b2lkIDAhPT0odD1RLmdldChvLG4pKT90OnZvaWQgMCE9PSh0PVoobyxuKSk/dDp2b2lkIDA7dGhpcy5lYWNoKGZ1bmN0aW9uKCl7US5zZXQodGhpcyxuLGUpfSl9LG51bGwsZSwxPGFyZ3VtZW50cy5sZW5ndGgsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1EucmVtb3ZlKHRoaXMsZSl9KX19KSxFLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKGUpcmV0dXJuIHQ9KHR8fFwiZnhcIikrXCJxdWV1ZVwiLHI9WS5nZXQoZSx0KSxuJiYoIXJ8fEFycmF5LmlzQXJyYXkobik/cj1ZLmFjY2VzcyhlLHQsRS5tYWtlQXJyYXkobikpOnIucHVzaChuKSkscnx8W119LGRlcXVldWU6ZnVuY3Rpb24oZSx0KXt0PXR8fFwiZnhcIjt2YXIgbj1FLnF1ZXVlKGUsdCkscj1uLmxlbmd0aCxpPW4uc2hpZnQoKSxvPUUuX3F1ZXVlSG9va3MoZSx0KTtcImlucHJvZ3Jlc3NcIj09PWkmJihpPW4uc2hpZnQoKSxyLS0pLGkmJihcImZ4XCI9PT10JiZuLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBvLnN0b3AsaS5jYWxsKGUsZnVuY3Rpb24oKXtFLmRlcXVldWUoZSx0KX0sbykpLCFyJiZvJiZvLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oZSx0KXt2YXIgbj10K1wicXVldWVIb29rc1wiO3JldHVybiBZLmdldChlLG4pfHxZLmFjY2VzcyhlLG4se2VtcHR5OkUuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7WS5yZW1vdmUoZSxbdCtcInF1ZXVlXCIsbl0pfSl9KX19KSxFLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24odCxuKXt2YXIgZT0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiB0JiYobj10LHQ9XCJmeFwiLGUtLSksYXJndW1lbnRzLmxlbmd0aDxlP0UucXVldWUodGhpc1swXSx0KTp2b2lkIDA9PT1uP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9RS5xdWV1ZSh0aGlzLHQsbik7RS5fcXVldWVIb29rcyh0aGlzLHQpLFwiZnhcIj09PXQmJlwiaW5wcm9ncmVzc1wiIT09ZVswXSYmRS5kZXF1ZXVlKHRoaXMsdCl9KX0sZGVxdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7RS5kZXF1ZXVlKHRoaXMsZSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5xdWV1ZShlfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0xLGk9RS5EZWZlcnJlZCgpLG89dGhpcyxhPXRoaXMubGVuZ3RoLHM9ZnVuY3Rpb24oKXstLXJ8fGkucmVzb2x2ZVdpdGgobyxbb10pfTtcInN0cmluZ1wiIT10eXBlb2YgZSYmKHQ9ZSxlPXZvaWQgMCksZT1lfHxcImZ4XCI7d2hpbGUoYS0tKShuPVkuZ2V0KG9bYV0sZStcInF1ZXVlSG9va3NcIikpJiZuLmVtcHR5JiYocisrLG4uZW1wdHkuYWRkKHMpKTtyZXR1cm4gcygpLGkucHJvbWlzZSh0KX19KTt2YXIgZWU9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLHRlPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK2VlK1wiKShbYS16JV0qKSRcIixcImlcIiksbmU9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLHJlPVMuZG9jdW1lbnRFbGVtZW50LGllPWZ1bmN0aW9uKGUpe3JldHVybiBFLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKX0sb2U9e2NvbXBvc2VkOiEwfTtyZS5nZXRSb290Tm9kZSYmKGllPWZ1bmN0aW9uKGUpe3JldHVybiBFLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKXx8ZS5nZXRSb290Tm9kZShvZSk9PT1lLm93bmVyRG9jdW1lbnR9KTt2YXIgYWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm5cIm5vbmVcIj09PShlPXR8fGUpLnN0eWxlLmRpc3BsYXl8fFwiXCI9PT1lLnN0eWxlLmRpc3BsYXkmJmllKGUpJiZcIm5vbmVcIj09PUUuY3NzKGUsXCJkaXNwbGF5XCIpfTtmdW5jdGlvbiBzZShlLHQsbixyKXt2YXIgaSxvLGE9MjAscz1yP2Z1bmN0aW9uKCl7cmV0dXJuIHIuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIEUuY3NzKGUsdCxcIlwiKX0sdT1zKCksbD1uJiZuWzNdfHwoRS5jc3NOdW1iZXJbdF0/XCJcIjpcInB4XCIpLGM9ZS5ub2RlVHlwZSYmKEUuY3NzTnVtYmVyW3RdfHxcInB4XCIhPT1sJiYrdSkmJnRlLmV4ZWMoRS5jc3MoZSx0KSk7aWYoYyYmY1szXSE9PWwpe3UvPTIsbD1sfHxjWzNdLGM9K3V8fDE7d2hpbGUoYS0tKUUuc3R5bGUoZSx0LGMrbCksKDEtbykqKDEtKG89cygpL3V8fC41KSk8PTAmJihhPTApLGMvPW87Yyo9MixFLnN0eWxlKGUsdCxjK2wpLG49bnx8W119cmV0dXJuIG4mJihjPStjfHwrdXx8MCxpPW5bMV0/YysoblsxXSsxKSpuWzJdOituWzJdLHImJihyLnVuaXQ9bCxyLnN0YXJ0PWMsci5lbmQ9aSkpLGl9dmFyIHVlPXt9O2Z1bmN0aW9uIGxlKGUsdCl7Zm9yKHZhciBuLHIsaSxvLGEscyx1LGw9W10sYz0wLGY9ZS5sZW5ndGg7YzxmO2MrKykocj1lW2NdKS5zdHlsZSYmKG49ci5zdHlsZS5kaXNwbGF5LHQ/KFwibm9uZVwiPT09biYmKGxbY109WS5nZXQocixcImRpc3BsYXlcIil8fG51bGwsbFtjXXx8KHIuc3R5bGUuZGlzcGxheT1cIlwiKSksXCJcIj09PXIuc3R5bGUuZGlzcGxheSYmYWUocikmJihsW2NdPSh1PWE9bz12b2lkIDAsYT0oaT1yKS5vd25lckRvY3VtZW50LHM9aS5ub2RlTmFtZSwodT11ZVtzXSl8fChvPWEuYm9keS5hcHBlbmRDaGlsZChhLmNyZWF0ZUVsZW1lbnQocykpLHU9RS5jc3MobyxcImRpc3BsYXlcIiksby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pLFwibm9uZVwiPT09dSYmKHU9XCJibG9ja1wiKSx1ZVtzXT11KSkpKTpcIm5vbmVcIiE9PW4mJihsW2NdPVwibm9uZVwiLFkuc2V0KHIsXCJkaXNwbGF5XCIsbikpKTtmb3IoYz0wO2M8ZjtjKyspbnVsbCE9bFtjXSYmKGVbY10uc3R5bGUuZGlzcGxheT1sW2NdKTtyZXR1cm4gZX1FLmZuLmV4dGVuZCh7c2hvdzpmdW5jdGlvbigpe3JldHVybiBsZSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBsZSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGUpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgZT9lP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe2FlKHRoaXMpP0UodGhpcykuc2hvdygpOkUodGhpcykuaGlkZSgpfSl9fSk7dmFyIGNlLGZlLHBlPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLGRlPS88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKikvaSxoZT0vXiR8Xm1vZHVsZSR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pO2NlPVMuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLmFwcGVuZENoaWxkKFMuY3JlYXRlRWxlbWVudChcImRpdlwiKSksKGZlPVMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxmZS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGZlLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksY2UuYXBwZW5kQ2hpbGQoZmUpLHYuY2hlY2tDbG9uZT1jZS5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsY2UuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLHYubm9DbG9uZUNoZWNrZWQ9ISFjZS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWUsY2UuaW5uZXJIVE1MPVwiPG9wdGlvbj48L29wdGlvbj5cIix2Lm9wdGlvbj0hIWNlLmxhc3RDaGlsZDt2YXIgZ2U9e3RoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O2Z1bmN0aW9uIHllKGUsdCl7dmFyIG47cmV0dXJuIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0fHxcIipcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUucXVlcnlTZWxlY3RvckFsbD9lLnF1ZXJ5U2VsZWN0b3JBbGwodHx8XCIqXCIpOltdLHZvaWQgMD09PXR8fHQmJkEoZSx0KT9FLm1lcmdlKFtlXSxuKTpufWZ1bmN0aW9uIHZlKGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKVkuc2V0KGVbbl0sXCJnbG9iYWxFdmFsXCIsIXR8fFkuZ2V0KHRbbl0sXCJnbG9iYWxFdmFsXCIpKX1nZS50Ym9keT1nZS50Zm9vdD1nZS5jb2xncm91cD1nZS5jYXB0aW9uPWdlLnRoZWFkLGdlLnRoPWdlLnRkLHYub3B0aW9ufHwoZ2Uub3B0Z3JvdXA9Z2Uub3B0aW9uPVsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdKTt2YXIgbWU9Lzx8JiM/XFx3KzsvO2Z1bmN0aW9uIHhlKGUsdCxuLHIsaSl7Zm9yKHZhciBvLGEscyx1LGwsYyxmPXQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHA9W10sZD0wLGg9ZS5sZW5ndGg7ZDxoO2QrKylpZigobz1lW2RdKXx8MD09PW8paWYoXCJvYmplY3RcIj09PXcobykpRS5tZXJnZShwLG8ubm9kZVR5cGU/W29dOm8pO2Vsc2UgaWYobWUudGVzdChvKSl7YT1hfHxmLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkscz0oZGUuZXhlYyhvKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksdT1nZVtzXXx8Z2UuX2RlZmF1bHQsYS5pbm5lckhUTUw9dVsxXStFLmh0bWxQcmVmaWx0ZXIobykrdVsyXSxjPXVbMF07d2hpbGUoYy0tKWE9YS5sYXN0Q2hpbGQ7RS5tZXJnZShwLGEuY2hpbGROb2RlcyksKGE9Zi5maXJzdENoaWxkKS50ZXh0Q29udGVudD1cIlwifWVsc2UgcC5wdXNoKHQuY3JlYXRlVGV4dE5vZGUobykpO2YudGV4dENvbnRlbnQ9XCJcIixkPTA7d2hpbGUobz1wW2QrK10paWYociYmLTE8RS5pbkFycmF5KG8scikpaSYmaS5wdXNoKG8pO2Vsc2UgaWYobD1pZShvKSxhPXllKGYuYXBwZW5kQ2hpbGQobyksXCJzY3JpcHRcIiksbCYmdmUoYSksbil7Yz0wO3doaWxlKG89YVtjKytdKWhlLnRlc3Qoby50eXBlfHxcIlwiKSYmbi5wdXNoKG8pfXJldHVybiBmfXZhciBiZT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIHdlKCl7cmV0dXJuITB9ZnVuY3Rpb24gVGUoKXtyZXR1cm4hMX1mdW5jdGlvbiBDZShlLHQpe3JldHVybiBlPT09ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIFMuYWN0aXZlRWxlbWVudH1jYXRjaChlKXt9fSgpPT0oXCJmb2N1c1wiPT09dCl9ZnVuY3Rpb24gU2UoZSx0LG4scixpLG8pe3ZhciBhLHM7aWYoXCJvYmplY3RcIj09dHlwZW9mIHQpe2ZvcihzIGluXCJzdHJpbmdcIiE9dHlwZW9mIG4mJihyPXJ8fG4sbj12b2lkIDApLHQpU2UoZSxzLG4scix0W3NdLG8pO3JldHVybiBlfWlmKG51bGw9PXImJm51bGw9PWk/KGk9bixyPW49dm9pZCAwKTpudWxsPT1pJiYoXCJzdHJpbmdcIj09dHlwZW9mIG4/KGk9cixyPXZvaWQgMCk6KGk9cixyPW4sbj12b2lkIDApKSwhMT09PWkpaT1UZTtlbHNlIGlmKCFpKXJldHVybiBlO3JldHVybiAxPT09byYmKGE9aSwoaT1mdW5jdGlvbihlKXtyZXR1cm4gRSgpLm9mZihlKSxhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLmd1aWQ9YS5ndWlkfHwoYS5ndWlkPUUuZ3VpZCsrKSksZS5lYWNoKGZ1bmN0aW9uKCl7RS5ldmVudC5hZGQodGhpcyx0LGkscixuKX0pfWZ1bmN0aW9uIEVlKGUsaSxvKXtvPyhZLnNldChlLGksITEpLEUuZXZlbnQuYWRkKGUsaSx7bmFtZXNwYWNlOiExLGhhbmRsZXI6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPVkuZ2V0KHRoaXMsaSk7aWYoMSZlLmlzVHJpZ2dlciYmdGhpc1tpXSl7aWYoci5sZW5ndGgpKEUuZXZlbnQuc3BlY2lhbFtpXXx8e30pLmRlbGVnYXRlVHlwZSYmZS5zdG9wUHJvcGFnYXRpb24oKTtlbHNlIGlmKHI9cy5jYWxsKGFyZ3VtZW50cyksWS5zZXQodGhpcyxpLHIpLHQ9byh0aGlzLGkpLHRoaXNbaV0oKSxyIT09KG49WS5nZXQodGhpcyxpKSl8fHQ/WS5zZXQodGhpcyxpLCExKTpuPXt9LHIhPT1uKXJldHVybiBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLGUucHJldmVudERlZmF1bHQoKSxuJiZuLnZhbHVlfWVsc2Ugci5sZW5ndGgmJihZLnNldCh0aGlzLGkse3ZhbHVlOkUuZXZlbnQudHJpZ2dlcihFLmV4dGVuZChyWzBdLEUuRXZlbnQucHJvdG90eXBlKSxyLnNsaWNlKDEpLHRoaXMpfSksZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSl9fSkpOnZvaWQgMD09PVkuZ2V0KGUsaSkmJkUuZXZlbnQuYWRkKGUsaSx3ZSl9RS5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbih0LGUsbixyLGkpe3ZhciBvLGEscyx1LGwsYyxmLHAsZCxoLGcseT1ZLmdldCh0KTtpZihWKHQpKXtuLmhhbmRsZXImJihuPShvPW4pLmhhbmRsZXIsaT1vLnNlbGVjdG9yKSxpJiZFLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHJlLGkpLG4uZ3VpZHx8KG4uZ3VpZD1FLmd1aWQrKyksKHU9eS5ldmVudHMpfHwodT15LmV2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpKSwoYT15LmhhbmRsZSl8fChhPXkuaGFuZGxlPWZ1bmN0aW9uKGUpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBFJiZFLmV2ZW50LnRyaWdnZXJlZCE9PWUudHlwZT9FLmV2ZW50LmRpc3BhdGNoLmFwcGx5KHQsYXJndW1lbnRzKTp2b2lkIDB9KSxsPShlPShlfHxcIlwiKS5tYXRjaChQKXx8W1wiXCJdKS5sZW5ndGg7d2hpbGUobC0tKWQ9Zz0ocz1iZS5leGVjKGVbbF0pfHxbXSlbMV0saD0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkJiYoZj1FLmV2ZW50LnNwZWNpYWxbZF18fHt9LGQ9KGk/Zi5kZWxlZ2F0ZVR5cGU6Zi5iaW5kVHlwZSl8fGQsZj1FLmV2ZW50LnNwZWNpYWxbZF18fHt9LGM9RS5leHRlbmQoe3R5cGU6ZCxvcmlnVHlwZTpnLGRhdGE6cixoYW5kbGVyOm4sZ3VpZDpuLmd1aWQsc2VsZWN0b3I6aSxuZWVkc0NvbnRleHQ6aSYmRS5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGkpLG5hbWVzcGFjZTpoLmpvaW4oXCIuXCIpfSxvKSwocD11W2RdKXx8KChwPXVbZF09W10pLmRlbGVnYXRlQ291bnQ9MCxmLnNldHVwJiYhMSE9PWYuc2V0dXAuY2FsbCh0LHIsaCxhKXx8dC5hZGRFdmVudExpc3RlbmVyJiZ0LmFkZEV2ZW50TGlzdGVuZXIoZCxhKSksZi5hZGQmJihmLmFkZC5jYWxsKHQsYyksYy5oYW5kbGVyLmd1aWR8fChjLmhhbmRsZXIuZ3VpZD1uLmd1aWQpKSxpP3Auc3BsaWNlKHAuZGVsZWdhdGVDb3VudCsrLDAsYyk6cC5wdXNoKGMpLEUuZXZlbnQuZ2xvYmFsW2RdPSEwKX19LHJlbW92ZTpmdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvLGEscyx1LGwsYyxmLHAsZCxoLGcseT1ZLmhhc0RhdGEoZSkmJlkuZ2V0KGUpO2lmKHkmJih1PXkuZXZlbnRzKSl7bD0odD0odHx8XCJcIikubWF0Y2goUCl8fFtcIlwiXSkubGVuZ3RoO3doaWxlKGwtLSlpZihkPWc9KHM9YmUuZXhlYyh0W2xdKXx8W10pWzFdLGg9KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCl7Zj1FLmV2ZW50LnNwZWNpYWxbZF18fHt9LHA9dVtkPShyP2YuZGVsZWdhdGVUeXBlOmYuYmluZFR5cGUpfHxkXXx8W10scz1zWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIraC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksYT1vPXAubGVuZ3RoO3doaWxlKG8tLSljPXBbb10sIWkmJmchPT1jLm9yaWdUeXBlfHxuJiZuLmd1aWQhPT1jLmd1aWR8fHMmJiFzLnRlc3QoYy5uYW1lc3BhY2UpfHxyJiZyIT09Yy5zZWxlY3RvciYmKFwiKipcIiE9PXJ8fCFjLnNlbGVjdG9yKXx8KHAuc3BsaWNlKG8sMSksYy5zZWxlY3RvciYmcC5kZWxlZ2F0ZUNvdW50LS0sZi5yZW1vdmUmJmYucmVtb3ZlLmNhbGwoZSxjKSk7YSYmIXAubGVuZ3RoJiYoZi50ZWFyZG93biYmITEhPT1mLnRlYXJkb3duLmNhbGwoZSxoLHkuaGFuZGxlKXx8RS5yZW1vdmVFdmVudChlLGQseS5oYW5kbGUpLGRlbGV0ZSB1W2RdKX1lbHNlIGZvcihkIGluIHUpRS5ldmVudC5yZW1vdmUoZSxkK3RbbF0sbixyLCEwKTtFLmlzRW1wdHlPYmplY3QodSkmJlkucmVtb3ZlKGUsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGksbyxhLHM9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLHU9RS5ldmVudC5maXgoZSksbD0oWS5nZXQodGhpcyxcImV2ZW50c1wiKXx8T2JqZWN0LmNyZWF0ZShudWxsKSlbdS50eXBlXXx8W10sYz1FLmV2ZW50LnNwZWNpYWxbdS50eXBlXXx8e307Zm9yKHNbMF09dSx0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKylzW3RdPWFyZ3VtZW50c1t0XTtpZih1LmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWMucHJlRGlzcGF0Y2h8fCExIT09Yy5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsdSkpe2E9RS5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsdSxsKSx0PTA7d2hpbGUoKGk9YVt0KytdKSYmIXUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7dS5jdXJyZW50VGFyZ2V0PWkuZWxlbSxuPTA7d2hpbGUoKG89aS5oYW5kbGVyc1tuKytdKSYmIXUuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSl1LnJuYW1lc3BhY2UmJiExIT09by5uYW1lc3BhY2UmJiF1LnJuYW1lc3BhY2UudGVzdChvLm5hbWVzcGFjZSl8fCh1LmhhbmRsZU9iaj1vLHUuZGF0YT1vLmRhdGEsdm9pZCAwIT09KHI9KChFLmV2ZW50LnNwZWNpYWxbby5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fG8uaGFuZGxlcikuYXBwbHkoaS5lbGVtLHMpKSYmITE9PT0odS5yZXN1bHQ9cikmJih1LnByZXZlbnREZWZhdWx0KCksdS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBjLnBvc3REaXNwYXRjaCYmYy5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLHUpLHUucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhLHM9W10sdT10LmRlbGVnYXRlQ291bnQsbD1lLnRhcmdldDtpZih1JiZsLm5vZGVUeXBlJiYhKFwiY2xpY2tcIj09PWUudHlwZSYmMTw9ZS5idXR0b24pKWZvcig7bCE9PXRoaXM7bD1sLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWwubm9kZVR5cGUmJihcImNsaWNrXCIhPT1lLnR5cGV8fCEwIT09bC5kaXNhYmxlZCkpe2ZvcihvPVtdLGE9e30sbj0wO248dTtuKyspdm9pZCAwPT09YVtpPShyPXRbbl0pLnNlbGVjdG9yK1wiIFwiXSYmKGFbaV09ci5uZWVkc0NvbnRleHQ/LTE8RShpLHRoaXMpLmluZGV4KGwpOkUuZmluZChpLHRoaXMsbnVsbCxbbF0pLmxlbmd0aCksYVtpXSYmby5wdXNoKHIpO28ubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczpvfSl9cmV0dXJuIGw9dGhpcyx1PHQubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczp0LnNsaWNlKHUpfSksc30sYWRkUHJvcDpmdW5jdGlvbih0LGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShFLkV2ZW50LnByb3RvdHlwZSx0LHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6bShlKT9mdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gZSh0aGlzLm9yaWdpbmFsRXZlbnQpfTpmdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50W3RdfSxzZXQ6ZnVuY3Rpb24oZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZX0pfX0pfSxmaXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbRS5leHBhbmRvXT9lOm5ldyBFLkV2ZW50KGUpfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sY2xpY2s6e3NldHVwOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXN8fGU7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LFwiaW5wdXRcIikmJkVlKHQsXCJjbGlja1wiLHdlKSwhMX0sdHJpZ2dlcjpmdW5jdGlvbihlKXt2YXIgdD10aGlzfHxlO3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZFZSh0LFwiY2xpY2tcIiksITB9LF9kZWZhdWx0OmZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0O3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZZLmdldCh0LFwiY2xpY2tcIil8fEEodCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihlKXt2b2lkIDAhPT1lLnJlc3VsdCYmZS5vcmlnaW5hbEV2ZW50JiYoZS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWUucmVzdWx0KX19fX0sRS5yZW1vdmVFdmVudD1mdW5jdGlvbihlLHQsbil7ZS5yZW1vdmVFdmVudExpc3RlbmVyJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxuKX0sRS5FdmVudD1mdW5jdGlvbihlLHQpe2lmKCEodGhpcyBpbnN0YW5jZW9mIEUuRXZlbnQpKXJldHVybiBuZXcgRS5FdmVudChlLHQpO2UmJmUudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWUsdGhpcy50eXBlPWUudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1lLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWUuZGVmYXVsdFByZXZlbnRlZCYmITE9PT1lLnJldHVyblZhbHVlP3dlOlRlLHRoaXMudGFyZ2V0PWUudGFyZ2V0JiYzPT09ZS50YXJnZXQubm9kZVR5cGU/ZS50YXJnZXQucGFyZW50Tm9kZTplLnRhcmdldCx0aGlzLmN1cnJlbnRUYXJnZXQ9ZS5jdXJyZW50VGFyZ2V0LHRoaXMucmVsYXRlZFRhcmdldD1lLnJlbGF0ZWRUYXJnZXQpOnRoaXMudHlwZT1lLHQmJkUuZXh0ZW5kKHRoaXMsdCksdGhpcy50aW1lU3RhbXA9ZSYmZS50aW1lU3RhbXB8fERhdGUubm93KCksdGhpc1tFLmV4cGFuZG9dPSEwfSxFLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6RS5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6VGUsaXNQcm9wYWdhdGlvblN0b3BwZWQ6VGUsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6VGUsaXNTaW11bGF0ZWQ6ITEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9d2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9d2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPXdlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxFLmVhY2goe2FsdEtleTohMCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY2hhbmdlZFRvdWNoZXM6ITAsY3RybEtleTohMCxkZXRhaWw6ITAsZXZlbnRQaGFzZTohMCxtZXRhS2V5OiEwLHBhZ2VYOiEwLHBhZ2VZOiEwLHNoaWZ0S2V5OiEwLHZpZXc6ITAsXCJjaGFyXCI6ITAsY29kZTohMCxjaGFyQ29kZTohMCxrZXk6ITAsa2V5Q29kZTohMCxidXR0b246ITAsYnV0dG9uczohMCxjbGllbnRYOiEwLGNsaWVudFk6ITAsb2Zmc2V0WDohMCxvZmZzZXRZOiEwLHBvaW50ZXJJZDohMCxwb2ludGVyVHlwZTohMCxzY3JlZW5YOiEwLHNjcmVlblk6ITAsdGFyZ2V0VG91Y2hlczohMCx0b0VsZW1lbnQ6ITAsdG91Y2hlczohMCx3aGljaDohMH0sRS5ldmVudC5hZGRQcm9wKSxFLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbih0LGUpe0UuZXZlbnQuc3BlY2lhbFt0XT17c2V0dXA6ZnVuY3Rpb24oKXtyZXR1cm4gRWUodGhpcyx0LENlKSwhMX0sdHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiBFZSh0aGlzLHQpLCEwfSxfZGVmYXVsdDpmdW5jdGlvbihlKXtyZXR1cm4gWS5nZXQoZS50YXJnZXQsdCl9LGRlbGVnYXRlVHlwZTplfX0pLEUuZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihlLGkpe0UuZXZlbnQuc3BlY2lhbFtlXT17ZGVsZWdhdGVUeXBlOmksYmluZFR5cGU6aSxoYW5kbGU6ZnVuY3Rpb24oZSl7dmFyIHQsbj1lLnJlbGF0ZWRUYXJnZXQscj1lLmhhbmRsZU9iajtyZXR1cm4gbiYmKG49PT10aGlzfHxFLmNvbnRhaW5zKHRoaXMsbikpfHwoZS50eXBlPXIub3JpZ1R5cGUsdD1yLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGUudHlwZT1pKSx0fX19KSxFLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIFNlKHRoaXMsZSx0LG4scil9LG9uZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gU2UodGhpcyxlLHQsbixyLDEpfSxvZmY6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7aWYoZSYmZS5wcmV2ZW50RGVmYXVsdCYmZS5oYW5kbGVPYmopcmV0dXJuIHI9ZS5oYW5kbGVPYmosRShlLmRlbGVnYXRlVGFyZ2V0KS5vZmYoci5uYW1lc3BhY2U/ci5vcmlnVHlwZStcIi5cIityLm5hbWVzcGFjZTpyLm9yaWdUeXBlLHIuc2VsZWN0b3Isci5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXtmb3IoaSBpbiBlKXRoaXMub2ZmKGksdCxlW2ldKTtyZXR1cm4gdGhpc31yZXR1cm4hMSE9PXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fChuPXQsdD12b2lkIDApLCExPT09biYmKG49VGUpLHRoaXMuZWFjaChmdW5jdGlvbigpe0UuZXZlbnQucmVtb3ZlKHRoaXMsZSxuLHQpfSl9fSk7dmFyIGtlPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLEFlPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksTmU9L15cXHMqPCFcXFtDREFUQVxcW3xcXF1cXF0+XFxzKiQvZztmdW5jdGlvbiBqZShlLHQpe3JldHVybiBBKGUsXCJ0YWJsZVwiKSYmQSgxMSE9PXQubm9kZVR5cGU/dDp0LmZpcnN0Q2hpbGQsXCJ0clwiKSYmRShlKS5jaGlsZHJlbihcInRib2R5XCIpWzBdfHxlfWZ1bmN0aW9uIERlKGUpe3JldHVybiBlLnR5cGU9KG51bGwhPT1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2UudHlwZSxlfWZ1bmN0aW9uIHFlKGUpe3JldHVyblwidHJ1ZS9cIj09PShlLnR5cGV8fFwiXCIpLnNsaWNlKDAsNSk/ZS50eXBlPWUudHlwZS5zbGljZSg1KTplLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksZX1mdW5jdGlvbiBMZShlLHQpe3ZhciBuLHIsaSxvLGEscztpZigxPT09dC5ub2RlVHlwZSl7aWYoWS5oYXNEYXRhKGUpJiYocz1ZLmdldChlKS5ldmVudHMpKWZvcihpIGluIFkucmVtb3ZlKHQsXCJoYW5kbGUgZXZlbnRzXCIpLHMpZm9yKG49MCxyPXNbaV0ubGVuZ3RoO248cjtuKyspRS5ldmVudC5hZGQodCxpLHNbaV1bbl0pO1EuaGFzRGF0YShlKSYmKG89US5hY2Nlc3MoZSksYT1FLmV4dGVuZCh7fSxvKSxRLnNldCh0LGEpKX19ZnVuY3Rpb24gSGUobixyLGksbyl7cj1nKHIpO3ZhciBlLHQsYSxzLHUsbCxjPTAsZj1uLmxlbmd0aCxwPWYtMSxkPXJbMF0saD1tKGQpO2lmKGh8fDE8ZiYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJiF2LmNoZWNrQ2xvbmUmJkFlLnRlc3QoZCkpcmV0dXJuIG4uZWFjaChmdW5jdGlvbihlKXt2YXIgdD1uLmVxKGUpO2gmJihyWzBdPWQuY2FsbCh0aGlzLGUsdC5odG1sKCkpKSxIZSh0LHIsaSxvKX0pO2lmKGYmJih0PShlPXhlKHIsblswXS5vd25lckRvY3VtZW50LCExLG4sbykpLmZpcnN0Q2hpbGQsMT09PWUuY2hpbGROb2Rlcy5sZW5ndGgmJihlPXQpLHR8fG8pKXtmb3Iocz0oYT1FLm1hcCh5ZShlLFwic2NyaXB0XCIpLERlKSkubGVuZ3RoO2M8ZjtjKyspdT1lLGMhPT1wJiYodT1FLmNsb25lKHUsITAsITApLHMmJkUubWVyZ2UoYSx5ZSh1LFwic2NyaXB0XCIpKSksaS5jYWxsKG5bY10sdSxjKTtpZihzKWZvcihsPWFbYS5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxFLm1hcChhLHFlKSxjPTA7YzxzO2MrKyl1PWFbY10saGUudGVzdCh1LnR5cGV8fFwiXCIpJiYhWS5hY2Nlc3ModSxcImdsb2JhbEV2YWxcIikmJkUuY29udGFpbnMobCx1KSYmKHUuc3JjJiZcIm1vZHVsZVwiIT09KHUudHlwZXx8XCJcIikudG9Mb3dlckNhc2UoKT9FLl9ldmFsVXJsJiYhdS5ub01vZHVsZSYmRS5fZXZhbFVybCh1LnNyYyx7bm9uY2U6dS5ub25jZXx8dS5nZXRBdHRyaWJ1dGUoXCJub25jZVwiKX0sbCk6Yih1LnRleHRDb250ZW50LnJlcGxhY2UoTmUsXCJcIiksdSxsKSl9cmV0dXJuIG59ZnVuY3Rpb24gT2UoZSx0LG4pe2Zvcih2YXIgcixpPXQ/RS5maWx0ZXIodCxlKTplLG89MDtudWxsIT0ocj1pW29dKTtvKyspbnx8MSE9PXIubm9kZVR5cGV8fEUuY2xlYW5EYXRhKHllKHIpKSxyLnBhcmVudE5vZGUmJihuJiZpZShyKSYmdmUoeWUocixcInNjcmlwdFwiKSksci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIpKTtyZXR1cm4gZX1FLmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sY2xvbmU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsLGM9ZS5jbG9uZU5vZGUoITApLGY9aWUoZSk7aWYoISh2Lm5vQ2xvbmVDaGVja2VkfHwxIT09ZS5ub2RlVHlwZSYmMTEhPT1lLm5vZGVUeXBlfHxFLmlzWE1MRG9jKGUpKSlmb3IoYT15ZShjKSxyPTAsaT0obz15ZShlKSkubGVuZ3RoO3I8aTtyKyspcz1vW3JdLHU9YVtyXSx2b2lkIDAsXCJpbnB1dFwiPT09KGw9dS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSYmcGUudGVzdChzLnR5cGUpP3UuY2hlY2tlZD1zLmNoZWNrZWQ6XCJpbnB1dFwiIT09bCYmXCJ0ZXh0YXJlYVwiIT09bHx8KHUuZGVmYXVsdFZhbHVlPXMuZGVmYXVsdFZhbHVlKTtpZih0KWlmKG4pZm9yKG89b3x8eWUoZSksYT1hfHx5ZShjKSxyPTAsaT1vLmxlbmd0aDtyPGk7cisrKUxlKG9bcl0sYVtyXSk7ZWxzZSBMZShlLGMpO3JldHVybiAwPChhPXllKGMsXCJzY3JpcHRcIikpLmxlbmd0aCYmdmUoYSwhZiYmeWUoZSxcInNjcmlwdFwiKSksY30sY2xlYW5EYXRhOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuLHIsaT1FLmV2ZW50LnNwZWNpYWwsbz0wO3ZvaWQgMCE9PShuPWVbb10pO28rKylpZihWKG4pKXtpZih0PW5bWS5leHBhbmRvXSl7aWYodC5ldmVudHMpZm9yKHIgaW4gdC5ldmVudHMpaVtyXT9FLmV2ZW50LnJlbW92ZShuLHIpOkUucmVtb3ZlRXZlbnQobixyLHQuaGFuZGxlKTtuW1kuZXhwYW5kb109dm9pZCAwfW5bUS5leHBhbmRvXSYmKG5bUS5leHBhbmRvXT12b2lkIDApfX19KSxFLmZuLmV4dGVuZCh7ZGV0YWNoOmZ1bmN0aW9uKGUpe3JldHVybiBPZSh0aGlzLGUsITApfSxyZW1vdmU6ZnVuY3Rpb24oZSl7cmV0dXJuIE9lKHRoaXMsZSl9LHRleHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIEIodGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZT9FLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsxIT09dGhpcy5ub2RlVHlwZSYmMTEhPT10aGlzLm5vZGVUeXBlJiY5IT09dGhpcy5ub2RlVHlwZXx8KHRoaXMudGV4dENvbnRlbnQ9ZSl9KX0sbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fGplKHRoaXMsZSkuYXBwZW5kQ2hpbGQoZSl9KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiBIZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIHQ9amUodGhpcyxlKTt0Lmluc2VydEJlZm9yZShlLHQuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiBIZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiBIZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzLm5leHRTaWJsaW5nKX0pfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgZSx0PTA7bnVsbCE9KGU9dGhpc1t0XSk7dCsrKTE9PT1lLm5vZGVUeXBlJiYoRS5jbGVhbkRhdGEoeWUoZSwhMSkpLGUudGV4dENvbnRlbnQ9XCJcIik7cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9bnVsbCE9ZSYmZSx0PW51bGw9PXQ/ZTp0LHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIEUuY2xvbmUodGhpcyxlLHQpfSl9LGh0bWw6ZnVuY3Rpb24oZSl7cmV0dXJuIEIodGhpcyxmdW5jdGlvbihlKXt2YXIgdD10aGlzWzBdfHx7fSxuPTAscj10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1lJiYxPT09dC5ub2RlVHlwZSlyZXR1cm4gdC5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiFrZS50ZXN0KGUpJiYhZ2VbKGRlLmV4ZWMoZSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7ZT1FLmh0bWxQcmVmaWx0ZXIoZSk7dHJ5e2Zvcig7bjxyO24rKykxPT09KHQ9dGhpc1tuXXx8e30pLm5vZGVUeXBlJiYoRS5jbGVhbkRhdGEoeWUodCwhMSkpLHQuaW5uZXJIVE1MPWUpO3Q9MH1jYXRjaChlKXt9fXQmJnRoaXMuZW1wdHkoKS5hcHBlbmQoZSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgbj1bXTtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5wYXJlbnROb2RlO0UuaW5BcnJheSh0aGlzLG4pPDAmJihFLmNsZWFuRGF0YSh5ZSh0aGlzKSksdCYmdC5yZXBsYWNlQ2hpbGQoZSx0aGlzKSl9LG4pfX0pLEUuZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihlLGEpe0UuZm5bZV09ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG49W10scj1FKGUpLGk9ci5sZW5ndGgtMSxvPTA7bzw9aTtvKyspdD1vPT09aT90aGlzOnRoaXMuY2xvbmUoITApLEUocltvXSlbYV0odCksdS5hcHBseShuLHQuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhuKX19KTt2YXIgUGU9bmV3IFJlZ0V4cChcIl4oXCIrZWUrXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksUmU9L14tLS8sTWU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O3JldHVybiB0JiZ0Lm9wZW5lcnx8KHQ9QyksdC5nZXRDb21wdXRlZFN0eWxlKGUpfSxJZT1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXt9O2ZvcihpIGluIHQpb1tpXT1lLnN0eWxlW2ldLGUuc3R5bGVbaV09dFtpXTtmb3IoaSBpbiByPW4uY2FsbChlKSx0KWUuc3R5bGVbaV09b1tpXTtyZXR1cm4gcn0sV2U9bmV3IFJlZ0V4cChuZS5qb2luKFwifFwiKSxcImlcIiksRmU9XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLCRlPW5ldyBSZWdFeHAoXCJeXCIrRmUrXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK0ZlK1wiKyRcIixcImdcIik7ZnVuY3Rpb24gQmUoZSx0LG4pe3ZhciByLGksbyxhLHM9UmUudGVzdCh0KSx1PWUuc3R5bGU7cmV0dXJuKG49bnx8TWUoZSkpJiYoYT1uLmdldFByb3BlcnR5VmFsdWUodCl8fG5bdF0scyYmYSYmKGE9YS5yZXBsYWNlKCRlLFwiJDFcIil8fHZvaWQgMCksXCJcIiE9PWF8fGllKGUpfHwoYT1FLnN0eWxlKGUsdCkpLCF2LnBpeGVsQm94U3R5bGVzKCkmJlBlLnRlc3QoYSkmJldlLnRlc3QodCkmJihyPXUud2lkdGgsaT11Lm1pbldpZHRoLG89dS5tYXhXaWR0aCx1Lm1pbldpZHRoPXUubWF4V2lkdGg9dS53aWR0aD1hLGE9bi53aWR0aCx1LndpZHRoPXIsdS5taW5XaWR0aD1pLHUubWF4V2lkdGg9bykpLHZvaWQgMCE9PWE/YStcIlwiOmF9ZnVuY3Rpb24gX2UoZSx0KXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7aWYoIWUoKSlyZXR1cm4odGhpcy5nZXQ9dCkuYXBwbHkodGhpcyxhcmd1bWVudHMpO2RlbGV0ZSB0aGlzLmdldH19fSFmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtpZihsKXt1LnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O3dpZHRoOjYwcHg7bWFyZ2luLXRvcDoxcHg7cGFkZGluZzowO2JvcmRlcjowXCIsbC5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6c2Nyb2xsO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7d2lkdGg6NjAlO3RvcDoxJVwiLHJlLmFwcGVuZENoaWxkKHUpLmFwcGVuZENoaWxkKGwpO3ZhciBlPUMuZ2V0Q29tcHV0ZWRTdHlsZShsKTtuPVwiMSVcIiE9PWUudG9wLHM9MTI9PT10KGUubWFyZ2luTGVmdCksbC5zdHlsZS5yaWdodD1cIjYwJVwiLG89MzY9PT10KGUucmlnaHQpLHI9MzY9PT10KGUud2lkdGgpLGwuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGk9MTI9PT10KGwub2Zmc2V0V2lkdGgvMykscmUucmVtb3ZlQ2hpbGQodSksbD1udWxsfX1mdW5jdGlvbiB0KGUpe3JldHVybiBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoZSkpfXZhciBuLHIsaSxvLGEscyx1PVMuY3JlYXRlRWxlbWVudChcImRpdlwiKSxsPVMuY3JlYXRlRWxlbWVudChcImRpdlwiKTtsLnN0eWxlJiYobC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsbC5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsdi5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09bC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxFLmV4dGVuZCh2LHtib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBlKCkscn0scGl4ZWxCb3hTdHlsZXM6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLG99LHBpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLG59LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBlKCksc30sc2Nyb2xsYm94U2l6ZTpmdW5jdGlvbigpe3JldHVybiBlKCksaX0scmVsaWFibGVUckRpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgZSx0LG4scjtyZXR1cm4gbnVsbD09YSYmKGU9Uy5jcmVhdGVFbGVtZW50KFwidGFibGVcIiksdD1TLmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSxuPVMuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O2JvcmRlci1jb2xsYXBzZTpzZXBhcmF0ZVwiLHQuc3R5bGUuY3NzVGV4dD1cImJvcmRlcjoxcHggc29saWRcIix0LnN0eWxlLmhlaWdodD1cIjFweFwiLG4uc3R5bGUuaGVpZ2h0PVwiOXB4XCIsbi5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixyZS5hcHBlbmRDaGlsZChlKS5hcHBlbmRDaGlsZCh0KS5hcHBlbmRDaGlsZChuKSxyPUMuZ2V0Q29tcHV0ZWRTdHlsZSh0KSxhPXBhcnNlSW50KHIuaGVpZ2h0LDEwKStwYXJzZUludChyLmJvcmRlclRvcFdpZHRoLDEwKStwYXJzZUludChyLmJvcmRlckJvdHRvbVdpZHRoLDEwKT09PXQub2Zmc2V0SGVpZ2h0LHJlLnJlbW92ZUNoaWxkKGUpKSxhfX0pKX0oKTt2YXIgemU9W1wiV2Via2l0XCIsXCJNb3pcIixcIm1zXCJdLFVlPVMuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxYZT17fTtmdW5jdGlvbiBWZShlKXt2YXIgdD1FLmNzc1Byb3BzW2VdfHxYZVtlXTtyZXR1cm4gdHx8KGUgaW4gVWU/ZTpYZVtlXT1mdW5jdGlvbihlKXt2YXIgdD1lWzBdLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSxuPXplLmxlbmd0aDt3aGlsZShuLS0paWYoKGU9emVbbl0rdClpbiBVZSlyZXR1cm4gZX0oZSl8fGUpfXZhciBHZT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sWWU9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LFFlPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn07ZnVuY3Rpb24gSmUoZSx0LG4pe3ZhciByPXRlLmV4ZWModCk7cmV0dXJuIHI/TWF0aC5tYXgoMCxyWzJdLShufHwwKSkrKHJbM118fFwicHhcIik6dH1mdW5jdGlvbiBLZShlLHQsbixyLGksbyl7dmFyIGE9XCJ3aWR0aFwiPT09dD8xOjAscz0wLHU9MDtpZihuPT09KHI/XCJib3JkZXJcIjpcImNvbnRlbnRcIikpcmV0dXJuIDA7Zm9yKDthPDQ7YSs9MilcIm1hcmdpblwiPT09biYmKHUrPUUuY3NzKGUsbituZVthXSwhMCxpKSkscj8oXCJjb250ZW50XCI9PT1uJiYodS09RS5jc3MoZSxcInBhZGRpbmdcIituZVthXSwhMCxpKSksXCJtYXJnaW5cIiE9PW4mJih1LT1FLmNzcyhlLFwiYm9yZGVyXCIrbmVbYV0rXCJXaWR0aFwiLCEwLGkpKSk6KHUrPUUuY3NzKGUsXCJwYWRkaW5nXCIrbmVbYV0sITAsaSksXCJwYWRkaW5nXCIhPT1uP3UrPUUuY3NzKGUsXCJib3JkZXJcIituZVthXStcIldpZHRoXCIsITAsaSk6cys9RS5jc3MoZSxcImJvcmRlclwiK25lW2FdK1wiV2lkdGhcIiwhMCxpKSk7cmV0dXJuIXImJjA8PW8mJih1Kz1NYXRoLm1heCgwLE1hdGguY2VpbChlW1wib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSldLW8tdS1zLS41KSl8fDApLHV9ZnVuY3Rpb24gWmUoZSx0LG4pe3ZhciByPU1lKGUpLGk9KCF2LmJveFNpemluZ1JlbGlhYmxlKCl8fG4pJiZcImJvcmRlci1ib3hcIj09PUUuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxyKSxvPWksYT1CZShlLHQscikscz1cIm9mZnNldFwiK3RbMF0udG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpO2lmKFBlLnRlc3QoYSkpe2lmKCFuKXJldHVybiBhO2E9XCJhdXRvXCJ9cmV0dXJuKCF2LmJveFNpemluZ1JlbGlhYmxlKCkmJml8fCF2LnJlbGlhYmxlVHJEaW1lbnNpb25zKCkmJkEoZSxcInRyXCIpfHxcImF1dG9cIj09PWF8fCFwYXJzZUZsb2F0KGEpJiZcImlubGluZVwiPT09RS5jc3MoZSxcImRpc3BsYXlcIiwhMSxyKSkmJmUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJihpPVwiYm9yZGVyLWJveFwiPT09RS5jc3MoZSxcImJveFNpemluZ1wiLCExLHIpLChvPXMgaW4gZSkmJihhPWVbc10pKSwoYT1wYXJzZUZsb2F0KGEpfHwwKStLZShlLHQsbnx8KGk/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksbyxyLGEpK1wicHhcIn1mdW5jdGlvbiBldChlLHQsbixyLGkpe3JldHVybiBuZXcgZXQucHJvdG90eXBlLmluaXQoZSx0LG4scixpKX1FLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihlLHQpe2lmKHQpe3ZhciBuPUJlKGUsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1uP1wiMVwiOm59fX19LGNzc051bWJlcjp7YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsY29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGdyaWRBcmVhOiEwLGdyaWRDb2x1bW46ITAsZ3JpZENvbHVtbkVuZDohMCxncmlkQ29sdW1uU3RhcnQ6ITAsZ3JpZFJvdzohMCxncmlkUm93RW5kOiEwLGdyaWRSb3dTdGFydDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOnt9LHN0eWxlOmZ1bmN0aW9uKGUsdCxuLHIpe2lmKGUmJjMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmZS5zdHlsZSl7dmFyIGksbyxhLHM9WCh0KSx1PVJlLnRlc3QodCksbD1lLnN0eWxlO2lmKHV8fCh0PVZlKHMpKSxhPUUuY3NzSG9va3NbdF18fEUuY3NzSG9va3Nbc10sdm9pZCAwPT09bilyZXR1cm4gYSYmXCJnZXRcImluIGEmJnZvaWQgMCE9PShpPWEuZ2V0KGUsITEscikpP2k6bFt0XTtcInN0cmluZ1wiPT09KG89dHlwZW9mIG4pJiYoaT10ZS5leGVjKG4pKSYmaVsxXSYmKG49c2UoZSx0LGkpLG89XCJudW1iZXJcIiksbnVsbCE9biYmbj09biYmKFwibnVtYmVyXCIhPT1vfHx1fHwobis9aSYmaVszXXx8KEUuY3NzTnVtYmVyW3NdP1wiXCI6XCJweFwiKSksdi5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1ufHwwIT09dC5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGxbdF09XCJpbmhlcml0XCIpLGEmJlwic2V0XCJpbiBhJiZ2b2lkIDA9PT0obj1hLnNldChlLG4scikpfHwodT9sLnNldFByb3BlcnR5KHQsbik6bFt0XT1uKSl9fSxjc3M6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHM9WCh0KTtyZXR1cm4gUmUudGVzdCh0KXx8KHQ9VmUocykpLChhPUUuY3NzSG9va3NbdF18fEUuY3NzSG9va3Nbc10pJiZcImdldFwiaW4gYSYmKGk9YS5nZXQoZSwhMCxuKSksdm9pZCAwPT09aSYmKGk9QmUoZSx0LHIpKSxcIm5vcm1hbFwiPT09aSYmdCBpbiBRZSYmKGk9UWVbdF0pLFwiXCI9PT1ufHxuPyhvPXBhcnNlRmxvYXQoaSksITA9PT1ufHxpc0Zpbml0ZShvKT9vfHwwOmkpOml9fSksRS5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oZSx1KXtFLmNzc0hvb2tzW3VdPXtnZXQ6ZnVuY3Rpb24oZSx0LG4pe2lmKHQpcmV0dXJuIUdlLnRlc3QoRS5jc3MoZSxcImRpc3BsYXlcIikpfHxlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiZlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoP1plKGUsdSxuKTpJZShlLFllLGZ1bmN0aW9uKCl7cmV0dXJuIFplKGUsdSxuKX0pfSxzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9TWUoZSksbz0hdi5zY3JvbGxib3hTaXplKCkmJlwiYWJzb2x1dGVcIj09PWkucG9zaXRpb24sYT0ob3x8bikmJlwiYm9yZGVyLWJveFwiPT09RS5jc3MoZSxcImJveFNpemluZ1wiLCExLGkpLHM9bj9LZShlLHUsbixhLGkpOjA7cmV0dXJuIGEmJm8mJihzLT1NYXRoLmNlaWwoZVtcIm9mZnNldFwiK3VbMF0udG9VcHBlckNhc2UoKSt1LnNsaWNlKDEpXS1wYXJzZUZsb2F0KGlbdV0pLUtlKGUsdSxcImJvcmRlclwiLCExLGkpLS41KSkscyYmKHI9dGUuZXhlYyh0KSkmJlwicHhcIiE9PShyWzNdfHxcInB4XCIpJiYoZS5zdHlsZVt1XT10LHQ9RS5jc3MoZSx1KSksSmUoMCx0LHMpfX19KSxFLmNzc0hvb2tzLm1hcmdpbkxlZnQ9X2Uodi5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oZSx0KXtpZih0KXJldHVybihwYXJzZUZsb2F0KEJlKGUsXCJtYXJnaW5MZWZ0XCIpKXx8ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LUllKGUse21hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSkpK1wicHhcIn0pLEUuZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGksbyl7RS5jc3NIb29rc1tpK29dPXtleHBhbmQ6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsbj17fSxyPVwic3RyaW5nXCI9PXR5cGVvZiBlP2Uuc3BsaXQoXCIgXCIpOltlXTt0PDQ7dCsrKW5baStuZVt0XStvXT1yW3RdfHxyW3QtMl18fHJbMF07cmV0dXJuIG59fSxcIm1hcmdpblwiIT09aSYmKEUuY3NzSG9va3NbaStvXS5zZXQ9SmUpfSksRS5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihlLHQpe3JldHVybiBCKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz17fSxhPTA7aWYoQXJyYXkuaXNBcnJheSh0KSl7Zm9yKHI9TWUoZSksaT10Lmxlbmd0aDthPGk7YSsrKW9bdFthXV09RS5jc3MoZSx0W2FdLCExLHIpO3JldHVybiBvfXJldHVybiB2b2lkIDAhPT1uP0Uuc3R5bGUoZSx0LG4pOkUuY3NzKGUsdCl9LGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfX0pLCgoRS5Ud2Vlbj1ldCkucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpldCxpbml0OmZ1bmN0aW9uKGUsdCxuLHIsaSxvKXt0aGlzLmVsZW09ZSx0aGlzLnByb3A9bix0aGlzLmVhc2luZz1pfHxFLmVhc2luZy5fZGVmYXVsdCx0aGlzLm9wdGlvbnM9dCx0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9cix0aGlzLnVuaXQ9b3x8KEUuY3NzTnVtYmVyW25dP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGU9ZXQucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGUmJmUuZ2V0P2UuZ2V0KHRoaXMpOmV0LnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihlKXt2YXIgdCxuPWV0LnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9dD1FLmVhc2luZ1t0aGlzLmVhc2luZ10oZSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qZSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz10PWUsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKnQrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksbiYmbi5zZXQ/bi5zZXQodGhpcyk6ZXQucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0pLmluaXQucHJvdG90eXBlPWV0LnByb3RvdHlwZSwoZXQucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiAxIT09ZS5lbGVtLm5vZGVUeXBlfHxudWxsIT1lLmVsZW1bZS5wcm9wXSYmbnVsbD09ZS5lbGVtLnN0eWxlW2UucHJvcF0/ZS5lbGVtW2UucHJvcF06KHQ9RS5jc3MoZS5lbGVtLGUucHJvcCxcIlwiKSkmJlwiYXV0b1wiIT09dD90OjB9LHNldDpmdW5jdGlvbihlKXtFLmZ4LnN0ZXBbZS5wcm9wXT9FLmZ4LnN0ZXBbZS5wcm9wXShlKToxIT09ZS5lbGVtLm5vZGVUeXBlfHwhRS5jc3NIb29rc1tlLnByb3BdJiZudWxsPT1lLmVsZW0uc3R5bGVbVmUoZS5wcm9wKV0/ZS5lbGVtW2UucHJvcF09ZS5ub3c6RS5zdHlsZShlLmVsZW0sZS5wcm9wLGUubm93K2UudW5pdCl9fX0pLnNjcm9sbFRvcD1ldC5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGUpe2UuZWxlbS5ub2RlVHlwZSYmZS5lbGVtLnBhcmVudE5vZGUmJihlLmVsZW1bZS5wcm9wXT1lLm5vdyl9fSxFLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxzd2luZzpmdW5jdGlvbihlKXtyZXR1cm4uNS1NYXRoLmNvcyhlKk1hdGguUEkpLzJ9LF9kZWZhdWx0Olwic3dpbmdcIn0sRS5meD1ldC5wcm90b3R5cGUuaW5pdCxFLmZ4LnN0ZXA9e307dmFyIHR0LG50LHJ0LGl0LG90PS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxhdD0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIHN0KCl7bnQmJighMT09PVMuaGlkZGVuJiZDLnJlcXVlc3RBbmltYXRpb25GcmFtZT9DLnJlcXVlc3RBbmltYXRpb25GcmFtZShzdCk6Qy5zZXRUaW1lb3V0KHN0LEUuZnguaW50ZXJ2YWwpLEUuZngudGljaygpKX1mdW5jdGlvbiB1dCgpe3JldHVybiBDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0dD12b2lkIDB9KSx0dD1EYXRlLm5vdygpfWZ1bmN0aW9uIGx0KGUsdCl7dmFyIG4scj0wLGk9e2hlaWdodDplfTtmb3IodD10PzE6MDtyPDQ7cis9Mi10KWlbXCJtYXJnaW5cIisobj1uZVtyXSldPWlbXCJwYWRkaW5nXCIrbl09ZTtyZXR1cm4gdCYmKGkub3BhY2l0eT1pLndpZHRoPWUpLGl9ZnVuY3Rpb24gY3QoZSx0LG4pe2Zvcih2YXIgcixpPShmdC50d2VlbmVyc1t0XXx8W10pLmNvbmNhdChmdC50d2VlbmVyc1tcIipcIl0pLG89MCxhPWkubGVuZ3RoO288YTtvKyspaWYocj1pW29dLmNhbGwobix0LGUpKXJldHVybiByfWZ1bmN0aW9uIGZ0KG8sZSx0KXt2YXIgbixhLHI9MCxpPWZ0LnByZWZpbHRlcnMubGVuZ3RoLHM9RS5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSB1LmVsZW19KSx1PWZ1bmN0aW9uKCl7aWYoYSlyZXR1cm4hMTtmb3IodmFyIGU9dHR8fHV0KCksdD1NYXRoLm1heCgwLGwuc3RhcnRUaW1lK2wuZHVyYXRpb24tZSksbj0xLSh0L2wuZHVyYXRpb258fDApLHI9MCxpPWwudHdlZW5zLmxlbmd0aDtyPGk7cisrKWwudHdlZW5zW3JdLnJ1bihuKTtyZXR1cm4gcy5ub3RpZnlXaXRoKG8sW2wsbix0XSksbjwxJiZpP3Q6KGl8fHMubm90aWZ5V2l0aChvLFtsLDEsMF0pLHMucmVzb2x2ZVdpdGgobyxbbF0pLCExKX0sbD1zLnByb21pc2Uoe2VsZW06byxwcm9wczpFLmV4dGVuZCh7fSxlKSxvcHRzOkUuZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9LGVhc2luZzpFLmVhc2luZy5fZGVmYXVsdH0sdCksb3JpZ2luYWxQcm9wZXJ0aWVzOmUsb3JpZ2luYWxPcHRpb25zOnQsc3RhcnRUaW1lOnR0fHx1dCgpLGR1cmF0aW9uOnQuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGUsdCl7dmFyIG49RS5Ud2VlbihvLGwub3B0cyxlLHQsbC5vcHRzLnNwZWNpYWxFYXNpbmdbZV18fGwub3B0cy5lYXNpbmcpO3JldHVybiBsLnR3ZWVucy5wdXNoKG4pLG59LHN0b3A6ZnVuY3Rpb24oZSl7dmFyIHQ9MCxuPWU/bC50d2VlbnMubGVuZ3RoOjA7aWYoYSlyZXR1cm4gdGhpcztmb3IoYT0hMDt0PG47dCsrKWwudHdlZW5zW3RdLnJ1bigxKTtyZXR1cm4gZT8ocy5ub3RpZnlXaXRoKG8sW2wsMSwwXSkscy5yZXNvbHZlV2l0aChvLFtsLGVdKSk6cy5yZWplY3RXaXRoKG8sW2wsZV0pLHRoaXN9fSksYz1sLnByb3BzO2ZvcighZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhO2ZvcihuIGluIGUpaWYoaT10W3I9WChuKV0sbz1lW25dLEFycmF5LmlzQXJyYXkobykmJihpPW9bMV0sbz1lW25dPW9bMF0pLG4hPT1yJiYoZVtyXT1vLGRlbGV0ZSBlW25dKSwoYT1FLmNzc0hvb2tzW3JdKSYmXCJleHBhbmRcImluIGEpZm9yKG4gaW4gbz1hLmV4cGFuZChvKSxkZWxldGUgZVtyXSxvKW4gaW4gZXx8KGVbbl09b1tuXSx0W25dPWkpO2Vsc2UgdFtyXT1pfShjLGwub3B0cy5zcGVjaWFsRWFzaW5nKTtyPGk7cisrKWlmKG49ZnQucHJlZmlsdGVyc1tyXS5jYWxsKGwsbyxjLGwub3B0cykpcmV0dXJuIG0obi5zdG9wKSYmKEUuX3F1ZXVlSG9va3MobC5lbGVtLGwub3B0cy5xdWV1ZSkuc3RvcD1uLnN0b3AuYmluZChuKSksbjtyZXR1cm4gRS5tYXAoYyxjdCxsKSxtKGwub3B0cy5zdGFydCkmJmwub3B0cy5zdGFydC5jYWxsKG8sbCksbC5wcm9ncmVzcyhsLm9wdHMucHJvZ3Jlc3MpLmRvbmUobC5vcHRzLmRvbmUsbC5vcHRzLmNvbXBsZXRlKS5mYWlsKGwub3B0cy5mYWlsKS5hbHdheXMobC5vcHRzLmFsd2F5cyksRS5meC50aW1lcihFLmV4dGVuZCh1LHtlbGVtOm8sYW5pbTpsLHF1ZXVlOmwub3B0cy5xdWV1ZX0pKSxsfUUuQW5pbWF0aW9uPUUuZXh0ZW5kKGZ0LHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5jcmVhdGVUd2VlbihlLHQpO3JldHVybiBzZShuLmVsZW0sZSx0ZS5leGVjKHQpLG4pLG59XX0sdHdlZW5lcjpmdW5jdGlvbihlLHQpe20oZSk/KHQ9ZSxlPVtcIipcIl0pOmU9ZS5tYXRjaChQKTtmb3IodmFyIG4scj0wLGk9ZS5sZW5ndGg7cjxpO3IrKyluPWVbcl0sZnQudHdlZW5lcnNbbl09ZnQudHdlZW5lcnNbbl18fFtdLGZ0LnR3ZWVuZXJzW25dLnVuc2hpZnQodCl9LHByZWZpbHRlcnM6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjLGY9XCJ3aWR0aFwiaW4gdHx8XCJoZWlnaHRcImluIHQscD10aGlzLGQ9e30saD1lLnN0eWxlLGc9ZS5ub2RlVHlwZSYmYWUoZSkseT1ZLmdldChlLFwiZnhzaG93XCIpO2ZvcihyIGluIG4ucXVldWV8fChudWxsPT0oYT1FLl9xdWV1ZUhvb2tzKGUsXCJmeFwiKSkudW5xdWV1ZWQmJihhLnVucXVldWVkPTAscz1hLmVtcHR5LmZpcmUsYS5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7YS51bnF1ZXVlZHx8cygpfSksYS51bnF1ZXVlZCsrLHAuYWx3YXlzKGZ1bmN0aW9uKCl7cC5hbHdheXMoZnVuY3Rpb24oKXthLnVucXVldWVkLS0sRS5xdWV1ZShlLFwiZnhcIikubGVuZ3RofHxhLmVtcHR5LmZpcmUoKX0pfSkpLHQpaWYoaT10W3JdLG90LnRlc3QoaSkpe2lmKGRlbGV0ZSB0W3JdLG89b3x8XCJ0b2dnbGVcIj09PWksaT09PShnP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1pfHwheXx8dm9pZCAwPT09eVtyXSljb250aW51ZTtnPSEwfWRbcl09eSYmeVtyXXx8RS5zdHlsZShlLHIpfWlmKCh1PSFFLmlzRW1wdHlPYmplY3QodCkpfHwhRS5pc0VtcHR5T2JqZWN0KGQpKWZvcihyIGluIGYmJjE9PT1lLm5vZGVUeXBlJiYobi5vdmVyZmxvdz1baC5vdmVyZmxvdyxoLm92ZXJmbG93WCxoLm92ZXJmbG93WV0sbnVsbD09KGw9eSYmeS5kaXNwbGF5KSYmKGw9WS5nZXQoZSxcImRpc3BsYXlcIikpLFwibm9uZVwiPT09KGM9RS5jc3MoZSxcImRpc3BsYXlcIikpJiYobD9jPWw6KGxlKFtlXSwhMCksbD1lLnN0eWxlLmRpc3BsYXl8fGwsYz1FLmNzcyhlLFwiZGlzcGxheVwiKSxsZShbZV0pKSksKFwiaW5saW5lXCI9PT1jfHxcImlubGluZS1ibG9ja1wiPT09YyYmbnVsbCE9bCkmJlwibm9uZVwiPT09RS5jc3MoZSxcImZsb2F0XCIpJiYodXx8KHAuZG9uZShmdW5jdGlvbigpe2guZGlzcGxheT1sfSksbnVsbD09bCYmKGM9aC5kaXNwbGF5LGw9XCJub25lXCI9PT1jP1wiXCI6YykpLGguZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksbi5vdmVyZmxvdyYmKGgub3ZlcmZsb3c9XCJoaWRkZW5cIixwLmFsd2F5cyhmdW5jdGlvbigpe2gub3ZlcmZsb3c9bi5vdmVyZmxvd1swXSxoLm92ZXJmbG93WD1uLm92ZXJmbG93WzFdLGgub3ZlcmZsb3dZPW4ub3ZlcmZsb3dbMl19KSksdT0hMSxkKXV8fCh5P1wiaGlkZGVuXCJpbiB5JiYoZz15LmhpZGRlbik6eT1ZLmFjY2VzcyhlLFwiZnhzaG93XCIse2Rpc3BsYXk6bH0pLG8mJih5LmhpZGRlbj0hZyksZyYmbGUoW2VdLCEwKSxwLmRvbmUoZnVuY3Rpb24oKXtmb3IociBpbiBnfHxsZShbZV0pLFkucmVtb3ZlKGUsXCJmeHNob3dcIiksZClFLnN0eWxlKGUscixkW3JdKX0pKSx1PWN0KGc/eVtyXTowLHIscCksciBpbiB5fHwoeVtyXT11LnN0YXJ0LGcmJih1LmVuZD11LnN0YXJ0LHUuc3RhcnQ9MCkpfV0scHJlZmlsdGVyOmZ1bmN0aW9uKGUsdCl7dD9mdC5wcmVmaWx0ZXJzLnVuc2hpZnQoZSk6ZnQucHJlZmlsdGVycy5wdXNoKGUpfX0pLEUuc3BlZWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlP0UuZXh0ZW5kKHt9LGUpOntjb21wbGV0ZTpufHwhbiYmdHx8bShlKSYmZSxkdXJhdGlvbjplLGVhc2luZzpuJiZ0fHx0JiYhbSh0KSYmdH07cmV0dXJuIEUuZngub2ZmP3IuZHVyYXRpb249MDpcIm51bWJlclwiIT10eXBlb2Ygci5kdXJhdGlvbiYmKHIuZHVyYXRpb24gaW4gRS5meC5zcGVlZHM/ci5kdXJhdGlvbj1FLmZ4LnNwZWVkc1tyLmR1cmF0aW9uXTpyLmR1cmF0aW9uPUUuZnguc3BlZWRzLl9kZWZhdWx0KSxudWxsIT1yLnF1ZXVlJiYhMCE9PXIucXVldWV8fChyLnF1ZXVlPVwiZnhcIiksci5vbGQ9ci5jb21wbGV0ZSxyLmNvbXBsZXRlPWZ1bmN0aW9uKCl7bShyLm9sZCkmJnIub2xkLmNhbGwodGhpcyksci5xdWV1ZSYmRS5kZXF1ZXVlKHRoaXMsci5xdWV1ZSl9LHJ9LEUuZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMuZmlsdGVyKGFlKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6dH0sZSxuLHIpfSxhbmltYXRlOmZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBpPUUuaXNFbXB0eU9iamVjdCh0KSxvPUUuc3BlZWQoZSxuLHIpLGE9ZnVuY3Rpb24oKXt2YXIgZT1mdCh0aGlzLEUuZXh0ZW5kKHt9LHQpLG8pOyhpfHxZLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmZS5zdG9wKCEwKX07cmV0dXJuIGEuZmluaXNoPWEsaXx8ITE9PT1vLnF1ZXVlP3RoaXMuZWFjaChhKTp0aGlzLnF1ZXVlKG8ucXVldWUsYSl9LHN0b3A6ZnVuY3Rpb24oaSxlLG8pe3ZhciBhPWZ1bmN0aW9uKGUpe3ZhciB0PWUuc3RvcDtkZWxldGUgZS5zdG9wLHQobyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBpJiYobz1lLGU9aSxpPXZvaWQgMCksZSYmdGhpcy5xdWV1ZShpfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPSEwLHQ9bnVsbCE9aSYmaStcInF1ZXVlSG9va3NcIixuPUUudGltZXJzLHI9WS5nZXQodGhpcyk7aWYodClyW3RdJiZyW3RdLnN0b3AmJmEoclt0XSk7ZWxzZSBmb3IodCBpbiByKXJbdF0mJnJbdF0uc3RvcCYmYXQudGVzdCh0KSYmYShyW3RdKTtmb3IodD1uLmxlbmd0aDt0LS07KW5bdF0uZWxlbSE9PXRoaXN8fG51bGwhPWkmJm5bdF0ucXVldWUhPT1pfHwoblt0XS5hbmltLnN0b3AobyksZT0hMSxuLnNwbGljZSh0LDEpKTshZSYmb3x8RS5kZXF1ZXVlKHRoaXMsaSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiExIT09YSYmKGE9YXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZSx0PVkuZ2V0KHRoaXMpLG49dFthK1wicXVldWVcIl0scj10W2ErXCJxdWV1ZUhvb2tzXCJdLGk9RS50aW1lcnMsbz1uP24ubGVuZ3RoOjA7Zm9yKHQuZmluaXNoPSEwLEUucXVldWUodGhpcyxhLFtdKSxyJiZyLnN0b3AmJnIuc3RvcC5jYWxsKHRoaXMsITApLGU9aS5sZW5ndGg7ZS0tOylpW2VdLmVsZW09PT10aGlzJiZpW2VdLnF1ZXVlPT09YSYmKGlbZV0uYW5pbS5zdG9wKCEwKSxpLnNwbGljZShlLDEpKTtmb3IoZT0wO2U8bztlKyspbltlXSYmbltlXS5maW5pc2gmJm5bZV0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIHQuZmluaXNofSl9fSksRS5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihlLHIpe3ZhciBpPUUuZm5bcl07RS5mbltyXT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIG51bGw9PWV8fFwiYm9vbGVhblwiPT10eXBlb2YgZT9pLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUobHQociwhMCksZSx0LG4pfX0pLEUuZWFjaCh7c2xpZGVEb3duOmx0KFwic2hvd1wiKSxzbGlkZVVwOmx0KFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTpsdChcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGUscil7RS5mbltlXT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHRoaXMuYW5pbWF0ZShyLGUsdCxuKX19KSxFLnRpbWVycz1bXSxFLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgZSx0PTAsbj1FLnRpbWVycztmb3IodHQ9RGF0ZS5ub3coKTt0PG4ubGVuZ3RoO3QrKykoZT1uW3RdKSgpfHxuW3RdIT09ZXx8bi5zcGxpY2UodC0tLDEpO24ubGVuZ3RofHxFLmZ4LnN0b3AoKSx0dD12b2lkIDB9LEUuZngudGltZXI9ZnVuY3Rpb24oZSl7RS50aW1lcnMucHVzaChlKSxFLmZ4LnN0YXJ0KCl9LEUuZnguaW50ZXJ2YWw9MTMsRS5meC5zdGFydD1mdW5jdGlvbigpe250fHwobnQ9ITAsc3QoKSl9LEUuZnguc3RvcD1mdW5jdGlvbigpe250PW51bGx9LEUuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LEUuZm4uZGVsYXk9ZnVuY3Rpb24ocixlKXtyZXR1cm4gcj1FLmZ4JiZFLmZ4LnNwZWVkc1tyXXx8cixlPWV8fFwiZnhcIix0aGlzLnF1ZXVlKGUsZnVuY3Rpb24oZSx0KXt2YXIgbj1DLnNldFRpbWVvdXQoZSxyKTt0LnN0b3A9ZnVuY3Rpb24oKXtDLmNsZWFyVGltZW91dChuKX19KX0scnQ9Uy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksaXQ9Uy5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLmFwcGVuZENoaWxkKFMuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSkscnQudHlwZT1cImNoZWNrYm94XCIsdi5jaGVja09uPVwiXCIhPT1ydC52YWx1ZSx2Lm9wdFNlbGVjdGVkPWl0LnNlbGVjdGVkLChydD1TLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkudmFsdWU9XCJ0XCIscnQudHlwZT1cInJhZGlvXCIsdi5yYWRpb1ZhbHVlPVwidFwiPT09cnQudmFsdWU7dmFyIHB0LGR0PUUuZXhwci5hdHRySGFuZGxlO0UuZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIEIodGhpcyxFLmF0dHIsZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe0UucmVtb3ZlQXR0cih0aGlzLGUpfSl9fSksRS5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz1lLm5vZGVUeXBlO2lmKDMhPT1vJiY4IT09byYmMiE9PW8pcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGUuZ2V0QXR0cmlidXRlP0UucHJvcChlLHQsbik6KDE9PT1vJiZFLmlzWE1MRG9jKGUpfHwoaT1FLmF0dHJIb29rc1t0LnRvTG93ZXJDYXNlKCldfHwoRS5leHByLm1hdGNoLmJvb2wudGVzdCh0KT9wdDp2b2lkIDApKSx2b2lkIDAhPT1uP251bGw9PT1uP3ZvaWQgRS5yZW1vdmVBdHRyKGUsdCk6aSYmXCJzZXRcImluIGkmJnZvaWQgMCE9PShyPWkuc2V0KGUsbix0KSk/cjooZS5zZXRBdHRyaWJ1dGUodCxuK1wiXCIpLG4pOmkmJlwiZ2V0XCJpbiBpJiZudWxsIT09KHI9aS5nZXQoZSx0KSk/cjpudWxsPT0ocj1FLmZpbmQuYXR0cihlLHQpKT92b2lkIDA6cil9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGUsdCl7aWYoIXYucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09dCYmQShlLFwiaW5wdXRcIikpe3ZhciBuPWUudmFsdWU7cmV0dXJuIGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLHQpLG4mJihlLnZhbHVlPW4pLHR9fX19LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10JiZ0Lm1hdGNoKFApO2lmKGkmJjE9PT1lLm5vZGVUeXBlKXdoaWxlKG49aVtyKytdKWUucmVtb3ZlQXR0cmlidXRlKG4pfX0pLHB0PXtzZXQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiExPT09dD9FLnJlbW92ZUF0dHIoZSxuKTplLnNldEF0dHJpYnV0ZShuLG4pLG59fSxFLmVhY2goRS5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGUsdCl7dmFyIGE9ZHRbdF18fEUuZmluZC5hdHRyO2R0W3RdPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89dC50b0xvd2VyQ2FzZSgpO3JldHVybiBufHwoaT1kdFtvXSxkdFtvXT1yLHI9bnVsbCE9YShlLHQsbik/bzpudWxsLGR0W29dPWkpLHJ9fSk7dmFyIGh0PS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksZ3Q9L14oPzphfGFyZWEpJC9pO2Z1bmN0aW9uIHl0KGUpe3JldHVybihlLm1hdGNoKFApfHxbXSkuam9pbihcIiBcIil9ZnVuY3Rpb24gdnQoZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifWZ1bmN0aW9uIG10KGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpP2U6XCJzdHJpbmdcIj09dHlwZW9mIGUmJmUubWF0Y2goUCl8fFtdfUUuZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIEIodGhpcyxFLnByb3AsZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW0UucHJvcEZpeFtlXXx8ZV19KX19KSxFLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm4gMT09PW8mJkUuaXNYTUxEb2MoZSl8fCh0PUUucHJvcEZpeFt0XXx8dCxpPUUucHJvcEhvb2tzW3RdKSx2b2lkIDAhPT1uP2kmJlwic2V0XCJpbiBpJiZ2b2lkIDAhPT0ocj1pLnNldChlLG4sdCkpP3I6ZVt0XT1uOmkmJlwiZ2V0XCJpbiBpJiZudWxsIT09KHI9aS5nZXQoZSx0KSk/cjplW3RdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9RS5maW5kLmF0dHIoZSxcInRhYmluZGV4XCIpO3JldHVybiB0P3BhcnNlSW50KHQsMTApOmh0LnRlc3QoZS5ub2RlTmFtZSl8fGd0LnRlc3QoZS5ub2RlTmFtZSkmJmUuaHJlZj8wOi0xfX19LHByb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9fSksdi5vcHRTZWxlY3RlZHx8KEUucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiZ0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9LHNldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7dCYmKHQuc2VsZWN0ZWRJbmRleCx0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KX19KSxFLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7RS5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pLEUuZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbih0KXt2YXIgZSxuLHIsaSxvLGE7cmV0dXJuIG0odCk/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe0UodGhpcykuYWRkQ2xhc3ModC5jYWxsKHRoaXMsZSx2dCh0aGlzKSkpfSk6KGU9bXQodCkpLmxlbmd0aD90aGlzLmVhY2goZnVuY3Rpb24oKXtpZihyPXZ0KHRoaXMpLG49MT09PXRoaXMubm9kZVR5cGUmJlwiIFwiK3l0KHIpK1wiIFwiKXtmb3Iobz0wO288ZS5sZW5ndGg7bysrKWk9ZVtvXSxuLmluZGV4T2YoXCIgXCIraStcIiBcIik8MCYmKG4rPWkrXCIgXCIpO2E9eXQobiksciE9PWEmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixhKX19KTp0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbih0KXt2YXIgZSxuLHIsaSxvLGE7cmV0dXJuIG0odCk/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe0UodGhpcykucmVtb3ZlQ2xhc3ModC5jYWxsKHRoaXMsZSx2dCh0aGlzKSkpfSk6YXJndW1lbnRzLmxlbmd0aD8oZT1tdCh0KSkubGVuZ3RoP3RoaXMuZWFjaChmdW5jdGlvbigpe2lmKHI9dnQodGhpcyksbj0xPT09dGhpcy5ub2RlVHlwZSYmXCIgXCIreXQocikrXCIgXCIpe2ZvcihvPTA7bzxlLmxlbmd0aDtvKyspe2k9ZVtvXTt3aGlsZSgtMTxuLmluZGV4T2YoXCIgXCIraStcIiBcIikpbj1uLnJlcGxhY2UoXCIgXCIraStcIiBcIixcIiBcIil9YT15dChuKSxyIT09YSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGEpfX0pOnRoaXM6dGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKX0sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24odCxuKXt2YXIgZSxyLGksbyxhPXR5cGVvZiB0LHM9XCJzdHJpbmdcIj09PWF8fEFycmF5LmlzQXJyYXkodCk7cmV0dXJuIG0odCk/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe0UodGhpcykudG9nZ2xlQ2xhc3ModC5jYWxsKHRoaXMsZSx2dCh0aGlzKSxuKSxuKX0pOlwiYm9vbGVhblwiPT10eXBlb2YgbiYmcz9uP3RoaXMuYWRkQ2xhc3ModCk6dGhpcy5yZW1vdmVDbGFzcyh0KTooZT1tdCh0KSx0aGlzLmVhY2goZnVuY3Rpb24oKXtpZihzKWZvcihvPUUodGhpcyksaT0wO2k8ZS5sZW5ndGg7aSsrKXI9ZVtpXSxvLmhhc0NsYXNzKHIpP28ucmVtb3ZlQ2xhc3Mocik6by5hZGRDbGFzcyhyKTtlbHNlIHZvaWQgMCE9PXQmJlwiYm9vbGVhblwiIT09YXx8KChyPXZ0KHRoaXMpKSYmWS5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIixyKSx0aGlzLnNldEF0dHJpYnV0ZSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHJ8fCExPT09dD9cIlwiOlkuZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj0wO3Q9XCIgXCIrZStcIiBcIjt3aGlsZShuPXRoaXNbcisrXSlpZigxPT09bi5ub2RlVHlwZSYmLTE8KFwiIFwiK3l0KHZ0KG4pKStcIiBcIikuaW5kZXhPZih0KSlyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgeHQ9L1xcci9nO0UuZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24obil7dmFyIHIsZSxpLHQ9dGhpc1swXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oaT1tKG4pLHRoaXMuZWFjaChmdW5jdGlvbihlKXt2YXIgdDsxPT09dGhpcy5ub2RlVHlwZSYmKG51bGw9PSh0PWk/bi5jYWxsKHRoaXMsZSxFKHRoaXMpLnZhbCgpKTpuKT90PVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIHQ/dCs9XCJcIjpBcnJheS5pc0FycmF5KHQpJiYodD1FLm1hcCh0LGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6ZStcIlwifSkpLChyPUUudmFsSG9va3NbdGhpcy50eXBlXXx8RS52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldKSYmXCJzZXRcImluIHImJnZvaWQgMCE9PXIuc2V0KHRoaXMsdCxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT10KSl9KSk6dD8ocj1FLnZhbEhvb2tzW3QudHlwZV18fEUudmFsSG9va3NbdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkmJlwiZ2V0XCJpbiByJiZ2b2lkIDAhPT0oZT1yLmdldCh0LFwidmFsdWVcIikpP2U6XCJzdHJpbmdcIj09dHlwZW9mKGU9dC52YWx1ZSk/ZS5yZXBsYWNlKHh0LFwiXCIpOm51bGw9PWU/XCJcIjplOnZvaWQgMH19KSxFLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PUUuZmluZC5hdHRyKGUsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9dD90Onl0KEUudGV4dChlKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaT1lLm9wdGlvbnMsbz1lLnNlbGVjdGVkSW5kZXgsYT1cInNlbGVjdC1vbmVcIj09PWUudHlwZSxzPWE/bnVsbDpbXSx1PWE/bysxOmkubGVuZ3RoO2ZvcihyPW88MD91OmE/bzowO3I8dTtyKyspaWYoKChuPWlbcl0pLnNlbGVjdGVkfHxyPT09bykmJiFuLmRpc2FibGVkJiYoIW4ucGFyZW50Tm9kZS5kaXNhYmxlZHx8IUEobi5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZih0PUUobikudmFsKCksYSlyZXR1cm4gdDtzLnB1c2godCl9cmV0dXJuIHN9LHNldDpmdW5jdGlvbihlLHQpe3ZhciBuLHIsaT1lLm9wdGlvbnMsbz1FLm1ha2VBcnJheSh0KSxhPWkubGVuZ3RoO3doaWxlKGEtLSkoKHI9aVthXSkuc2VsZWN0ZWQ9LTE8RS5pbkFycmF5KEUudmFsSG9va3Mub3B0aW9uLmdldChyKSxvKSkmJihuPSEwKTtyZXR1cm4gbnx8KGUuc2VsZWN0ZWRJbmRleD0tMSksb319fX0pLEUuZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtFLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oZSx0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiBlLmNoZWNrZWQ9LTE8RS5pbkFycmF5KEUoZSkudmFsKCksdCl9fSx2LmNoZWNrT258fChFLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09PWUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmUudmFsdWV9KX0pLHYuZm9jdXNpbj1cIm9uZm9jdXNpblwiaW4gQzt2YXIgYnQ9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLHd0PWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCl9O0UuZXh0ZW5kKEUuZXZlbnQse3RyaWdnZXI6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsLGMsZixwPVtufHxTXSxkPXkuY2FsbChlLFwidHlwZVwiKT9lLnR5cGU6ZSxoPXkuY2FsbChlLFwibmFtZXNwYWNlXCIpP2UubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihvPWY9YT1uPW58fFMsMyE9PW4ubm9kZVR5cGUmJjghPT1uLm5vZGVUeXBlJiYhYnQudGVzdChkK0UuZXZlbnQudHJpZ2dlcmVkKSYmKC0xPGQuaW5kZXhPZihcIi5cIikmJihkPShoPWQuc3BsaXQoXCIuXCIpKS5zaGlmdCgpLGguc29ydCgpKSx1PWQuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK2QsKGU9ZVtFLmV4cGFuZG9dP2U6bmV3IEUuRXZlbnQoZCxcIm9iamVjdFwiPT10eXBlb2YgZSYmZSkpLmlzVHJpZ2dlcj1yPzI6MyxlLm5hbWVzcGFjZT1oLmpvaW4oXCIuXCIpLGUucm5hbWVzcGFjZT1lLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIraC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxlLnJlc3VsdD12b2lkIDAsZS50YXJnZXR8fChlLnRhcmdldD1uKSx0PW51bGw9PXQ/W2VdOkUubWFrZUFycmF5KHQsW2VdKSxjPUUuZXZlbnQuc3BlY2lhbFtkXXx8e30scnx8IWMudHJpZ2dlcnx8ITEhPT1jLnRyaWdnZXIuYXBwbHkobix0KSkpe2lmKCFyJiYhYy5ub0J1YmJsZSYmIXgobikpe2ZvcihzPWMuZGVsZWdhdGVUeXBlfHxkLGJ0LnRlc3QocytkKXx8KG89by5wYXJlbnROb2RlKTtvO289by5wYXJlbnROb2RlKXAucHVzaChvKSxhPW87YT09PShuLm93bmVyRG9jdW1lbnR8fFMpJiZwLnB1c2goYS5kZWZhdWx0Vmlld3x8YS5wYXJlbnRXaW5kb3d8fEMpfWk9MDt3aGlsZSgobz1wW2krK10pJiYhZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWY9byxlLnR5cGU9MTxpP3M6Yy5iaW5kVHlwZXx8ZCwobD0oWS5nZXQobyxcImV2ZW50c1wiKXx8T2JqZWN0LmNyZWF0ZShudWxsKSlbZS50eXBlXSYmWS5nZXQobyxcImhhbmRsZVwiKSkmJmwuYXBwbHkobyx0KSwobD11JiZvW3VdKSYmbC5hcHBseSYmVihvKSYmKGUucmVzdWx0PWwuYXBwbHkobyx0KSwhMT09PWUucmVzdWx0JiZlLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBlLnR5cGU9ZCxyfHxlLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxjLl9kZWZhdWx0JiYhMSE9PWMuX2RlZmF1bHQuYXBwbHkocC5wb3AoKSx0KXx8IVYobil8fHUmJm0obltkXSkmJiF4KG4pJiYoKGE9blt1XSkmJihuW3VdPW51bGwpLEUuZXZlbnQudHJpZ2dlcmVkPWQsZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZmLmFkZEV2ZW50TGlzdGVuZXIoZCx3dCksbltkXSgpLGUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmZi5yZW1vdmVFdmVudExpc3RlbmVyKGQsd3QpLEUuZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxhJiYoblt1XT1hKSksZS5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI9RS5leHRlbmQobmV3IEUuRXZlbnQsbix7dHlwZTplLGlzU2ltdWxhdGVkOiEwfSk7RS5ldmVudC50cmlnZ2VyKHIsbnVsbCx0KX19KSxFLmZuLmV4dGVuZCh7dHJpZ2dlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtFLmV2ZW50LnRyaWdnZXIoZSx0LHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpc1swXTtpZihuKXJldHVybiBFLmV2ZW50LnRyaWdnZXIoZSx0LG4sITApfX0pLHYuZm9jdXNpbnx8RS5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24obixyKXt2YXIgaT1mdW5jdGlvbihlKXtFLmV2ZW50LnNpbXVsYXRlKHIsZS50YXJnZXQsRS5ldmVudC5maXgoZSkpfTtFLmV2ZW50LnNwZWNpYWxbcl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLmRvY3VtZW50fHx0aGlzLHQ9WS5hY2Nlc3MoZSxyKTt0fHxlLmFkZEV2ZW50TGlzdGVuZXIobixpLCEwKSxZLmFjY2VzcyhlLHIsKHR8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcy5kb2N1bWVudHx8dGhpcyx0PVkuYWNjZXNzKGUsciktMTt0P1kuYWNjZXNzKGUscix0KTooZS5yZW1vdmVFdmVudExpc3RlbmVyKG4saSwhMCksWS5yZW1vdmUoZSxyKSl9fX0pO3ZhciBUdD1DLmxvY2F0aW9uLEN0PXtndWlkOkRhdGUubm93KCl9LFN0PS9cXD8vO0UucGFyc2VYTUw9ZnVuY3Rpb24oZSl7dmFyIHQsbjtpZighZXx8XCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIG51bGw7dHJ5e3Q9KG5ldyBDLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGUsXCJ0ZXh0L3htbFwiKX1jYXRjaChlKXt9cmV0dXJuIG49dCYmdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpWzBdLHQmJiFufHxFLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiKyhuP0UubWFwKG4uY2hpbGROb2RlcyxmdW5jdGlvbihlKXtyZXR1cm4gZS50ZXh0Q29udGVudH0pLmpvaW4oXCJcXG5cIik6ZSkpLHR9O3ZhciBFdD0vXFxbXFxdJC8sa3Q9L1xccj9cXG4vZyxBdD0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksTnQ9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIGp0KG4sZSxyLGkpe3ZhciB0O2lmKEFycmF5LmlzQXJyYXkoZSkpRS5lYWNoKGUsZnVuY3Rpb24oZSx0KXtyfHxFdC50ZXN0KG4pP2kobix0KTpqdChuK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgdCYmbnVsbCE9dD9lOlwiXCIpK1wiXVwiLHQscixpKX0pO2Vsc2UgaWYocnx8XCJvYmplY3RcIiE9PXcoZSkpaShuLGUpO2Vsc2UgZm9yKHQgaW4gZSlqdChuK1wiW1wiK3QrXCJdXCIsZVt0XSxyLGkpfUUucGFyYW09ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9ZnVuY3Rpb24oZSx0KXt2YXIgbj1tKHQpP3QoKTp0O3Jbci5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChlKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQobnVsbD09bj9cIlwiOm4pfTtpZihudWxsPT1lKXJldHVyblwiXCI7aWYoQXJyYXkuaXNBcnJheShlKXx8ZS5qcXVlcnkmJiFFLmlzUGxhaW5PYmplY3QoZSkpRS5lYWNoKGUsZnVuY3Rpb24oKXtpKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKG4gaW4gZSlqdChuLGVbbl0sdCxpKTtyZXR1cm4gci5qb2luKFwiJlwiKX0sRS5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiBFLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9RS5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gZT9FLm1ha2VBcnJheShlKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFFKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZOdC50ZXN0KHRoaXMubm9kZU5hbWUpJiYhQXQudGVzdChlKSYmKHRoaXMuY2hlY2tlZHx8IXBlLnRlc3QoZSkpfSkubWFwKGZ1bmN0aW9uKGUsdCl7dmFyIG49RSh0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09bj9udWxsOkFycmF5LmlzQXJyYXkobik/RS5tYXAobixmdW5jdGlvbihlKXtyZXR1cm57bmFtZTp0Lm5hbWUsdmFsdWU6ZS5yZXBsYWNlKGt0LFwiXFxyXFxuXCIpfX0pOntuYW1lOnQubmFtZSx2YWx1ZTpuLnJlcGxhY2Uoa3QsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSk7dmFyIER0PS8lMjAvZyxxdD0vIy4qJC8sTHQ9LyhbPyZdKV89W14mXSovLEh0PS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvZ20sT3Q9L14oPzpHRVR8SEVBRCkkLyxQdD0vXlxcL1xcLy8sUnQ9e30sTXQ9e30sSXQ9XCIqL1wiLmNvbmNhdChcIipcIiksV3Q9Uy5jcmVhdGVFbGVtZW50KFwiYVwiKTtmdW5jdGlvbiBGdChvKXtyZXR1cm4gZnVuY3Rpb24oZSx0KXtcInN0cmluZ1wiIT10eXBlb2YgZSYmKHQ9ZSxlPVwiKlwiKTt2YXIgbixyPTAsaT1lLnRvTG93ZXJDYXNlKCkubWF0Y2goUCl8fFtdO2lmKG0odCkpd2hpbGUobj1pW3IrK10pXCIrXCI9PT1uWzBdPyhuPW4uc2xpY2UoMSl8fFwiKlwiLChvW25dPW9bbl18fFtdKS51bnNoaWZ0KHQpKToob1tuXT1vW25dfHxbXSkucHVzaCh0KX19ZnVuY3Rpb24gJHQodCxpLG8sYSl7dmFyIHM9e30sdT10PT09TXQ7ZnVuY3Rpb24gbChlKXt2YXIgcjtyZXR1cm4gc1tlXT0hMCxFLmVhY2godFtlXXx8W10sZnVuY3Rpb24oZSx0KXt2YXIgbj10KGksbyxhKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Ygbnx8dXx8c1tuXT91PyEocj1uKTp2b2lkIDA6KGkuZGF0YVR5cGVzLnVuc2hpZnQobiksbChuKSwhMSl9KSxyfXJldHVybiBsKGkuZGF0YVR5cGVzWzBdKXx8IXNbXCIqXCJdJiZsKFwiKlwiKX1mdW5jdGlvbiBCdChlLHQpe3ZhciBuLHIsaT1FLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKG4gaW4gdCl2b2lkIDAhPT10W25dJiYoKGlbbl0/ZTpyfHwocj17fSkpW25dPXRbbl0pO3JldHVybiByJiZFLmV4dGVuZCghMCxlLHIpLGV9V3QuaHJlZj1UdC5ocmVmLEUuZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpUdC5ocmVmLHR5cGU6XCJHRVRcIixpc0xvY2FsOi9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLnRlc3QoVHQucHJvdG9jb2wpLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOkl0LHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpKU09OLnBhcnNlLFwidGV4dCB4bWxcIjpFLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD9CdChCdChlLEUuYWpheFNldHRpbmdzKSx0KTpCdChFLmFqYXhTZXR0aW5ncyxlKX0sYWpheFByZWZpbHRlcjpGdChSdCksYWpheFRyYW5zcG9ydDpGdChNdCksYWpheDpmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBlJiYodD1lLGU9dm9pZCAwKSx0PXR8fHt9O3ZhciBjLGYscCxuLGQscixoLGcsaSxvLHk9RS5hamF4U2V0dXAoe30sdCksdj15LmNvbnRleHR8fHksbT15LmNvbnRleHQmJih2Lm5vZGVUeXBlfHx2LmpxdWVyeSk/RSh2KTpFLmV2ZW50LHg9RS5EZWZlcnJlZCgpLGI9RS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSx3PXkuc3RhdHVzQ29kZXx8e30sYT17fSxzPXt9LHU9XCJjYW5jZWxlZFwiLFQ9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihlKXt2YXIgdDtpZihoKXtpZighbil7bj17fTt3aGlsZSh0PUh0LmV4ZWMocCkpblt0WzFdLnRvTG93ZXJDYXNlKCkrXCIgXCJdPShuW3RbMV0udG9Mb3dlckNhc2UoKStcIiBcIl18fFtdKS5jb25jYXQodFsyXSl9dD1uW2UudG9Mb3dlckNhc2UoKStcIiBcIl19cmV0dXJuIG51bGw9PXQ/bnVsbDp0LmpvaW4oXCIsIFwiKX0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIGg/cDpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIG51bGw9PWgmJihlPXNbZS50b0xvd2VyQ2FzZSgpXT1zW2UudG9Mb3dlckNhc2UoKV18fGUsYVtlXT10KSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1oJiYoeS5taW1lVHlwZT1lKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGUpe3ZhciB0O2lmKGUpaWYoaClULmFsd2F5cyhlW1Quc3RhdHVzXSk7ZWxzZSBmb3IodCBpbiBlKXdbdF09W3dbdF0sZVt0XV07cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGUpe3ZhciB0PWV8fHU7cmV0dXJuIGMmJmMuYWJvcnQodCksbCgwLHQpLHRoaXN9fTtpZih4LnByb21pc2UoVCkseS51cmw9KChlfHx5LnVybHx8VHQuaHJlZikrXCJcIikucmVwbGFjZShQdCxUdC5wcm90b2NvbCtcIi8vXCIpLHkudHlwZT10Lm1ldGhvZHx8dC50eXBlfHx5Lm1ldGhvZHx8eS50eXBlLHkuZGF0YVR5cGVzPSh5LmRhdGFUeXBlfHxcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChQKXx8W1wiXCJdLG51bGw9PXkuY3Jvc3NEb21haW4pe3I9Uy5jcmVhdGVFbGVtZW50KFwiYVwiKTt0cnl7ci5ocmVmPXkudXJsLHIuaHJlZj1yLmhyZWYseS5jcm9zc0RvbWFpbj1XdC5wcm90b2NvbCtcIi8vXCIrV3QuaG9zdCE9ci5wcm90b2NvbCtcIi8vXCIrci5ob3N0fWNhdGNoKGUpe3kuY3Jvc3NEb21haW49ITB9fWlmKHkuZGF0YSYmeS5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIHkuZGF0YSYmKHkuZGF0YT1FLnBhcmFtKHkuZGF0YSx5LnRyYWRpdGlvbmFsKSksJHQoUnQseSx0LFQpLGgpcmV0dXJuIFQ7Zm9yKGkgaW4oZz1FLmV2ZW50JiZ5Lmdsb2JhbCkmJjA9PUUuYWN0aXZlKysmJkUuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSx5LnR5cGU9eS50eXBlLnRvVXBwZXJDYXNlKCkseS5oYXNDb250ZW50PSFPdC50ZXN0KHkudHlwZSksZj15LnVybC5yZXBsYWNlKHF0LFwiXCIpLHkuaGFzQ29udGVudD95LmRhdGEmJnkucHJvY2Vzc0RhdGEmJjA9PT0oeS5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmKHkuZGF0YT15LmRhdGEucmVwbGFjZShEdCxcIitcIikpOihvPXkudXJsLnNsaWNlKGYubGVuZ3RoKSx5LmRhdGEmJih5LnByb2Nlc3NEYXRhfHxcInN0cmluZ1wiPT10eXBlb2YgeS5kYXRhKSYmKGYrPShTdC50ZXN0KGYpP1wiJlwiOlwiP1wiKSt5LmRhdGEsZGVsZXRlIHkuZGF0YSksITE9PT15LmNhY2hlJiYoZj1mLnJlcGxhY2UoTHQsXCIkMVwiKSxvPShTdC50ZXN0KGYpP1wiJlwiOlwiP1wiKStcIl89XCIrQ3QuZ3VpZCsrK28pLHkudXJsPWYrbykseS5pZk1vZGlmaWVkJiYoRS5sYXN0TW9kaWZpZWRbZl0mJlQuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsRS5sYXN0TW9kaWZpZWRbZl0pLEUuZXRhZ1tmXSYmVC5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLEUuZXRhZ1tmXSkpLCh5LmRhdGEmJnkuaGFzQ29udGVudCYmITEhPT15LmNvbnRlbnRUeXBlfHx0LmNvbnRlbnRUeXBlKSYmVC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIseS5jb250ZW50VHlwZSksVC5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIseS5kYXRhVHlwZXNbMF0mJnkuYWNjZXB0c1t5LmRhdGFUeXBlc1swXV0/eS5hY2NlcHRzW3kuZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT15LmRhdGFUeXBlc1swXT9cIiwgXCIrSXQrXCI7IHE9MC4wMVwiOlwiXCIpOnkuYWNjZXB0c1tcIipcIl0pLHkuaGVhZGVycylULnNldFJlcXVlc3RIZWFkZXIoaSx5LmhlYWRlcnNbaV0pO2lmKHkuYmVmb3JlU2VuZCYmKCExPT09eS5iZWZvcmVTZW5kLmNhbGwodixULHkpfHxoKSlyZXR1cm4gVC5hYm9ydCgpO2lmKHU9XCJhYm9ydFwiLGIuYWRkKHkuY29tcGxldGUpLFQuZG9uZSh5LnN1Y2Nlc3MpLFQuZmFpbCh5LmVycm9yKSxjPSR0KE10LHksdCxUKSl7aWYoVC5yZWFkeVN0YXRlPTEsZyYmbS50cmlnZ2VyKFwiYWpheFNlbmRcIixbVCx5XSksaClyZXR1cm4gVDt5LmFzeW5jJiYwPHkudGltZW91dCYmKGQ9Qy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7VC5hYm9ydChcInRpbWVvdXRcIil9LHkudGltZW91dCkpO3RyeXtoPSExLGMuc2VuZChhLGwpfWNhdGNoKGUpe2lmKGgpdGhyb3cgZTtsKC0xLGUpfX1lbHNlIGwoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24gbChlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9dDtofHwoaD0hMCxkJiZDLmNsZWFyVGltZW91dChkKSxjPXZvaWQgMCxwPXJ8fFwiXCIsVC5yZWFkeVN0YXRlPTA8ZT80OjAsaT0yMDA8PWUmJmU8MzAwfHwzMDQ9PT1lLG4mJihzPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzPWUuY29udGVudHMsdT1lLmRhdGFUeXBlczt3aGlsZShcIipcIj09PXVbMF0pdS5zaGlmdCgpLHZvaWQgMD09PXImJihyPWUubWltZVR5cGV8fHQuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKHIpZm9yKGkgaW4gcylpZihzW2ldJiZzW2ldLnRlc3Qocikpe3UudW5zaGlmdChpKTticmVha31pZih1WzBdaW4gbilvPXVbMF07ZWxzZXtmb3IoaSBpbiBuKXtpZighdVswXXx8ZS5jb252ZXJ0ZXJzW2krXCIgXCIrdVswXV0pe289aTticmVha31hfHwoYT1pKX1vPW98fGF9aWYobylyZXR1cm4gbyE9PXVbMF0mJnUudW5zaGlmdChvKSxuW29dfSh5LFQsbikpLCFpJiYtMTxFLmluQXJyYXkoXCJzY3JpcHRcIix5LmRhdGFUeXBlcykmJkUuaW5BcnJheShcImpzb25cIix5LmRhdGFUeXBlcyk8MCYmKHkuY29udmVydGVyc1tcInRleHQgc2NyaXB0XCJdPWZ1bmN0aW9uKCl7fSkscz1mdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9e30sYz1lLmRhdGFUeXBlcy5zbGljZSgpO2lmKGNbMV0pZm9yKGEgaW4gZS5jb252ZXJ0ZXJzKWxbYS50b0xvd2VyQ2FzZSgpXT1lLmNvbnZlcnRlcnNbYV07bz1jLnNoaWZ0KCk7d2hpbGUobylpZihlLnJlc3BvbnNlRmllbGRzW29dJiYobltlLnJlc3BvbnNlRmllbGRzW29dXT10KSwhdSYmciYmZS5kYXRhRmlsdGVyJiYodD1lLmRhdGFGaWx0ZXIodCxlLmRhdGFUeXBlKSksdT1vLG89Yy5zaGlmdCgpKWlmKFwiKlwiPT09bylvPXU7ZWxzZSBpZihcIipcIiE9PXUmJnUhPT1vKXtpZighKGE9bFt1K1wiIFwiK29dfHxsW1wiKiBcIitvXSkpZm9yKGkgaW4gbClpZigocz1pLnNwbGl0KFwiIFwiKSlbMV09PT1vJiYoYT1sW3UrXCIgXCIrc1swXV18fGxbXCIqIFwiK3NbMF1dKSl7ITA9PT1hP2E9bFtpXTohMCE9PWxbaV0mJihvPXNbMF0sYy51bnNoaWZ0KHNbMV0pKTticmVha31pZighMCE9PWEpaWYoYSYmZVtcInRocm93c1wiXSl0PWEodCk7ZWxzZSB0cnl7dD1hKHQpfWNhdGNoKGUpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6YT9lOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK3UrXCIgdG8gXCIrb319fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOnR9fSh5LHMsVCxpKSxpPyh5LmlmTW9kaWZpZWQmJigodT1ULmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSkmJihFLmxhc3RNb2RpZmllZFtmXT11KSwodT1ULmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSkmJihFLmV0YWdbZl09dSkpLDIwND09PWV8fFwiSEVBRFwiPT09eS50eXBlP2w9XCJub2NvbnRlbnRcIjozMDQ9PT1lP2w9XCJub3Rtb2RpZmllZFwiOihsPXMuc3RhdGUsbz1zLmRhdGEsaT0hKGE9cy5lcnJvcikpKTooYT1sLCFlJiZsfHwobD1cImVycm9yXCIsZTwwJiYoZT0wKSkpLFQuc3RhdHVzPWUsVC5zdGF0dXNUZXh0PSh0fHxsKStcIlwiLGk/eC5yZXNvbHZlV2l0aCh2LFtvLGwsVF0pOngucmVqZWN0V2l0aCh2LFtULGwsYV0pLFQuc3RhdHVzQ29kZSh3KSx3PXZvaWQgMCxnJiZtLnRyaWdnZXIoaT9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbVCx5LGk/bzphXSksYi5maXJlV2l0aCh2LFtULGxdKSxnJiYobS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW1QseV0pLC0tRS5hY3RpdmV8fEUuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIFR9LGdldEpTT046ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBFLmdldChlLHQsbixcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihlLHQpe3JldHVybiBFLmdldChlLHZvaWQgMCx0LFwic2NyaXB0XCIpfX0pLEUuZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oZSxpKXtFW2ldPWZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBtKHQpJiYocj1yfHxuLG49dCx0PXZvaWQgMCksRS5hamF4KEUuZXh0ZW5kKHt1cmw6ZSx0eXBlOmksZGF0YVR5cGU6cixkYXRhOnQsc3VjY2VzczpufSxFLmlzUGxhaW5PYmplY3QoZSkmJmUpKX19KSxFLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKHQgaW4gZS5oZWFkZXJzKVwiY29udGVudC10eXBlXCI9PT10LnRvTG93ZXJDYXNlKCkmJihlLmNvbnRlbnRUeXBlPWUuaGVhZGVyc1t0XXx8XCJcIil9KSxFLl9ldmFsVXJsPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gRS5hamF4KHt1cmw6ZSx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixjYWNoZTohMCxhc3luYzohMSxnbG9iYWw6ITEsY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKCl7fX0sZGF0YUZpbHRlcjpmdW5jdGlvbihlKXtFLmdsb2JhbEV2YWwoZSx0LG4pfX0pfSxFLmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gdGhpc1swXSYmKG0oZSkmJihlPWUuY2FsbCh0aGlzWzBdKSksdD1FKGUsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZ0Lmluc2VydEJlZm9yZSh0aGlzWzBdKSx0Lm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXM7d2hpbGUoZS5maXJzdEVsZW1lbnRDaGlsZCllPWUuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGV9KS5hcHBlbmQodGhpcykpLHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbihuKXtyZXR1cm4gbShuKT90aGlzLmVhY2goZnVuY3Rpb24oZSl7RSh0aGlzKS53cmFwSW5uZXIobi5jYWxsKHRoaXMsZSkpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9RSh0aGlzKSx0PWUuY29udGVudHMoKTt0Lmxlbmd0aD90LndyYXBBbGwobik6ZS5hcHBlbmQobil9KX0sd3JhcDpmdW5jdGlvbih0KXt2YXIgbj1tKHQpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7RSh0aGlzKS53cmFwQWxsKG4/dC5jYWxsKHRoaXMsZSk6dCl9KX0sdW53cmFwOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnBhcmVudChlKS5ub3QoXCJib2R5XCIpLmVhY2goZnVuY3Rpb24oKXtFKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KSx0aGlzfX0pLEUuZXhwci5wc2V1ZG9zLmhpZGRlbj1mdW5jdGlvbihlKXtyZXR1cm4hRS5leHByLnBzZXVkb3MudmlzaWJsZShlKX0sRS5leHByLnBzZXVkb3MudmlzaWJsZT1mdW5jdGlvbihlKXtyZXR1cm4hIShlLm9mZnNldFdpZHRofHxlLm9mZnNldEhlaWdodHx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCl9LEUuYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IEMuWE1MSHR0cFJlcXVlc3R9Y2F0Y2goZSl7fX07dmFyIF90PXswOjIwMCwxMjIzOjIwNH0senQ9RS5hamF4U2V0dGluZ3MueGhyKCk7di5jb3JzPSEhenQmJlwid2l0aENyZWRlbnRpYWxzXCJpbiB6dCx2LmFqYXg9enQ9ISF6dCxFLmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24oaSl7dmFyIG8sYTtpZih2LmNvcnN8fHp0JiYhaS5jcm9zc0RvbWFpbilyZXR1cm57c2VuZDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9aS54aHIoKTtpZihyLm9wZW4oaS50eXBlLGkudXJsLGkuYXN5bmMsaS51c2VybmFtZSxpLnBhc3N3b3JkKSxpLnhockZpZWxkcylmb3IobiBpbiBpLnhockZpZWxkcylyW25dPWkueGhyRmllbGRzW25dO2ZvcihuIGluIGkubWltZVR5cGUmJnIub3ZlcnJpZGVNaW1lVHlwZSYmci5vdmVycmlkZU1pbWVUeXBlKGkubWltZVR5cGUpLGkuY3Jvc3NEb21haW58fGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKSxlKXIuc2V0UmVxdWVzdEhlYWRlcihuLGVbbl0pO289ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7byYmKG89YT1yLm9ubG9hZD1yLm9uZXJyb3I9ci5vbmFib3J0PXIub250aW1lb3V0PXIub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJhYm9ydFwiPT09ZT9yLmFib3J0KCk6XCJlcnJvclwiPT09ZT9cIm51bWJlclwiIT10eXBlb2Ygci5zdGF0dXM/dCgwLFwiZXJyb3JcIik6dChyLnN0YXR1cyxyLnN0YXR1c1RleHQpOnQoX3Rbci5zdGF0dXNdfHxyLnN0YXR1cyxyLnN0YXR1c1RleHQsXCJ0ZXh0XCIhPT0oci5yZXNwb25zZVR5cGV8fFwidGV4dFwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIHIucmVzcG9uc2VUZXh0P3tiaW5hcnk6ci5yZXNwb25zZX06e3RleHQ6ci5yZXNwb25zZVRleHR9LHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LHIub25sb2FkPW8oKSxhPXIub25lcnJvcj1yLm9udGltZW91dD1vKFwiZXJyb3JcIiksdm9pZCAwIT09ci5vbmFib3J0P3Iub25hYm9ydD1hOnIub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PXIucmVhZHlTdGF0ZSYmQy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7byYmYSgpfSl9LG89byhcImFib3J0XCIpO3RyeXtyLnNlbmQoaS5oYXNDb250ZW50JiZpLmRhdGF8fG51bGwpfWNhdGNoKGUpe2lmKG8pdGhyb3cgZX19LGFib3J0OmZ1bmN0aW9uKCl7byYmbygpfX19KSxFLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oZSl7ZS5jcm9zc0RvbWFpbiYmKGUuY29udGVudHMuc2NyaXB0PSExKX0pLEUuYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGUpe3JldHVybiBFLmdsb2JhbEV2YWwoZSksZX19fSksRS5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oZSl7dm9pZCAwPT09ZS5jYWNoZSYmKGUuY2FjaGU9ITEpLGUuY3Jvc3NEb21haW4mJihlLnR5cGU9XCJHRVRcIil9KSxFLmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIixmdW5jdGlvbihuKXt2YXIgcixpO2lmKG4uY3Jvc3NEb21haW58fG4uc2NyaXB0QXR0cnMpcmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSx0KXtyPUUoXCI8c2NyaXB0PlwiKS5hdHRyKG4uc2NyaXB0QXR0cnN8fHt9KS5wcm9wKHtjaGFyc2V0Om4uc2NyaXB0Q2hhcnNldCxzcmM6bi51cmx9KS5vbihcImxvYWQgZXJyb3JcIixpPWZ1bmN0aW9uKGUpe3IucmVtb3ZlKCksaT1udWxsLGUmJnQoXCJlcnJvclwiPT09ZS50eXBlPzQwNDoyMDAsZS50eXBlKX0pLFMuaGVhZC5hcHBlbmRDaGlsZChyWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtpJiZpKCl9fX0pO3ZhciBVdCxYdD1bXSxWdD0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO0UuYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBlPVh0LnBvcCgpfHxFLmV4cGFuZG8rXCJfXCIrQ3QuZ3VpZCsrO3JldHVybiB0aGlzW2VdPSEwLGV9fSksRS5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT0hMSE9PWUuanNvbnAmJihWdC50ZXN0KGUudXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiBlLmRhdGEmJjA9PT0oZS5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmVnQudGVzdChlLmRhdGEpJiZcImRhdGFcIik7aWYoYXx8XCJqc29ucFwiPT09ZS5kYXRhVHlwZXNbMF0pcmV0dXJuIHI9ZS5qc29ucENhbGxiYWNrPW0oZS5qc29ucENhbGxiYWNrKT9lLmpzb25wQ2FsbGJhY2soKTplLmpzb25wQ2FsbGJhY2ssYT9lW2FdPWVbYV0ucmVwbGFjZShWdCxcIiQxXCIrcik6ITEhPT1lLmpzb25wJiYoZS51cmwrPShTdC50ZXN0KGUudXJsKT9cIiZcIjpcIj9cIikrZS5qc29ucCtcIj1cIityKSxlLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBvfHxFLmVycm9yKHIrXCIgd2FzIG5vdCBjYWxsZWRcIiksb1swXX0sZS5kYXRhVHlwZXNbMF09XCJqc29uXCIsaT1DW3JdLENbcl09ZnVuY3Rpb24oKXtvPWFyZ3VtZW50c30sbi5hbHdheXMoZnVuY3Rpb24oKXt2b2lkIDA9PT1pP0UoQykucmVtb3ZlUHJvcChyKTpDW3JdPWksZVtyXSYmKGUuanNvbnBDYWxsYmFjaz10Lmpzb25wQ2FsbGJhY2ssWHQucHVzaChyKSksbyYmbShpKSYmaShvWzBdKSxvPWk9dm9pZCAwfSksXCJzY3JpcHRcIn0pLHYuY3JlYXRlSFRNTERvY3VtZW50PSgoVXQ9Uy5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keSkuaW5uZXJIVE1MPVwiPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT5cIiwyPT09VXQuY2hpbGROb2Rlcy5sZW5ndGgpLEUucGFyc2VIVE1MPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZT9bXTooXCJib29sZWFuXCI9PXR5cGVvZiB0JiYobj10LHQ9ITEpLHR8fCh2LmNyZWF0ZUhUTUxEb2N1bWVudD8oKHI9KHQ9Uy5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikpLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpKS5ocmVmPVMubG9jYXRpb24uaHJlZix0LmhlYWQuYXBwZW5kQ2hpbGQocikpOnQ9Uyksbz0hbiYmW10sKGk9Ti5leGVjKGUpKT9bdC5jcmVhdGVFbGVtZW50KGlbMV0pXTooaT14ZShbZV0sdCxvKSxvJiZvLmxlbmd0aCYmRShvKS5yZW1vdmUoKSxFLm1lcmdlKFtdLGkuY2hpbGROb2RlcykpKTt2YXIgcixpLG99LEUuZm4ubG9hZD1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9dGhpcyxzPWUuaW5kZXhPZihcIiBcIik7cmV0dXJuLTE8cyYmKHI9eXQoZS5zbGljZShzKSksZT1lLnNsaWNlKDAscykpLG0odCk/KG49dCx0PXZvaWQgMCk6dCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJihpPVwiUE9TVFwiKSwwPGEubGVuZ3RoJiZFLmFqYXgoe3VybDplLHR5cGU6aXx8XCJHRVRcIixkYXRhVHlwZTpcImh0bWxcIixkYXRhOnR9KS5kb25lKGZ1bmN0aW9uKGUpe289YXJndW1lbnRzLGEuaHRtbChyP0UoXCI8ZGl2PlwiKS5hcHBlbmQoRS5wYXJzZUhUTUwoZSkpLmZpbmQocik6ZSl9KS5hbHdheXMobiYmZnVuY3Rpb24oZSx0KXthLmVhY2goZnVuY3Rpb24oKXtuLmFwcGx5KHRoaXMsb3x8W2UucmVzcG9uc2VUZXh0LHQsZV0pfSl9KSx0aGlzfSxFLmV4cHIucHNldWRvcy5hbmltYXRlZD1mdW5jdGlvbih0KXtyZXR1cm4gRS5ncmVwKEUudGltZXJzLGZ1bmN0aW9uKGUpe3JldHVybiB0PT09ZS5lbGVtfSkubGVuZ3RofSxFLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbD1FLmNzcyhlLFwicG9zaXRpb25cIiksYz1FKGUpLGY9e307XCJzdGF0aWNcIj09PWwmJihlLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIikscz1jLm9mZnNldCgpLG89RS5jc3MoZSxcInRvcFwiKSx1PUUuY3NzKGUsXCJsZWZ0XCIpLChcImFic29sdXRlXCI9PT1sfHxcImZpeGVkXCI9PT1sKSYmLTE8KG8rdSkuaW5kZXhPZihcImF1dG9cIik/KGE9KHI9Yy5wb3NpdGlvbigpKS50b3AsaT1yLmxlZnQpOihhPXBhcnNlRmxvYXQobyl8fDAsaT1wYXJzZUZsb2F0KHUpfHwwKSxtKHQpJiYodD10LmNhbGwoZSxuLEUuZXh0ZW5kKHt9LHMpKSksbnVsbCE9dC50b3AmJihmLnRvcD10LnRvcC1zLnRvcCthKSxudWxsIT10LmxlZnQmJihmLmxlZnQ9dC5sZWZ0LXMubGVmdCtpKSxcInVzaW5nXCJpbiB0P3QudXNpbmcuY2FsbChlLGYpOmMuY3NzKGYpfX0sRS5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbih0KXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT10P3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe0Uub2Zmc2V0LnNldE9mZnNldCh0aGlzLHQsZSl9KTt2YXIgZSxuLHI9dGhpc1swXTtyZXR1cm4gcj9yLmdldENsaWVudFJlY3RzKCkubGVuZ3RoPyhlPXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbj1yLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcse3RvcDplLnRvcCtuLnBhZ2VZT2Zmc2V0LGxlZnQ6ZS5sZWZ0K24ucGFnZVhPZmZzZXR9KTp7dG9wOjAsbGVmdDowfTp2b2lkIDB9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGUsdCxuLHI9dGhpc1swXSxpPXt0b3A6MCxsZWZ0OjB9O2lmKFwiZml4ZWRcIj09PUUuY3NzKHIsXCJwb3NpdGlvblwiKSl0PXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7ZWxzZXt0PXRoaXMub2Zmc2V0KCksbj1yLm93bmVyRG9jdW1lbnQsZT1yLm9mZnNldFBhcmVudHx8bi5kb2N1bWVudEVsZW1lbnQ7d2hpbGUoZSYmKGU9PT1uLmJvZHl8fGU9PT1uLmRvY3VtZW50RWxlbWVudCkmJlwic3RhdGljXCI9PT1FLmNzcyhlLFwicG9zaXRpb25cIikpZT1lLnBhcmVudE5vZGU7ZSYmZSE9PXImJjE9PT1lLm5vZGVUeXBlJiYoKGk9RShlKS5vZmZzZXQoKSkudG9wKz1FLmNzcyhlLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksaS5sZWZ0Kz1FLmNzcyhlLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKX1yZXR1cm57dG9wOnQudG9wLWkudG9wLUUuY3NzKHIsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDp0LmxlZnQtaS5sZWZ0LUUuY3NzKHIsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXMub2Zmc2V0UGFyZW50O3doaWxlKGUmJlwic3RhdGljXCI9PT1FLmNzcyhlLFwicG9zaXRpb25cIikpZT1lLm9mZnNldFBhcmVudDtyZXR1cm4gZXx8cmV9KX19KSxFLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKHQsaSl7dmFyIG89XCJwYWdlWU9mZnNldFwiPT09aTtFLmZuW3RdPWZ1bmN0aW9uKGUpe3JldHVybiBCKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKHgoZSk/cj1lOjk9PT1lLm5vZGVUeXBlJiYocj1lLmRlZmF1bHRWaWV3KSx2b2lkIDA9PT1uKXJldHVybiByP3JbaV06ZVt0XTtyP3Iuc2Nyb2xsVG8obz9yLnBhZ2VYT2Zmc2V0Om4sbz9uOnIucGFnZVlPZmZzZXQpOmVbdF09bn0sdCxlLGFyZ3VtZW50cy5sZW5ndGgpfX0pLEUuZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oZSxuKXtFLmNzc0hvb2tzW25dPV9lKHYucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihlLHQpe2lmKHQpcmV0dXJuIHQ9QmUoZSxuKSxQZS50ZXN0KHQpP0UoZSkucG9zaXRpb24oKVtuXStcInB4XCI6dH0pfSksRS5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEscyl7RS5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6cyxcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihyLG8pe0UuZm5bb109ZnVuY3Rpb24oZSx0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoJiYocnx8XCJib29sZWFuXCIhPXR5cGVvZiBlKSxpPXJ8fCghMD09PWV8fCEwPT09dD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBCKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByO3JldHVybiB4KGUpPzA9PT1vLmluZGV4T2YoXCJvdXRlclwiKT9lW1wiaW5uZXJcIithXTplLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1lLm5vZGVUeXBlPyhyPWUuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGUuYm9keVtcInNjcm9sbFwiK2FdLHJbXCJzY3JvbGxcIithXSxlLmJvZHlbXCJvZmZzZXRcIithXSxyW1wib2Zmc2V0XCIrYV0scltcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09bj9FLmNzcyhlLHQsaSk6RS5zdHlsZShlLHQsbixpKX0scyxuP2U6dm9pZCAwLG4pfX0pfSksRS5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oZSx0KXtFLmZuW3RdPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLm9uKHQsZSl9fSksRS5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0aGlzLm9uKGUsbnVsbCx0LG4pfSx1bmJpbmQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5vZmYoZSxudWxsLHQpfSxkZWxlZ2F0ZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5vbih0LGUsbixyKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGUsXCIqKlwiKTp0aGlzLm9mZih0LGV8fFwiKipcIixuKX0saG92ZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGUpLm1vdXNlbGVhdmUodHx8ZSl9fSksRS5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLG4pe0UuZm5bbl09ZnVuY3Rpb24oZSx0KXtyZXR1cm4gMDxhcmd1bWVudHMubGVuZ3RoP3RoaXMub24obixudWxsLGUsdCk6dGhpcy50cmlnZ2VyKG4pfX0pO3ZhciBHdD0vXltcXHNcXHVGRUZGXFx4QTBdK3woW15cXHNcXHVGRUZGXFx4QTBdKVtcXHNcXHVGRUZGXFx4QTBdKyQvZztFLnByb3h5PWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0JiYobj1lW3RdLHQ9ZSxlPW4pLG0oZSkpcmV0dXJuIHI9cy5jYWxsKGFyZ3VtZW50cywyKSwoaT1mdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KHR8fHRoaXMsci5jb25jYXQocy5jYWxsKGFyZ3VtZW50cykpKX0pLmd1aWQ9ZS5ndWlkPWUuZ3VpZHx8RS5ndWlkKyssaX0sRS5ob2xkUmVhZHk9ZnVuY3Rpb24oZSl7ZT9FLnJlYWR5V2FpdCsrOkUucmVhZHkoITApfSxFLmlzQXJyYXk9QXJyYXkuaXNBcnJheSxFLnBhcnNlSlNPTj1KU09OLnBhcnNlLEUubm9kZU5hbWU9QSxFLmlzRnVuY3Rpb249bSxFLmlzV2luZG93PXgsRS5jYW1lbENhc2U9WCxFLnR5cGU9dyxFLm5vdz1EYXRlLm5vdyxFLmlzTnVtZXJpYz1mdW5jdGlvbihlKXt2YXIgdD1FLnR5cGUoZSk7cmV0dXJuKFwibnVtYmVyXCI9PT10fHxcInN0cmluZ1wiPT09dCkmJiFpc05hTihlLXBhcnNlRmxvYXQoZSkpfSxFLnRyaW09ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjooZStcIlwiKS5yZXBsYWNlKEd0LFwiJDFcIil9LFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gRX0pO3ZhciBZdD1DLmpRdWVyeSxRdD1DLiQ7cmV0dXJuIEUubm9Db25mbGljdD1mdW5jdGlvbihlKXtyZXR1cm4gQy4kPT09RSYmKEMuJD1RdCksZSYmQy5qUXVlcnk9PT1FJiYoQy5qUXVlcnk9WXQpLEV9LFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlJiYoQy5qUXVlcnk9Qy4kPUUpLEV9KTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgc3RyaWN0VXJpRW5jb2RlID0gcmVxdWlyZSgnc3RyaWN0LXVyaS1lbmNvZGUnKTtcbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgZGVjb2RlQ29tcG9uZW50ID0gcmVxdWlyZSgnZGVjb2RlLXVyaS1jb21wb25lbnQnKTtcblxuZnVuY3Rpb24gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdHMpIHtcblx0c3dpdGNoIChvcHRzLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBpbmRleCkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IG51bGwgPyBbXG5cdFx0XHRcdFx0ZW5jb2RlKGtleSwgb3B0cyksXG5cdFx0XHRcdFx0J1snLFxuXHRcdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRcdCddJ1xuXHRcdFx0XHRdLmpvaW4oJycpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCdbJyxcblx0XHRcdFx0XHRlbmNvZGUoaW5kZXgsIG9wdHMpLFxuXHRcdFx0XHRcdCddPScsXG5cdFx0XHRcdFx0ZW5jb2RlKHZhbHVlLCBvcHRzKVxuXHRcdFx0XHRdLmpvaW4oJycpO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2JyYWNrZXQnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IGVuY29kZShrZXksIG9wdHMpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCdbXT0nLFxuXHRcdFx0XHRcdGVuY29kZSh2YWx1ZSwgb3B0cylcblx0XHRcdFx0XS5qb2luKCcnKTtcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IGVuY29kZShrZXksIG9wdHMpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCc9Jyxcblx0XHRcdFx0XHRlbmNvZGUodmFsdWUsIG9wdHMpXG5cdFx0XHRcdF0uam9pbignJyk7XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHBhcnNlckZvckFycmF5Rm9ybWF0KG9wdHMpIHtcblx0dmFyIHJlc3VsdDtcblxuXHRzd2l0Y2ggKG9wdHMuYXJyYXlGb3JtYXQpIHtcblx0XHRjYXNlICdpbmRleCc6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSB7XG5cdFx0XHRcdHJlc3VsdCA9IC9cXFsoXFxkKilcXF0kLy5leGVjKGtleSk7XG5cblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcZCpcXF0kLywgJycpO1xuXG5cdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0ge307XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldW3Jlc3VsdFsxXV0gPSB2YWx1ZTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdicmFja2V0Jzpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpIHtcblx0XHRcdFx0cmVzdWx0ID0gLyhcXFtcXF0pJC8uZXhlYyhrZXkpO1xuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxdJC8sICcnKTtcblxuXHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gZWxzZSBpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFt2YWx1ZV07XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFtdLmNvbmNhdChhY2N1bXVsYXRvcltrZXldLCB2YWx1ZSk7XG5cdFx0XHR9O1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpIHtcblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW10uY29uY2F0KGFjY3VtdWxhdG9yW2tleV0sIHZhbHVlKTtcblx0XHRcdH07XG5cdH1cbn1cblxuZnVuY3Rpb24gZW5jb2RlKHZhbHVlLCBvcHRzKSB7XG5cdGlmIChvcHRzLmVuY29kZSkge1xuXHRcdHJldHVybiBvcHRzLnN0cmljdCA/IHN0cmljdFVyaUVuY29kZSh2YWx1ZSkgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBrZXlzU29ydGVyKGlucHV0KSB7XG5cdGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dC5zb3J0KCk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiBrZXlzU29ydGVyKE9iamVjdC5rZXlzKGlucHV0KSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuXHRcdFx0cmV0dXJuIE51bWJlcihhKSAtIE51bWJlcihiKTtcblx0XHR9KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cmV0dXJuIGlucHV0W2tleV07XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3Qoc3RyKSB7XG5cdHZhciBxdWVyeVN0YXJ0ID0gc3RyLmluZGV4T2YoJz8nKTtcblx0aWYgKHF1ZXJ5U3RhcnQgPT09IC0xKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdHJldHVybiBzdHIuc2xpY2UocXVlcnlTdGFydCArIDEpO1xufVxuXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdHMpIHtcblx0b3B0cyA9IG9iamVjdEFzc2lnbih7YXJyYXlGb3JtYXQ6ICdub25lJ30sIG9wdHMpO1xuXG5cdHZhciBmb3JtYXR0ZXIgPSBwYXJzZXJGb3JBcnJheUZvcm1hdChvcHRzKTtcblxuXHQvLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggbm8gcHJvdG90eXBlXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvcXVlcnktc3RyaW5nL2lzc3Vlcy80N1xuXHR2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0c3RyID0gc3RyLnRyaW0oKS5yZXBsYWNlKC9eWz8jJl0vLCAnJyk7XG5cblx0aWYgKCFzdHIpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0c3RyLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcblx0XHR2YXIgcGFydHMgPSBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnPScpO1xuXHRcdC8vIEZpcmVmb3ggKHByZSA0MCkgZGVjb2RlcyBgJTNEYCB0byBgPWBcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3F1ZXJ5LXN0cmluZy9wdWxsLzM3XG5cdFx0dmFyIGtleSA9IHBhcnRzLnNoaWZ0KCk7XG5cdFx0dmFyIHZhbCA9IHBhcnRzLmxlbmd0aCA+IDAgPyBwYXJ0cy5qb2luKCc9JykgOiB1bmRlZmluZWQ7XG5cblx0XHQvLyBtaXNzaW5nIGA9YCBzaG91bGQgYmUgYG51bGxgOlxuXHRcdC8vIGh0dHA6Ly93My5vcmcvVFIvMjAxMi9XRC11cmwtMjAxMjA1MjQvI2NvbGxlY3QtdXJsLXBhcmFtZXRlcnNcblx0XHR2YWwgPSB2YWwgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBkZWNvZGVDb21wb25lbnQodmFsKTtcblxuXHRcdGZvcm1hdHRlcihkZWNvZGVDb21wb25lbnQoa2V5KSwgdmFsLCByZXQpO1xuXHR9KTtcblxuXHRyZXR1cm4gT2JqZWN0LmtleXMocmV0KS5zb3J0KCkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuXHRcdHZhciB2YWwgPSByZXRba2V5XTtcblx0XHRpZiAoQm9vbGVhbih2YWwpICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0XHRcdC8vIFNvcnQgb2JqZWN0IGtleXMsIG5vdCB2YWx1ZXNcblx0XHRcdHJlc3VsdFtrZXldID0ga2V5c1NvcnRlcih2YWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRba2V5XSA9IHZhbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LCBPYmplY3QuY3JlYXRlKG51bGwpKTtcbn1cblxuZXhwb3J0cy5leHRyYWN0ID0gZXh0cmFjdDtcbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcblxuZXhwb3J0cy5zdHJpbmdpZnkgPSBmdW5jdGlvbiAob2JqLCBvcHRzKSB7XG5cdHZhciBkZWZhdWx0cyA9IHtcblx0XHRlbmNvZGU6IHRydWUsXG5cdFx0c3RyaWN0OiB0cnVlLFxuXHRcdGFycmF5Rm9ybWF0OiAnbm9uZSdcblx0fTtcblxuXHRvcHRzID0gb2JqZWN0QXNzaWduKGRlZmF1bHRzLCBvcHRzKTtcblxuXHRpZiAob3B0cy5zb3J0ID09PSBmYWxzZSkge1xuXHRcdG9wdHMuc29ydCA9IGZ1bmN0aW9uICgpIHt9O1xuXHR9XG5cblx0dmFyIGZvcm1hdHRlciA9IGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRzKTtcblxuXHRyZXR1cm4gb2JqID8gT2JqZWN0LmtleXMob2JqKS5zb3J0KG9wdHMuc29ydCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcblx0XHR2YXIgdmFsID0gb2JqW2tleV07XG5cblx0XHRpZiAodmFsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAodmFsID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0cyk7XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdFx0XHR2YWwuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwyKSB7XG5cdFx0XHRcdGlmICh2YWwyID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXN1bHQucHVzaChmb3JtYXR0ZXIoa2V5LCB2YWwyLCByZXN1bHQubGVuZ3RoKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHJlc3VsdC5qb2luKCcmJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVuY29kZShrZXksIG9wdHMpICsgJz0nICsgZW5jb2RlKHZhbCwgb3B0cyk7XG5cdH0pLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4Lmxlbmd0aCA+IDA7XG5cdH0pLmpvaW4oJyYnKSA6ICcnO1xufTtcblxuZXhwb3J0cy5wYXJzZVVybCA9IGZ1bmN0aW9uIChzdHIsIG9wdHMpIHtcblx0cmV0dXJuIHtcblx0XHR1cmw6IHN0ci5zcGxpdCgnPycpWzBdIHx8ICcnLFxuXHRcdHF1ZXJ5OiBwYXJzZShleHRyYWN0KHN0ciksIG9wdHMpXG5cdH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKSpdL2csIGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0fSk7XG59O1xuIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXyAqL1xubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9
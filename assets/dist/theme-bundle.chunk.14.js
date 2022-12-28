(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./halothemes/haloProductDisplayMode */ "./assets/js/theme/halothemes/haloProductDisplayMode.js");
/* harmony import */ var _halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./halothemes/haloSideAllCategory */ "./assets/js/theme/halothemes/haloSideAllCategory.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./halothemes/haloStickyToolbar */ "./assets/js/theme/halothemes/haloStickyToolbar.js");
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./halothemes/jquery.fancybox.min */ "./assets/js/theme/halothemes/jquery.fancybox.min.js");
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_8__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);
  function Category() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  var _proto = Category.prototype;
  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }
    this.showProductsPerPage();
    this.showMoreProducts();
    this.fancyboxVideoBanner();
    this.loadOptionForProductCard(this.context);
    Object(_halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_7__["default"])(this.context);
    this.reviewShow();
    this.infiniteScroll();
  };
  _proto.infiniteScroll = function infiniteScroll() {
    var reviewshow = this.reviewShow.bind(this);
    var elem = document.querySelector('.productGrid');
    var infScroll = new InfiniteScroll(elem, {
      // options
      path: '.pagination-item--next .pagination-link',
      append: '.product',
      history: false,
      scrollThreshold: 100,
      onInit: function onInit() {
        this.on('request', function () {
          $('.pagination').css('display', 'none');
          $('#listing-showmoreBtn > a').addClass('loading');
        });
        this.on('append', function () {
          reviewshow();
        });
        this.on('last', function () {
          $('#listing-showmoreBtn > a').removeClass('loading');
          $('#listing-showmoreBtn > a').addClass('disable').text('No more products');
        });
      }
    });
    return infScroll;
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this = this;
    var $productListingContainer = $('#product-listing-container .productListing');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $paginatorContainer = $('.pagination');
    var $showMoreContainer = $('.halo-product-show-more');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'halothemes/gallery/halo-product-listing',
        sidebar: 'category/sidebar',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $paginatorContainer.html($(content.paginator).find('.pagination').children());
      $showMoreContainer.html($(content.paginator).find('.halo-product-show-more').children());
      $('body').triggerHandler('compareReset');
      if ($('#product-listing-container .product').length > 0) {
        Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.context, 'product-listing-container');
      }
      _this.showProductsPerPage();
      _this.showMoreProducts();
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };
  _proto.showProductsPerPage = function showProductsPerPage() {
    this.reviewShow();
    try {
      var url = new URL(window.location.href);
      var c = url.searchParams.get("limit");
      if (c != null) {
        var limit = document.querySelectorAll('select#limit option');
        Array.prototype.forEach.call(limit, function (element) {
          if (element.value == c) {
            element.selected = true;
          }
        });
      }
    } catch (e) {}
  };
  _proto.showMoreProducts = function showMoreProducts() {
    var context = this.context;
    $('#listing-showmoreBtn > a').on('click', function (event) {
      event.preventDefault();
      var nextPage = $(".pagination-item--current").next(),
        link = nextPage.find("a").attr("href");
      $('#listing-showmoreBtn > a').addClass('loading');
      $.ajax({
        type: 'get',
        url: link.replace("http://", "//"),
        success: function success(data) {
          function reviewShow(x) {
            var limit = document.querySelectorAll('.productSku1');
            var review2 = [];
            Promise.all([fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json").then(function (r) {
              return r.json();
            }).then(function (r) {
              review2.push.apply(review2, r);
            }), fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json?skip=500").then(function (r) {
              return r.json();
            }).then(function (r) {
              review2.push.apply(review2, r);
            }), fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json?skip=1000").then(function (r) {
              return r.json();
            }).then(function (r) {
              review2.push.apply(review2, r);
            }), fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json?skip=1500").then(function (r) {
              return r.json();
            }).then(function (r) {
              review2.push.apply(review2, r);
            })]).then(function (r) {
              limit.forEach(function (item1) {
                // console.log(item.innerHTML)
                $(item1.nextElementSibling).empty();
                if (item1.innerHTML == 'M106') {
                  item1.innerHTML = 'M106#1';
                } else if (item1.innerHTML == 'M106L') {
                  item1.innerHTML = 'M106L#1';
                } else if (item1.innerHTML == 'Queen_18') {
                  item1.innerHTML = 'Q18';
                }
                var review3 = [];
                var vidu = review2.filter(function (item) {
                  return item['Product SKU'] === item1.innerHTML;
                });
                vidu.forEach(function (goku) {
                  review3.push(goku['Review rate']);
                });
                var reviewAvg = Math.round(review3.reduce(function (a, b) {
                  return a + b;
                }, 0) / review3.length * 10) / 10 || 0;
                var reviewAvg1 = (Math.ceil(reviewAvg * 2) / 2).toFixed(1);

                // console.log(reviewAvg)
                // console.log()
                $(item1.nextElementSibling).append("\n                                <style>    .checked {\n                                    color: rgb(255, 210, 0);\n                            \n                            }\n                            .fa-star-o {\n                                color: rgb(255, 210, 0);\n                        \n                            }\n                            :root {\n                                --rating-max: 5;\n                                --rating-content: '\u2605\u2605\u2605\u2605\u2605';\n                                --rating-inactive-color: #CCCCCC;\n                                --rating-background: #FFDD00;\n                              }\n                              .rating {\n                                display: inline-block;\n                                font-size: 30px;\n                              }\n                              \n                              .rating::before {\n                                --rating-percent: calc(var(--rating-value) / var(--rating-max) * 100%);\n                                content: var(--rating-content);\n                                background: linear-gradient(90deg, var(--rating-background) var(--rating-percent), var(--rating-inactive-color) var(--rating-percent));\n                                background-clip: text;\n                                -webkit-background-clip: text;\n                                color: transparent;\n                              }\n                              @media (min-width: 768px) {\n                                .checking {\n                                    display: flex;\n                                    gap:5px;\n                                    align-items: center;\n                                }\n                            }\n                            @media (min-width: 1025px) {\n                                .checking {\n                                    display: unset;\n                                }\n                            }\n                            @media (min-width: 1425px) {\n                                .checking {\n                                    display: flex;\n                                    align-items: center;\n                                }\n                            </style>\n                <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                                \n                <div class=\"rating\" style=\"--rating-value: " + reviewAvg1 + ";\"></div>\n                            <div>\n                                " + review3.length + " Commentaires\n                            </div>");
                // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
              });
              //   console.log(review2)
            }).catch(function (err) {
              console.log(err);
            });
          }
          if ($(data).find('#product-listing-container .productListing').length > 0) {
            $('#product-listing-container .productListing').append($(data).find('#product-listing-container .productListing').children());
            reviewShow();
            $('.pagination-list').html($(data).find(".pagination-list").html());
            $('#listing-showmoreBtn > a').removeClass('loading').blur();
            if (Number($(data).find('.pagination-info .end').text()) <= Number($(data).find('.pagination-info .total').text())) {
              $('.pagination .pagination-info .end').text($(data).find('.pagination-info .end').text());
            } else {
              $('.pagination .pagination-info .end').text($(data).find('.pagination-info .total').text());
            }
            nextPage = $(".pagination-item--current").next();
            if (nextPage.length === 0) {
              $('#listing-showmoreBtn > a').addClass('disable').text('No more products');
            }
            if ($(data).find('#product-listing-container .product').length > 0) {
              Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'product-listing-container');
            }
          }
        }
      });
    });
  };
  _proto.fancyboxVideoBanner = function fancyboxVideoBanner() {
    if ($(".video-block-image[data-fancybox]").length > 0) {
      $(".video-block-image[data-fancybox]").fancybox({
        'autoDimensions': false,
        'padding': 0,
        'width': 970,
        'height': 600,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none'
      });
    }
    if ($(".button-popup-video[data-fancybox]").length > 0) {
      $(".button-popup-video[data-fancybox]").fancybox({
        'autoDimensions': false,
        'padding': 0,
        'width': 970,
        'height': 600,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none'
      });
    }
  };
  _proto.loadOptionForProductCard = function loadOptionForProductCard(context) {
    if ($('#featured-products .card').length > 0) {
      Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'featured-products');
    }
    if ($('#product-listing-container .product').length > 0) {
      Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'product-listing-container');
    }
  };
  _proto.reviewShow = function reviewShow() {
    var limit = document.querySelectorAll('.productSku1');
    var review2 = [];
    Promise.all([fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json").then(function (r) {
      return r.json();
    }).then(function (r) {
      review2.push.apply(review2, r);
    }), fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json?skip=500").then(function (r) {
      return r.json();
    }).then(function (r) {
      review2.push.apply(review2, r);
    }), fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json?skip=1000").then(function (r) {
      return r.json();
    }).then(function (r) {
      review2.push.apply(review2, r);
    }), fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json?skip=1500").then(function (r) {
      return r.json();
    }).then(function (r) {
      review2.push.apply(review2, r);
    })]).then(function (r) {
      limit.forEach(function (item1) {
        // console.log(item.innerHTML)
        $(item1.nextElementSibling).empty();
        if (item1.innerHTML == 'M106') {
          item1.innerHTML = 'M106#1';
        } else if (item1.innerHTML == 'M106L') {
          item1.innerHTML = 'M106L#1';
        } else if (item1.innerHTML == 'Queen_18') {
          item1.innerHTML = 'Q18';
        }
        var review3 = [];
        var filterArr = review2.filter(function (item) {
          return item['Product SKU'] === item1.innerHTML;
        });
        filterArr.forEach(function (goku) {
          review3.push(goku['Review rate']);
        });
        var reviewAvg = Math.round(review3.reduce(function (a, b) {
          return a + b;
        }, 0) / review3.length * 10) / 10 || 0;
        var reviewAvg1 = (Math.ceil(reviewAvg * 2) / 2).toFixed(1);

        // console.log(reviewAvg)
        // console.log()
        $(item1.nextElementSibling).append("\n                <style>    .checked {\n                    color: rgb(255, 210, 0);\n            \n            }\n            .fa-star-o {\n                color: rgb(255, 210, 0);\n        \n            }\n            :root {\n                --rating-max: 5;\n                --rating-content: '\u2605\u2605\u2605\u2605\u2605';\n                --rating-inactive-color: #CCCCCC;\n                --rating-background: #FFDD00;\n              }\n              .rating {\n                display: inline-block;\n                font-size: 30px;\n              }\n              \n              .rating::before {\n                --rating-percent: calc(var(--rating-value) / var(--rating-max) * 100%);\n                content: var(--rating-content);\n                background: linear-gradient(90deg, var(--rating-background) var(--rating-percent), var(--rating-inactive-color) var(--rating-percent));\n                background-clip: text;\n                -webkit-background-clip: text;\n                color: transparent;\n              }\n            @media (min-width: 768px) {\n                .checking {\n                    display: flex;\n                    gap:5px;\n                    align-items:center;\n                }\n            }\n            @media (min-width: 1025px) {\n                .checking {\n                    display: unset;\n                }\n            }\n            @media (min-width: 1425px) {\n                .checking {\n                    display: flex;\n                    align-items:center;\n\n                }\n            }\n            </style>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                \n<div class=\"rating\" style=\"--rating-value: " + reviewAvg1 + ";\"></div>\n            <div>\n                " + review3.length + " Commentaires\n            </div>");
        // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
      });
      //   console.log(review2)
    }).catch(function (err) {
      console.log(err);
    });
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJvblJlYWR5IiwiY29tcGFyZVByb2R1Y3RzIiwiY29udGV4dCIsInVybHMiLCIkIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwic2hvd1Byb2R1Y3RzUGVyUGFnZSIsInNob3dNb3JlUHJvZHVjdHMiLCJmYW5jeWJveFZpZGVvQmFubmVyIiwibG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkIiwiaGFsb1NpZGVBbGxDYXRlZ29yeSIsInByb2R1Y3REaXNwbGF5TW9kZSIsImhhbG9TdGlja3lUb29sYmFyIiwicmV2aWV3U2hvdyIsImluZmluaXRlU2Nyb2xsIiwicmV2aWV3c2hvdyIsImVsZW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbmZTY3JvbGwiLCJJbmZpbml0ZVNjcm9sbCIsInBhdGgiLCJhcHBlbmQiLCJoaXN0b3J5Iiwic2Nyb2xsVGhyZXNob2xkIiwib25Jbml0IiwiY3NzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInRleHQiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsIiRwYWdpbmF0b3JDb250YWluZXIiLCIkc2hvd01vcmVDb250YWluZXIiLCJwcm9kdWN0c1BlclBhZ2UiLCJjYXRlZ29yeVByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiY2F0ZWdvcnkiLCJzaG9wX2J5X3ByaWNlIiwicHJvZHVjdHMiLCJsaW1pdCIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJzaWRlYmFyIiwicGFnaW5hdG9yIiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiRmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwiZmluZCIsImNoaWxkcmVuIiwidHJpZ2dlckhhbmRsZXIiLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ1cmwiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJlbGVtZW50IiwidmFsdWUiLCJzZWxlY3RlZCIsImUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmV4dFBhZ2UiLCJuZXh0IiwibGluayIsImF0dHIiLCJhamF4IiwidHlwZSIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZGF0YSIsIngiLCJyZXZpZXcyIiwiUHJvbWlzZSIsImFsbCIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwicHVzaCIsIml0ZW0xIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZW1wdHkiLCJpbm5lckhUTUwiLCJyZXZpZXczIiwidmlkdSIsImZpbHRlciIsIml0ZW0iLCJnb2t1IiwicmV2aWV3QXZnIiwiTWF0aCIsInJvdW5kIiwicmVkdWNlIiwiYSIsImIiLCJyZXZpZXdBdmcxIiwiY2VpbCIsInRvRml4ZWQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJibHVyIiwiTnVtYmVyIiwiZmFuY3lib3giLCJmaWx0ZXJBcnIiLCJDYXRhbG9nUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDb0I7QUFDSjtBQUNpQjtBQUNGO0FBQ1k7QUFDaEI7QUFDUDtBQUFBLElBRW5DQSxRQUFRO0VBQUE7RUFBQTtJQUFBO0VBQUE7RUFBQTtFQUFBLE9BQ3pCQyxPQUFPLEdBQVAsbUJBQVU7SUFDTkMsd0VBQWUsQ0FBQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDO0lBRWxDLElBQUlDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ2hDLElBQUksQ0FBQ0Ms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LENBQUMsVUFBQ0MsR0FBRyxFQUFLO01BQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7SUFDcEIsQ0FBQyxDQUFDO0VBQ1IsQ0FBQztFQUFBO0FBQUEsRUF6WWlDTyxnREFBVyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCBwcm9kdWN0RGlzcGxheU1vZGUgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0RGlzcGxheU1vZGUnO1xuaW1wb3J0IGhhbG9TaWRlQWxsQ2F0ZWdvcnkgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TaWRlQWxsQ2F0ZWdvcnknO1xuaW1wb3J0IGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0IGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQnO1xuaW1wb3J0IGhhbG9TdGlja3lUb29sYmFyIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU3RpY2t5VG9vbGJhcic7XG5pbXBvcnQgZmFuY3lib3ggZnJvbSAnLi9oYWxvdGhlbWVzL2pxdWVyeS5mYW5jeWJveC5taW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xuXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93UHJvZHVjdHNQZXJQYWdlKCk7XG4gICAgICAgIHRoaXMuc2hvd01vcmVQcm9kdWN0cygpO1xuICAgICAgICB0aGlzLmZhbmN5Ym94VmlkZW9CYW5uZXIoKTtcbiAgICAgICAgdGhpcy5sb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQodGhpcy5jb250ZXh0KTtcblxuICAgICAgICBoYWxvU2lkZUFsbENhdGVnb3J5KCk7XG4gICAgICAgIHByb2R1Y3REaXNwbGF5TW9kZSgpO1xuICAgICAgICBoYWxvU3RpY2t5VG9vbGJhcih0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLnJldmlld1Nob3coKVxuICAgICAgICB0aGlzLmluZmluaXRlU2Nyb2xsKCk7XG5cbiAgICB9XG4gICAgaW5maW5pdGVTY3JvbGwoKSB7XG4gICAgICAgIGNvbnN0IHJldmlld3Nob3cgPSB0aGlzLnJldmlld1Nob3cuYmluZCh0aGlzKVxuIFxuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RHcmlkJyk7XG4gICAgICAgIGNvbnN0IGluZlNjcm9sbCA9IG5ldyBJbmZpbml0ZVNjcm9sbChlbGVtLCB7XG4gICAgICAgIC8vIG9wdGlvbnNcbiAgICAgICAgICAgIHBhdGg6ICcucGFnaW5hdGlvbi1pdGVtLS1uZXh0IC5wYWdpbmF0aW9uLWxpbmsnLFxuICAgICAgICAgICAgYXBwZW5kOiAnLnByb2R1Y3QnLFxuICAgICAgICAgICAgaGlzdG9yeTogZmFsc2UsXG4gICAgICAgICAgICBzY3JvbGxUaHJlc2hvbGQ6IDEwMCxcbiAgICAgICAgICAgIG9uSW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbiggJ3JlcXVlc3QnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG4gICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbiggJ2FwcGVuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXZpZXdzaG93KCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLm9uICggJ2xhc3QnICwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmFkZENsYXNzKCdkaXNhYmxlJykudGV4dCgnTm8gbW9yZSBwcm9kdWN0cycpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGluZlNjcm9sbDtcbiAgICB9XG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJHBhZ2luYXRvckNvbnRhaW5lciA9ICQoJy5wYWdpbmF0aW9uJyk7XG4gICAgICAgIGNvbnN0ICRzaG93TW9yZUNvbnRhaW5lciA9ICQoJy5oYWxvLXByb2R1Y3Qtc2hvdy1tb3JlJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdoYWxvdGhlbWVzL2dhbGxlcnkvaGFsby1wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJyxcbiAgICAgICAgICAgICAgICBwYWdpbmF0b3I6ICdoYWxvdGhlbWVzL2dhbGxlcnkvaGFsby1wcm9kdWN0LXBhZ2luYXRvcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICAgICAgICAkcGFnaW5hdG9yQ29udGFpbmVyLmh0bWwoJChjb250ZW50LnBhZ2luYXRvcikuZmluZCgnLnBhZ2luYXRpb24nKS5jaGlsZHJlbigpKTtcbiAgICAgICAgICAgICRzaG93TW9yZUNvbnRhaW5lci5odG1sKCQoY29udGVudC5wYWdpbmF0b3IpLmZpbmQoJy5oYWxvLXByb2R1Y3Qtc2hvdy1tb3JlJykuY2hpbGRyZW4oKSk7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgIGlmKCQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QodGhpcy5jb250ZXh0LCAncHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0c1BlclBhZ2UoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd01vcmVQcm9kdWN0cygpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzUGVyUGFnZSgpe1xuICAgICAgICB0aGlzLnJldmlld1Nob3coKVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICB2YXIgYyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibGltaXRcIik7XG4gICAgICAgICAgICBpZihjICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHZhciBsaW1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCNsaW1pdCBvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxpbWl0LCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQudmFsdWUgPT0gYyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpIHt9XG4gICAgfVxuXG4gICAgc2hvd01vcmVQcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcblxuICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciBuZXh0UGFnZSA9ICQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKSxcbiAgICAgICAgICAgICAgICBsaW5rID0gbmV4dFBhZ2UuZmluZChcImFcIikuYXR0cihcImhyZWZcIik7XG5cbiAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2dldCcsXG4gICAgICAgICAgICAgICAgdXJsOiBsaW5rLnJlcGxhY2UoXCJodHRwOi8vXCIsIFwiLy9cIiksXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAgcmV2aWV3U2hvdyh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdFNrdTEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXZpZXcyID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvblwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTUwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTEwMDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD0xNTAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0LmZvckVhY2goKGl0ZW0xKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0uaW5uZXJIVE1MKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuZW1wdHkoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbTEuaW5uZXJIVE1MID09ICdNMTA2Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTEuaW5uZXJIVE1MID0gJ00xMDYjMSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYgKGl0ZW0xLmlubmVySFRNTCA9PSAnTTEwNkwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtMS5pbm5lckhUTUwgPSAnTTEwNkwjMSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtMS5pbm5lckhUTUwgPT0gJ1F1ZWVuXzE4Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTEuaW5uZXJIVE1MID0gJ1ExOCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJldmlldzMgPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlkdSA9IHJldmlldzIuZmlsdGVyKGl0ZW0gPT4gaXRlbVsnUHJvZHVjdCBTS1UnXSA9PT0gaXRlbTEuaW5uZXJIVE1MKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWR1LmZvckVhY2goKGdva3UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzMucHVzaChnb2t1WydSZXZpZXcgcmF0ZSddKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXZpZXdBdmcgPSBNYXRoLnJvdW5kKChyZXZpZXczLnJlZHVjZSgoYSxiICkgPT4gYSsgYiwgMCkvcmV2aWV3My5sZW5ndGgpICogMTApLzEwIHx8IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV2aWV3QXZnMSA9IChNYXRoLmNlaWwocmV2aWV3QXZnICogMikvMikudG9GaXhlZCgxKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXZpZXdBdmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZT4gICAgLmNoZWNrZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIxMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mYS1zdGFyLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjEwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cm9vdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tcmF0aW5nLW1heDogNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1yYXRpbmctY29udGVudDogJ+KYheKYheKYheKYheKYhSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tcmF0aW5nLWluYWN0aXZlLWNvbG9yOiAjQ0NDQ0NDO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLXJhdGluZy1iYWNrZ3JvdW5kOiAjRkZERDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJhdGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmF0aW5nOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLXJhdGluZy1wZXJjZW50OiBjYWxjKHZhcigtLXJhdGluZy12YWx1ZSkgLyB2YXIoLS1yYXRpbmctbWF4KSAqIDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB2YXIoLS1yYXRpbmctY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tcmF0aW5nLWJhY2tncm91bmQpIHZhcigtLXJhdGluZy1wZXJjZW50KSwgdmFyKC0tcmF0aW5nLWluYWN0aXZlLWNvbG9yKSB2YXIoLS1yYXRpbmctcGVyY2VudCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNraW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2luZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQyNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2luZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYXRpbmdcIiBzdHlsZT1cIi0tcmF0aW5nLXZhbHVlOiAke3Jldmlld0F2ZzF9O1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cmV2aWV3My5sZW5ndGh9IENvbW1lbnRhaXJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5hcHBlbmQoYDxkaXY+JHtyZXZpZXdBdmd9PC9kaXY+YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmV2aWV3MilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJChkYXRhKS5maW5kKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5hcHBlbmQoJChkYXRhKS5maW5kKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5jaGlsZHJlbigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldmlld1Nob3coKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1saXN0JykuaHRtbCgkKGRhdGEpLmZpbmQoXCIucGFnaW5hdGlvbi1saXN0XCIpLmh0bWwoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJykuYmx1cigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgpKSA8PSBOdW1iZXIoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UGFnZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5hZGRDbGFzcygnZGlzYWJsZScpLnRleHQoJ05vIG1vcmUgcHJvZHVjdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoJChkYXRhKS5maW5kKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KGNvbnRleHQsICdwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmFuY3lib3hWaWRlb0Jhbm5lcigpe1xuICAgICAgICBpZiAoJChcIi52aWRlby1ibG9jay1pbWFnZVtkYXRhLWZhbmN5Ym94XVwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkKFwiLnZpZGVvLWJsb2NrLWltYWdlW2RhdGEtZmFuY3lib3hdXCIpLmZhbmN5Ym94KHtcbiAgICAgICAgICAgICAgICAnYXV0b0RpbWVuc2lvbnMnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAncGFkZGluZycgOiAwLFxuICAgICAgICAgICAgICAgICd3aWR0aCcgOiA5NzAsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCcgOiA2MDAsXG4gICAgICAgICAgICAgICAgJ2F1dG9TY2FsZScgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkluJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbk91dCcgOiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQoXCIuYnV0dG9uLXBvcHVwLXZpZGVvW2RhdGEtZmFuY3lib3hdXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICQoXCIuYnV0dG9uLXBvcHVwLXZpZGVvW2RhdGEtZmFuY3lib3hdXCIpLmZhbmN5Ym94KHtcbiAgICAgICAgICAgICAgICAnYXV0b0RpbWVuc2lvbnMnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAncGFkZGluZycgOiAwLFxuICAgICAgICAgICAgICAgICd3aWR0aCcgOiA5NzAsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCcgOiA2MDAsXG4gICAgICAgICAgICAgICAgJ2F1dG9TY2FsZScgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkluJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbk91dCcgOiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKGNvbnRleHQpe1xuICAgICAgICBpZigkKCcjZmVhdHVyZWQtcHJvZHVjdHMgLmNhcmQnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KGNvbnRleHQsICdmZWF0dXJlZC1wcm9kdWN0cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KGNvbnRleHQsICdwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV2aWV3U2hvdygpIHtcbiAgICAgICAgdmFyIGxpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RTa3UxJyk7XG4gICAgICAgIGxldCByZXZpZXcyID0gW11cbiAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb25cIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD01MDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD0xMDAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uP3NraXA9MTUwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xuICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXG4gICAgICAgICAgXSlcbiAgICAgICAgICAudGhlbigocikgPT4ge1xuICAgICAgICAgICAgbGltaXQuZm9yRWFjaCgoaXRlbTEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtLmlubmVySFRNTClcbiAgICAgICAgICAgICAgICAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuZW1wdHkoKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtMS5pbm5lckhUTUwgPT0gJ00xMDYnKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0xLmlubmVySFRNTCA9ICdNMTA2IzEnXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYgKGl0ZW0xLmlubmVySFRNTCA9PSAnTTEwNkwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0xLmlubmVySFRNTCA9ICdNMTA2TCMxJ1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbTEuaW5uZXJIVE1MID09ICdRdWVlbl8xOCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTEuaW5uZXJIVE1MID0gJ1ExOCdcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGxldCByZXZpZXczID0gW11cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJBcnIgPSByZXZpZXcyLmZpbHRlcihpdGVtID0+IGl0ZW1bJ1Byb2R1Y3QgU0tVJ10gPT09IGl0ZW0xLmlubmVySFRNTClcbiAgICAgICAgICAgICAgICBmaWx0ZXJBcnIuZm9yRWFjaCgoZ29rdSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXZpZXczLnB1c2goZ29rdVsnUmV2aWV3IHJhdGUnXSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IHJldmlld0F2ZyA9IE1hdGgucm91bmQoKHJldmlldzMucmVkdWNlKChhLGIgKSA9PiBhKyBiLCAwKS9yZXZpZXczLmxlbmd0aCkgKiAxMCkvMTAgfHwgMFxuICAgICAgICAgICAgICAgIGNvbnN0IHJldmlld0F2ZzEgPSAoTWF0aC5jZWlsKHJldmlld0F2ZyAqIDIpLzIpLnRvRml4ZWQoMSlcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJldmlld0F2ZylcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpXG4gICAgICAgICAgICAgICAgJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmFwcGVuZChgXG4gICAgICAgICAgICAgICAgPHN0eWxlPiAgICAuY2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMTAsIDApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmEtc3Rhci1vIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjEwLCAwKTtcbiAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6cm9vdCB7XG4gICAgICAgICAgICAgICAgLS1yYXRpbmctbWF4OiA1O1xuICAgICAgICAgICAgICAgIC0tcmF0aW5nLWNvbnRlbnQ6ICfimIXimIXimIXimIXimIUnO1xuICAgICAgICAgICAgICAgIC0tcmF0aW5nLWluYWN0aXZlLWNvbG9yOiAjQ0NDQ0NDO1xuICAgICAgICAgICAgICAgIC0tcmF0aW5nLWJhY2tncm91bmQ6ICNGRkREMDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJhdGluZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLnJhdGluZzo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAtLXJhdGluZy1wZXJjZW50OiBjYWxjKHZhcigtLXJhdGluZy12YWx1ZSkgLyB2YXIoLS1yYXRpbmctbWF4KSAqIDEwMCUpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHZhcigtLXJhdGluZy1jb250ZW50KTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLXJhdGluZy1iYWNrZ3JvdW5kKSB2YXIoLS1yYXRpbmctcGVyY2VudCksIHZhcigtLXJhdGluZy1pbmFjdGl2ZS1jb2xvcikgdmFyKC0tcmF0aW5nLXBlcmNlbnQpKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAuY2hlY2tpbmcge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBnYXA6NXB4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAgICAgICAgICAgICAgIC5jaGVja2luZyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDI1cHgpIHtcbiAgICAgICAgICAgICAgICAuY2hlY2tpbmcge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+XG4gICAgICAgICAgICAgICAgXG48ZGl2IGNsYXNzPVwicmF0aW5nXCIgc3R5bGU9XCItLXJhdGluZy12YWx1ZTogJHtyZXZpZXdBdmcxfTtcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgJHtyZXZpZXczLmxlbmd0aH0gQ29tbWVudGFpcmVzXG4gICAgICAgICAgICA8L2Rpdj5gKVxuICAgICAgICAgICAgICAgIC8vICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5hcHBlbmQoYDxkaXY+JHtyZXZpZXdBdmd9PC9kaXY+YClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHJldmlldzIpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIFxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
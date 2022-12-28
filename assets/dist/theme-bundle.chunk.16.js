(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./halothemes/haloProductDisplayMode */ "./assets/js/theme/halothemes/haloProductDisplayMode.js");
/* harmony import */ var _halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloSideAllCategory */ "./assets/js/theme/halothemes/haloSideAllCategory.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./halothemes/haloStickyToolbar */ "./assets/js/theme/halothemes/haloStickyToolbar.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var Search = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Search, _CatalogPage);
  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  var _proto = Search.prototype;
  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;
    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };
    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }
    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }
    return nodeData;
  };
  _proto.showProducts = function showProducts(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$productListingContainer.removeClass('u-hiddenVisually');
    this.$facetedSearchContainer.removeClass('u-hiddenVisually');
    this.$contentResultsContainer.addClass('u-hiddenVisually');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-product-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].goToUrl(url);
  };
  _proto.showContent = function showContent(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$contentResultsContainer.removeClass('u-hiddenVisually');
    this.$productListingContainer.addClass('u-hiddenVisually');
    this.$facetedSearchContainer.addClass('u-hiddenVisually');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-content-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].goToUrl(url);
  };
  _proto.onReady = function onReady() {
    var _this2 = this;
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context.urls);
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content');

    // Init faceted search
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }

    // Init collapsibles
    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_6__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showContent();
    });
    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent(false);
    } else {
      this.showProducts(false);
    }
    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();
      if (!validator.check()) {
        return event.preventDefault();
      }
      $searchForm.find('input[name="category\[\]"]').remove();
      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
    this.showProductsPerPage();
    this.showMoreProducts();
    this.showItem();
    this.loadOptionForProductCard(this.context);
    this.fancyboxVideoBanner();
    Object(_halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_10__["default"])();
    Object(_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_9__["default"])();
    Object(_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_12__["default"])(this.context);
    this.reviewShow();
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
        $(item1.nextElementSibling).append("\n                <style>    .checked {\n                    color: rgb(255, 210, 0);\n            \n            }\n            .fa-star-o {\n                color: rgb(255, 210, 0);\n        \n            }\n            :root {\n                --rating-max: 5;\n                --rating-content: '\u2605\u2605\u2605\u2605\u2605';\n                --rating-inactive-color: #CCCCCC;\n                --rating-background: #FFDD00;\n              }\n              .rating {\n                display: inline-block;\n                font-size: 30px;\n              }\n              \n              .rating::before {\n                --rating-percent: calc(var(--rating-value) / var(--rating-max) * 100%);\n                content: var(--rating-content);\n                background: linear-gradient(90deg, var(--rating-background) var(--rating-percent), var(--rating-inactive-color) var(--rating-percent));\n                background-clip: text;\n                -webkit-background-clip: text;\n                color: transparent;\n              }\n            @media (min-width: 768px) {\n                .checking {\n                    display: flex;\n                    gap:5px;\n                    align-items:center;\n                }\n            }\n            @media (min-width: 1025px) {\n                .checking {\n                    display: unset;\n                }\n            }\n            @media (min-width: 1425px) {\n                .checking {\n                    display: flex;\n                    align-items:center;\n                }\n            }\n            </style>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                \n<div class=\"rating\" style=\"--rating-value: " + reviewAvg1 + ";\"></div>\n            <div>\n                " + review3.length + " Commentaires\n            </div>");
        // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
      });
      //   console.log(review2)
    }).catch(function (err) {
      console.log(err);
    });
  };
  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;
    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };
  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;
    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;
    var $productListingContainer = $('#product-listing-container .productListing');
    var $contentListingContainer = $('#search-results-content');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var $contentCount = $('#search-results-content-count');
    var $paginatorContainer = $('.pagination');
    var $showMoreContainer = $('.halo-product-show-more');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'halothemes/gallery/halo-product-listing',
        contentListing: 'search/content-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count',
        contentCount: 'search/content-count',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content) {
      $searchHeading.html(content.heading);
      var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
      if (url.query.section === 'content') {
        $contentListingContainer.html(content.contentListing);
        $contentCount.html(content.contentCount);
        _this5.showContent(false);
      } else {
        $productListingContainer.html(content.productListing);
        $facetedSearchContainer.html(content.sidebar);
        $searchCount.html(content.productCount);
        $paginatorContainer.html($(content.paginator).find('.pagination').children());
        $showMoreContainer.html($(content.paginator).find('.halo-product-show-more').children());
        _this5.showProducts(false);
        _this5.showProductsPerPage();
        _this5.showItem();
        _this5.showMoreProducts();
        if ($('#product-listing-container .product').length > 0) {
          Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__["default"])(_this5.context, 'product-listing-container');
        }
      }
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };
  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_8__["default"])({
      submit: $form
    });
    return this;
  };
  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }
    return this;
  };
  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }
    return false;
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
    var getUrlParameter = this.getUrlParameter('limit');
    $('#listing-showmoreBtn > a').on('click', function (event) {
      event.preventDefault();
      var nextPage = $(".pagination-item--current").next(),
        link = nextPage.find("a").attr("href");
      $('#listing-showmoreBtn > a').addClass('loading');
      $.ajax({
        type: 'get',
        url: link.replace("http://", "//"),
        success: function success(data) {
          function reviewShow() {
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
                $(item1.nextElementSibling).append("\n                                <style>    .checked {\n                                    color: rgb(255, 210, 0);\n                            \n                            }\n                            .fa-star-o {\n                                color: rgb(255, 210, 0);\n                        \n                            }\n                            :root {\n                                --rating-max: 5;\n                                --rating-content: '\u2605\u2605\u2605\u2605\u2605';\n                                --rating-inactive-color: #CCCCCC;\n                                --rating-background: #FFDD00;\n                              }\n                              .rating {\n                                display: inline-block;\n                                font-size: 30px;\n                              }\n                              \n                              .rating::before {\n                                --rating-percent: calc(var(--rating-value) / var(--rating-max) * 100%);\n                                content: var(--rating-content);\n                                background: linear-gradient(90deg, var(--rating-background) var(--rating-percent), var(--rating-inactive-color) var(--rating-percent));\n                                background-clip: text;\n                                -webkit-background-clip: text;\n                                color: transparent;\n                              }\n                            @media (min-width: 768px) {\n                                .checking {\n                                    display: flex;\n                                    gap:5px;\n                                    align-items: center;\n                                }\n                            }\n                            @media (min-width: 1025px) {\n                                .checking {\n                                    display: unset;\n                                }\n                            }\n                            @media (min-width: 1425px) {\n                                .checking {\n                                    display: flex;\n                                    align-items:center;\n                                }\n                            }\n                            </style>\n                <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                                \n                <div class=\"rating\" style=\"--rating-value: " + reviewAvg1 + ";\"></div>\n                            <div>\n                                " + review3.length + " Commentaires\n                            </div>");
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
            nextPage = $(".pagination-item--current").next();
            if (nextPage.length === 0) {
              $('#listing-showmoreBtn > a').addClass('disable').text('No more products');
              $('.pagination .pagination-info .end').text($('.pagination-info .total').text());
            } else {
              var limit = getUrlParameter,
                productPerPage,
                pageCurrent = parseInt($(".pagination-item--current > a").text());
              if (limit !== undefined) {
                productPerPage = limit;
              } else {
                productPerPage = context.searchProductsPerPage;
              }
              $('.pagination .pagination-info .end').text(parseInt(productPerPage) * pageCurrent);
            }
            if ($(data).find('#product-listing-container .product').length > 0) {
              Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__["default"])(context, 'product-listing-container');
            }
          }
        }
      });
    });
  };
  _proto.showItem = function showItem() {
    var total = parseInt($('.pagination-info .total').text()),
      limit = this.getUrlParameter('limit'),
      productPerPage;
    if (limit !== undefined) {
      productPerPage = limit;
    } else {
      productPerPage = this.context.searchProductsPerPage;
    }
    var start = 1,
      end = total,
      checkLastPage = false,
      lastPage = 1;
    var checkLink = $(".pagination-list .pagination-item--current").next();
    var pageNotLast = lastPage - 1;
    var totalNotLast = pageNotLast * productPerPage;
    var productsLastPage = total - totalNotLast;
    var currentPage = parseInt($('.pagination-item--current > a').text());
    var prevPage = currentPage - 1;
    if (checkLink.length === 0) {
      lastPage = parseInt($(".pagination-item--current").find("a").text());
      checkLastPage = true;
    } else {
      lastPage = parseInt(checkLink.find("a").text());
      checkLastPage = false;
    }
    if (total <= productPerPage) {
      $('.pagination-info .start').text(start);
      $('.pagination-info .end').text(end);
    } else {
      if (currentPage <= 1) {
        end = productPerPage;
      } else {
        start = prevPage * productPerPage + 1;
        if (checkLastPage = true) {
          if ($('.pagination-list .pagination-item--next').length > 0) {
            end = totalNotLast + productsLastPage - 1;
          } else {
            end = totalNotLast + productsLastPage;
          }
        } else {
          end = currentPage * productPerPage;
        }
      }
      $('.pagination-info .start').text(start);
      $('.pagination-info .end').text(end);
    }
  };
  _proto.fancyboxVideoBanner = function fancyboxVideoBanner() {
    if ($(".video-block-image[data-fancybox]").length) {
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
    if ($(".button-popup-video[data-fancybox]").length) {
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
  _proto.getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;
    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  };
  _proto.loadOptionForProductCard = function loadOptionForProductCard(context) {
    if ($('#featured-products .card').length > 0) {
      Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__["default"])(context, 'featured-products');
    }
    if ($('#product-listing-container .product').length > 0) {
      Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__["default"])(context, 'product-listing-container');
    }
  };
  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsImZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZSIsIm5vZGUiLCJub2RlRGF0YSIsInRleHQiLCJkYXRhIiwiaWQiLCJtZXRhZGF0YSIsInN0YXRlIiwic2VsZWN0ZWQiLCJvcGVuZWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJwdXNoIiwic2hvd1Byb2R1Y3RzIiwibmF2aWdhdGUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCJyZW1vdmVDbGFzcyIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwiJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyIiwiYWRkQ2xhc3MiLCIkIiwic2VhcmNoRGF0YSIsInVybCIsImNvdW50IiwidXJsVXRpbHMiLCJyZXBsYWNlUGFyYW1zIiwicGFnZSIsImdvVG9VcmwiLCJzaG93Q29udGVudCIsIm9uUmVhZHkiLCJjb21wYXJlUHJvZHVjdHMiLCJjb250ZXh0IiwidXJscyIsIiRzZWFyY2hGb3JtIiwiJGNhdGVnb3J5VHJlZUNvbnRhaW5lciIsImZpbmQiLCJVcmwiLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRyZWVEYXRhIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwiY29sbGFwc2libGVGYWN0b3J5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5Iiwic2VjdGlvbiIsInZhbGlkYXRvciIsImluaXRWYWxpZGF0aW9uIiwiYmluZFZhbGlkYXRpb24iLCJjYXRlZ29yeVRyZWUiLCJjYXRlZ29yeVRyZWVEYXRhIiwiY3JlYXRlQ2F0ZWdvcnlUcmVlIiwic2VsZWN0ZWRDYXRlZ29yeUlkcyIsImpzdHJlZSIsImdldF9zZWxlY3RlZCIsImNoZWNrIiwicmVtb3ZlIiwiY2F0ZWdvcnlJZCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFwcGVuZCIsInNob3dQcm9kdWN0c1BlclBhZ2UiLCJzaG93TW9yZVByb2R1Y3RzIiwic2hvd0l0ZW0iLCJsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQiLCJmYW5jeWJveFZpZGVvQmFubmVyIiwiaGFsb1NpZGVBbGxDYXRlZ29yeSIsInByb2R1Y3REaXNwbGF5TW9kZSIsImhhbG9TdGlja3lUb29sYmFyIiwicmV2aWV3U2hvdyIsImxpbWl0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmV2aWV3MiIsIlByb21pc2UiLCJhbGwiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsIml0ZW0xIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZW1wdHkiLCJpbm5lckhUTUwiLCJyZXZpZXczIiwidmlkdSIsImZpbHRlciIsIml0ZW0iLCJnb2t1IiwicmV2aWV3QXZnIiwiTWF0aCIsInJvdW5kIiwicmVkdWNlIiwiYSIsImIiLCJyZXZpZXdBdmcxIiwiY2VpbCIsInRvRml4ZWQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJsb2FkVHJlZU5vZGVzIiwiY2IiLCJhamF4Iiwic2VsZWN0ZWRDYXRlZ29yeUlkIiwicHJlZml4IiwiaGVhZGVycyIsIkJDRGF0YSIsImNzcmZfdG9rZW4iLCJkb25lIiwiZm9ybWF0dGVkUmVzdWx0cyIsImRhdGFOb2RlIiwiJGNvbnRhaW5lciIsInRyZWVPcHRpb25zIiwiY29yZSIsInRoZW1lcyIsImljb25zIiwiY2hlY2tib3giLCJ0aHJlZV9zdGF0ZSIsInBsdWdpbnMiLCIkY29udGVudExpc3RpbmdDb250YWluZXIiLCIkc2VhcmNoSGVhZGluZyIsIiRzZWFyY2hDb3VudCIsIiRjb250ZW50Q291bnQiLCIkcGFnaW5hdG9yQ29udGFpbmVyIiwiJHNob3dNb3JlQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwic2VhcmNoUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwiY29udGVudExpc3RpbmciLCJzaWRlYmFyIiwiaGVhZGluZyIsInByb2R1Y3RDb3VudCIsImNvbnRlbnRDb3VudCIsInBhZ2luYXRvciIsImNvbmZpZyIsInByb2R1Y3RfcmVzdWx0cyIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsIkZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0IiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiJGZvcm0iLCJub2QiLCJzdWJtaXQiLCIkZWxlbWVudCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJlcnJvck1lc3NhZ2UiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJVUkwiLCJjIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJjYWxsIiwiZWxlbWVudCIsImUiLCJnZXRVcmxQYXJhbWV0ZXIiLCJuZXh0UGFnZSIsIm5leHQiLCJsaW5rIiwiYXR0ciIsInJlcGxhY2UiLCJzdWNjZXNzIiwiYmx1ciIsInByb2R1Y3RQZXJQYWdlIiwicGFnZUN1cnJlbnQiLCJwYXJzZUludCIsInVuZGVmaW5lZCIsInRvdGFsIiwic3RhcnQiLCJlbmQiLCJjaGVja0xhc3RQYWdlIiwibGFzdFBhZ2UiLCJjaGVja0xpbmsiLCJwYWdlTm90TGFzdCIsInRvdGFsTm90TGFzdCIsInByb2R1Y3RzTGFzdFBhZ2UiLCJjdXJyZW50UGFnZSIsInByZXZQYWdlIiwiZmFuY3lib3giLCJzUGFyYW0iLCJzUGFnZVVSTCIsImRlY29kZVVSSUNvbXBvbmVudCIsInNlYXJjaCIsInN1YnN0cmluZyIsInNVUkxWYXJpYWJsZXMiLCJzcGxpdCIsInNQYXJhbWV0ZXJOYW1lIiwiaSIsIkNhdGFsb2dQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNmO0FBQ2dCO0FBQ0k7QUFDZDtBQUNwQjtBQUNn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QUFmLHlCQUFnQndCLE1BQU0sRUFBRTtJQUNwQixJQUFJQyxRQUFRLEdBQUdDLGtCQUFrQixDQUFDckssTUFBTSxDQUFDQyxRQUFRLENBQUNxSyxNQUFNLENBQUNDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNsRUMsYUFBYSxHQUFHSixRQUFRLENBQUNLLEtBQUssQ0FBQyxHQUFHLENBQUM7TUFDbkNDLGNBQWM7TUFDZEMsQ0FBQztJQUVMLEtBQUtBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0gsYUFBYSxDQUFDcEssTUFBTSxFQUFFdUssQ0FBQyxFQUFFLEVBQUU7TUFDdkNELGNBQWMsR0FBR0YsYUFBYSxDQUFDRyxDQUFDLENBQUMsQ0FBQ0YsS0FBSyxDQUFDLEdBQUcsQ0FBQztNQUU1QyxJQUFJQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUtQLE1BQU0sRUFBRTtRQUM5QixPQUFPTyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUtwQixTQUFTLEdBQUcsSUFBSSxHQUFHb0IsY0FBYyxDQUFDLENBQUMsQ0FBQztNQUNyRTtJQUNKO0VBQ0osQ0FBQztFQUFBLE9BRUR2SSx3QkFBd0IsR0FBeEIsa0NBQXlCMUMsT0FBTyxFQUFDO0lBQzdCLElBQUdYLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDc0IsTUFBTSxHQUFHLENBQUMsRUFBQztNQUN4Q2dILHdGQUF1QixDQUFDM0gsT0FBTyxFQUFFLG1CQUFtQixDQUFDO0lBQ3pEO0lBRUEsSUFBR1gsQ0FBQyxDQUFDLHFDQUFxQyxDQUFDLENBQUNzQixNQUFNLEdBQUcsQ0FBQyxFQUFDO01BQ25EZ0gsd0ZBQXVCLENBQUMzSCxPQUFPLEVBQUUsMkJBQTJCLENBQUM7SUFDakU7RUFDSixDQUFDO0VBQUE7QUFBQSxFQTlwQitCbUwsZ0RBQVciLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0ICdqc3RyZWUnO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHByb2R1Y3REaXNwbGF5TW9kZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3REaXNwbGF5TW9kZSc7XG5pbXBvcnQgaGFsb1NpZGVBbGxDYXRlZ29yeSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1NpZGVBbGxDYXRlZ29yeSc7XG5pbXBvcnQgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0Q2FyZCc7XG5pbXBvcnQgaGFsb1N0aWNreVRvb2xiYXIgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TdGlja3lUb29sYmFyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIGZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShub2RlKSB7XG4gICAgICAgIGNvbnN0IG5vZGVEYXRhID0ge1xuICAgICAgICAgICAgdGV4dDogbm9kZS5kYXRhLFxuICAgICAgICAgICAgaWQ6IG5vZGUubWV0YWRhdGEuaWQsXG4gICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBub2RlLnNlbGVjdGVkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobm9kZS5zdGF0ZSkge1xuICAgICAgICAgICAgbm9kZURhdGEuc3RhdGUub3BlbmVkID0gbm9kZS5zdGF0ZSA9PT0gJ29wZW4nO1xuICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gW107XG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUoY2hpbGROb2RlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlRGF0YTtcbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdHMobmF2aWdhdGUgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG5cbiAgICAgICAgaWYgKCFuYXZpZ2F0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoRGF0YSA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50IHNwYW4nKS5kYXRhKCk7XG4gICAgICAgIGNvbnN0IHVybCA9IChzZWFyY2hEYXRhLmNvdW50ID4gMCkgPyBzZWFyY2hEYXRhLnVybCA6IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMoc2VhcmNoRGF0YS51cmwsIHtcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBzaG93Q29udGVudChuYXZpZ2F0ZSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcblxuICAgICAgICBpZiAoIW5hdmlnYXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWFyY2hEYXRhID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQtY291bnQgc3BhbicpLmRhdGEoKTtcbiAgICAgICAgY29uc3QgdXJsID0gKHNlYXJjaERhdGEuY291bnQgPiAwKSA/IHNlYXJjaERhdGEudXJsIDogdXJsVXRpbHMucmVwbGFjZVBhcmFtcyhzZWFyY2hEYXRhLnVybCwge1xuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG5cbiAgICAgICAgY29uc3QgJHNlYXJjaEZvcm0gPSAkKCdbZGF0YS1hZHZhbmNlZC1zZWFyY2gtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGNhdGVnb3J5VHJlZUNvbnRhaW5lciA9ICRzZWFyY2hGb3JtLmZpbmQoJ1tkYXRhLXNlYXJjaC1jYXRlZ29yeS10cmVlXScpO1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCB0cmVlRGF0YSA9IFtdO1xuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQnKTtcblxuICAgICAgICAvLyBJbml0IGZhY2V0ZWQgc2VhcmNoXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCgnbGkucHJvZHVjdCcpLmxlbmd0aCA9PT0gMCB8fCB1cmwucXVlcnkuc2VjdGlvbiA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuaW5pdFZhbGlkYXRpb24oJHNlYXJjaEZvcm0pXG4gICAgICAgICAgICAuYmluZFZhbGlkYXRpb24oJHNlYXJjaEZvcm0uZmluZCgnI3NlYXJjaF9xdWVyeV9hZHYnKSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmNhdGVnb3J5VHJlZS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICB0cmVlRGF0YS5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yeVRyZWVEYXRhID0gdHJlZURhdGE7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjYXRlZ29yeVRyZWVDb250YWluZXIpO1xuXG4gICAgICAgICRzZWFyY2hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZENhdGVnb3J5SWRzID0gJGNhdGVnb3J5VHJlZUNvbnRhaW5lci5qc3RyZWUoKS5nZXRfc2VsZWN0ZWQoKTtcblxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0b3IuY2hlY2soKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2VhcmNoRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2F0ZWdvcnlcXFtcXF1cIl0nKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeUlkIG9mIHNlbGVjdGVkQ2F0ZWdvcnlJZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9ICQoJzxpbnB1dD4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcnlbXScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJHNlYXJjaEZvcm0uYXBwZW5kKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zaG93UHJvZHVjdHNQZXJQYWdlKCk7XG4gICAgICAgIHRoaXMuc2hvd01vcmVQcm9kdWN0cygpO1xuICAgICAgICB0aGlzLnNob3dJdGVtKCk7XG4gICAgICAgIHRoaXMubG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKHRoaXMuY29udGV4dCk7XG4gICAgICAgIHRoaXMuZmFuY3lib3hWaWRlb0Jhbm5lcigpO1xuXG4gICAgICAgIGhhbG9TaWRlQWxsQ2F0ZWdvcnkoKTtcbiAgICAgICAgcHJvZHVjdERpc3BsYXlNb2RlKCk7XG4gICAgICAgIGhhbG9TdGlja3lUb29sYmFyKHRoaXMuY29udGV4dCk7XG4gICAgICAgIHRoaXMucmV2aWV3U2hvdygpXG5cbiAgICB9XG4gICAgcmV2aWV3U2hvdygpIHtcbiAgICAgICAgdmFyIGxpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RTa3UxJyk7XG4gICAgICAgIGxldCByZXZpZXcyID0gW11cbiAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb25cIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD01MDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD0xMDAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uP3NraXA9MTUwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xuICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXG4gICAgICAgICAgXSlcbiAgICAgICAgICAudGhlbigocikgPT4ge1xuICAgICAgICAgICAgbGltaXQuZm9yRWFjaCgoaXRlbTEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtLmlubmVySFRNTClcbiAgICAgICAgICAgICAgICAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuZW1wdHkoKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtMS5pbm5lckhUTUwgPT0gJ00xMDYnKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0xLmlubmVySFRNTCA9ICdNMTA2IzEnXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYgKGl0ZW0xLmlubmVySFRNTCA9PSAnTTEwNkwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0xLmlubmVySFRNTCA9ICdNMTA2TCMxJ1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbTEuaW5uZXJIVE1MID09ICdRdWVlbl8xOCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTEuaW5uZXJIVE1MID0gJ1ExOCdcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGxldCByZXZpZXczID0gW11cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB2aWR1ID0gcmV2aWV3Mi5maWx0ZXIoaXRlbSA9PiBpdGVtWydQcm9kdWN0IFNLVSddID09PSBpdGVtMS5pbm5lckhUTUwpXG4gICAgICAgICAgICAgICAgdmlkdS5mb3JFYWNoKChnb2t1KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldmlldzMucHVzaChnb2t1WydSZXZpZXcgcmF0ZSddKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc3QgcmV2aWV3QXZnID0gTWF0aC5yb3VuZCgocmV2aWV3My5yZWR1Y2UoKGEsYiApID0+IGErIGIsIDApL3JldmlldzMubGVuZ3RoKSAqIDEwKS8xMCB8fCAwXG4gICAgICAgICAgICAgICAgY29uc3QgcmV2aWV3QXZnMSA9IChNYXRoLmNlaWwocmV2aWV3QXZnICogMikvMikudG9GaXhlZCgxKVxuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmV2aWV3QXZnKVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKClcbiAgICAgICAgICAgICAgICAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICA8c3R5bGU+ICAgIC5jaGVja2VkIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIxMCwgMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mYS1zdGFyLW8ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMTAsIDApO1xuICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDpyb290IHtcbiAgICAgICAgICAgICAgICAtLXJhdGluZy1tYXg6IDU7XG4gICAgICAgICAgICAgICAgLS1yYXRpbmctY29udGVudDogJ+KYheKYheKYheKYheKYhSc7XG4gICAgICAgICAgICAgICAgLS1yYXRpbmctaW5hY3RpdmUtY29sb3I6ICNDQ0NDQ0M7XG4gICAgICAgICAgICAgICAgLS1yYXRpbmctYmFja2dyb3VuZDogI0ZGREQwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucmF0aW5nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAucmF0aW5nOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIC0tcmF0aW5nLXBlcmNlbnQ6IGNhbGModmFyKC0tcmF0aW5nLXZhbHVlKSAvIHZhcigtLXJhdGluZy1tYXgpICogMTAwJSk7XG4gICAgICAgICAgICAgICAgY29udGVudDogdmFyKC0tcmF0aW5nLWNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tcmF0aW5nLWJhY2tncm91bmQpIHZhcigtLXJhdGluZy1wZXJjZW50KSwgdmFyKC0tcmF0aW5nLWluYWN0aXZlLWNvbG9yKSB2YXIoLS1yYXRpbmctcGVyY2VudCkpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgIC5jaGVja2luZyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGdhcDo1cHg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICAgICAgICAgICAgICAgLmNoZWNraW5nIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MjVweCkge1xuICAgICAgICAgICAgICAgIC5jaGVja2luZyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+XG4gICAgICAgICAgICAgICAgXG48ZGl2IGNsYXNzPVwicmF0aW5nXCIgc3R5bGU9XCItLXJhdGluZy12YWx1ZTogJHtyZXZpZXdBdmcxfTtcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgJHtyZXZpZXczLmxlbmd0aH0gQ29tbWVudGFpcmVzXG4gICAgICAgICAgICA8L2Rpdj5gKVxuICAgICAgICAgICAgICAgIC8vICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5hcHBlbmQoYDxkaXY+JHtyZXZpZXdBdmd9PC9kaXY+YClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHJldmlldzIpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIFxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRUcmVlTm9kZXMobm9kZSwgY2IpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9yZW1vdGUvdjEvY2F0ZWdvcnktdHJlZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkOiBub2RlLmlkLFxuICAgICAgICAgICAgICAgIHByZWZpeDogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS5kb25lKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkUmVzdWx0cyA9IFtdO1xuXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGRhdGFOb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUmVzdWx0cy5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGRhdGFOb2RlKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2IoZm9ybWF0dGVkUmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUNhdGVnb3J5VHJlZSgkY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHRyZWVPcHRpb25zID0ge1xuICAgICAgICAgICAgY29yZToge1xuICAgICAgICAgICAgICAgIGRhdGE6IChub2RlLCBjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBSb290IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaWQgPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IodGhpcy5jYXRlZ29yeVRyZWVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExhenkgbG9hZGVkIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUcmVlTm9kZXMobm9kZSwgY2IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVtZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja2JveDoge1xuICAgICAgICAgICAgICAgIHRocmVlX3N0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG5cbiAgICAgICAgJGNvbnRhaW5lci5qc3RyZWUodHJlZU9wdGlvbnMpO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKTtcbiAgICAgICAgY29uc3QgJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRzZWFyY2hIZWFkaW5nID0gJCgnI3NlYXJjaC1yZXN1bHRzLWhlYWRpbmcnKTtcbiAgICAgICAgY29uc3QgJHNlYXJjaENvdW50ID0gJCgnI3NlYXJjaC1yZXN1bHRzLXByb2R1Y3QtY291bnQnKTtcbiAgICAgICAgY29uc3QgJGNvbnRlbnRDb3VudCA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50LWNvdW50Jyk7XG4gICAgICAgIGNvbnN0ICRwYWdpbmF0b3JDb250YWluZXIgPSAkKCcucGFnaW5hdGlvbicpO1xuICAgICAgICBjb25zdCAkc2hvd01vcmVDb250YWluZXIgPSAkKCcuaGFsby1wcm9kdWN0LXNob3ctbW9yZScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdoYWxvdGhlbWVzL2dhbGxlcnkvaGFsby1wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRMaXN0aW5nOiAnc2VhcmNoL2NvbnRlbnQtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ3NlYXJjaC9zaWRlYmFyJyxcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiAnc2VhcmNoL2hlYWRpbmcnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RDb3VudDogJ3NlYXJjaC9wcm9kdWN0LWNvdW50JyxcbiAgICAgICAgICAgICAgICBjb250ZW50Q291bnQ6ICdzZWFyY2gvY29udGVudC1jb3VudCcsXG4gICAgICAgICAgICAgICAgcGFnaW5hdG9yOiAnaGFsb3RoZW1lcy9nYWxsZXJ5L2hhbG8tcHJvZHVjdC1wYWdpbmF0b3InLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfcmVzdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRzZWFyY2hIZWFkaW5nLmh0bWwoY29udGVudC5oZWFkaW5nKTtcblxuICAgICAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICh1cmwucXVlcnkuc2VjdGlvbiA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5jb250ZW50TGlzdGluZyk7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRDb3VudC5odG1sKGNvbnRlbnQuY29udGVudENvdW50KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICAgICAgICAgICAgJHNlYXJjaENvdW50Lmh0bWwoY29udGVudC5wcm9kdWN0Q291bnQpO1xuICAgICAgICAgICAgICAgICRwYWdpbmF0b3JDb250YWluZXIuaHRtbCgkKGNvbnRlbnQucGFnaW5hdG9yKS5maW5kKCcucGFnaW5hdGlvbicpLmNoaWxkcmVuKCkpO1xuICAgICAgICAgICAgICAgICRzaG93TW9yZUNvbnRhaW5lci5odG1sKCQoY29udGVudC5wYWdpbmF0b3IpLmZpbmQoJy5oYWxvLXByb2R1Y3Qtc2hvdy1tb3JlJykuY2hpbGRyZW4oKSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHNQZXJQYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SXRlbSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vcmVQcm9kdWN0cygpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKCQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KHRoaXMuY29udGV4dCwgJ3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0VmFsaWRhdGlvbigkZm9ybSkge1xuICAgICAgICB0aGlzLiRmb3JtID0gJGZvcm07XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJGZvcm0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJpbmRWYWxpZGF0aW9uKCRlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAkZWxlbWVudC5kYXRhKCdlcnJvck1lc3NhZ2UnKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2hlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHNob3dQcm9kdWN0c1BlclBhZ2UoKXtcbiAgICAgICAgdGhpcy5yZXZpZXdTaG93KClcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgdmFyIGMgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImxpbWl0XCIpO1xuICAgICAgICAgICAgaWYoYyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QjbGltaXQgb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsaW1pdCwgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LnZhbHVlID09IGMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7fVxuICAgIH1cblxuICAgIHNob3dNb3JlUHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgY29uc3QgZ2V0VXJsUGFyYW1ldGVyID0gdGhpcy5nZXRVcmxQYXJhbWV0ZXIoJ2xpbWl0Jyk7XG5cbiAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCksXG4gICAgICAgICAgICAgICAgbGluayA9IG5leHRQYWdlLmZpbmQoXCJhXCIpLmF0dHIoXCJocmVmXCIpO1xuXG4gICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgICAgICAgIHVybDogbGluay5yZXBsYWNlKFwiaHR0cDovL1wiLCBcIi8vXCIpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gICAgIHJldmlld1Nob3coKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdFNrdTEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXZpZXcyID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvblwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTUwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTEwMDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD0xNTAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0LmZvckVhY2goKGl0ZW0xKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0uaW5uZXJIVE1MKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuZW1wdHkoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbTEuaW5uZXJIVE1MID09ICdNMTA2Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTEuaW5uZXJIVE1MID0gJ00xMDYjMSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYgKGl0ZW0xLmlubmVySFRNTCA9PSAnTTEwNkwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtMS5pbm5lckhUTUwgPSAnTTEwNkwjMSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtMS5pbm5lckhUTUwgPT0gJ1F1ZWVuXzE4Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTEuaW5uZXJIVE1MID0gJ1ExOCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJldmlldzMgPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlkdSA9IHJldmlldzIuZmlsdGVyKGl0ZW0gPT4gaXRlbVsnUHJvZHVjdCBTS1UnXSA9PT0gaXRlbTEuaW5uZXJIVE1MKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWR1LmZvckVhY2goKGdva3UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzMucHVzaChnb2t1WydSZXZpZXcgcmF0ZSddKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXZpZXdBdmcgPSBNYXRoLnJvdW5kKChyZXZpZXczLnJlZHVjZSgoYSxiICkgPT4gYSsgYiwgMCkvcmV2aWV3My5sZW5ndGgpICogMTApLzEwIHx8IDBcbiAgICBjb25zdCByZXZpZXdBdmcxID0gKE1hdGguY2VpbChyZXZpZXdBdmcgKiAyKS8yKS50b0ZpeGVkKDEpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJldmlld0F2ZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlPiAgICAuY2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjEwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXN0YXItbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMTAsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyb290IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1yYXRpbmctbWF4OiA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLXJhdGluZy1jb250ZW50OiAn4piF4piF4piF4piF4piFJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1yYXRpbmctaW5hY3RpdmUtY29sb3I6ICNDQ0NDQ0M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tcmF0aW5nLWJhY2tncm91bmQ6ICNGRkREMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmF0aW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yYXRpbmc6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tcmF0aW5nLXBlcmNlbnQ6IGNhbGModmFyKC0tcmF0aW5nLXZhbHVlKSAvIHZhcigtLXJhdGluZy1tYXgpICogMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHZhcigtLXJhdGluZy1jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1yYXRpbmctYmFja2dyb3VuZCkgdmFyKC0tcmF0aW5nLXBlcmNlbnQpLCB2YXIoLS1yYXRpbmctaW5hY3RpdmUtY29sb3IpIHZhcigtLXJhdGluZy1wZXJjZW50KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNraW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2luZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQyNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2luZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYXRpbmdcIiBzdHlsZT1cIi0tcmF0aW5nLXZhbHVlOiAke3Jldmlld0F2ZzF9O1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cmV2aWV3My5sZW5ndGh9IENvbW1lbnRhaXJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5hcHBlbmQoYDxkaXY+JHtyZXZpZXdBdmd9PC9kaXY+YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmV2aWV3MilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJChkYXRhKS5maW5kKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5hcHBlbmQoJChkYXRhKS5maW5kKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5jaGlsZHJlbigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldmlld1Nob3coKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1saXN0JykuaHRtbCgkKGRhdGEpLmZpbmQoXCIucGFnaW5hdGlvbi1saXN0XCIpLmh0bWwoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJykuYmx1cigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZSA9ICQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRQYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmFkZENsYXNzKCdkaXNhYmxlJykudGV4dCgnTm8gbW9yZSBwcm9kdWN0cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoJCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaW1pdCA9IGdldFVybFBhcmFtZXRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VDdXJyZW50ID0gcGFyc2VJbnQoJChcIi5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnQgPiBhXCIpLnRleHQoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGltaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSA9IGxpbWl0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2UgPSBjb250ZXh0LnNlYXJjaFByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KHBhcnNlSW50KHByb2R1Y3RQZXJQYWdlKSpwYWdlQ3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAncHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dJdGVtKCkge1xuICAgICAgICB2YXIgdG90YWwgPSBwYXJzZUludCgkKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSksXG4gICAgICAgICAgICBsaW1pdCA9IHRoaXMuZ2V0VXJsUGFyYW1ldGVyKCdsaW1pdCcpLFxuICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2U7XG5cbiAgICAgICAgaWYgKGxpbWl0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlID0gbGltaXQ7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlID0gdGhpcy5jb250ZXh0LnNlYXJjaFByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdGFydCA9IDEsXG4gICAgICAgICAgICBlbmQgPSB0b3RhbCxcbiAgICAgICAgICAgIGNoZWNrTGFzdFBhZ2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGxhc3RQYWdlID0gMTtcbiAgICAgICAgICAgIFxuICAgICAgICB2YXIgY2hlY2tMaW5rID0gJChcIi5wYWdpbmF0aW9uLWxpc3QgLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCk7XG4gICAgICAgIHZhciBwYWdlTm90TGFzdCA9IGxhc3RQYWdlIC0gMTtcbiAgICAgICAgdmFyIHRvdGFsTm90TGFzdCA9IHBhZ2VOb3RMYXN0ICogcHJvZHVjdFBlclBhZ2U7XG4gICAgICAgIHZhciBwcm9kdWN0c0xhc3RQYWdlID0gdG90YWwgLSB0b3RhbE5vdExhc3Q7XG4gICAgICAgIHZhciBjdXJyZW50UGFnZSA9IHBhcnNlSW50KCQoJy5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnQgPiBhJykudGV4dCgpKTtcbiAgICAgICAgdmFyIHByZXZQYWdlID0gY3VycmVudFBhZ2UgLSAxO1xuXG4gICAgICAgIGlmIChjaGVja0xpbmsubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBsYXN0UGFnZSA9IHBhcnNlSW50KCQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLmZpbmQoXCJhXCIpLnRleHQoKSk7XG4gICAgICAgICAgICBjaGVja0xhc3RQYWdlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhc3RQYWdlID0gcGFyc2VJbnQoY2hlY2tMaW5rLmZpbmQoXCJhXCIpLnRleHQoKSk7XG4gICAgICAgICAgICBjaGVja0xhc3RQYWdlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0b3RhbCA8PSBwcm9kdWN0UGVyUGFnZSkge1xuICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24taW5mbyAuc3RhcnQnKS50ZXh0KHN0YXJ0KTtcbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoZW5kKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA8PSAxKSB7XG4gICAgICAgICAgICAgICAgZW5kID0gcHJvZHVjdFBlclBhZ2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gKHByZXZQYWdlICogcHJvZHVjdFBlclBhZ2UpICsgMTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tMYXN0UGFnZSA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoJCgnLnBhZ2luYXRpb24tbGlzdCAucGFnaW5hdGlvbi1pdGVtLS1uZXh0JykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSB0b3RhbE5vdExhc3QgKyBwcm9kdWN0c0xhc3RQYWdlIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gdG90YWxOb3RMYXN0ICsgcHJvZHVjdHNMYXN0UGFnZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IGN1cnJlbnRQYWdlICogcHJvZHVjdFBlclBhZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1pbmZvIC5zdGFydCcpLnRleHQoc3RhcnQpO1xuICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dChlbmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmFuY3lib3hWaWRlb0Jhbm5lcigpe1xuICAgICAgICBpZiAoJChcIi52aWRlby1ibG9jay1pbWFnZVtkYXRhLWZhbmN5Ym94XVwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoXCIudmlkZW8tYmxvY2staW1hZ2VbZGF0YS1mYW5jeWJveF1cIikuZmFuY3lib3goe1xuICAgICAgICAgICAgICAgICdhdXRvRGltZW5zaW9ucyc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICdwYWRkaW5nJyA6IDAsXG4gICAgICAgICAgICAgICAgJ3dpZHRoJyA6IDk3MCxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JyA6IDYwMCxcbiAgICAgICAgICAgICAgICAnYXV0b1NjYWxlJyA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uSW4nIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uT3V0JyA6ICdub25lJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJChcIi5idXR0b24tcG9wdXAtdmlkZW9bZGF0YS1mYW5jeWJveF1cIikubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKFwiLmJ1dHRvbi1wb3B1cC12aWRlb1tkYXRhLWZhbmN5Ym94XVwiKS5mYW5jeWJveCh7XG4gICAgICAgICAgICAgICAgJ2F1dG9EaW1lbnNpb25zJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnIDogMCxcbiAgICAgICAgICAgICAgICAnd2lkdGgnIDogOTcwLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnIDogNjAwLFxuICAgICAgICAgICAgICAgICdhdXRvU2NhbGUnIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25JbicgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25PdXQnIDogJ25vbmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFVybFBhcmFtZXRlcihzUGFyYW0pIHtcbiAgICAgICAgdmFyIHNQYWdlVVJMID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKSxcbiAgICAgICAgICAgIHNVUkxWYXJpYWJsZXMgPSBzUGFnZVVSTC5zcGxpdCgnJicpLFxuICAgICAgICAgICAgc1BhcmFtZXRlck5hbWUsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzVVJMVmFyaWFibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzUGFyYW1ldGVyTmFtZSA9IHNVUkxWYXJpYWJsZXNbaV0uc3BsaXQoJz0nKTtcblxuICAgICAgICAgICAgaWYgKHNQYXJhbWV0ZXJOYW1lWzBdID09PSBzUGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc1BhcmFtZXRlck5hbWVbMV0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBzUGFyYW1ldGVyTmFtZVsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZChjb250ZXh0KXtcbiAgICAgICAgaWYoJCgnI2ZlYXR1cmVkLXByb2R1Y3RzIC5jYXJkJykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAnZmVhdHVyZWQtcHJvZHVjdHMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAncHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
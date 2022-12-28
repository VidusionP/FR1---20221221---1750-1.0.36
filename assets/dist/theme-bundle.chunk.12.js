(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js":
/*!*******************************************************************!*\
  !*** ./assets/js/theme/halothemes/haloAddOptionForProductCard.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");

var fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony default export */ __webpack_exports__["default"] = (function (context, wrapper) {
  if (context.themeSettings.haloAddOptionForProduct == true) {
    var callProductOption = function callProductOption() {
      product_class.each(function (index, element) {
        var productId = $(element).data("product-id");
        list.push(productId.toString());
      });
      if (list.length > 0) {
        getProductOption(list).then(function (data) {
          renderOption(data);
          $.each(list, function (idx, item) {
            var arr = {},
              productId = list[idx];
            product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').each(function (index, element) {
              var txt = $(element).data('product-swatch-value');
              if (arr[txt]) {
                $(element).remove();
              } else {
                arr[txt] = true;
              }
            });
            if (product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').length > 4) {
              var countMoreOption = product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').length - 4,
                productLink = product_wrapper.find('[data-product-id="' + productId + '"]').find('.card-link').attr('href');
              product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').each(function (index, element) {
                if (index >= 4) {
                  $(element).remove();
                }
              });
              if (product_wrapper.find('.card-option-' + productId + ' .form-field .showmore').length < 1) {
                product_wrapper.find('.card-option-' + productId + ' .form-field:not(.form-field--size)').append('<a href="' + productLink + '" class="showmore">+' + countMoreOption + '</a>');
              }
            }
          });
        });
      }
    };
    var getProductOption = function getProductOption(list) {
      return fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          query: "\n                    query SeveralProductsByID {\n                      site {\n                        products(entityIds: [" + list + "], first: 50) {\n                          edges {\n                            node {\n                              entityId\n                              name\n                               productOptions(first: 50) {\n                                edges {\n                                  node {\n                                    entityId\n                                    displayName\n                                    isRequired\n                                    ... on MultipleChoiceOption {\n                                      displayStyle\n                                      values {\n                                        edges {\n                                          node {\n                                            entityId\n                                            label\n                                            isDefault\n                                            ... on SwatchOptionValue {\n                                              hexColors\n                                              imageUrl(width: 50)\n                                            }\n                                          }\n                                        }\n                                      }\n                                    }\n                                  }\n                                }\n                              }\n                            }\n                          }\n                        }\n                      }\n                    }\n                  "
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return res.data;
      });
    };
    var renderOption = function renderOption(data) {
      var aFilter = data.site.products.edges;
      $.each(aFilter, function (index, element) {
        var productId = aFilter[index].node.entityId,
          productFieldColor = product_wrapper.find('.card-option-' + productId + ' .form-field:not(.form-field--size)'),
          productFieldSize = product_wrapper.find('.card-option-' + productId + ' .form-field--size'),
          aFilter2 = aFilter[index].node.productOptions.edges;
        var aFilter3 = aFilter2.filter(function (item) {
          return item.node.displayStyle === 'Swatch';
        });
        var aFilter5 = aFilter2.filter(function (item) {
          return item.node.displayName === context.themeSettings.haloAddOptionForProduct2;
        });
        if (aFilter3.length > 0) {
          var aFilter4 = aFilter3[0].node.values.edges;
          $.each(aFilter4, function (idx, element) {
            var titleVar = aFilter4[idx].node.label,
              idVar = aFilter4[idx].node.entityId,
              lengthColorVar = aFilter4[idx].node.hexColors.length,
              color1 = aFilter4[idx].node.hexColors[0],
              color2 = aFilter4[idx].node.hexColors[1],
              color3 = aFilter4[idx].node.hexColors[2],
              img = aFilter4[idx].node.imageUrl;
            if (lengthColorVar == 2) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--color form-option-variant--color2" title="' + titleVar + '"><span style="background-color:' + color1 + '"></span><span style="background-color:' + color2 + '"></span></span></label>');
            } else if (lengthColorVar === 3) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--color form-option-variant--color2" title="' + titleVar + '"><span style="background-color:' + color1 + '"></span><span style="background-color:' + color2 + '"></span><span style="background-color:' + color3 + '"></span></span></label>');
            } else if (Boolean(color1)) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--color" title="' + titleVar + '" style="background-color: ' + color1 + '"></span></label>');
            } else if (Boolean(img)) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--pattern" title="' + titleVar + '" style="background-image: url(' + img + ')"></span></label>');
            }
          });
        } else {
          productFieldColor.remove();
        }
        if (aFilter5.length > 0) {
          if (productFieldSize.length < 1) {
            product_wrapper.find('.card-option-' + productId + '').append('<div class="form-field form-field--size"><label class="form-option">' + context.themeSettings.haloAddOptionForProductText.toString() + '</label></div>');
          }
        }
        if (aFilter5.length == 0 && aFilter3.length == 0) {
          product_wrapper.find('.card-option-' + productId + '').remove();
        }
      });
    };
    var token = context.token,
      product_wrapper = $('#' + wrapper),
      product_class = product_wrapper.find('.card');
    var list = [];
    callProductOption();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.dropdown */ "./node_modules/foundation-sites/js/foundation/foundation.dropdown.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _halothemes_haloVideo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./halothemes/haloVideo */ "./assets/js/theme/halothemes/haloVideo.js");
/* harmony import */ var _halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./halothemes/haloNotifyMe */ "./assets/js/theme/halothemes/haloNotifyMe.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Home = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Home, _PageManager);
  function Home(context) {
    return _PageManager.call(this, context) || this;
  }
  var _proto = Home.prototype;
  _proto.onReady = function onReady() {
    this.countDownHeroCarousel();
    this.customPaging();
    this.loadProductByCategory();
    this.loadProductTabByCategory();
    this.loadProductByCategoryWithBanner();
    this.fancyboxVideoBanner();
    this.faqsToggle();
    this.recentBlogSlider();
    this.homeSpecialProduct();
    this.homeParallaxBanner();
    this.loadOptionForProductCard();
    this.customerReviewCarousel();
    this.homeProductRecommended();
    this.reviewCarousel();
  };
  _proto.countDownHeroCarousel = function countDownHeroCarousel() {
    $('.heroCarousel-countdown').each(function (index, element) {
      $(element).parents('.slick-slide').addClass('has-count-down');
      var countDown = $(element).data('carousel-countdown'),
        countDownDate = new Date(countDown).getTime(),
        seft = $(element);
      var countdownfunction = setInterval(function () {
        var now = new Date().getTime(),
          distance = countDownDate - now;
        if (distance < 0) {
          clearInterval(countdownfunction);
          seft.html('');
        } else {
          var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
            minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
            seconds = Math.floor(distance % (1000 * 60) / 1000);
          var strCountDown = "<span class='num'>" + days + "<span>DAYS</span></span><span class='num'>" + hours + "<span>HOURS</span></span><span class='num'>" + minutes + "<span>MINS</span></span><span class='num'>" + seconds + "<span>SECS</span></span>";
          seft.html(strCountDown);
        }
      }, 1000);
    });
  };
  _proto.customPaging = function customPaging() {
    var heroCustom = $('.heroCarousel-custom');
    var heroCustomSlide = $('.heroCarousel-custom .slick-dots li');
    heroCustom.slick({
      dots: true,
      arrows: false,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: heroCustom.data('autoplay'),
      infinite: true,
      asNavFor: ".heroCarousel"
    });
    //ADA
    $('.heroCarousel-custom .slick-dots li').each(function (i) {
      var slide = $(this).find('button').text();
      $(this).find('button').text('0' + slide).addClass('slick-dots-item');
    });
    heroCustom.on('afterChange', function (event, slider, i) {
      var pos = $(slider.$slides[i]).find('div[data-position]').data('position');
      if (pos === 'right') {
        heroCustom.removeClass('heroCarousel-customLeft').addClass('heroCarousel-customRight');
      } else {
        heroCustom.removeClass('heroCarousel-customRight').addClass('heroCarousel-customLeft');
      }
    });
    if ($('.heroCarousel-slide--first .heroCarousel-content-wrapper .heroCarousel-content--right').length) {
      heroCustom.removeClass('heroCarousel-customLeft').addClass('heroCarousel-customRight');
    }
  };
  _proto.loadProductByCategory = function loadProductByCategory() {
    var context = this.context;
    var options = {
      template: 'products/carousel-2'
    };
    if ($('.halo-block[data-category-id]').length > 0) {
      var header_height = $('.header').height();
      $(window).on('scroll load', function () {
        var scroll = $(window).scrollTop(),
          setFlag = false;
        if (scroll > header_height) {
          setFlag = true;
        }
        if (setFlag) {
          $('.halo-block[data-category-id]').each(function (index, element) {
            var wrap = $(element).find('.productCarousel'),
              catId = $(element).data('data-category'),
              catUrl = $(element).data('category-url'),
              blockId = $(element).attr('id');
            if (!$('#product-by-cate-' + catId + ' .productCarousel .productCarousel-slide').length) {
              loadCategory(catId, catUrl, options, wrap, blockId);
            }
          });
          setFlag = false;
        }
      });
    }
    function loadCategory(id, url, option, wrap, blockId) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.getPage(url, option, function (err, response) {
        if (!wrap.find('.productCarousel-slide').length) {
          wrap.html(response);
          slickCarousel(wrap);
          wrap.parents('.halo-block[data-category-id]').find('.loadingOverlay').remove();
          Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_4__["default"])(context, blockId);
        }
      });
    }
    function slickCarousel(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: parseInt(context.themeSettings.home_product_block_col)
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_col) - 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_col) - 2
          }
        }]
      });
    }
  };
  _proto.loadProductTabByCategory = function loadProductTabByCategory() {
    var context = this.context;
    var options = {
      template: 'products/carousel-3'
    };
    if ($('.productCarousel-tabs').length > 0) {
      if (!$('.productCarousel-tabs .tab-content.is-active .productCarousel .productCarousel-slide').length) {
        Array.from($('.tab-content.is-active')).forEach(function (item) {
          var $itemEle = $(item);
          var block = $itemEle,
            wrap = block.find('.productCarousel'),
            catId = block.data('tab-category-id'),
            catUrl = block.data('tab-category-url'),
            blockId = block.attr('id');
          if (catUrl.includes("http")) {
            if (location.host.includes("en.superhairpieces.fr")) {
              catUrl = catUrl.replace("//superhairpieces.fr", "//en.superhairpieces.fr");
            }
          }
          if (!$('.productCarousel-tabs .tab-content.is-active .productCarousel .productCarousel-slide').length) {
            block.find('.loadingOverlay').show();
            loadCategory(catId, catUrl, options, wrap, blockId);
          }
        });
      }
    }
    function reviewShow(x) {
      var limit = document.querySelectorAll('.reviewCard1');
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
          $(item1.nextElementSibling).append("\n                    <style>    .checked {\n                        color: rgb(255, 210, 0);\n                \n                }\n                .fa-star-o {\n                    color: rgb(255, 210, 0);\n            \n                }\n                :root {\n                    --rating-max: 5;\n                    --rating-content: '\u2605\u2605\u2605\u2605\u2605';\n                    --rating-inactive-color: #CCCCCC;\n                    --rating-background: #FFDD00;\n                  }\n                  .rating {\n                    display: inline-block;\n                    font-size: 30px;\n                  }\n                  \n                  .rating::before {\n                    --rating-percent: calc(var(--rating-value) / var(--rating-max) * 100%);\n                    content: var(--rating-content);\n                    background: linear-gradient(90deg, var(--rating-background) var(--rating-percent), var(--rating-inactive-color) var(--rating-percent));\n                    background-clip: text;\n                    -webkit-background-clip: text;\n                    color: transparent;\n                  }\n                @media (min-width: 768px) {\n                    .productReview2 {\n                        display: flex;\n                        align-items:center;\n                    }\n                }\n                @media (min-width: 1025px) {\n                    .productReview2 {\n                        display: unset;\n                    }\n                }\n                @media (min-width: 1400px) {\n                    .productReview2 {\n                        display: flex;\n                        align-items:center;\n\n                    }\n                }\n                </style>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                    \n    <div class=\"rating\" style=\"--rating-value: " + reviewAvg1 + ";\"></div>\n                <div style=padding-left:5px;>\n                    " + review3.length + " Commentaires\n                </div>");
          // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
    function loadCategory(id, url, option, wrap, blockId) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.getPage(url, option, function (err, response) {
        if (!wrap.find('.productCarousel-slide').length) {
          wrap.html(response);
          slickCarousel(wrap);
          wrap.parents('.tab-content').find('.loadingOverlay').remove();
          Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_4__["default"])(context, blockId);
          reviewShow();
        }
      });
    }
    function slickCarousel(wrap) {
      wrap.slick({
        dots: false,
        arrows: true,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-tab1 slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-tab2 slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: parseInt(context.themeSettings.home_product_block_tab_col)
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_tab_col) - 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_tab_col) - 2
          }
        }]
      });
    }
  };
  _proto.loadProductByCategoryWithBanner = function loadProductByCategoryWithBanner() {
    var context = this.context;
    var options = {
      template: 'products/carousel-4'
    };
    if ($('.halo-block[data-category-with-banner-id]').length > 0) {
      var header_height = $('.header').height();
      var $tabSorting = $('.tab-sorting .tab-title');
      $(window).on('scroll load', function () {
        var scroll = $(window).scrollTop(),
          setFlag = false;
        if (scroll > header_height) {
          setFlag = true;
        }
        if (setFlag) {
          $('.halo-block[data-category-with-banner-id]').each(function (index, element) {
            if ($('.home-layout-2').length && !$(element).hasClass('home2-flash-deals')) {
              var wrap = $(element).find('.tabContent-new .productCarousel');
            } else {
              var wrap = $(element).find('.productCarousel');
            }
            var catId = $(element).data('category-with-banner-id'),
              catUrl = $(element).data('category-with-banner-url'),
              blockId = $(element).attr('id');
            if (!$('#product-with-banner-' + catId + ' .productCarousel .productCarousel-slide').length) {
              loadCategory(catId, catUrl, options, wrap, blockId);
            }
          });
          setFlag = false;
        }
      });
      $tabSorting.on('click', function (e) {
        e.preventDefault();
        var $target = $(e.currentTarget);
        var dataTab = $target.data('tab');
        var $thisBlock = $target.closest('.halo-block-product');
        var wrap = $thisBlock.find('.tabContent-' + dataTab + ' .productCarousel'),
          catId = $target.data('cate-id'),
          catUrl = $target.data('cate-url'),
          blockId = $thisBlock.find('.tabContent-' + dataTab).attr('id');
        if (dataTab == 'viewall') {
          window.location.href = $target.attr('href');
          return;
        }
        $thisBlock.find('.tab-sorting').removeClass('is-active');
        $target.parent().addClass('is-active');
        $thisBlock.find('.tab-content').removeClass('is-active');
        $thisBlock.find('.tabContent-' + dataTab).addClass('is-active');
        console.log('aff');
        if (!$target.hasClass('is-loaded')) {
          $target.addClass('is-loaded');
          loadCategory(catId, catUrl, options, wrap, blockId);
        } else {
          $thisBlock.find('.tabContent-' + dataTab + ' .productCarousel').slick('refresh');
        }
      });
      if ($('.countDowntimer').length) {
        var countDownDate = new Date($('.countDowntimer').attr('data-count-down')).getTime();
        var countdownfunction = setInterval(function () {
          var now = new Date().getTime();
          var distance = countDownDate - now;
          if (distance < 0) {
            clearInterval(countdownfunction);
            $(".countDowntimer").html('');
          } else {
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(distance % (1000 * 60) / 1000);
            var strCountDown = "<div class='clock-item'><span class='num'>" + days + "</span><span class='text'>d</span></div><div class='clock-item'><span class='num'>" + hours + ":</span></div><div class='clock-item'><span class='num'>" + minutes + ":</span></div><div class='clock-item'><span class='num'>" + seconds + "</span></div>";
            $(".countDowntimer").html(strCountDown);
          }
        }, 1000);
      }
    }
    function loadCategory(id, url, option, wrap, blockId) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.getPage(url, option, function (err, response) {
        if (!wrap.find('.productCarousel-slide').length) {
          wrap.html(response);
          if (wrap.parents('.halo-block[data-category-with-banner-id]').hasClass('halo-block-product-banners')) {
            if ($('.home-layout-2').length) {
              if (wrap.parents('.halo-block[data-category-with-banner-id]').hasClass('home2-flash-deals')) {
                labelFlashDeals(wrap);
                slickCarousel4(wrap);
              } else {
                slickCarousel3(wrap);
              }
            } else {
              slickCarousel(wrap);
            }
          } else if (wrap.parents('.halo-block[data-category-with-banner-id]').hasClass('halo-block-product-banners2')) {
            slickCarousel2(wrap);
          }
          wrap.parents('.halo-block[data-category-with-banner-id]').find('.loadingOverlay').remove();
          Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_4__["default"])(context, blockId);
        }
      });
    }
    function slickCarousel(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }]
      });
    }
    function slickCarousel2(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: parseInt(context.themeSettings.home_product_block_with_banner_col)
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_with_banner_col) - 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_with_banner_col) - 2
          }
        }]
      });
    }
    function slickCarousel3(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1199,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 767,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }]
      });
    }
    function slickCarousel4(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1199,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 992,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 767,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }]
      });
    }
    function labelFlashDeals(wrap) {
      var $itemSide = wrap.find('.productCarousel-slide');
      $itemSide.each(function (index, element) {
        var $thisLabel = $(element).find('.sale-badge');
        if ($thisLabel.length) {
          var label = $thisLabel.find('.text').data('sale');
          $(element).find('.card-price').addClass('has-labelSale').append('<div class="card-label-sale"><span>-' + label + '</span></div>');
          $thisLabel.remove();
        }
      });
    }
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
  _proto.faqsToggle = function faqsToggle() {
    $('.halo-short-faqs .card .title').on('click', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      $('.halo-short-faqs .card .title').not($target).removeClass('collapsed');
      if ($target.hasClass('collapsed')) {
        $target.removeClass('collapsed');
      } else {
        $target.addClass('collapsed');
      }
      $('.halo-short-faqs .card').each(function (index, element) {
        if ($(element).find('.title').hasClass('collapsed')) {
          $(element).find('.collapse').slideDown("slow");
        } else {
          $(element).find('.collapse').slideUp("slow");
        }
      });
    });
  };
  _proto.recentBlogSlider = function recentBlogSlider() {
    if ($(window).width() <= 1024) {
      if ($('.halo-recent-post').length) {
        if ($('.halo-recent-post').hasClass('slick-slider')) {
          $('.halo-recent-post').slick('unslick');
        }
      }
    } else {
      if ($('.halo-recent-post').length) {
        if (!$('.halo-recent-post').hasClass('slick-slider')) {
          $('.halo-recent-post').slick();
        }
      }
    }
    $(window).resize(function () {
      if ($(window).width() <= 1024) {
        if ($('.halo-recent-post').length) {
          if ($('.halo-recent-post').hasClass('slick-slider')) {
            $('.halo-recent-post').slick('unslick');
          }
        }
      } else {
        if ($('.halo-recent-post').length) {
          if (!$('.halo-recent-post').hasClass('slick-slider')) {
            $('.halo-recent-post').slick();
          }
        }
      }
    });
  };
  _proto.homeSpecialProduct = function homeSpecialProduct() {
    var context = this.context;
    if (context.themeSettings.home_product_block_special == true) {
      var productId = $('[data-special-product-id]').data('special-product-id'),
        setFlag = false;
      var options = {
        template: 'halothemes/products/halo-special-product-tmp'
      };
      $(window).on('scroll load', function () {
        var scroll = $(window).scrollTop(),
          header_height = $('.header').height();
        if (scroll > header_height) {
          setFlag = true;
        }
        if (setFlag) {
          if (!$('.halo-spacial-product .productView').length) {
            var viewingProduct = function viewingProduct(wrapper) {
              if (wrapper.length > 0) {
                var viewerText = context.themeSettings.product_viewingProduct_text,
                  numbersViewer_text = context.themeSettings.product_viewingProduct_viewer,
                  numbersViewerList = JSON.parse("[" + numbersViewer_text + "]");
                setInterval(function () {
                  var numbersViewerItem = Math.floor(Math.random() * numbersViewerList.length);
                  wrapper.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-eye"/></svg>' + numbersViewerList[numbersViewerItem] + " " + viewerText);
                  wrapper.removeClass('u-hiddenVisually');
                }, 10000);
              }
            };
            var countDownProduct = function countDownProduct(wrapper) {
              if (wrapper.length > 0) {
                var countDown = wrapper.data('countdown'),
                  countDownDate = new Date(countDown).getTime(),
                  seft = wrapper;
                var countdownfunction = setInterval(function () {
                  var now = new Date().getTime(),
                    distance = countDownDate - now;
                  if (distance < 0) {
                    clearInterval(countdownfunction);
                    seft.remove();
                  } else {
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
                      hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
                      minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
                      seconds = Math.floor(distance % (1000 * 60) / 1000),
                      strCountDown = '<svg class="icon" aria-hidden="true"><use xlink:href="#icon-bell"/></svg><span class="text"><span>Limited time offer, end in:</span></span> <span class="num">' + days + 'd :</span> <span class="num">' + hours + 'h :</span> <span class="num">' + minutes + 'm :</span> <span class="num">' + seconds + 's</span>';
                    seft.html(strCountDown);
                  }
                }, 1000);
              }
            };
            var soldProduct = function soldProduct(wrapper) {
              if (wrapper.length > 0) {
                var numbersProduct_text = context.themeSettings.product_soldProduct_products,
                  numbersHours_text = context.themeSettings.product_soldProduct_hours,
                  soldProductText = context.themeSettings.product_soldProduct_text,
                  soldProductText2 = context.themeSettings.product_soldProduct_hours_text;
                var numbersProductList = JSON.parse("[" + numbersProduct_text + "]"),
                  numbersProductItem = Math.floor(Math.random() * numbersProductList.length),
                  numbersHoursList = JSON.parse("[" + numbersHours_text + "]"),
                  numbersHoursItem = Math.floor(Math.random() * numbersHoursList.length);
                wrapper.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-fire"/></svg><span>' + numbersProductList[numbersProductItem] + " " + soldProductText + " " + numbersHoursList[numbersHoursItem] + " " + soldProductText2 + '</span>');
                wrapper.removeClass('u-hiddenVisually').show();
              }
            };
            var initThumbnailsHeight = function initThumbnailsHeight($scope) {
              var el = $($scope);
              var $carousel_nav = el.find('.productView-nav'),
                $carousel_for = el.find('.productView-for');
              if ($carousel_for.find('.slick-arrow').length > 0) {
                $carousel_for.parent().addClass('arrows-visible');
              } else {
                $carousel_for.parent().addClass('arrows-disable');
              }
            };
            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(productId, options, function (err, response) {
              setFlag = false;
              var scope = '.halo-spacial-product';
              if (!$(scope).find('.productView').length) {
                $(scope).html(response);
                soldProduct($(scope).find('.productView-soldProduct'));
                viewingProduct($(scope).find('.productView-ViewingProduct'));
                countDownProduct($(scope).find('.productView-countDown'));
                $(scope).find('[data-slick]').slick();
                $(scope).find('.productView-for').get(0).slick.setPosition();
                initThumbnailsHeight(scope);
                Object(_halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_7__["default"])($(scope), context);
                Object(_halothemes_haloVideo__WEBPACK_IMPORTED_MODULE_6__["default"])($(scope).find('[data-slick]'));
                $(scope).on('click', '.dropdown-menu-button', function (event) {
                  var $target = $(event.currentTarget);
                  if ($target.hasClass('is-open')) {
                    $target.removeClass('is-open').attr('aria-expanded', false);
                    $target.siblings('.dropdown-menu').removeClass('is-open').attr('aria-hidden', true);
                  } else {
                    $target.addClass('is-open').attr('aria-expanded', true);
                    $target.siblings('.dropdown-menu').addClass('is-open').attr('aria-hidden', false);
                  }
                  event.stopPropagation();
                });
                $(document).on('click', function (event) {
                  if ($(scope).find('.dropdown-menu-button').hasClass('is-open')) {
                    if ($(event.target).closest('.dropdown-menu-button').length === 0 && $(event.target).closest('.dropdown-menu').length === 0) {
                      $(scope).find('.dropdown-menu-button').removeClass('is-open').attr('aria-expanded', false);
                      $(scope).find('.dropdown-menu-button').siblings('.dropdown-menu').removeClass('is-open').attr('aria-hidden', true);
                    }
                  }
                });
                var productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_5__["default"]($(scope), context);
                productDetails.setProductVariant();
                return productDetails;
              }
            });
          }
          setFlag = false;
        }
      });
    }
  };
  _proto.homeParallaxBanner = function homeParallaxBanner() {
    if ($('#halo_parralax_banners').length > 0) {
      var wrap = $('#halo_parralax_banners'),
        image = wrap.find('[data-image]').data('image');
      wrap.find('[data-image]').css('background-image', 'url(' + image + ')');
    }
  };
  _proto.loadOptionForProductCard = function loadOptionForProductCard() {
    var context = this.context;
    if ($('.productCarousel').length > 0) {
      $('.productCarousel').each(function (index, element) {
        var $prodWrapId = $(element).attr('id');
        Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_4__["default"])(context, $prodWrapId);
      });
    }
    if ($('.halo-block .productGrid').length > 0) {
      $('.halo-block .productGrid').each(function (index, element) {
        var $prodWrapId = $(element).attr('id');
        Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_4__["default"])(context, $prodWrapId);
      });
    }
  }

  // Banner parallax 2
  ;
  _proto.customerReviewCarousel = function customerReviewCarousel() {
    if ($('#halo_parralax_banners .halo-row').length) {
      if (!$('#halo_parralax_banners .halo-row').hasClass('slick-slider')) {
        $('#halo_parralax_banners .halo-row').slick({
          dots: true,
          arrows: false,
          infinite: false,
          mobileFirst: true,
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "<svg class='slick-next slick-arrow' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
          prevArrow: "<svg class='slick-prev slick-arrow' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
          responsive: [{
            breakpoint: 1024,
            settings: {
              arrows: true
            }
          }]
        });
      }
    }
  };
  _proto.reviewCarousel = function reviewCarousel() {
    var productIds = $("[function=list-product]").data("ids").toString().split(",").map(function (item) {
      return parseInt(item, 10);
    });
    var skus = ['M101', 'HD111', 'M111', 'HD111', 'M105'];
    $('#r-test1').slick({
      "dots": false,
      "arrows": false,
      "infinite": true,
      "asNavFor": "#r-test2",
      "swipe": false,
      "pauseOnFocus": false,
      "pauseOnHover": false,
      "fade": true,
      "autoplay": true,
      "slidesToShow": 1,
      "slidesToScroll": 1
    });
    $('#r-test3').slick({
      "dots": false,
      "arrows": false,
      "infinite": true,
      "asNavFor": "#r-test2",
      "autoplay": true,
      "pauseOnFocus": false,
      "pauseOnHover": false,
      "swipe": false,
      "slidesToShow": 1,
      "slidesToScroll": 1,
      "fade": true
    });
    $('#r-test2').slick({
      "dots": false,
      "arrows": true,
      "infinite": true,
      "swipe": false,
      "pauseOnFocus": false,
      "pauseOnHover": false,
      "lazyLoad": "ondemand",
      "autoplay": true,
      "adaptiveHeight": true,
      "asNavFor": ".reviewSlider",
      "slidesToShow": 1,
      "slidesToScroll": 1,
      "fade": true,
      "appendArrows": "#gokuvidu6"
    });
    $('#reviewblock1').slick({
      "dots": false,
      "arrows": true,
      "pauseOnFocus": false,
      "pauseOnHover": false,
      "infinite": true,
      "swipe": false,
      "autoplay": true,
      "asNavFor": ".reviewSlider",
      "adaptiveHeight": true,
      "slidesToShow": 1,
      "slidesToScroll": 1,
      "nextArrow": "<svg id=slick-next class=slick-next test1 slick-arrow aria-label=Next Slide><use xlink:href=#slick-arrow-next></use></svg>",
      "prevArrow": "<svg class=slick-prev slick-arrow aria-label=Previous Slide><use xlink:href=#slick-arrow-prev></use></svg>",
      "appendArrows": "#arr1"
    });
    skus.map(function (item, i) {
      var rev = [];
      fetch("https://shp-webserver.glitch.me/get-teamdesk", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "table": "Review",
          "options": "?filter=[Product SKU]= '" + item + "'"
        })
      }).then(function (r) {
        return r.json();
      }).then(function (r) {
        r.forEach(function (item) {
          rev.push(item['Review rate']);
        });
        var reviewAvg = Math.round(rev.reduce(function (a, b) {
          return a + b;
        }, 0) / rev.length * 10) / 10;
        var content = "<style>    .checked {\n                            color: rgb(255, 210, 0);\n                            \n                    }\n                    .fa-star-o {\n                        color: rgb(255, 210, 0);\n                \n                    }\n                    .fa {\n                        font-size:20px !important;\n                    }\n                    @media (min-width: 768px) {\n                        .productReview2 {\n                            display: flex;\n                        }\n                    }\n                    @media (min-width: 1025px) {\n                        .productReview2 {\n                            display: unset;\n                        }\n                    }\n                    @media (min-width: 1400px) {\n                        .productReview2 {\n                            display: flex;\n                        }\n                    }\n                    </style>\n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                        \n                        <span>\n                        <span class=\"fa fa-star" + (0.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                        <span class=\"fa fa-star" + (1.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                        <span class=\"fa fa-star" + (2.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                        <span class=\"fa fa-star" + (3.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                        <span class=\"fa fa-star" + (4.5 <= reviewAvg ? ' checked' : ' fa-star-o') + ("\"></span>      \n                    </span>\n                    <div style=\"padding-left:5px;color:#5a5a5a;\">\n                        " + rev.length + " Commentaires\n                    </div>");
        $('.vidujen').eq(i).html(content);
        $('.vidujen1').eq(i).html(content);
      }).catch(function (err) {
        console.log(err);
      });
    });
    $('.arr1 .slick-prev').on('click', function () {
      $('#r-test1').slick("slickPrev");
      $('#r-test2').slick("slickPrev");
      $('#r-test3').slick("slickPrev");
    });
    $('.arr1 .slick-next').on('click', function () {
      $('#r-test1').slick("slickNext");
      $('#r-test2').slick("slickNext");
      $('#r-test3').slick("slickNext");
    });
    $('.arr4 .slick-prev').on('click', function () {
      // $('#r-test1').slick("slickPrev");
      $('#r-test2').slick("slickPrev");
      $('#r-test3').slick("slickPrev");
    });
    $('.arr4 .slick-next .slick-arrow').on('click', function () {
      console.log('hoi');
      // $('#r-test1').slick("slickNext");
      $('#r-test2').slick("slickNext");
      $('#r-test3').slick("slickNext");
    });
  };
  _proto.homeProductRecommended = function homeProductRecommended() {
    var $homePGF = $('.home2-block-recommended');
    var $homePGF_grid = $homePGF.find('.productGrid');
    var homePGF_itemLength = $homePGF_grid.find('.product').length;
    var $homePGF_btnBlock = $('.homePGF_btn');
    var $homePGF_btn = $('.homePGF_btn a');
    var dataColumn = $homePGF_grid.data('columns');
    var tt_productShow;
    if ($homePGF.length && homePGF_itemLength > 0) {
      var fWidth = window.innerWidth;
      if (fWidth > 1279 && homePGF_itemLength > 10) {
        $homePGF_btnBlock.addClass('is-show');
      } else if (fWidth <= 1279 && fWidth > 991 && homePGF_itemLength > 8) {
        $homePGF_btnBlock.addClass('is-show');
      } else if (fWidth <= 991 && fWidth > 767 && homePGF_itemLength > 6) {
        $homePGF_btnBlock.addClass('is-show');
      } else if (fWidth <= 767 && homePGF_itemLength > 4) {
        $homePGF_btnBlock.addClass('is-show');
      }
      $homePGF_btn.on('click', function (e) {
        e.preventDefault();
        var wWidth = window.innerWidth;
        if (wWidth > 1279) {
          tt_productShow = 10;
        } else if (wWidth <= 1279 && wWidth > 991) {
          tt_productShow = 8;
        } else if (wWidth <= 991 && wWidth > 767) {
          tt_productShow = 6;
        } else {
          tt_productShow = 4;
        }
        if ($homePGF_grid.find('.product:hidden').length > 0) {
          $homePGF_grid.find('.product:hidden:lt(' + tt_productShow + ')').css('display', 'inline-block');
          if ($homePGF_grid.find('.product:hidden').length == 0) {
            $homePGF_btn.text('No More Products').attr('disabled', '').addClass('disable');
          }
        }
      });
    }
  };
  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hvbWUuanMiXSwibmFtZXMiOlsiZmV0Y2giLCJyZXF1aXJlIiwiY29udGV4dCIsIndyYXBwZXIiLCJ0aGVtZVNldHRpbmdzIiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QiLCJjYWxsUHJvZHVjdE9wdGlvbiIsInByb2R1Y3RfY2xhc3MiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwicHJvZHVjdElkIiwiJCIsImRhdGEiLCJsaXN0IiwicHVzaCIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZ2V0UHJvZHVjdE9wdGlvbiIsInRoZW4iLCJyZW5kZXJPcHRpb24iLCJpZHgiLCJpdGVtIiwiYXJyIiwicHJvZHVjdF93cmFwcGVyIiwiZmluZCIsInR4dCIsInJlbW92ZSIsImNvdW50TW9yZU9wdGlvbiIsInByb2R1Y3RMaW5rIiwiYXR0ciIsImFwcGVuZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJyZXMiLCJqc29uIiwiYUZpbHRlciIsInNpdGUiLCJwcm9kdWN0cyIsImVkZ2VzIiwibm9kZSIsImVudGl0eUlkIiwicHJvZHVjdEZpZWxkQ29sb3IiLCJwcm9kdWN0RmllbGRTaXplIiwiYUZpbHRlcjIiLCJwcm9kdWN0T3B0aW9ucyIsImFGaWx0ZXIzIiwiZmlsdGVyIiwiZGlzcGxheVN0eWxlIiwiYUZpbHRlcjUiLCJkaXNwbGF5TmFtZSIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0MiIsImFGaWx0ZXI0IiwidmFsdWVzIiwidGl0bGVWYXIiLCJsYWJlbCIsImlkVmFyIiwibGVuZ3RoQ29sb3JWYXIiLCJoZXhDb2xvcnMiLCJjb2xvcjEiLCJjb2xvcjIiLCJjb2xvcjMiLCJpbWciLCJpbWFnZVVybCIsIkJvb2xlYW4iLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdFRleHQiLCJIb21lIiwib25SZWFkeSIsImNvdW50RG93bkhlcm9DYXJvdXNlbCIsImN1c3RvbVBhZ2luZyIsImxvYWRQcm9kdWN0QnlDYXRlZ29yeSIsImxvYWRQcm9kdWN0VGFiQnlDYXRlZ29yeSIsImxvYWRQcm9kdWN0QnlDYXRlZ29yeVdpdGhCYW5uZXIiLCJmYW5jeWJveFZpZGVvQmFubmVyIiwiZmFxc1RvZ2dsZSIsInJlY2VudEJsb2dTbGlkZXIiLCJob21lU3BlY2lhbFByb2R1Y3QiLCJob21lUGFyYWxsYXhCYW5uZXIiLCJsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQiLCJjdXN0b21lclJldmlld0Nhcm91c2VsIiwiaG9tZVByb2R1Y3RSZWNvbW1lbmRlZCIsInJldmlld0Nhcm91c2VsIiwicGFyZW50cyIsImFkZENsYXNzIiwiY291bnREb3duIiwiY291bnREb3duRGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwic2VmdCIsImNvdW50ZG93bmZ1bmN0aW9uIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJkaXN0YW5jZSIsImNsZWFySW50ZXJ2YWwiLCJodG1sIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJzdHJDb3VudERvd24iLCJoZXJvQ3VzdG9tIiwiaGVyb0N1c3RvbVNsaWRlIiwic2xpY2siLCJkb3RzIiwiYXJyb3dzIiwibW9iaWxlRmlyc3QiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImluZmluaXRlIiwiYXNOYXZGb3IiLCJpIiwic2xpZGUiLCJ0ZXh0Iiwib24iLCJldmVudCIsInNsaWRlciIsInBvcyIsIiRzbGlkZXMiLCJyZW1vdmVDbGFzcyIsIm9wdGlvbnMiLCJ0ZW1wbGF0ZSIsImhlYWRlcl9oZWlnaHQiLCJoZWlnaHQiLCJ3aW5kb3ciLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJzZXRGbGFnIiwid3JhcCIsImNhdElkIiwiY2F0VXJsIiwiYmxvY2tJZCIsImxvYWRDYXRlZ29yeSIsImlkIiwidXJsIiwib3B0aW9uIiwidXRpbHMiLCJhcGkiLCJnZXRQYWdlIiwiZXJyIiwicmVzcG9uc2UiLCJzbGlja0Nhcm91c2VsIiwiaGFsb0FkZE9wdGlvbiIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJwYXJzZUludCIsImhvbWVfcHJvZHVjdF9ibG9ja19jb2wiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwiJGl0ZW1FbGUiLCJibG9jayIsImluY2x1ZGVzIiwibG9jYXRpb24iLCJob3N0IiwicmVwbGFjZSIsInNob3ciLCJyZXZpZXdTaG93IiwieCIsImxpbWl0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmV2aWV3MiIsIlByb21pc2UiLCJhbGwiLCJyIiwiaXRlbTEiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJlbXB0eSIsImlubmVySFRNTCIsInJldmlldzMiLCJ2aWR1IiwiZ29rdSIsInJldmlld0F2ZyIsInJvdW5kIiwicmVkdWNlIiwiYSIsImIiLCJyZXZpZXdBdmcxIiwiY2VpbCIsInRvRml4ZWQiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJob21lX3Byb2R1Y3RfYmxvY2tfdGFiX2NvbCIsIiR0YWJTb3J0aW5nIiwiaGFzQ2xhc3MiLCJlIiwicHJldmVudERlZmF1bHQiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFUYWIiLCIkdGhpc0Jsb2NrIiwiY2xvc2VzdCIsImhyZWYiLCJwYXJlbnQiLCJsYWJlbEZsYXNoRGVhbHMiLCJzbGlja0Nhcm91c2VsNCIsInNsaWNrQ2Fyb3VzZWwzIiwic2xpY2tDYXJvdXNlbDIiLCJob21lX3Byb2R1Y3RfYmxvY2tfd2l0aF9iYW5uZXJfY29sIiwiJGl0ZW1TaWRlIiwiJHRoaXNMYWJlbCIsImZhbmN5Ym94Iiwibm90Iiwic2xpZGVEb3duIiwic2xpZGVVcCIsIndpZHRoIiwicmVzaXplIiwiaG9tZV9wcm9kdWN0X2Jsb2NrX3NwZWNpYWwiLCJ2aWV3aW5nUHJvZHVjdCIsInZpZXdlclRleHQiLCJwcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3RleHQiLCJudW1iZXJzVmlld2VyX3RleHQiLCJwcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3ZpZXdlciIsIm51bWJlcnNWaWV3ZXJMaXN0IiwicGFyc2UiLCJudW1iZXJzVmlld2VySXRlbSIsInJhbmRvbSIsImNvdW50RG93blByb2R1Y3QiLCJzb2xkUHJvZHVjdCIsIm51bWJlcnNQcm9kdWN0X3RleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X3Byb2R1Y3RzIiwibnVtYmVyc0hvdXJzX3RleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzIiwic29sZFByb2R1Y3RUZXh0IiwicHJvZHVjdF9zb2xkUHJvZHVjdF90ZXh0Iiwic29sZFByb2R1Y3RUZXh0MiIsInByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnNfdGV4dCIsIm51bWJlcnNQcm9kdWN0TGlzdCIsIm51bWJlcnNQcm9kdWN0SXRlbSIsIm51bWJlcnNIb3Vyc0xpc3QiLCJudW1iZXJzSG91cnNJdGVtIiwiaW5pdFRodW1ibmFpbHNIZWlnaHQiLCIkc2NvcGUiLCJlbCIsIiRjYXJvdXNlbF9uYXYiLCIkY2Fyb3VzZWxfZm9yIiwicHJvZHVjdCIsImdldEJ5SWQiLCJzY29wZSIsImdldCIsInNldFBvc2l0aW9uIiwiaGFsb05vdGlmeU1lIiwiaGFsb1lvdXR1YmVDYXJvdXNlbCIsInNpYmxpbmdzIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwicHJvZHVjdERldGFpbHMiLCJQcm9kdWN0RGV0YWlscyIsInNldFByb2R1Y3RWYXJpYW50IiwiaW1hZ2UiLCJjc3MiLCIkcHJvZFdyYXBJZCIsImFkYXB0aXZlSGVpZ2h0IiwicHJvZHVjdElkcyIsInNwbGl0IiwibWFwIiwic2t1cyIsInJldiIsImNvbnRlbnQiLCJlcSIsIiRob21lUEdGIiwiJGhvbWVQR0ZfZ3JpZCIsImhvbWVQR0ZfaXRlbUxlbmd0aCIsIiRob21lUEdGX2J0bkJsb2NrIiwiJGhvbWVQR0ZfYnRuIiwiZGF0YUNvbHVtbiIsInR0X3Byb2R1Y3RTaG93IiwiZldpZHRoIiwiaW5uZXJXaWR0aCIsIndXaWR0aCIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUErQztBQUMvQyxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsd0RBQVksQ0FBQztBQUVwQix5RUFBU0MsT0FBTyxFQUFFQyxPQUFPLEVBQUU7RUFDdEMsSUFBSUQsT0FBTyxDQUFDRSxhQUFhLENBQUNDLHVCQUF1QixJQUFJLElBQUksRUFBRTtJQUFBLElBTTlDQyxpQkFBaUIsR0FBMUIsU0FBU0EsaUJBQWlCLEdBQUc7TUFDekJDLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFLO1FBQ25DLElBQUlDLFNBQVMsR0FBR0MsQ0FBQyxDQUFDRixPQUFPLENBQUMsQ0FBQ0csSUFBSSxDQUFDLFlBQVksQ0FBQztRQUU3Q0MsSUFBSSxDQUFDQyxJQUFJLENBQUNKLFNBQVMsQ0FBQ0ssUUFBUSxFQUFFLENBQUM7TUFDbkMsQ0FBQyxDQUFDO01BRUYsSUFBR0YsSUFBSSxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1FBQ2ZDLGdCQUFnQixDQUFDSixJQUFJLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLFVBQUFOLElBQUksRUFBSTtVQUNoQ08sWUFBWSxDQUFDUCxJQUFJLENBQUM7VUFFbEJELENBQUMsQ0FBQ0osSUFBSSxDQUFDTSxJQUFJLEVBQUUsVUFBQ08sR0FBRyxFQUFFQyxJQUFJLEVBQUs7WUFDeEIsSUFBSUMsR0FBRyxHQUFHLENBQUMsQ0FBQztjQUNSWixTQUFTLEdBQUdHLElBQUksQ0FBQ08sR0FBRyxDQUFDO1lBRXpCRyxlQUFlLENBQUNDLElBQUksQ0FBQyxlQUFlLEdBQUNkLFNBQVMsR0FBQyxzQkFBc0IsQ0FBQyxDQUFDSCxJQUFJLENBQUMsVUFBQ0MsS0FBSyxFQUFFQyxPQUFPLEVBQUs7Y0FD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QUFZLENBQUM1SixJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzNGLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMwRCxRQUFRLENBQUMsU0FBUyxDQUFDO1VBQ2xGO1FBQ0o7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUM7RUFBQTtBQUFBLEVBam9DNkJtTSxxREFBVyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQsIHdyYXBwZXIpIHtcbiAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0ID09IHRydWUpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBjb250ZXh0LnRva2VuLFxuICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyID0gJCgnIycrd3JhcHBlciksXG4gICAgICAgICAgICBwcm9kdWN0X2NsYXNzID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkJyk7XG4gICAgICAgIHZhciAgbGlzdCA9IFtdO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNhbGxQcm9kdWN0T3B0aW9uKCkge1xuICAgICAgICAgICAgcHJvZHVjdF9jbGFzcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKGVsZW1lbnQpLmRhdGEoXCJwcm9kdWN0LWlkXCIpO1xuXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHByb2R1Y3RJZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZihsaXN0Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGdldFByb2R1Y3RPcHRpb24obGlzdCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChsaXN0LCAoaWR4LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0ge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkID0gbGlzdFtpZHhdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR4dCA9ICQoZWxlbWVudCkuZGF0YSgncHJvZHVjdC1zd2F0Y2gtdmFsdWUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJbdHh0XSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyW3R4dF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmxlbmd0aCA+IDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb3VudE1vcmVPcHRpb24gID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5sZW5ndGggLSA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGluayA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCdbZGF0YS1wcm9kdWN0LWlkPVwiJytwcm9kdWN0SWQrJ1wiXScpLmZpbmQoJy5jYXJkLWxpbmsnKS5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ID49IDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkIC5zaG93bW9yZScpLmxlbmd0aCA8IDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQ6bm90KC5mb3JtLWZpZWxkLS1zaXplKScpLmFwcGVuZCgnPGEgaHJlZj1cIicrcHJvZHVjdExpbmsrJ1wiIGNsYXNzPVwic2hvd21vcmVcIj4rJytjb3VudE1vcmVPcHRpb24rJzwvYT4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRQcm9kdWN0T3B0aW9uKGxpc3Qpe1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkgU2V2ZXJhbFByb2R1Y3RzQnlJRCB7XG4gICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyhlbnRpdHlJZHM6IFtgK2xpc3QrYF0sIGZpcnN0OiA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zKGZpcnN0OiA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBNdWx0aXBsZUNob2ljZU9wdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIFN3YXRjaE9wdGlvblZhbHVlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXhDb2xvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybCh3aWR0aDogNTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGB9KSxcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlck9wdGlvbihkYXRhKXtcbiAgICAgICAgICAgIHZhciBhRmlsdGVyID0gZGF0YS5zaXRlLnByb2R1Y3RzLmVkZ2VzO1xuXG4gICAgICAgICAgICAkLmVhY2goYUZpbHRlciwgKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9IGFGaWx0ZXJbaW5kZXhdLm5vZGUuZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkOm5vdCguZm9ybS1maWVsZC0tc2l6ZSknKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkU2l6ZSA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZC0tc2l6ZScpLFxuICAgICAgICAgICAgICAgICAgICBhRmlsdGVyMiA9IGFGaWx0ZXJbaW5kZXhdLm5vZGUucHJvZHVjdE9wdGlvbnMuZWRnZXM7XG5cbiAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjMgPSBhRmlsdGVyMi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubm9kZS5kaXNwbGF5U3R5bGUgPT09ICdTd2F0Y2gnO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXI1ID0gYUZpbHRlcjIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLm5vZGUuZGlzcGxheU5hbWUgPT09IGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdDI7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZihhRmlsdGVyMy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXI0ID0gYUZpbHRlcjNbMF0ubm9kZS52YWx1ZXMuZWRnZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGFGaWx0ZXI0LCAoaWR4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGl0bGVWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoQ29sb3JWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjEgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yMiA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnNbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IzID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9yc1syXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaW1hZ2VVcmw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxlbmd0aENvbG9yVmFyID09IDIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjErJ1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjIrJ1wiPjwvc3Bhbj48L3NwYW4+PC9sYWJlbD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihsZW5ndGhDb2xvclZhciA9PT0gMyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvciBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjJcIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMSsnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMisnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMysnXCI+PC9zcGFuPjwvc3Bhbj48L2xhYmVsPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKEJvb2xlYW4oY29sb3IxKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvclwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAnK2NvbG9yMSsnXCI+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoQm9vbGVhbihpbWcpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm5cIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcraW1nKycpXCI+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoYUZpbHRlcjUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3RGaWVsZFNpemUubGVuZ3RoIDwgMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNpemVcIj48bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvblwiPicrY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0VGV4dC50b1N0cmluZygpKyc8L2xhYmVsPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoKGFGaWx0ZXI1Lmxlbmd0aCA9PSAwKSAmJiAoYUZpbHRlcjMubGVuZ3RoID09IDApKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsUHJvZHVjdE9wdGlvbigpO1xuICAgIH1cbn1cbiIsImltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xyXG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLmRyb3Bkb3duJztcclxuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IGhhbG9BZGRPcHRpb24gZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0Q2FyZCc7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xyXG5pbXBvcnQgaGFsb1lvdXR1YmVDYXJvdXNlbCBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1ZpZGVvJztcclxuaW1wb3J0IGhhbG9Ob3RpZnlNZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb05vdGlmeU1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICB0aGlzLmNvdW50RG93bkhlcm9DYXJvdXNlbCgpO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tUGFnaW5nKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkUHJvZHVjdEJ5Q2F0ZWdvcnkoKTtcclxuICAgICAgICB0aGlzLmxvYWRQcm9kdWN0VGFiQnlDYXRlZ29yeSgpO1xyXG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3RCeUNhdGVnb3J5V2l0aEJhbm5lcigpO1xyXG4gICAgICAgIHRoaXMuZmFuY3lib3hWaWRlb0Jhbm5lcigpO1xyXG4gICAgICAgIHRoaXMuZmFxc1RvZ2dsZSgpO1xyXG4gICAgICAgIHRoaXMucmVjZW50QmxvZ1NsaWRlcigpO1xyXG4gICAgICAgIHRoaXMuaG9tZVNwZWNpYWxQcm9kdWN0KCk7XHJcbiAgICAgICAgdGhpcy5ob21lUGFyYWxsYXhCYW5uZXIoKTtcclxuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCgpO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tZXJSZXZpZXdDYXJvdXNlbCgpO1xyXG4gICAgICAgIHRoaXMuaG9tZVByb2R1Y3RSZWNvbW1lbmRlZCgpO1xyXG4gICAgICAgIHRoaXMucmV2aWV3Q2Fyb3VzZWwoKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvdW50RG93bkhlcm9DYXJvdXNlbCgpIHtcclxuICAgICAgICAkKCcuaGVyb0Nhcm91c2VsLWNvdW50ZG93bicpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICQoZWxlbWVudCkucGFyZW50cygnLnNsaWNrLXNsaWRlJykuYWRkQ2xhc3MoJ2hhcy1jb3VudC1kb3duJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgY291bnREb3duID0gJChlbGVtZW50KS5kYXRhKCdjYXJvdXNlbC1jb3VudGRvd24nKSxcclxuICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShjb3VudERvd24pLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIHNlZnQgPSAkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvdW50ZG93bmZ1bmN0aW9uID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duZnVuY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlZnQuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0ckNvdW50RG93biA9IFwiPHNwYW4gY2xhc3M9J251bSc+XCIrZGF5cytcIjxzcGFuPkRBWVM8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPSdudW0nPlwiK2hvdXJzK1wiPHNwYW4+SE9VUlM8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPSdudW0nPlwiK21pbnV0ZXMrXCI8c3Bhbj5NSU5TPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz0nbnVtJz5cIitzZWNvbmRzK1wiPHNwYW4+U0VDUzwvc3Bhbj48L3NwYW4+XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlZnQuaHRtbChzdHJDb3VudERvd24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjdXN0b21QYWdpbmcoKXtcclxuICAgICAgICBjb25zdCBoZXJvQ3VzdG9tID0gJCgnLmhlcm9DYXJvdXNlbC1jdXN0b20nKTtcclxuICAgICAgICBjb25zdCBoZXJvQ3VzdG9tU2xpZGUgPSAkKCcuaGVyb0Nhcm91c2VsLWN1c3RvbSAuc2xpY2stZG90cyBsaScpO1xyXG4gICAgICAgIGhlcm9DdXN0b20uc2xpY2soe1xyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiBoZXJvQ3VzdG9tLmRhdGEoJ2F1dG9wbGF5JyksXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogXCIuaGVyb0Nhcm91c2VsXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL0FEQVxyXG4gICAgICAgICQoJy5oZXJvQ2Fyb3VzZWwtY3VzdG9tIC5zbGljay1kb3RzIGxpJykuZWFjaChmdW5jdGlvbihpKXtcclxuICAgICAgICAgICAgdmFyIHNsaWRlID0gJCh0aGlzKS5maW5kKCdidXR0b24nKS50ZXh0KCk7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnYnV0dG9uJykudGV4dCgnMCcgKyBzbGlkZSkuYWRkQ2xhc3MoJ3NsaWNrLWRvdHMtaXRlbScpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGhlcm9DdXN0b20ub24oJ2FmdGVyQ2hhbmdlJywgKGV2ZW50LCBzbGlkZXIsIGkpID0+IHtcclxuICAgICAgICAgICAgdmFyIHBvcyA9ICQoc2xpZGVyLiRzbGlkZXNbaV0pLmZpbmQoJ2RpdltkYXRhLXBvc2l0aW9uXScpLmRhdGEoJ3Bvc2l0aW9uJyk7XHJcblxyXG4gICAgICAgICAgICBpZihwb3MgPT09ICdyaWdodCcpe1xyXG4gICAgICAgICAgICAgICAgaGVyb0N1c3RvbS5yZW1vdmVDbGFzcygnaGVyb0Nhcm91c2VsLWN1c3RvbUxlZnQnKS5hZGRDbGFzcygnaGVyb0Nhcm91c2VsLWN1c3RvbVJpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIGhlcm9DdXN0b20ucmVtb3ZlQ2xhc3MoJ2hlcm9DYXJvdXNlbC1jdXN0b21SaWdodCcpLmFkZENsYXNzKCdoZXJvQ2Fyb3VzZWwtY3VzdG9tTGVmdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCQoJy5oZXJvQ2Fyb3VzZWwtc2xpZGUtLWZpcnN0IC5oZXJvQ2Fyb3VzZWwtY29udGVudC13cmFwcGVyIC5oZXJvQ2Fyb3VzZWwtY29udGVudC0tcmlnaHQnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaGVyb0N1c3RvbS5yZW1vdmVDbGFzcygnaGVyb0Nhcm91c2VsLWN1c3RvbUxlZnQnKS5hZGRDbGFzcygnaGVyb0Nhcm91c2VsLWN1c3RvbVJpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQcm9kdWN0QnlDYXRlZ29yeSgpe1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAncHJvZHVjdHMvY2Fyb3VzZWwtMidcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZigkKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LWlkXScpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB2YXIgIGhlYWRlcl9oZWlnaHQgPSAkKCcuaGVhZGVyJykuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCBsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID4gaGVhZGVyX2hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNldEZsYWcpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWJsb2NrW2RhdGEtY2F0ZWdvcnktaWRdJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdyYXAgPSAkKGVsZW1lbnQpLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdElkID0gJChlbGVtZW50KS5kYXRhKCdkYXRhLWNhdGVnb3J5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSAkKGVsZW1lbnQpLmRhdGEoJ2NhdGVnb3J5LXVybCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZCA9ICQoZWxlbWVudCkuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEkKCcjcHJvZHVjdC1ieS1jYXRlLScrY2F0SWQrJyAucHJvZHVjdENhcm91c2VsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZENhdGVnb3J5KGNhdElkLCBjYXRVcmwsIG9wdGlvbnMsIHdyYXAsIGJsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBsb2FkQ2F0ZWdvcnkoaWQsIHVybCwgb3B0aW9uLCB3cmFwLCBibG9ja0lkKXtcclxuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCBvcHRpb24sIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighd3JhcC5maW5kKCcucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWNrQ2Fyb3VzZWwod3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5wYXJlbnRzKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LWlkXScpLmZpbmQoJy5sb2FkaW5nT3ZlcmxheScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsIGJsb2NrSWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbCh3cmFwKXtcclxuICAgICAgICAgICAgd3JhcC5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfY29sKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja19jb2wpIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja19jb2wpIC0gMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkUHJvZHVjdFRhYkJ5Q2F0ZWdvcnkoKXtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3Byb2R1Y3RzL2Nhcm91c2VsLTMnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZigkKCcucHJvZHVjdENhcm91c2VsLXRhYnMnKS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgaWYoISQoJy5wcm9kdWN0Q2Fyb3VzZWwtdGFicyAudGFiLWNvbnRlbnQuaXMtYWN0aXZlIC5wcm9kdWN0Q2Fyb3VzZWwgLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKCQoJy50YWItY29udGVudC5pcy1hY3RpdmUnKSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCAkaXRlbUVsZSA9ICQoaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmxvY2sgPSAkaXRlbUVsZSxcclxuICAgICAgICAgICAgICAgICAgICB3cmFwID0gYmxvY2suZmluZCgnLnByb2R1Y3RDYXJvdXNlbCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdElkID0gYmxvY2suZGF0YSgndGFiLWNhdGVnb3J5LWlkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0VXJsID0gYmxvY2suZGF0YSgndGFiLWNhdGVnb3J5LXVybCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrSWQgPSBibG9jay5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYXRVcmwuaW5jbHVkZXMoXCJodHRwXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLmhvc3QuaW5jbHVkZXMoXCJlbi5zdXBlcmhhaXJwaWVjZXMuZnJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0VXJsID0gY2F0VXJsLnJlcGxhY2UoXCIvL3N1cGVyaGFpcnBpZWNlcy5mclwiLFwiLy9lbi5zdXBlcmhhaXJwaWVjZXMuZnJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoISQoJy5wcm9kdWN0Q2Fyb3VzZWwtdGFicyAudGFiLWNvbnRlbnQuaXMtYWN0aXZlIC5wcm9kdWN0Q2Fyb3VzZWwgLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suZmluZCgnLmxvYWRpbmdPdmVybGF5Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRDYXRlZ29yeShjYXRJZCwgY2F0VXJsLCBvcHRpb25zLCB3cmFwLCBibG9ja0lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiByZXZpZXdTaG93KHgpIHtcclxuICAgICAgICAgICAgdmFyIGxpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJldmlld0NhcmQxJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgbGV0IHJldmlldzIgPSBbXVxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvblwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXHJcbiAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTUwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXHJcbiAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTEwMDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxyXG4gICAgICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD0xNTAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcclxuICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaW1pdC5mb3JFYWNoKChpdGVtMSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5lbXB0eSgpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0xLmlubmVySFRNTCA9PSAnTTEwNicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTEuaW5uZXJIVE1MID0gJ00xMDYjMSdcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZiAoaXRlbTEuaW5uZXJIVE1MID09ICdNMTA2TCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTEuaW5uZXJIVE1MID0gJ00xMDZMIzEnXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtMS5pbm5lckhUTUwgPT0gJ1F1ZWVuXzE4Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtMS5pbm5lckhUTUwgPSAnUTE4J1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJldmlldzMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZHUgPSByZXZpZXcyLmZpbHRlcihpdGVtID0+IGl0ZW1bJ1Byb2R1Y3QgU0tVJ10gPT09IGl0ZW0xLmlubmVySFRNTClcclxuICAgICAgICAgICAgICAgICAgICB2aWR1LmZvckVhY2goKGdva3UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3My5wdXNoKGdva3VbJ1JldmlldyByYXRlJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXZpZXdBdmcgPSBNYXRoLnJvdW5kKChyZXZpZXczLnJlZHVjZSgoYSxiICkgPT4gYSsgYiwgMCkvcmV2aWV3My5sZW5ndGgpICogMTApLzEwIHx8IDBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXZpZXdBdmcxID0gKE1hdGguY2VpbChyZXZpZXdBdmcgKiAyKS8yKS50b0ZpeGVkKDEpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5hcHBlbmQoYFxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZT4gICAgLmNoZWNrZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjEwLCAwKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZhLXN0YXItbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIxMCwgMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOnJvb3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcmF0aW5nLW1heDogNTtcclxuICAgICAgICAgICAgICAgICAgICAtLXJhdGluZy1jb250ZW50OiAn4piF4piF4piF4piF4piFJztcclxuICAgICAgICAgICAgICAgICAgICAtLXJhdGluZy1pbmFjdGl2ZS1jb2xvcjogI0NDQ0NDQztcclxuICAgICAgICAgICAgICAgICAgICAtLXJhdGluZy1iYWNrZ3JvdW5kOiAjRkZERDAwO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC5yYXRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5yYXRpbmc6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1yYXRpbmctcGVyY2VudDogY2FsYyh2YXIoLS1yYXRpbmctdmFsdWUpIC8gdmFyKC0tcmF0aW5nLW1heCkgKiAxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB2YXIoLS1yYXRpbmctY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1yYXRpbmctYmFja2dyb3VuZCkgdmFyKC0tcmF0aW5nLXBlcmNlbnQpLCB2YXIoLS1yYXRpbmctaW5hY3RpdmUtY29sb3IpIHZhcigtLXJhdGluZy1wZXJjZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RSZXZpZXcyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdFJldmlldzIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RSZXZpZXcyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwicmF0aW5nXCIgc3R5bGU9XCItLXJhdGluZy12YWx1ZTogJHtyZXZpZXdBdmcxfTtcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9cGFkZGluZy1sZWZ0OjVweDs+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtyZXZpZXczLmxlbmd0aH0gQ29tbWVudGFpcmVzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5hcHBlbmQoYDxkaXY+JHtyZXZpZXdBdmd9PC9kaXY+YClcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBsb2FkQ2F0ZWdvcnkoaWQsIHVybCwgb3B0aW9uLCB3cmFwLCBibG9ja0lkKXtcclxuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCBvcHRpb24sIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighd3JhcC5maW5kKCcucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWNrQ2Fyb3VzZWwod3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5wYXJlbnRzKCcudGFiLWNvbnRlbnQnKS5maW5kKCcubG9hZGluZ092ZXJsYXknKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbihjb250ZXh0LCBibG9ja0lkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXZpZXdTaG93KClcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWwod3JhcCl7XHJcbiAgICAgICAgICAgIHdyYXAuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXRhYjEgc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay10YWIyIHNsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja190YWJfY29sKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja190YWJfY29sKSAtIDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfdGFiX2NvbCkgLSAyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQcm9kdWN0QnlDYXRlZ29yeVdpdGhCYW5uZXIoKXtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3Byb2R1Y3RzL2Nhcm91c2VsLTQnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYoJCgnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS13aXRoLWJhbm5lci1pZF0nKS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdmFyICBoZWFkZXJfaGVpZ2h0ID0gJCgnLmhlYWRlcicpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICBjb25zdCAkdGFiU29ydGluZyA9ICQoJy50YWItc29ydGluZyAudGFiLXRpdGxlJyk7XHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCBsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID4gaGVhZGVyX2hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNldEZsYWcpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWJsb2NrW2RhdGEtY2F0ZWdvcnktd2l0aC1iYW5uZXItaWRdJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy5ob21lLWxheW91dC0yJykubGVuZ3RoICYmICEkKGVsZW1lbnQpLmhhc0NsYXNzKCdob21lMi1mbGFzaC1kZWFscycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcCA9ICQoZWxlbWVudCkuZmluZCgnLnRhYkNvbnRlbnQtbmV3IC5wcm9kdWN0Q2Fyb3VzZWwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3cmFwID0gJChlbGVtZW50KS5maW5kKCcucHJvZHVjdENhcm91c2VsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXRJZCA9ICQoZWxlbWVudCkuZGF0YSgnY2F0ZWdvcnktd2l0aC1iYW5uZXItaWQnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdFVybCA9ICQoZWxlbWVudCkuZGF0YSgnY2F0ZWdvcnktd2l0aC1iYW5uZXItdXJsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0lkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoISQoJyNwcm9kdWN0LXdpdGgtYmFubmVyLScrY2F0SWQrJyAucHJvZHVjdENhcm91c2VsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZENhdGVnb3J5KGNhdElkLCBjYXRVcmwsIG9wdGlvbnMsIHdyYXAsIGJsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkdGFiU29ydGluZy5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFUYWIgPSAkdGFyZ2V0LmRhdGEoJ3RhYicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRoaXNCbG9jayA9ICR0YXJnZXQuY2xvc2VzdCgnLmhhbG8tYmxvY2stcHJvZHVjdCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdyYXAgPSAkdGhpc0Jsb2NrLmZpbmQoJy50YWJDb250ZW50LScrZGF0YVRhYisnIC5wcm9kdWN0Q2Fyb3VzZWwnKSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRJZCA9ICR0YXJnZXQuZGF0YSgnY2F0ZS1pZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdFVybCA9ICR0YXJnZXQuZGF0YSgnY2F0ZS11cmwnKSxcclxuICAgICAgICAgICAgICAgICAgICBibG9ja0lkID0gJHRoaXNCbG9jay5maW5kKCcudGFiQ29udGVudC0nK2RhdGFUYWIpLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFUYWIgPT0gJ3ZpZXdhbGwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAkdGFyZ2V0LmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJHRoaXNCbG9jay5maW5kKCcudGFiLXNvcnRpbmcnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LnBhcmVudCgpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICR0aGlzQmxvY2suZmluZCgnLnRhYi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJHRoaXNCbG9jay5maW5kKCcudGFiQ29udGVudC0nK2RhdGFUYWIpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZmYnKVxyXG4gICAgICAgICAgICAgICAgaWYoISR0YXJnZXQuaGFzQ2xhc3MoJ2lzLWxvYWRlZCcpKXtcclxuICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0LmFkZENsYXNzKCdpcy1sb2FkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoY2F0SWQsIGNhdFVybCwgb3B0aW9ucywgd3JhcCwgYmxvY2tJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGhpc0Jsb2NrLmZpbmQoJy50YWJDb250ZW50LScrZGF0YVRhYisnIC5wcm9kdWN0Q2Fyb3VzZWwnKS5zbGljaygncmVmcmVzaCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKCcuY291bnREb3dudGltZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb3VudERvd25EYXRlID0gbmV3IERhdGUoICQoJy5jb3VudERvd250aW1lcicpLmF0dHIoJ2RhdGEtY291bnQtZG93bicpKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ZG93bmZ1bmN0aW9uID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGNvdW50ZG93bmZ1bmN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5jb3VudERvd250aW1lclwiKS5odG1sKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHJDb3VudERvd24gPSBcIjxkaXYgY2xhc3M9J2Nsb2NrLWl0ZW0nPjxzcGFuIGNsYXNzPSdudW0nPlwiK2RheXMrXCI8L3NwYW4+PHNwYW4gY2xhc3M9J3RleHQnPmQ8L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz0nY2xvY2staXRlbSc+PHNwYW4gY2xhc3M9J251bSc+XCIraG91cnMrXCI6PC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9J2Nsb2NrLWl0ZW0nPjxzcGFuIGNsYXNzPSdudW0nPlwiK21pbnV0ZXMrXCI6PC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9J2Nsb2NrLWl0ZW0nPjxzcGFuIGNsYXNzPSdudW0nPlwiK3NlY29uZHMrXCI8L3NwYW4+PC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuY291bnREb3dudGltZXJcIikuaHRtbChzdHJDb3VudERvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBsb2FkQ2F0ZWdvcnkoaWQsIHVybCwgb3B0aW9uLCB3cmFwLCBibG9ja0lkKXtcclxuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCBvcHRpb24sIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighd3JhcC5maW5kKCcucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwLmh0bWwocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZih3cmFwLnBhcmVudHMoJy5oYWxvLWJsb2NrW2RhdGEtY2F0ZWdvcnktd2l0aC1iYW5uZXItaWRdJykuaGFzQ2xhc3MoJ2hhbG8tYmxvY2stcHJvZHVjdC1iYW5uZXJzJykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLmhvbWUtbGF5b3V0LTInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3cmFwLnBhcmVudHMoJy5oYWxvLWJsb2NrW2RhdGEtY2F0ZWdvcnktd2l0aC1iYW5uZXItaWRdJykuaGFzQ2xhc3MoJ2hvbWUyLWZsYXNoLWRlYWxzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEZsYXNoRGVhbHMod3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2tDYXJvdXNlbDQod3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsMyh3cmFwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNrQ2Fyb3VzZWwod3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYod3JhcC5wYXJlbnRzKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmhhc0NsYXNzKCdoYWxvLWJsb2NrLXByb2R1Y3QtYmFubmVyczInKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNrQ2Fyb3VzZWwyKHdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5wYXJlbnRzKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmZpbmQoJy5sb2FkaW5nT3ZlcmxheScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsIGJsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsKHdyYXApe1xyXG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWwyKHdyYXApe1xyXG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja193aXRoX2Jhbm5lcl9jb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX3dpdGhfYmFubmVyX2NvbCkgLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX3dpdGhfYmFubmVyX2NvbCkgLSAyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsMyh3cmFwKXtcclxuICAgICAgICAgICAgd3JhcC5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWw0KHdyYXApe1xyXG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OSxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxhYmVsRmxhc2hEZWFscyh3cmFwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRpdGVtU2lkZSA9IHdyYXAuZmluZCgnLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpO1xyXG5cclxuICAgICAgICAgICAgJGl0ZW1TaWRlLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdGhpc0xhYmVsID0gJChlbGVtZW50KS5maW5kKCcuc2FsZS1iYWRnZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkdGhpc0xhYmVsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gJHRoaXNMYWJlbC5maW5kKCcudGV4dCcpLmRhdGEoJ3NhbGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuY2FyZC1wcmljZScpLmFkZENsYXNzKCdoYXMtbGFiZWxTYWxlJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY2FyZC1sYWJlbC1zYWxlXCI+PHNwYW4+LScrbGFiZWwrJzwvc3Bhbj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgICAgICAkdGhpc0xhYmVsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFuY3lib3hWaWRlb0Jhbm5lcigpe1xyXG4gICAgICAgIGlmICgkKFwiLnZpZGVvLWJsb2NrLWltYWdlW2RhdGEtZmFuY3lib3hdXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgJChcIi52aWRlby1ibG9jay1pbWFnZVtkYXRhLWZhbmN5Ym94XVwiKS5mYW5jeWJveCh7XHJcbiAgICAgICAgICAgICAgICAnYXV0b0RpbWVuc2lvbnMnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICdwYWRkaW5nJyA6IDAsXHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnIDogOTcwLFxyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCcgOiA2MDAsXHJcbiAgICAgICAgICAgICAgICAnYXV0b1NjYWxlJyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25JbicgOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbk91dCcgOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJChcIi5idXR0b24tcG9wdXAtdmlkZW9bZGF0YS1mYW5jeWJveF1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAkKFwiLmJ1dHRvbi1wb3B1cC12aWRlb1tkYXRhLWZhbmN5Ym94XVwiKS5mYW5jeWJveCh7XHJcbiAgICAgICAgICAgICAgICAnYXV0b0RpbWVuc2lvbnMnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICdwYWRkaW5nJyA6IDAsXHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnIDogOTcwLFxyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCcgOiA2MDAsXHJcbiAgICAgICAgICAgICAgICAnYXV0b1NjYWxlJyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25JbicgOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbk91dCcgOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhcXNUb2dnbGUoKXtcclxuICAgICAgICAkKCcuaGFsby1zaG9ydC1mYXFzIC5jYXJkIC50aXRsZScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmhhbG8tc2hvcnQtZmFxcyAuY2FyZCAudGl0bGUnKS5ub3QoJHRhcmdldCkucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpO1xyXG5cclxuICAgICAgICAgICAgaWYoJHRhcmdldC5oYXNDbGFzcygnY29sbGFwc2VkJykpe1xyXG4gICAgICAgICAgICAgICAgJHRhcmdldC5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICR0YXJnZXQuYWRkQ2xhc3MoJ2NvbGxhcHNlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKCcuaGFsby1zaG9ydC1mYXFzIC5jYXJkJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCQoZWxlbWVudCkuZmluZCgnLnRpdGxlJykuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKXtcclxuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5jb2xsYXBzZScpLnNsaWRlRG93bihcInNsb3dcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuY29sbGFwc2UnKS5zbGlkZVVwKFwic2xvd1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjZW50QmxvZ1NsaWRlcigpe1xyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSAxMDI0KSB7XHJcbiAgICAgICAgICAgIGlmICgkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5oYWxvLXJlY2VudC1wb3N0JykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKXtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1yZWNlbnQtcG9zdCcpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIGlmICgkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5oYWxvLXJlY2VudC1wb3N0JykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy5oYWxvLXJlY2VudC1wb3N0JykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1yZWNlbnQtcG9zdCcpLnNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaG9tZVNwZWNpYWxQcm9kdWN0KCl7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICAgICAgaWYoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja19zcGVjaWFsID09IHRydWUpe1xyXG4gICAgICAgICAgICB2YXIgcHJvZHVjdElkID0gJCgnW2RhdGEtc3BlY2lhbC1wcm9kdWN0LWlkXScpLmRhdGEoJ3NwZWNpYWwtcHJvZHVjdC1pZCcpLFxyXG4gICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9e1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdoYWxvdGhlbWVzL3Byb2R1Y3RzL2hhbG8tc3BlY2lhbC1wcm9kdWN0LXRtcCdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwgbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJfaGVpZ2h0ID0gJCgnLmhlYWRlcicpLmhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGwgPiBoZWFkZXJfaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc2V0RmxhZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoISQoJy5oYWxvLXNwYWNpYWwtcHJvZHVjdCAucHJvZHVjdFZpZXcnKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKHByb2R1Y3RJZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2NvcGUgPSAnLmhhbG8tc3BhY2lhbC1wcm9kdWN0JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3JykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNjb3BlKS5odG1sKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29sZFByb2R1Y3QoJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3LXNvbGRQcm9kdWN0JykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdpbmdQcm9kdWN0KCQoc2NvcGUpLmZpbmQoJy5wcm9kdWN0Vmlldy1WaWV3aW5nUHJvZHVjdCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudERvd25Qcm9kdWN0KCQoc2NvcGUpLmZpbmQoJy5wcm9kdWN0Vmlldy1jb3VudERvd24nKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2NvcGUpLmZpbmQoJ1tkYXRhLXNsaWNrXScpLnNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3LWZvcicpLmdldCgwKS5zbGljay5zZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0VGh1bWJuYWlsc0hlaWdodChzY29wZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsb05vdGlmeU1lKCQoc2NvcGUpLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxvWW91dHViZUNhcm91c2VsKCQoc2NvcGUpLmZpbmQoJ1tkYXRhLXNsaWNrXScpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSkub24oJ2NsaWNrJywgJy5kcm9wZG93bi1tZW51LWJ1dHRvbicsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoJHRhcmdldC5oYXNDbGFzcygnaXMtb3BlbicpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoJy5kcm9wZG93bi1tZW51JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoJy5kcm9wZG93bi1tZW51JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoc2NvcGUpLmZpbmQoJy5kcm9wZG93bi1tZW51LWJ1dHRvbicpLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5kcm9wZG93bi1tZW51LWJ1dHRvbicpLmxlbmd0aCA9PT0gMCkgJiYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcGRvd24tbWVudScpLmxlbmd0aCA9PT0gMCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2NvcGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuZHJvcGRvd24tbWVudS1idXR0b24nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5kcm9wZG93bi1tZW51LWJ1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygnLmRyb3Bkb3duLW1lbnUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJChzY29wZSksIGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzLnNldFByb2R1Y3RWYXJpYW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0RGV0YWlscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB2aWV3aW5nUHJvZHVjdCh3cmFwcGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3cmFwcGVyLmxlbmd0aCA+IDApeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmlld2VyVGV4dCA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3RleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNWaWV3ZXJfdGV4dCA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3ZpZXdlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc1ZpZXdlckxpc3QgPSAgSlNPTi5wYXJzZShcIltcIiArIG51bWJlcnNWaWV3ZXJfdGV4dCArIFwiXVwiKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW1iZXJzVmlld2VySXRlbSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbnVtYmVyc1ZpZXdlckxpc3QubGVuZ3RoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmh0bWwoJzxzdmcgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tZXllXCIvPjwvc3ZnPicgKyBudW1iZXJzVmlld2VyTGlzdFtudW1iZXJzVmlld2VySXRlbV0gKyBcIiBcIiArIHZpZXdlclRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMDApOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNvdW50RG93blByb2R1Y3Qod3JhcHBlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYod3JhcHBlci5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnREb3duID0gd3JhcHBlci5kYXRhKCdjb3VudGRvd24nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKGNvdW50RG93bikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWZ0ID0gd3JhcHBlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50ZG93bmZ1bmN0aW9uID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duZnVuY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VmdC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJDb3VudERvd24gPSAnPHN2ZyBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1iZWxsXCIvPjwvc3ZnPjxzcGFuIGNsYXNzPVwidGV4dFwiPjxzcGFuPkxpbWl0ZWQgdGltZSBvZmZlciwgZW5kIGluOjwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVwibnVtXCI+JytkYXlzKydkIDo8L3NwYW4+IDxzcGFuIGNsYXNzPVwibnVtXCI+Jytob3VycysnaCA6PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicrbWludXRlcysnbSA6PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicrc2Vjb25kcysnczwvc3Bhbj4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZnQuaHRtbChzdHJDb3VudERvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNvbGRQcm9kdWN0KHdyYXBwZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdyYXBwZXIubGVuZ3RoID4gMCl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW1iZXJzUHJvZHVjdF90ZXh0ID0gY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfcHJvZHVjdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNIb3Vyc190ZXh0ID0gY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbGRQcm9kdWN0VGV4dCA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NvbGRQcm9kdWN0X3RleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbGRQcm9kdWN0VGV4dDIgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF9ob3Vyc190ZXh0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnVtYmVyc1Byb2R1Y3RMaXN0ID0gIEpTT04ucGFyc2UoXCJbXCIgKyBudW1iZXJzUHJvZHVjdF90ZXh0ICsgXCJdXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc1Byb2R1Y3RJdGVtID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpudW1iZXJzUHJvZHVjdExpc3QubGVuZ3RoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNIb3Vyc0xpc3QgPSAgSlNPTi5wYXJzZShcIltcIiArIG51bWJlcnNIb3Vyc190ZXh0ICsgXCJdXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzSG91cnNJdGVtID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpudW1iZXJzSG91cnNMaXN0Lmxlbmd0aCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmh0bWwoJzxzdmcgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tZmlyZVwiLz48L3N2Zz48c3Bhbj4nICsgbnVtYmVyc1Byb2R1Y3RMaXN0W251bWJlcnNQcm9kdWN0SXRlbV0gKyBcIiBcIiArIHNvbGRQcm9kdWN0VGV4dCArIFwiIFwiICsgbnVtYmVyc0hvdXJzTGlzdFtudW1iZXJzSG91cnNJdGVtXSArIFwiIFwiICsgc29sZFByb2R1Y3RUZXh0MiArICc8L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5pdFRodW1ibmFpbHNIZWlnaHQoJHNjb3BlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQoJHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGNhcm91c2VsX25hdiA9IGVsLmZpbmQoJy5wcm9kdWN0Vmlldy1uYXYnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2Fyb3VzZWxfZm9yID0gZWwuZmluZCgnLnByb2R1Y3RWaWV3LWZvcicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkY2Fyb3VzZWxfZm9yLmZpbmQoJy5zbGljay1hcnJvdycpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2Fyb3VzZWxfZm9yLnBhcmVudCgpLmFkZENsYXNzKCdhcnJvd3MtdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2Fyb3VzZWxfZm9yLnBhcmVudCgpLmFkZENsYXNzKCdhcnJvd3MtZGlzYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBob21lUGFyYWxsYXhCYW5uZXIoKXtcclxuICAgICAgICBpZigkKCcjaGFsb19wYXJyYWxheF9iYW5uZXJzJykubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHZhciB3cmFwID0gJCgnI2hhbG9fcGFycmFsYXhfYmFubmVycycpLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2UgPSB3cmFwLmZpbmQoJ1tkYXRhLWltYWdlXScpLmRhdGEoJ2ltYWdlJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB3cmFwLmZpbmQoJ1tkYXRhLWltYWdlXScpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJytpbWFnZSsnKScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQoKXtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG5cclxuICAgICAgICBpZigkKCcucHJvZHVjdENhcm91c2VsJykubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Q2Fyb3VzZWwnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyICRwcm9kV3JhcElkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb24oY29udGV4dCwgJHByb2RXcmFwSWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCQoJy5oYWxvLWJsb2NrIC5wcm9kdWN0R3JpZCcpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAkKCcuaGFsby1ibG9jayAucHJvZHVjdEdyaWQnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyICRwcm9kV3JhcElkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb24oY29udGV4dCwgJHByb2RXcmFwSWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQmFubmVyIHBhcmFsbGF4IDJcclxuICAgIGN1c3RvbWVyUmV2aWV3Q2Fyb3VzZWwoKSB7XHJcbiAgICAgICAgaWYgKCQoJyNoYWxvX3BhcnJhbGF4X2Jhbm5lcnMgLmhhbG8tcm93JykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICghJCgnI2hhbG9fcGFycmFsYXhfYmFubmVycyAuaGFsby1yb3cnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICQoJyNoYWxvX3BhcnJhbGF4X2Jhbm5lcnMgLmhhbG8tcm93Jykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93JyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93JyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXZpZXdDYXJvdXNlbCgpIHtcclxuXHJcbiAgICAgICAgbGV0IHByb2R1Y3RJZHMgPSAkKFwiW2Z1bmN0aW9uPWxpc3QtcHJvZHVjdF1cIikuZGF0YShcImlkc1wiKS50b1N0cmluZygpLnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb25cclxuICAgICAgICBcclxuICAgICAgICAgICAgKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGl0ZW0sIDEwKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHNrdXMgPSBbJ00xMDEnLCdIRDExMScsICdNMTExJywgJ0hEMTExJywgJ00xMDUnXVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3ItdGVzdDEnKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRvdHNcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFycm93c1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5maW5pdGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNOYXZGb3JcIjogXCIjci10ZXN0MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzd2lwZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF1c2VPbkZvY3VzXCIgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF1c2VPbkhvdmVyXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWRlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1dG9wbGF5XCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNsaWRlc1RvU2hvd1wiOiAxLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2xpZGVzVG9TY3JvbGxcIjogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjci10ZXN0MycpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRvdHNcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcnJvd3NcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmZpbml0ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNOYXZGb3JcIjogXCIjci10ZXN0MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXV0b3BsYXlcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhdXNlT25Gb2N1c1wiIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXVzZU9uSG92ZXJcIjogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3dpcGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzbGlkZXNUb1Nob3dcIjogMSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzbGlkZXNUb1Njcm9sbFwiOiAxLCAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWRlXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyLXRlc3QyJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRvdHNcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcnJvd3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImluZmluaXRlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzd2lwZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhdXNlT25Gb2N1c1wiIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXVzZU9uSG92ZXJcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYXp5TG9hZFwiIDogXCJvbmRlbWFuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXV0b3BsYXlcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkYXB0aXZlSGVpZ2h0XCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhc05hdkZvclwiOiBcIi5yZXZpZXdTbGlkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNsaWRlc1RvU2hvd1wiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2xpZGVzVG9TY3JvbGxcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhZGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFwcGVuZEFycm93c1wiOiBcIiNnb2t1dmlkdTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmV2aWV3YmxvY2sxJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkb3RzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcnJvd3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF1c2VPbkZvY3VzXCIgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhdXNlT25Ib3ZlclwiOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImluZmluaXRlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN3aXBlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdXRvcGxheVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhc05hdkZvclwiOiBcIi5yZXZpZXdTbGlkZXJcIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkYXB0aXZlSGVpZ2h0XCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNsaWRlc1RvU2hvd1wiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzbGlkZXNUb1Njcm9sbFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuZXh0QXJyb3dcIjogXCI8c3ZnIGlkPXNsaWNrLW5leHQgY2xhc3M9c2xpY2stbmV4dCB0ZXN0MSBzbGljay1hcnJvdyBhcmlhLWxhYmVsPU5leHQgU2xpZGU+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJldkFycm93XCI6IFwiPHN2ZyBjbGFzcz1zbGljay1wcmV2IHNsaWNrLWFycm93IGFyaWEtbGFiZWw9UHJldmlvdXMgU2xpZGU+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBlbmRBcnJvd3NcIjogXCIjYXJyMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2t1cy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXYgPVtdXHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vc2hwLXdlYnNlcnZlci5nbGl0Y2gubWUvZ2V0LXRlYW1kZXNrYCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiOiBcIlJldmlld1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25zXCI6YD9maWx0ZXI9W1Byb2R1Y3QgU0tVXT0gJyR7aXRlbX0nYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocj0+IHIuanNvbigpKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldi5wdXNoKGl0ZW1bJ1JldmlldyByYXRlJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldmlld0F2ZyA9IE1hdGgucm91bmQoKHJldi5yZWR1Y2UoKGEsYiApID0+IGErIGIsIDApL3Jldi5sZW5ndGgpICogMTApLzEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gYDxzdHlsZT4gICAgLmNoZWNrZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIxMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmZhLXN0YXItbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMTAsIDApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5mYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvZHVjdFJldmlldzIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0UmV2aWV3MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0UmV2aWV3MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMC41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDEuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygyLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMy41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDQuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZy1sZWZ0OjVweDtjb2xvcjojNWE1YTVhO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3Jldi5sZW5ndGh9IENvbW1lbnRhaXJlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy52aWR1amVuJykuZXEoaSkuaHRtbChjb250ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcudmlkdWplbjEnKS5lcShpKS5odG1sKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICQoJy5hcnIxIC5zbGljay1wcmV2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcjci10ZXN0MScpLnNsaWNrKFwic2xpY2tQcmV2XCIpO1xyXG4gICAgICAgICAgICAkKCcjci10ZXN0MicpLnNsaWNrKFwic2xpY2tQcmV2XCIpXHJcbiAgICAgICAgICAgICQoJyNyLXRlc3QzJykuc2xpY2soXCJzbGlja1ByZXZcIilcclxuXHJcbiAgICB9KTtcclxuICAgICQoJy5hcnIxIC5zbGljay1uZXh0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyNyLXRlc3QxJykuc2xpY2soXCJzbGlja05leHRcIik7XHJcbiAgICAgICAgJCgnI3ItdGVzdDInKS5zbGljayhcInNsaWNrTmV4dFwiKVxyXG4gICAgICAgICQoJyNyLXRlc3QzJykuc2xpY2soXCJzbGlja05leHRcIilcclxuXHJcbiAgICB9KTtcclxuICAgICQoJy5hcnI0IC5zbGljay1wcmV2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICQoJyNyLXRlc3QxJykuc2xpY2soXCJzbGlja1ByZXZcIik7XHJcbiAgICAgICAgJCgnI3ItdGVzdDInKS5zbGljayhcInNsaWNrUHJldlwiKVxyXG4gICAgICAgICQoJyNyLXRlc3QzJykuc2xpY2soXCJzbGlja1ByZXZcIilcclxuXHJcbn0pO1xyXG4kKCcuYXJyNCAuc2xpY2stbmV4dCAuc2xpY2stYXJyb3cnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnaG9pJylcclxuICAgIC8vICQoJyNyLXRlc3QxJykuc2xpY2soXCJzbGlja05leHRcIik7XHJcbiAgICAkKCcjci10ZXN0MicpLnNsaWNrKFwic2xpY2tOZXh0XCIpXHJcbiAgICAkKCcjci10ZXN0MycpLnNsaWNrKFwic2xpY2tOZXh0XCIpXHJcblxyXG59KTtcclxuICAgIH1cclxuICAgIGhvbWVQcm9kdWN0UmVjb21tZW5kZWQoKSB7XHJcbiAgICAgICAgY29uc3QgJGhvbWVQR0YgPSAkKCcuaG9tZTItYmxvY2stcmVjb21tZW5kZWQnKTtcclxuICAgICAgICBjb25zdCAkaG9tZVBHRl9ncmlkID0gJGhvbWVQR0YuZmluZCgnLnByb2R1Y3RHcmlkJyk7XHJcbiAgICAgICAgY29uc3QgaG9tZVBHRl9pdGVtTGVuZ3RoID0gJGhvbWVQR0ZfZ3JpZC5maW5kKCcucHJvZHVjdCcpLmxlbmd0aDtcclxuICAgICAgICBjb25zdCAkaG9tZVBHRl9idG5CbG9jayA9ICQoJy5ob21lUEdGX2J0bicpO1xyXG4gICAgICAgIGNvbnN0ICRob21lUEdGX2J0biA9ICQoJy5ob21lUEdGX2J0biBhJyk7XHJcbiAgICAgICAgY29uc3QgZGF0YUNvbHVtbiA9ICRob21lUEdGX2dyaWQuZGF0YSgnY29sdW1ucycpO1xyXG4gICAgICAgIGxldCB0dF9wcm9kdWN0U2hvdztcclxuXHJcbiAgICAgICAgaWYgKCRob21lUEdGLmxlbmd0aCAmJiBob21lUEdGX2l0ZW1MZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZXaWR0aCA+IDEyNzkgJiYgaG9tZVBHRl9pdGVtTGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgICAgICRob21lUEdGX2J0bkJsb2NrLmFkZENsYXNzKCdpcy1zaG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZldpZHRoIDw9IDEyNzkgJiYgZldpZHRoID4gOTkxICYmIGhvbWVQR0ZfaXRlbUxlbmd0aCA+IDgpIHtcclxuICAgICAgICAgICAgICAgICRob21lUEdGX2J0bkJsb2NrLmFkZENsYXNzKCdpcy1zaG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZldpZHRoIDw9IDk5MSAmJiBmV2lkdGggPiA3NjcgJiYgaG9tZVBHRl9pdGVtTGVuZ3RoID4gNikge1xyXG4gICAgICAgICAgICAgICAgJGhvbWVQR0ZfYnRuQmxvY2suYWRkQ2xhc3MoJ2lzLXNob3cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmV2lkdGggPD0gNzY3ICYmIGhvbWVQR0ZfaXRlbUxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgICAgICRob21lUEdGX2J0bkJsb2NrLmFkZENsYXNzKCdpcy1zaG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRob21lUEdGX2J0bi5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHdXaWR0aCA+IDEyNzkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0dF9wcm9kdWN0U2hvdyA9IDEwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAod1dpZHRoIDw9IDEyNzkgJiYgd1dpZHRoID4gOTkxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHRfcHJvZHVjdFNob3cgPSA4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAod1dpZHRoIDw9IDk5MSAmJiB3V2lkdGggPiA3NjcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0dF9wcm9kdWN0U2hvdyA9IDY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0dF9wcm9kdWN0U2hvdyA9IDQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRob21lUEdGX2dyaWQuZmluZCgnLnByb2R1Y3Q6aGlkZGVuJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRob21lUEdGX2dyaWQuZmluZCgnLnByb2R1Y3Q6aGlkZGVuOmx0KCcrdHRfcHJvZHVjdFNob3crJyknKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkaG9tZVBHRl9ncmlkLmZpbmQoJy5wcm9kdWN0OmhpZGRlbicpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRob21lUEdGX2J0bi50ZXh0KCdObyBNb3JlIFByb2R1Y3RzJykuYXR0cignZGlzYWJsZWQnLCAnJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"alert.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showAlert = void 0;

function alertDesign(alertMarkup, msg) {
  alertMarkup = alertMarkup.replace('MESSAGE', msg);
  var header = document.querySelector('header');
  header.insertAdjacentHTML('beforeend', alertMarkup);
  setTimeout(function () {
    document.querySelector('.alert__box').classList.add('showAlert');
  }, 400);
}

function hideAlert() {
  var el = document.querySelector('.alert__box');
  if (el) el.parentElement.removeChild(el);
}

var showAlert = function showAlert(alertType, alertMsg) {
  var warningMarkup = "<div class=\"alert__box alert__warning\"><svg><use xlink:href=\"src/img/icon-pack-2.svg#danger\"></use></svg><p class=\"primary__heading\">MESSAGE</p></div>";
  var successMarkup = "<div class=\"alert__box alert__success\"><svg><use xlink:href=\"src/img/icon-pack-2.svg#happy\"></use></svg><p class=\"primary__heading\">MESSAGE</p></div>";
  var errorMarkup = "<div class=\"alert__box alert__error\"><svg><use xlink:href=\"src/img/icon-pack-2.svg#sad\"></use></svg><p class=\"primary__heading\">MESSAGE</p></div>";
  alertType === 'success' ? alertDesign(successMarkup, alertMsg) : alertType === 'error' ? alertDesign(errorMarkup, alertMsg) : alertDesign(warningMarkup, alertMsg);
  setTimeout(function () {
    hideAlert();
  }, 3000);
}; // to use alert use   --showAlert('alertType', 'alert message');  --alertType = ['success', 'error', 'warning]
// please wait for '3sec'  before showing another alert for better user experience


exports.showAlert = showAlert;
},{}],"navbarToggler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navbarToggler = void 0;

var navbarToggler = function navbarToggler() {
  var navOpen = document.querySelector('.navigation__link--item');
  var navClose = document.querySelector('.sidebar__btn--close-nav ');
  var sideBar = document.querySelector('.sidebar');
  navOpen.addEventListener('click', function (e) {
    sideBar.classList.add('active');
  });
  navClose.addEventListener('click', function (e) {
    sideBar.classList.remove('active');
  });
};

exports.navbarToggler = navbarToggler;

var slider = function slider() {
  var slides = document.querySelectorAll('.slide');
  var nextBtn = document.querySelector('.slider__btn--right');
  var prevBtn = document.querySelector('.slider__btn--left');
  var dotContainer = document.querySelector('.dots');

  function createDot() {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML('beforeend', "<button class=\"dots__dot\" data-slide=\"".concat(i, "\"></button>"));
    });
  }

  function activateDot(slide) {
    document.querySelectorAll('.dots__dot').forEach(function (e) {
      e.classList.remove('dots__dot--active');
    });
    document.querySelector(".dots__dot[data-slide=\"".concat(slide, "\"]")).classList.add('dots__dot--active');
  }

  slides.forEach(function (e, i) {
    e.style.transform = "translateX(".concat(100 * i, "%)");
  });
  var totalSlides = slides.length;
  var curSlide = 0;

  function goToSlide(slide) {
    slides.forEach(function (s, i) {
      s.style.transform = "translateX(".concat(100 * (i - slide), "%)");
    });
  }

  function goToNextSlide(s, i) {
    if (curSlide === totalSlides - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    activateDot(curSlide);
    goToSlide(curSlide);
  }

  function goToPrevSlide(s, i) {
    if (curSlide === 0) {
      curSlide = totalSlides - 1;
    } else {
      curSlide--;
    }

    activateDot(curSlide);
    goToSlide(curSlide);
  }

  nextBtn.addEventListener('click', function () {
    goToNextSlide();
  });
  prevBtn.addEventListener('click', function () {
    goToPrevSlide();
  });
  window.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
      goToNextSlide();
      activateDot(curSlide);
    }

    if (e.key === 'ArrowLeft') {
      goToPrevSlide();
      activateDot(curSlide);
    }
  });
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      var slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
  createDot();
  activateDot(0);
};
},{}],"landing_slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.landingSlider = void 0;

var landingSlider = function landingSlider() {
  var slides = document.querySelectorAll('.landing__slider--item');
  var leftBtn = document.querySelector('.landing--prev-btn');
  var rightBtn = document.querySelector('.landing--nxt-btn');
  var curSlide = 0;
  var maxSlide = slides.length;

  var goToSlide = function goToSlide(slide) {
    slides.forEach(function (s, i) {
      return s.style.transform = "translateX(".concat(100 * (i - slide), "%)");
    });
  }; // Next slide


  var nextSlide = function nextSlide() {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  var prevSlide = function prevSlide() {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
  };

  rightBtn.addEventListener('click', nextSlide);
  leftBtn.addEventListener('click', prevSlide);
};

exports.landingSlider = landingSlider;
},{}],"reviewSlider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reviewSlider = void 0;

var reviewSlider = function reviewSlider() {
  var slides = document.querySelectorAll('.slide');
  var btnLeft = document.querySelector('.slider__btn--left');
  var btnRight = document.querySelector('.slider__btn--right');
  var dotContainer = document.querySelector('.dots');
  var curSlide = 0;
  var maxSlide = slides.length; // Functions;

  var createDots = function createDots() {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML('beforeend', "<button class=\"dots__dot\" data-slide=\"".concat(i, "\"></button>"));
    });
  };

  var activateDot = function activateDot(slide) {
    document.querySelectorAll('.dots__dot').forEach(function (dot) {
      return dot.classList.remove('dots__dot--active');
    });
    document.querySelector(".dots__dot[data-slide=\"".concat(slide, "\"]")).classList.add('dots__dot--active');
  };

  var goToSlide = function goToSlide(slide) {
    slides.forEach(function (s, i) {
      return s.style.transform = "translateX(".concat(100 * (i - slide), "%)");
    });
  }; // Next slide


  var nextSlide = function nextSlide() {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  var prevSlide = function prevSlide() {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  var init = function init() {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init(); // Event handlers

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      var slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

exports.reviewSlider = reviewSlider;
},{}],"getLocation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentLocation = void 0;
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  console.log('Your current position is:');
  console.log("Latitude : ".concat(crd.latitude));
  console.log("Longitude: ".concat(crd.longitude));
  console.log("More or less ".concat(crd.accuracy, " meters."));
}

function error(err) {
  console.warn("ERROR(".concat(err.code, "): ").concat(err.message));
}

var getCurrentLocation = function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(success, error, options);
};

exports.getCurrentLocation = getCurrentLocation;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _alert = require("./alert");

var _navbarToggler = require("./navbarToggler");

var _landing_slider = require("./landing_slider.js");

var _reviewSlider = require("./reviewSlider");

var _getLocation = require("./getLocation");

(0, _getLocation.getCurrentLocation)();

if (document.querySelector('.navigation__searchbar')) {
  var form = document.querySelector('.navigation__searchbar');
  form.addEventListener('submit', function (e) {
    var value = document.querySelector('.navigation__searchbar--input').value;
    (0, _alert.showAlert)(value, "you search for ".concat(value));
    e.preventDefault();
  });
} // --previous page button


var goToPreviousPage = function goToPreviousPage() {
  var backPageBtn = document.querySelector('.goBackButton');
  backPageBtn.addEventListener('click', function () {
    window.history.back();
  });
};

if (document.querySelector('.goBackButton')) goToPreviousPage();
if (document.querySelector('.reviews.slider')) (0, _reviewSlider.reviewSlider)();

if (document.querySelectorAll('.landing__slider--item').length !== 0) {
  (0, _landing_slider.landingSlider)();
}

(0, _navbarToggler.navbarToggler)();

if (document.querySelector('#location-search-form')) {
  document.querySelector('#location-search-form').addEventListener('submit', function (e) {
    var query = document.querySelector('#location-search-form-input').value;
    alert(query);
    navigator.geolocation.getCurrentPosition(function (position) {});
    e.preventDefault();
  });
}
},{"./alert":"alert.js","./navbarToggler":"navbarToggler.js","./landing_slider.js":"landing_slider.js","./reviewSlider":"reviewSlider.js","./getLocation":"getLocation.js"}],"../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49796" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/bundle.js.map
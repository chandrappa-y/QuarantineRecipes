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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/recipe.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/recipe-services.js":
/*!********************************!*\
  !*** ./src/recipe-services.js ***!
  \********************************/
/*! exports provided: fetchLogIn, fetchLoginStatus, fetchRecipe, fetchRecipeList, postRecipe, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLogIn", function() { return fetchLogIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLoginStatus", function() { return fetchLoginStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecipe", function() { return fetchRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecipeList", function() { return fetchRecipeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postRecipe", function() { return postRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
var fetchLogIn = function fetchLogIn(username) {
  return fetch('/session', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      username: username
    })
  })["catch"](function () {
    return Promise.reject({
      code: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (result) {
        return Promise.reject(result);
      });
    }

    return response.json();
  });
};
var fetchLoginStatus = function fetchLoginStatus() {
  return fetch('/session', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      code: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (result) {
        return Promise.reject(result);
      });
    }

    return response.json();
  });
};
var fetchRecipe = function fetchRecipe(id) {
  return fetch("/recipes/".concat(id), {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      code: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (result) {
        return Promise.reject(result);
      });
    }

    return response.json();
  });
};
var fetchRecipeList = function fetchRecipeList() {
  return fetch('/recipes', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      code: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (result) {
        return Promise.reject(result);
      });
    }

    return response.json();
  });
};
var postRecipe = function postRecipe(_ref) {
  var title = _ref.title,
      ingredients = _ref.ingredients,
      steps = _ref.steps;
  return fetch('/recipes', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      title: title,
      ingredients: ingredients,
      steps: steps
    })
  })["catch"](function () {
    return Promise.reject({
      code: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (result) {
      return Promise.reject(result);
    });
  });
};
var logoutUser = function logoutUser() {
  return fetch('/session', {
    method: 'DELETE'
  })["catch"](function () {
    return Promise.reject({
      code: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (result) {
        return Promise.reject(result);
      });
    }

    return;
  });
};

/***/ }),

/***/ "./src/recipe-utils.js":
/*!*****************************!*\
  !*** ./src/recipe-utils.js ***!
  \*****************************/
/*! exports provided: renderRecipeDetails, renderRecipes, renderFormToAddRecipe, renderStatus, clearLoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderRecipeDetails", function() { return renderRecipeDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderRecipes", function() { return renderRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderFormToAddRecipe", function() { return renderFormToAddRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderStatus", function() { return renderStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearLoginForm", function() { return clearLoginForm; });
var renderRecipeDetails = function renderRecipeDetails(recipe) {
  return document.querySelector('.recipe-description').innerHTML = "\n            <div>\n                <h4>Title</h4>\n                <span>".concat(recipe.title, "</span>\n            </div>\n            <div>\n                <h4>Author</h4>\n                <span>").concat(recipe.author, "</span>\n            </div>\n            <div>\n                <h4>Ingredients</h4>\n                <span>").concat(recipe.ingredients, "</span>\n            </div>\n            <div>\n                <h4>Steps</h4>\n                <span>").concat(recipe.steps, "</span>\n            </div>\n        ");
};
var renderRecipes = function renderRecipes(recipes) {
  return document.querySelector('.recipe-list').innerHTML = Object.keys(recipes).map(function (key) {
    var recipe = recipes[key];
    return "\n        <li class=\"recipe\">\n            <a href=\"\"\n            data-id=\"".concat(key, "\"\n            class=\"title\">").concat(recipe.title, "</a>\n            <span class=\"author-name\"> By ").concat(recipe.author, "</span>\n        </li>");
  }).join('');
};

var clearAddNewRecipeForm = function clearAddNewRecipeForm() {
  document.querySelector('.recipe-name').value = '';
  document.querySelector('.recipe-ingredients').value = '';
  document.querySelector('.recipe-steps').value = '';
  return;
};

var renderFormToAddRecipe = function renderFormToAddRecipe(show) {
  var addRecipe = document.querySelector('.add-recipe-form');
  clearAddNewRecipeForm();

  if (show) {
    addRecipe.classList.add('visible');
    addRecipe.classList.remove('hide');
  } else {
    addRecipe.classList.add('hide');
    addRecipe.classList.remove('visible');
  }

  return;
};
var status = {
  "default": 'Oops, there was a problem, please try again',
  'network-error': 'There was an error connecting to the network, please try again',
  'incorrect-username': 'The username is incorrect',
  'recipe-not-found': 'Recipe Not Found',
  'bad-login': 'Bad Login',
  'details-not-found': 'Please fill all the fields',
  'title-invalid': 'Please enter a valid title',
  'thank-you': 'Thank you for adding new recipe!'
};
var renderStatus = function renderStatus(text) {
  return document.querySelector('.notification-bar').innerHTML = status[text] || '';
};
var clearLoginForm = function clearLoginForm() {
  return document.querySelector('.login').querySelector('input').value = '';
};

/***/ }),

/***/ "./src/recipe.js":
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recipe_services_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-services.js */ "./src/recipe-services.js");
/* harmony import */ var _recipe_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-utils.js */ "./src/recipe-utils.js");


var applicationState = {
  isLoggedIn: false,
  allRecipes: {},
  recipe: {},
  status: '',
  addRecipe: true
};

function displayRecipeDetails(show) {
  var recipeDescription = document.querySelector('.recipe-description');

  if (show) {
    displayRecipeList(false);
    displayReturnToHomeLink(true);
    recipeDescription.classList.add('visible');
    recipeDescription.classList.remove('hide');
    Object(_recipe_utils_js__WEBPACK_IMPORTED_MODULE_1__["renderRecipeDetails"])(applicationState.recipe);
  } else {
    recipeDescription.classList.add('hide');
    recipeDescription.classList.remove('visible');
  }
}

;
var recipesList = document.querySelector('.recipe-list');

function displayRecipeList(show) {
  if (show) {
    recipesList.classList.add('visible');
    recipesList.classList.remove('hide');
  } else {
    recipesList.classList.add('hide');
    recipesList.classList.remove('visible');
  }
}

;
recipesList.addEventListener('click', function (event) {
  if (event.target.classList.contains('title')) {
    event.preventDefault();
    var id = event.target.dataset.id;
    Object(_recipe_services_js__WEBPACK_IMPORTED_MODULE_0__["fetchRecipe"])(id).then(function (response) {
      applicationState.status = '';
      applicationState.recipe = response.recipe;
      displayRecipeDetails(true);
      Object(_recipe_utils_js__WEBPACK_IMPORTED_MODULE_1__["renderStatus"])(applicationState.status);
    })["catch"](function (error) {
      applicationState.status = error.code;
      renderPage();
    });
  }
});
var login = document.querySelector('.login');

function renderLogin(show) {
  Object(_recipe_utils_js__WEBPACK_IMPORTED_MODULE_1__["clearLoginForm"])();

  if (show) {
    login.classList.add('visible');
    login.classList.remove('hide');
  } else {
    login.classList.add('hide');
    login.classList.remove('visible');
  }
}

;
login.addEventListener('click', function (e) {
  if (!e.target.classList.contains('to-login')) {
    return;
  }

  var username = login.querySelector('input').value;
  Object(_recipe_services_js__WEBPACK_IMPORTED_MODULE_0__["fetchLogIn"])(username).then(function (response) {
    applicationState.isLoggedIn = true;
    applicationState.status = '';
    applicationState.allRecipes = response;
    renderPage();
  })["catch"](function (error) {
    applicationState.status = error.code;
    renderPage();
  });
});
var logout = document.querySelector('.logout');

function renderLogout(show) {
  if (show) {
    logout.classList.add('visible');
    logout.classList.remove('hide');
  } else {
    logout.classList.add('hide');
    logout.classList.remove('visible');
  }
}

;
logout.addEventListener('click', function () {
  Object(_recipe_services_js__WEBPACK_IMPORTED_MODULE_0__["logoutUser"])().then(function () {
    applicationState.isLoggedIn = false;
    applicationState.status = '';
    renderPage();
  })["catch"](function (error) {
    applicationState.status = error.code;
    renderPage();
  });
});
var returnToHome = document.querySelector('.return');

function displayReturnToHomeLink(show) {
  if (show) {
    returnToHome.classList.add('visible');
    returnToHome.classList.remove('hide');
  } else {
    returnToHome.classList.add('hide');
    returnToHome.classList.remove('visible');
  }
}

;
returnToHome.addEventListener('click', function (event) {
  event.preventDefault();
  Object(_recipe_services_js__WEBPACK_IMPORTED_MODULE_0__["fetchRecipeList"])().then(function (response) {
    applicationState.allRecipes = response;
    applicationState.status = '';
    Object(_recipe_utils_js__WEBPACK_IMPORTED_MODULE_1__["renderFormToAddRecipe"])(false);
    displayReturnToHomeLink(false);
    renderPage();
    displayRecipeList(true);
    displayRecipeDetails(false);
  })["catch"](function (error) {
    applicationState.status = error.code;
    Object(_recipe_utils_js__WEBPACK_IMPORTED_MODULE_1__["renderStatus"])(applicationState.status);
  });
});
var submitRecipe = document.querySelector('.add');
submitRecipe.addEventListener('click', function (event) {
  var title = document.querySelector('.recipe-name').value;
  var ingredients = document.querySelector('.recipe-ingredients').value;
  var steps = document.querySelector('.recipe-steps').value;
  Object(_recipe_services_js__WEBPACK_IMPORTED_MODULE_0__["postRecipe"])({
    title: title,
    ingredients: ingredients,
    steps: steps
  }).then(function (response) {
    applicationState.allRecipes = response;
    applicationState.status = 'thank-you';
    Object(_recipe_utils_js__WEBPACK_IMPORTED_MODULE_1__["renderFormToAddRecipe"])(false);
    displayReturnToHomeLink(false);
    Object(_recipe_utils_js__WEBPACK_IMPORTED_MODULE_1__["renderStatus"])(applicationState.status);
    renderPage();
  })["catch"](function (error) {
    applicationState.status = error.code;
    Object(_recipe_utils_js__WEBPACK_IMPORTED_MODULE_1__["renderStatus"])(applicationState.status);
  });
});
var addNewRecipe = document.querySelector('.add-new-recipe-button');

function renderAddNewRecipeButton(show) {
  if (show) {
    addNewRecipe.classList.add('visible');
    addNewRecipe.classList.remove('hide');
  } else {
    addNewRecipe.classList.add('hide');
    addNewRecipe.classList.remove('visible');
  }
}

;
addNewRecipe.addEventListener('click', function (event) {
  applicationState.status = '';
  Object(_recipe_utils_js__WEBPACK_IMPORTED_MODULE_1__["renderFormToAddRecipe"])(true);
  displayReturnToHomeLink(true);
  renderLogout(true);
  displayRecipeDetails(false);
  renderLogin(false);
  displayRecipeList(false);
  renderAddNewRecipeButton(false);
});

var renderPage = function renderPage() {
  if (!applicationState.isLoggedIn) {
    renderLogin(true);
    displayRecipeList(true);
    Object(_recipe_utils_js__WEBPACK_IMPORTED_MODULE_1__["renderRecipes"])(applicationState.allRecipes);
    renderLogout(false);
    Object(_recipe_utils_js__WEBPACK_IMPORTED_MODULE_1__["renderFormToAddRecipe"])(false);
    renderAddNewRecipeButton(false);
    displayReturnToHomeLink(false);
    displayRecipeDetails(false);
  } else {
    renderLogin(false);
    displayRecipeList(true);
    Object(_recipe_utils_js__WEBPACK_IMPORTED_MODULE_1__["renderRecipes"])(applicationState.allRecipes);
    renderAddNewRecipeButton(true);
    renderLogout(true);
    displayRecipeDetails(false);
  }

  Object(_recipe_utils_js__WEBPACK_IMPORTED_MODULE_1__["renderStatus"])(applicationState.status);
};

Object(_recipe_services_js__WEBPACK_IMPORTED_MODULE_0__["fetchLoginStatus"])().then(function (response) {
  applicationState.isLoggedIn = response.loggedIn;
  applicationState.allRecipes = response.recipes;

  if (applicationState.isLoggedIn) {
    Object(_recipe_utils_js__WEBPACK_IMPORTED_MODULE_1__["renderFormToAddRecipe"])(false);
    displayReturnToHomeLink(false);
  }

  renderPage();
})["catch"](function (error) {
  applicationState.isLoggedIn = false;
  applicationState.status = error.code;
  applicationState.allRecipes = error.recipes;
  renderPage();
});

/***/ })

/******/ });
//# sourceMappingURL=recipe.js.map
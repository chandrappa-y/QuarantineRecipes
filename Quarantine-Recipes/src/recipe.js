import {
    fetchLogIn,
    fetchLoginStatus,
    logoutUser,
    postRecipe,
    fetchRecipe,
    fetchRecipeList
} from './recipe-services.js';
import {
    renderRecipeDetails,
    renderRecipes,
    renderStatus,
    clearLoginForm,
    renderFormToAddRecipe,
} from './recipe-utils.js';

const applicationState = {
    isLoggedIn: false,
    allRecipes: {},
    recipe: {},
    status: '',
    addRecipe: true
};

function displayRecipeDetails(show) {
    const recipeDescription = document.querySelector('.recipe-description');
    if (show) {
        displayRecipeList(false);
        displayReturnToHomeLink(true);
        recipeDescription.classList.add('visible');
        recipeDescription.classList.remove('hide');
        renderRecipeDetails(applicationState.recipe);
    } else {
        recipeDescription.classList.add('hide');
        recipeDescription.classList.remove('visible');
    }
};

const recipesList = document.querySelector('.recipe-list');
function displayRecipeList(show) {
    if (show) {
        recipesList.classList.add('visible');
        recipesList.classList.remove('hide');
    } else {
        recipesList.classList.add('hide');
        recipesList.classList.remove('visible');
    }
};
recipesList.addEventListener('click', function (event) {
    if (event.target.classList.contains('title')) {
        event.preventDefault();
        const id = event.target.dataset.id;
        fetchRecipe(id)
            .then((response) => {
                applicationState.status = '';
                applicationState.recipe = response.recipe;
                displayRecipeDetails(true);
                renderStatus(applicationState.status);
            })
            .catch((error) => {
                applicationState.status = error.code;
                renderPage();
            });
    }
});

const login = document.querySelector('.login');
function renderLogin(show) {
    clearLoginForm();
    if (show) {
        login.classList.add('visible');
        login.classList.remove('hide');
    } else {
        login.classList.add('hide');
        login.classList.remove('visible');
    }
};
login.addEventListener('click', (e) => {
    if (!e.target.classList.contains('to-login')) {
        return;
    }
    const username = login.querySelector('input').value;
    fetchLogIn(username)
        .then((response) => {
            applicationState.isLoggedIn = true;
            applicationState.status = '';
            applicationState.allRecipes = response;
            renderPage();
        })
        .catch((error) => {
            applicationState.status = error.code;
            renderPage();
        });
});

const logout = document.querySelector('.logout');
function renderLogout(show) {
    if (show) {
        logout.classList.add('visible');
        logout.classList.remove('hide');
    } else {
        logout.classList.add('hide');
        logout.classList.remove('visible');
    }
};
logout.addEventListener('click', function () {
    logoutUser()
        .then(() => {
            applicationState.isLoggedIn = false;
            applicationState.status = '';
            renderPage();
        })
        .catch((error) => {
            applicationState.status = error.code;
            renderPage();
        });
});

const returnToHome = document.querySelector('.return');
function displayReturnToHomeLink(show) {
    if (show) {
        returnToHome.classList.add('visible');
        returnToHome.classList.remove('hide');
    } else {
        returnToHome.classList.add('hide');
        returnToHome.classList.remove('visible');
    }
};
returnToHome.addEventListener('click', function (event) {
    event.preventDefault();
    fetchRecipeList()
        .then((response) => {
            applicationState.allRecipes = response;
            applicationState.status = '';
            renderFormToAddRecipe(false);
            displayReturnToHomeLink(false);
            renderPage();
            displayRecipeList(true);
            displayRecipeDetails(false);
        })
        .catch((error) => {
            applicationState.status = error.code;
            renderStatus(applicationState.status);
        });
});

const submitRecipe = document.querySelector('.add');
submitRecipe.addEventListener('click', function (event) {
    const title = document.querySelector('.recipe-name').value;
    const ingredients = document.querySelector('.recipe-ingredients').value;
    const steps = document.querySelector('.recipe-steps').value;

    postRecipe({ title, ingredients, steps })
        .then((response) => {
            applicationState.allRecipes = response;
            applicationState.status = 'thank-you';
            renderFormToAddRecipe(false);
            displayReturnToHomeLink(false);
            renderStatus(applicationState.status);
            renderPage();
        })
        .catch((error) => {
            applicationState.status = error.code;
            renderStatus(applicationState.status);
        });
});

const addNewRecipe = document.querySelector('.add-new-recipe-button');
function renderAddNewRecipeButton(show) {
    if (show) {
        addNewRecipe.classList.add('visible');
        addNewRecipe.classList.remove('hide');
    } else {
        addNewRecipe.classList.add('hide');
        addNewRecipe.classList.remove('visible');
    }
};
addNewRecipe.addEventListener('click', function (event) {
    applicationState.status = '';
    renderFormToAddRecipe(true);
    displayReturnToHomeLink(true);
    renderLogout(true);
    displayRecipeDetails(false);
    renderLogin(false);
    displayRecipeList(false);
    renderAddNewRecipeButton(false);
});

const renderPage = function () {
    if (!applicationState.isLoggedIn) {
        renderLogin(true);
        displayRecipeList(true);
        renderRecipes(applicationState.allRecipes);
        renderLogout(false);
        renderFormToAddRecipe(false);
        renderAddNewRecipeButton(false);
        displayReturnToHomeLink(false);
        displayRecipeDetails(false);
    } else {
        renderLogin(false);
        displayRecipeList(true);
        renderRecipes(applicationState.allRecipes);
        renderAddNewRecipeButton(true);
        renderLogout(true);
        displayRecipeDetails(false);
    }
    renderStatus(applicationState.status);
};

fetchLoginStatus()
    .then((response) => {
        applicationState.isLoggedIn = response.loggedIn;
        applicationState.allRecipes = response.recipes;
        if (applicationState.isLoggedIn) {
            renderFormToAddRecipe(false);
            displayReturnToHomeLink(false);
        }
        renderPage();
    })
    .catch((error) => {
        applicationState.isLoggedIn = false;
        applicationState.status = error.code;
        applicationState.allRecipes = error.recipes;
        renderPage();
    });
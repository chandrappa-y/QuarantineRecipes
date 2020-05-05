export const renderRecipeDetails = function (recipe) {
    return document.querySelector('.recipe-description').innerHTML = `
            <div>
                <h4>Title</h4>
                <span>${recipe.title}</span>
            </div>
            <div>
                <h4>Author</h4>
                <span>${recipe.author}</span>
            </div>
            <div>
                <h4>Ingredients</h4>
                <span>${recipe.ingredients}</span>
            </div>
            <div>
                <h4>Steps</h4>
                <span>${recipe.steps}</span>
            </div>
        `;
};

export const renderRecipes = function (recipes) {
    return document.querySelector('.recipe-list').innerHTML = Object.keys(recipes).map((key) => {
        const recipe = recipes[key];
        return `
        <li class="recipe">
            <a href=""
            data-id="${key}"
            class="title">${recipe.title}</a>
            <span class="author-name"> By ${recipe.author}</span>
        </li>`
    }).join('');
};

const clearAddNewRecipeForm = function () {
    document.querySelector('.recipe-name').value = '';
    document.querySelector('.recipe-ingredients').value = '';
    document.querySelector('.recipe-steps').value = '';
    return;
};

export const renderFormToAddRecipe = function (show) {
    const addRecipe = document.querySelector('.add-recipe-form');
    clearAddNewRecipeForm();
    if (show) {
        addRecipe.classList.add('visible');
        addRecipe.classList.remove('hide');
    } else {
        addRecipe.classList.add('hide');
        addRecipe.classList.remove('visible');
    }
    return;
}

const status = {
    default: 'Oops, there was a problem, please try again',
    'network-error': 'There was an error connecting to the network, please try again',
    'incorrect-username': 'The username is incorrect',
    'recipe-not-found': 'Recipe Not Found',
    'bad-login': 'Bad Login',
    'details-not-found': 'Please fill all the fields',
    'title-invalid': 'Please enter a valid title',
    'thank-you': 'Thank you for adding new recipe!'
};

export const renderStatus = function (text) {
    return document.querySelector('.notification-bar').innerHTML = status[text] || '';
};

export const clearLoginForm = function () {
    return document.querySelector('.login').querySelector('input').value = '';
};
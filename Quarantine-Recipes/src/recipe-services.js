export const fetchLogIn = (username) => {
    return fetch('/session', {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json',
            }),
            body: JSON.stringify({ username }),
        })
        .catch(() => {
            return Promise.reject({ code: 'network-error' });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            return response.json();
        })
};

export const fetchLoginStatus = () => {
    return fetch('/session', {
            method: 'GET',
        })
        .catch(() => {
            return Promise.reject({ code: 'network-error' });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            return response.json();
        })
};

export const fetchRecipe = (id) => {
    return fetch(`/recipes/${id}`, {
            method: 'GET',
        })
        .catch(() => {
            return Promise.reject({ code: 'network-error' });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            return response.json();
        });
};

export const fetchRecipeList = () => {
    return fetch('/recipes', {
            method: 'GET',
        })
        .catch(() => {
            return Promise.reject({ code: 'network-error' });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            return response.json();
        });
};

export const postRecipe = ({ title, ingredients, steps }) => {
    return fetch('/recipes', {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json',
            }),
            body: JSON.stringify({ title, ingredients, steps }),
        })
        .catch(() => {
            return Promise.reject({ code: 'network-error' });
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            return response.json().then(result => Promise.reject(result));
        });
};

export const logoutUser = () => {
    return fetch('/session', {
            method: 'DELETE',
        })
        .catch(() => {
            return Promise.reject({ code: 'network-error' });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            return;
        });
};
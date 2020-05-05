const express = require('express');
const { v4: uuidv4 } = require('uuid');
const users = require('./inventory').users;
const cookieParser = require('cookie-parser');
const recipes = require('./inventory').recipes;
const nextId = require('./inventory').nextId;

const PORT = 3000;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.static('./public'));

app.get('/session', (req, res) => {
    const uId = req.cookies.uId;
    if (!uId) {
        res.status(202).json({ "loggedIn": false, recipes });
        return;
    }
    else if (!users[uId]) {
        res.clearCookie('uId');
        res.status(401).json({ code: 'bad-login', recipes });
        return;
    }
    res.status(200).json({ "loggedIn": true, recipes });
});

app.post('/session', express.json(), (req, res) => {
    const username = req.body.username;
    if (username.includes("dog") || !username || !username.trim()) {
        res.status(403).json({ code: 'incorrect-username' })
        return;
    }
    if (!isNaN(username)) {
        res.status(403).json({ code: 'incorrect-username' });
        return;
    }
    const uId = uuidv4();
    users[uId] = username;
    res.cookie('uId', uId);
    res.status(200).json(recipes);
});

app.post('/recipes', express.json(), (req, res) => {
    const uId = req.cookies.uId;
    const title = req.body.title;
    const author = users[uId];
    const ingredients = req.body.ingredients;
    const steps = req.body.steps;

    if (!users[uId]) {
        res.clearCookie('uid');
        res.status(401).json({ code: 'bad-login' });
        return;
    }
    if (!title || !ingredients || !steps) {
        res.status(403).json({ code: 'details-not-found' });
        return;
    }
    if (!isNaN(title)) {
        res.status(403).json({ code: 'title-invalid' });
        return;
    }
    const recipe = {
        "title": title,
        "author": author,
        "ingredients": ingredients,
        "steps": steps
    }
    recipes[nextId()] = recipe;
    res.status(200).json(recipes);
});

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const uId = req.cookies.uId;
    if (!users[uId]) {
        res.clearCookie('uId');
    }
    if (!recipes[id]) {
        res.status(404).json({ code: 'recipe-not-found' });
        return;
    }
    res.status(200).json({ recipe: recipes[id] });
});

app.delete('/session', (req, res) => {
    const uId = req.cookies.uId;
    if (uId) {
        res.clearCookie('uId');
        delete users[uId];
    }
    res.sendStatus(200);
});

app.get('/recipes', (req, res) => {
    const uId = req.cookies.uId;
    if (!users[uId]) {
        res.clearCookie('uId');
    }
    res.status(200).json(recipes);
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
// app.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts');


// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Static files middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        layout: 'layouts/main'
    });
});

app.get('/work', (req, res) => {
    res.render('work', {
        title: 'My Work',
        content: 'Work experience'
    });
});

app.get('/research', (req, res) => {
    res.render('research', {
        title: 'Research Notes',
        content: 'Research thoughts'
    });
});

app.get('/books', (req, res) => {
    res.render('books', {
        title: 'Books',
        content: 'Books I\'ve read'
    });
});

app.get('/photos', (req, res) => {
    res.render('photos', {
        title: 'Photos',
        content: 'Photo gallery'
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
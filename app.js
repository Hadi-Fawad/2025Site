const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Important: Add these static file middleware BEFORE your routes
app.use(express.static(path.join(__dirname, 'public')));
app.use('/documents', express.static(path.join(__dirname, 'documents')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(expressLayouts);
app.set('layout', 'layouts/main');

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
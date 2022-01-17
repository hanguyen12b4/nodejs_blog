const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphdbs = require('express-handlebars');
const route = require('./routes');
const app = express();
const port = 3000;

app.use(
    express.urlencoded({
        extended: true,
    }),
);

// Body Parse for POST method
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//HTTP Logger
app.use(morgan('combined'));

// Template Engine
app.engine(
    'hbs',
    exphdbs.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));

    route(app);
console.log('123');
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

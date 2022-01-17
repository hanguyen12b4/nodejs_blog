const newRoutes = require('./news');
const siteRoute = require('./site');

function route(app) {
    app.use('/news', newRoutes);
    app.use('/', siteRoute);

    app.get('/search', (req, res) => {
        res.render('search');
    });
}

module.exports = route;

const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");

var debug = require('debug')('author');
//var catalogRouter = require('./routes/catalog'); //Import routes for "catalog" area of site
//var compression = require('compression');

// Display Author update form on GET
exports.author_update_get = function(req, res, next) {

    req.sanitize('id').escape().trim();
    Author.findById(req.params.id, function(err, author) {
        if (err) {
            debug('update error:' + err);
            return next(err);
        }
        //On success
        res.render('author_form', { title: 'Update Author', author: author });
    });

};

//app.use(compression()); //Compress all routes
//app.use(express.static(path.join(__dirname, 'public')));
//app.use('/', indexRouter);
//app.use('/users', usersRouter);
//app.use('/catalog', catalogRouter); 

app.use(helmet());
app.use(cors({
  "origin": "**",
  "methods": ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"]
}));

app.get("/", (request, response) => {
  response.send("Node server")
});

app.listen(3000);
const authenticate = (req, res, next) => {
    console.log('test')
    if (req.session.logged_in) {
        next()
    } else {
        req.session.save(() => {
            req.session.destination = req.path;
            
            res.redirect('/login')
          });

    }
}

module.exports = authenticate
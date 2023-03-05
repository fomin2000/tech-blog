const router = require('express').Router();


router.get('/', (req, res) => {

    res.render('home', {
        logged_in: req.session.logged_in
    })
})

router.get('/login', (req, res) => {
    console.log(req.session.destination)
    if (req.session.logged_in) {
        res.redirect('/')
    }

    res.render('login')

})

router.get('/register', (req, res) => {
    res.render('register')
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router
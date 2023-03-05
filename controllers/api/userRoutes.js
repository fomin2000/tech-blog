const router = require('express').Router();
const { User } = require('../../models')



router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body)

        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;
            res.status(200).json(newUser)
        })


    } catch (error) {
        res.status(500).json(error)
    }
})


router.post('/login', async (req, res) => {
    try {

        const newUser = await User.findOne({ where: { email: req.body.email } });
    
  
        if (!newUser) {
            res
                .status(400)
                .json({ message: 'You Have Entered Something Wrong. Check Email or Password.' });
            return;
        }
  
        const passwordCheck = await newUser.checkPassword(req.body.password);
  
        if (!passwordCheck) {
            res
                .status(400)
                .json({ message: 'You Have Entered Something Wrong. Check Email or Password.' });
            return;
        }
  
        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;
        
            res.json({ 
                user: newUser, 
                message: 'Welcome! You have successfully logged in.',
                destination: req.session.destination || "/"
            });

        
        });
  
    } catch (err) {
      res.status(400).json(err);
    }
});


router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router
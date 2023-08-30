const router = require('express').Router();
const path = require('path');

router.get('/', async (req, res) => {
  res.render('home')
})

router.get('/dish/:slug', async (req, res) => {
  res.sendFile(path.join(__dirname, `../views/${req.params.slug}.html`));
});

module.exports = router;

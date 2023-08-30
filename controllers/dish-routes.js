const router = require('express').Router();
const path = require('path');

const dishes = require('../seeds/dish-seeds.json')

router.get('/', async (req, res) => {
  res.render('home', { dishes })
})

router.get('/dish/:slug', (req, res) => {
  res.sendFile(path.join(__dirname, `../views/${req.params.slug}.html`));
});

module.exports = router;

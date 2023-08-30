const router = require('express').Router();
const path = require('path');

const dishes = require('../seeds/dish-seeds.json')

router.get('/', async (req, res) => {
  res.render('home', { dishes })
})

router.get('/dish/:slug', (req, res) => {
  const slug = req.params.slug
  const foundDish = dishes.find(dish => dish.slug === slug)
  res.render('dish', foundDish);
});

module.exports = router;

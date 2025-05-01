var express = require('express');
var router = express.Router();

/* GET GitHub profile page. */
router.get('/', async function(req, res, next) {
  try {
    // reference: https://www.w3schools.com/js/js_api_fetch.asp
    const profileUrl = 'https://api.github.com/users/ariffnorhadi';
    fetch(profileUrl)
    .then(response => response.json())
    .then(data => {
      res.render('github', { profile: data });
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  } catch (error) {
    console.error('Error:', error.message);
    res.render('error', { error: 'Failed to fetch profile' });
  }
});

module.exports = router;

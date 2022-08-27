const express = require('express');
const {
  homepageshow,
  cartpageshow,
  checkoutpageshow,
  contactpageshow,
  detailpageshow,
  shoppageshow,
  messagepageshow,
} = require('../controllers/pagecontrollers');

// init router
const router = express.Router();

// get router
router.get('/', homepageshow);
router.get('/home', homepageshow);
router.get('/cart', cartpageshow);
router.get('/checkout', checkoutpageshow);
router.get('/contact', contactpageshow);
router.get('/detail', detailpageshow);
router.get('/shop', shoppageshow);
// post router
router.post('/message', messagepageshow);
// export router
module.exports = router;

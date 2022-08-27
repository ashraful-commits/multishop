const url = require('url');
const path = require('path');

// start of controller

const homepageshow = (req, res) => {
  res.render('index');
};
const cartpageshow = (req, res) => {
  res.render('cart');
};
const checkoutpageshow = (req, res) => {
  res.render('checkout');
};
const contactpageshow = (req, res) => {
  res.render('contact');
};
const detailpageshow = (req, res) => {
  res.render('detail');
};
const shoppageshow = (req, res) => {
  res.render('shop');
};
const messagepageshow = (req, res) => {
  res.json(req.body);
};

// exprort controller
module.exports = {
  homepageshow,
  cartpageshow,
  checkoutpageshow,
  contactpageshow,
  detailpageshow,
  shoppageshow,
  messagepageshow,
};

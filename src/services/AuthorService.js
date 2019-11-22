const { Authors } = require('../models');

const getAllAuthors = () => Authors.find({is_active:true});

module.exports = {
  getAllAuthors
};
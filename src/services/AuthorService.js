const { Authors } = require('../models');

const createAuthor = (data) => Authors.create(data);
const getAllAuthors = () => Authors.find({
  is_active: true
}).populate({
  path: 'posts',
  model: 'posts'
});
const getOneAuthor = (id) => Authors.findById({
  _id: id,
  is_active: true
}).populate({
  path: 'posts',
  model: 'posts'
});

const deleteAuthor = (id) => Authors.findByIdAndUpdate({
  _id: id,
  is_active: true,
}, {
  is_active:false,
});

const updateAuthor = (id, data) => Authors.findByIdAndUpdate({
  _id: id,
  is_active: true,
}, {
  ...data,
}, { new:true });

const getAuthorByEmail = (email) => Authors.findOne({
  email,
  is_active: true
}).populate('posts');

module.exports = {
  getAllAuthors,
  getOneAuthor,
  deleteAuthor,
  updateAuthor,
  getAuthorByEmail,
  createAuthor,
};
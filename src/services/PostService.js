const Posts = require('../models');

const createPost = (data) => Posts.create(data);
const getAllPosts = () => Posts.find({
    is_active: true
}).populate({
    path: 'posts',
    model: 'posts'
});
const getOnePost = (id) => Posts.findById({
    _id: id,
    is_active: true
}).populate({
    path: 'posts',
    model: 'posts'
});
const updatePost = (id, data) => Posts.findByIdAndUpdate({
    _id: id,
    is_active: true,
}, {
    ...data,
}, { new:true });
const deletePost = (id) => Posts.findByIdAndUpdate({
    _id: id,
    is_active: true,
}, {
    is_active:false,
});

module.exports = {
    createPost,
    getAllPosts,
    getOnePost,
    updatePost,
    deletePost
};
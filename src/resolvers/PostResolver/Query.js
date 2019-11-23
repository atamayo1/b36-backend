const { getAllPosts, getOnePost } = require('../../services/PostService');

const getPosts = async  () => {
  const posts = await getAllPosts();
  return posts;
};

const getSinglePost = async (_, { id }) => {
    const post = await getOnePost(id);
    if(!post) throw new Error('Post not exist');
    return post;
};

module.exports = {
    getPosts,
    getSinglePost
};
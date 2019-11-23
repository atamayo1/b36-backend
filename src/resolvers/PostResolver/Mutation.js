const { createPost, updatePost, deletePost } = require('../../services/PostService');
const { getOneAuthor } = require('../../services/AuthorService');

const createNewPost = async (_, {data}) => {
    const post = await createPost(data);
    const author = await getOneAuthor((data.author));
    author.posts.push(post);
    author.save();
    return post;
};
const updateOnePost = async (_,{id,data}) => {
    const author = await updatePost(id,data);
    if(!author) throw new Error('Post not exist');
    return author;
};

const deleteOnePost = async (_, {id}) => {
    const author = await deletePost(id);
    if(!author) throw new Error('Post not exist');
    return 'Author deleted';
};

module.exports = {
    createNewPost,
    updateOnePost,
    deleteOnePost
};
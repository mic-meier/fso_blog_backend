const dummy = () => {
  return 1;
};

const totalLikes = blogs => {
  if (blogs.length === 0) {
    return 0;
  }

  const result = blogs
    .map(blog => blog.likes)
    .reduce((sum, likes) => sum + likes);

  return result;
};

module.exports = {
  dummy,
  totalLikes
};

function Post({ post }) {
  const { title, body } = post;
  return (
    <>
      <h2>Title: {title}</h2>
      <p>Description: {body} </p>
    </>
  );
}

export default Post;

import posts from '../../posts.json';

const Post = props => {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
      <p>{JSON.stringify(props)}</p>

      <style jsx>{`
      h1 {
        font-size: ${props.size}rem;
      }
    `}</style>
    </div>
  )
}

Post.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id],
    size: 3,
  }
}

export default Post
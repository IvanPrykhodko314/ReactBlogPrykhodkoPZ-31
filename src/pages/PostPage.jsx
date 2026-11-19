import { Link, useLoaderData, useNavigate } from 'react-router';
import PostActions from '../components/PostActions';

export default function PostPage() {
  const post = useLoaderData();
  const navigate = useNavigate();
  return (
    <article>
      <button onClick={() => navigate(-1)}>← Назад</button>
      <h1>{post.title}</h1>
      <Link to={`/?author=${encodeURIComponent(post.authorName)}`} className="tag">{post.authorName}</Link>
      <p>{post.body}</p>
      <PostActions post={post} />
    </article>
  );
}

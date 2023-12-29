import { usePost } from '../contexts/PostContext'

function Results() {
  const { posts } = usePost()
  return <p>🚀 {posts.length} atomic posts found</p>
}

export default Results

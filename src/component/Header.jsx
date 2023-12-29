import { usePost } from '../contexts/PostContext'
import Results from './Results'
import SearchPosts from './SearchPosts'

function Header() {
  const { onClearPosts } = usePost()

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  )
}

export default Header

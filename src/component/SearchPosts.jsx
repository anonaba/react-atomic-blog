import { usePost } from '../contexts/PostContext'

function SearchPosts() {
  const { searchQuery, setSearchQuery } = usePost()
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  )
}

export default SearchPosts

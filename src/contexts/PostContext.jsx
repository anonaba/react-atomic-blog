import { faker } from '@faker-js/faker'
import PropTypes from 'prop-types'
import { createContext, useContext, useMemo, useState } from 'react'

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  }
}

// 1. Create Context
const PostContext = createContext()

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  )
  const [searchQuery, setSearchQuery] = useState('')

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts])
  }

  function handleClearPosts() {
    setPosts([])
  }

  const value = useMemo(
    () => ({
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery,
    }),
    [searchedPosts, searchQuery]
  )
  return (
    // 2 Provide value to child components
    <PostContext.Provider value={value}>{children}</PostContext.Provider>
  )
}

// custom hook
function usePost() {
  if (useContext(PostContext) === undefined) {
    throw new Error('PostContext was used outside of the PostProvider')
  }
  return useContext(PostContext)
}

PostProvider.propTypes = {
  children: PropTypes.node,
}

export { PostProvider, usePost }

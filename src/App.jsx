import { useEffect, useState } from 'react'
import Archive from './component/Archive'
import Footer from './component/Footer'
import Header from './component/Header'
import Main from './component/Main'
import { PostProvider } from './contexts/PostContext'

// function createRandomPost() {
//   return {
//     title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
//     body: faker.hacker.phrase(),
//   }
// }

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false)
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle('fake-dark-mode')
    },
    [isFakeDark]
  )

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? '☀️' : '🌙'}
      </button>

      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  )
}

export default App

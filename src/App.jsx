import { useState } from 'react'
import './App.css'
import Header from './components/Header/Hader'
import Blogs from './components/Blogs/Blogs'
import Bookmart from './components/Bookmarks/Bookmart'


function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex gap-4'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmart bookmarks={bookmarks}></Bookmart>
      </div>
      
      
      
    </>
  )
}

export default App

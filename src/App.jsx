import { useState } from 'react'
import './App.css'
import Header from './components/Header/Hader'
import Blogs from './components/Blogs/Blogs'
import Bookmart from './components/Bookmarks/Bookmart'


function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readinTime, setReadingTime] = useState(0)

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = time => {
    const newReadingTime = readinTime + time;
    setReadingTime(newReadingTime)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex gap-4'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmart readinTime={readinTime} bookmarks={bookmarks}></Bookmart>
      </div>
      
      
      
    </>
  )
}

export default App

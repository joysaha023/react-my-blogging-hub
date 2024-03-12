import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Hader'
import Blogs from './components/Blogs/Blogs'
import Bookmart from './components/Bookmarks/Bookmart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmart></Bookmart>
      </div>
      
      
      
    </>
  )
}

export default App

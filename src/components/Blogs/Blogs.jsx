import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types'

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='w-full md:w-2/3'>
            <h3>Blog: {blogs.length}</h3>
            {
                blogs.map(blog => <Blog key={blog.id} handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;
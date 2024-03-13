import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types'

const Blogs = ({handleAddToBookmark}) => {
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
                blogs.map(blog => <Blog key={blog.id} handleAddToBookmark={handleAddToBookmark} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func
}

export default Blogs;
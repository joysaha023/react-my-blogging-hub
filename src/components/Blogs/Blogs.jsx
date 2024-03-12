import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='w-2/3'>
            <h3>Blog: {blogs.length}</h3>
        </div>
    );
};

export default Blogs;
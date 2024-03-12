import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
        <div>
            <h3>Hello blog</h3>
        </div>
    );
};

export default Blogs;
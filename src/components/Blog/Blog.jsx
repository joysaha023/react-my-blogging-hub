import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img, posted_date, hashtags, reading_time} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full rounded-lg' src={cover} alt="img" />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2'><CiBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='text-blue-600 font-bold underline'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;
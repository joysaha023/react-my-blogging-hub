import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img, posted_date, hashtags, reading_time} = blog;
    return (
        <div className='mb-10 lg:mb-20'>
            <img className='w-full rounded-lg' src={cover} alt="img" />
            <div className='flex flex-col lg:flex-row justify-between items-center mt-4 lg:mt-8'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-2 lg:ml-6'>
                        <h3 className='text-xl lg:text-2xl font-bold'>{author}</h3>
                        <p className='text-xs lg:text-sm'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex'>
                    <p className='text-[10px] lg:text-[20px]'>{reading_time} min read</p>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-[10px] lg:text-[20px]'><CiBookmark /></button>
                </div>
            </div>
            <h2 className='text-2xl lg:text-4xl my-2 lg:my-4 font-bold'>{title}</h2>
            <p className=''>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time, id)} className='text-blue-600 font-bold mt-5 underline'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;
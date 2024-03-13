import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmart = ({bookmarks, readinTime}) => {
    return (
        <div className='w-full md:w-1/3 '>
            <div className='bg-[#3C47EC1A] text-center rounded-lg border-2 mb-6 border-[#3C47EC]'>
                <h3 className='text-lg lg:text-2xl py-5 text-[#3C47EC] font-bold'>Reading Time: {readinTime} min Read</h3>
            </div>
            <div className='rounded-lg  bg-gray-300 pt-2 pb-2'>
            <h2 className='text-lg lg:text-3xl font-bold mt-2 text-center'>Bookmarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmart.propTypes = {
    bookmarks: PropTypes.array,
    readinTime: PropTypes.number
}

export default Bookmart;
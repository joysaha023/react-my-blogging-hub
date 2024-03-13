import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmart = ({bookmarks, readinTime}) => {
    return (
        <div className='w-full md:w-1/3  bg-gray-300 pt-2'>
            <div>
                <h3 className='text-4xl'>Reading Time: {readinTime} min Read</h3>
            </div>
            <h2 className='text-3xl text-center'>BookMarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmart.propTypes = {
    bookmarks: PropTypes.array,
    readinTime: PropTypes.number
}

export default Bookmart;
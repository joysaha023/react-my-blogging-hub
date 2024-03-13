import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmart = ({bookmarks}) => {
    return (
        <div className='w-full md:w-1/3  bg-gray-300 pt-2'>
            <h2 className='text-3xl text-center'>BookMarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmart;
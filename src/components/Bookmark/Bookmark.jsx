import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;


    return (
        <div className='bg-slate-200 p-4 m-4 rounded-lg'>
            {/* <h3 className='text-2xl'>{title}</h3> */}
            <ol>
                <li className='text-base lg:text-2xl'>{title}</li>
            </ol>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.array
    
}

export default Bookmark;
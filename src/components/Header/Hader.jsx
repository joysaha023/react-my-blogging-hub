import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2 mb-1'>
            <h1 className='text-2xl lg:text-4xl font-bold '>Knowledge Cafe</h1>
            <img className='mb-1' src={profile} alt="" />
        </div>
        
    );
};

export default Header;
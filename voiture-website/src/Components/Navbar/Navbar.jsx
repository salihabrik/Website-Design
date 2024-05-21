import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>VO-iture</div>
        <ul className='nav-menu'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>Explore</li>
            <li className='nav-contact'>Contact</li>
            
        </ul>
      
    </div>
  )
}

export default Navbar

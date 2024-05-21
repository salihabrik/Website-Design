import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>VO-iture</div>
        <ul className='nav-menu'>
            <li >Home</li>
            <li >About</li>
            <li >Explore</li>
            <li className='nav-contact'>Contact</li>
            
        </ul>
      
    </div>
  )
}

export default Navbar

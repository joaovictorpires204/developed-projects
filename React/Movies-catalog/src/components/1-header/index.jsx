import '../../assets/styles/header.css'
import Logo from '../../assets/images/logo-arnia.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt=""  className='logo'/>
            <div className="title">Movies</div>
        </div>
    )
}

export default Header

